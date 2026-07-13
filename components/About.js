"use client";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import TiltCard from "./TiltCard";

const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealVariants}
        >
          {/* Left: Big text */}
          <div className={styles.left}>
            <span className={styles.label}>{"// About Me"}</span>
            <h2 className={styles.heading}>
              I build things
              <br />
              <em>for the web</em>
            </h2>
            <div className={styles.accentBar} />
          </div>

          {/* Right: Content */}
          <div className={styles.right}>
            <p className={styles.bio}>
              I&apos;m a <strong>Full Stack Developer</strong> specializing in the MERN stack — React.js,
              Node.js, Express.js, and MongoDB. I love building products that are fast, scalable, and
              actually useful.
            </p>
            <p className={styles.bio}>
              From AI-powered scam detectors to real-time GPS tracking systems, my work spans a wide
              range of domains. I&apos;m passionate about integrating modern AI APIs and creating
              seamless user experiences backed by robust, well-architected backends.
            </p>
            <p className={styles.bio}>
              Currently working as a <strong className={styles.accent}>Web Developer at AMDOX,
              Bangalore</strong>, and a fresh MCA graduate from Anna University (2026).
            </p>

            <div className={styles.tags}>
              <span className={styles.tag}>🚀 Agile Teams</span>
              <span className={styles.tag}>🤖 AI Integration</span>
              <span className={styles.tag}>⚡ Clean Code</span>
              <span className={styles.tag}>📱 Responsive Design</span>
            </div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          className={styles.cards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={cardStagger}
        >
          <TiltCard
            className={styles.card}
            variants={cardItem}
            whileHover={{ borderColor: "var(--accent)", boxShadow: "0 12px 30px rgba(0,0,0,0.3)" }}
          >
            <div className={styles.cardIcon}>🎓</div>
            <div>
              <p className={styles.cardTitle}>Education</p>
              <p className={styles.cardSub}>MCA — Anna University, 2026</p>
            </div>
          </TiltCard>
          <TiltCard
            className={styles.card}
            variants={cardItem}
            whileHover={{ borderColor: "var(--accent)", boxShadow: "0 12px 30px rgba(0,0,0,0.3)" }}
          >
            <div className={styles.cardIcon}>💼</div>
            <div>
              <p className={styles.cardTitle}>Experience</p>
              <p className={styles.cardSub}>Web Developer @ AMDOX, Bangalore</p>
            </div>
          </TiltCard>
          <TiltCard
            className={styles.card}
            variants={cardItem}
            whileHover={{ borderColor: "var(--accent)", boxShadow: "0 12px 30px rgba(0,0,0,0.3)" }}
          >
            <div className={styles.cardIcon}>📍</div>
            <div>
              <p className={styles.cardTitle}>Location</p>
              <p className={styles.cardSub}>Tiruvannamalai, Tamil Nadu</p>
            </div>
          </TiltCard>
          <TiltCard
            className={styles.card}
            variants={cardItem}
            whileHover={{ borderColor: "var(--accent)", boxShadow: "0 12px 30px rgba(0,0,0,0.3)" }}
          >
            <div className={styles.cardIcon}>📧</div>
            <div>
              <p className={styles.cardTitle}>Email</p>
              <p className={styles.cardSub}>harishpostmail@gmail.com</p>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
