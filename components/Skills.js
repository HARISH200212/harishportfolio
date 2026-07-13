"use client";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import TiltCard from "./TiltCard";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "#e8ff47",
    skills: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#00e5c3",
    skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "JWT Auth"],
  },
  {
    category: "Tools & Platform",
    icon: "🛠",
    color: "#a78bfa",
    skills: ["Git & GitHub", "VS Code", "Postman", "Figma", "Chrome Extension API"],
  },
  {
    category: "AI & Integration",
    icon: "🤖",
    color: "#f97316",
    skills: ["Anthropic Claude API", "NLP Integration", "RBAC", "MongoDB Aggregation", "Admin Dashboards"],
  },
];

const allTech = [
  "React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML5", "CSS3",
  "Git", "GitHub", "Postman", "Figma", "JWT", "REST API", "Chrome Extension",
  "MERN Stack", "Claude API", "NLP", "RBAC", "Agile",
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
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealVariants}
        >
          <span className={styles.label}>{"// Tech Stack"}</span>
          <h2 className={styles.heading}>Skills &amp; <em>Expertise</em></h2>
          <p className={styles.sub}>Technologies I work with to build robust, scalable applications</p>
        </motion.div>

        <motion.div
          className={styles.groups}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skillGroups.map((group) => (
            <TiltCard
              key={group.category}
              className={styles.group}
              variants={cardItem}
              whileHover={{ borderColor: group.color, boxShadow: `0 10px 24px ${group.color}15` }}
            >
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon}>{group.icon}</span>
                <h3 className={styles.groupName} style={{ color: group.color }}>
                  {group.category}
                </h3>
              </div>
              <div className={styles.pills}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.pill}>
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </motion.div>

        {/* Scrolling tech marquee */}
        <motion.div
          className={styles.marqueeWrap}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className={styles.marqueeLabel}>{"// Full stack"}</p>
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              {[...allTech, ...allTech].map((t, i) => (
                <span key={i} className={styles.marqueeItem}>{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
