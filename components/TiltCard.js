"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function TiltCard({ children, className, style, whileHover, ...props }) {
  const cardRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Translate normalized cursor positions (-0.5 to 0.5) to degrees of 3D tilt
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  // Smooth springs to avoid rigid movements
  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isTouchDevice ? 0 : springRotateX,
        rotateY: isTouchDevice ? 0 : springRotateY,
        transformStyle: isTouchDevice ? "flat" : "preserve-3d",
        perspective: isTouchDevice ? "none" : "1000px",
        ...style,
      }}
      className={className}
      whileHover={isTouchDevice ? {} : {
        scale: 1.02,
        ...whileHover
      }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <div style={isTouchDevice ? {} : { transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}
