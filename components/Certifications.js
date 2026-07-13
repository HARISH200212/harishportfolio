"use client";
import { motion } from "framer-motion";
import styles from "./Certifications.module.css";
import TiltCard from "./TiltCard";

const certs = [
  {
    title: "Cloud Computing Essentials",
    org: "Infosys",
    year: "2025",
    icon: "☁️",
    color: "#60a5fa",
  },
  {
    title: "Applying Machine Learning",
    org: "Infosys",
    year: "2025",
    icon: "🤖",
    color: "#a78bfa",
  },
  {
    title: "Data Science for Engineers",
    org: "NPTEL",
    year: "2025",
    icon: "📊",
    color: "#00e5c3",
  },
  {
    title: "KHM Platform Certificate",
    org: "KHM",
    year: "2026",
    icon: "🚀",
    color: "#f97316",
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 40 },
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

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealVariants}
        >
          <span className={styles.label}>{"// Credentials"}</span>
          <h2 className={styles.heading}>Certifications</h2>
          <p className={styles.sub}>Continuous learning — staying sharp across the stack and beyond</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {certs.map((cert) => (
            <TiltCard
              key={cert.title}
              className={styles.card}
              variants={cardItem}
              whileHover={{ borderColor: cert.color, boxShadow: `0 10px 24px ${cert.color}15` }}
            >
              <div className={styles.cardGlow} style={{ background: `radial-gradient(circle at 0% 0%, ${cert.color}15, transparent 70%)` }} />
              <div className={styles.iconWrap} style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}>
                <span className={styles.icon}>{cert.icon}</span>
              </div>
              <div className={styles.meta}>
                <span className={styles.year} style={{ color: cert.color }}>{cert.year}</span>
                <span className={styles.org}>{cert.org}</span>
              </div>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <div className={styles.bar} style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />
            </TiltCard>
          ))}
        </motion.div>

        {/* Education block */}
        <TiltCard
          className={styles.eduBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealVariants}
        >
          <div className={styles.eduLeft}>
            <span className={styles.eduIcon}>🎓</span>
            <div>
              <h3 className={styles.eduTitle}>Master of Computer Applications (MCA)</h3>
              <p className={styles.eduOrg}>Anna University</p>
            </div>
          </div>
          <div className={styles.eduRight}>
            <span className={styles.eduYear}>Class of 2026</span>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
