"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PageLoader.module.css";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 1800);
    return () => {
      document.body.style.overflow = "unset";
      clearTimeout(timer);
    };
  }, []);

  const firstName = "HARISH".split("");
  const lastName = "R".split("");

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const letterVariants = {
    initial: { y: 80, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.loaderContainer}
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
          }}
        >
          {/* Neon active ambient glow */}
          <div className={styles.backgroundGlow} />
          
          <motion.div
            className={styles.textContainer}
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <div className={styles.nameRow}>
              <div className={styles.word}>
                {firstName.map((letter, i) => (
                  <motion.span key={i} className={styles.letter} variants={letterVariants}>
                    {letter}
                  </motion.span>
                ))}
              </div>
              <span className={styles.space} />
              <div className={styles.word}>
                {lastName.map((letter, i) => (
                  <motion.span key={i} className={styles.letter} variants={letterVariants}>
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <motion.div 
              className={styles.divider}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            />
            
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
            >
              MERN STACK DEVELOPER
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
