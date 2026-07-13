"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import VideoModal from "./VideoModal";

const roles = ["MERN Stack Developer", "Full Stack Engineer", "React.js Developer", "Node.js Developer", "AI App Builder"];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const TitleScribble = () => (
  <svg 
    viewBox="0 0 320 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={styles.titleScribble}
    aria-hidden="true"
  >
    <path 
      d="M10 12C60 6 195 4 310 9C210 11 100 17 30 14" 
      stroke="var(--accent)" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Glow orbs - mouse responsive */}
      <motion.div
        className={styles.orb1}
        aria-hidden="true"
        animate={{
          x: mousePos.x * 50,
          y: mousePos.y * 50,
        }}
        transition={{ type: "spring", stiffness: 25, damping: 20 }}
      />
      <motion.div
        className={styles.orb2}
        aria-hidden="true"
        animate={{
          x: mousePos.x * -40,
          y: mousePos.y * -40,
        }}
        transition={{ type: "spring", stiffness: 25, damping: 20 }}
      />

      <div className={styles.container}>
        <motion.div
          className={styles.gridWrapper}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Bio & Actions */}
          <div className={styles.leftCol}>
            <motion.div className={styles.badge} variants={fadeInUp}>
              <span className={styles.dot} />
              <span>Available for opportunities</span>
            </motion.div>

            {/* Headline styled like Lendex */}
            <motion.h1 className={styles.name} variants={fadeInUp}>
              Hello! I&apos;m <span className={styles.nameHighlight}>Harish R <TitleScribble /></span>
            </motion.h1>

            <motion.div className={styles.roleWrap} variants={fadeInUp}>
              <span className={styles.role}>{displayed}</span>
              <span className={styles.cursor} aria-hidden="true">|</span>
            </motion.div>

            <motion.p className={styles.tagline} variants={fadeInUp}>
              Building scalable web apps, RESTful APIs &amp; AI-integrated systems with the MERN stack.
              Currently crafting at{" "}
              <span className={styles.highlight}>AMDOX, Bangalore</span>.
            </motion.p>

            <motion.div className={styles.actions} variants={fadeInUp}>
              {/* Get Resume styled like Lendex */}
              <a href="#" className={styles.btnPrimary} download title="Download Resume">
                Get Resume
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: "2px" }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </a>

              <a href="#contact" className={styles.btnSecondary}>
                Get in Touch
              </a>
              
              {/* Watch Video button at the bottom-left */}
              <button onClick={() => setIsVideoOpen(true)} className={styles.btnPlay}>
                <span className={styles.playIconContainer}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: "2px" }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className={styles.playText}>Watch Video</span>
              </button>
            </motion.div>

            <motion.div className={styles.stats} variants={fadeInUp}>
              <div className={styles.stat}>
                <span className={styles.statNum}>3+</span>
                <span className={styles.statLabel}>Projects Built</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>MCA</span>
                <span className={styles.statLabel}>Anna University</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>3</span>
                <span className={styles.statLabel}>Certifications</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Image & Floating Orbital Social Icons */}
          <motion.div 
            className={styles.rightCol}
            variants={fadeInUp}
          >
            <div className={styles.imageOuterWrapper}>
              {/* Inner Orbit (GitHub & Email) */}
              <motion.div 
                className={styles.orbitRing1}
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              >
                {/* GitHub icon orbiting, counter-rotating to stay upright */}
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.orbitSocial} 
                  style={{ top: "12%", left: "12%" }}
                  title="GitHub"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </motion.a>
                
                {/* Email icon orbiting, counter-rotating to stay upright */}
                <motion.a 
                  href="mailto:harishpostmail@gmail.com" 
                  className={styles.orbitSocial} 
                  style={{ bottom: "12%", right: "12%" }}
                  title="Email"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </motion.a>
              </motion.div>

              {/* Outer Orbit (LinkedIn & Web/Resume Link) */}
              <motion.div 
                className={styles.orbitRing2}
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {/* LinkedIn icon orbiting, counter-rotating to stay upright */}
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.orbitSocial} 
                  style={{ top: "50%", right: "-16px", transform: "translateY(-50%)" }}
                  title="LinkedIn"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                </motion.a>
                
                {/* Web icon orbiting, counter-rotating to stay upright */}
                <motion.a 
                  href="#projects" 
                  className={styles.orbitSocial} 
                  style={{ top: "50%", left: "-16px", transform: "translateY(-50%)" }}
                  title="Projects"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </motion.a>
              </motion.div>
              
              {/* Profile Photo Card */}
              <motion.div 
                className={styles.profileCard}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img 
                  src="/profile.jpg" 
                  alt="Harish R" 
                  className={styles.profileImage}
                />
                <div className={styles.cardGlassOverlay} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>

      {/* Video Modal Component */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
