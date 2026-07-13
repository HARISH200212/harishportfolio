"use client";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const experienceData = [
  {
    role: "Web Developer",
    company: "AMDOX",
    location: "Bangalore, India",
    period: "2025 - Present",
    description: "Developing and maintaining responsive, high-performance web applications using React.js and the MERN stack. Optimizing DB queries and implementing secure RESTful API integrations.",
    highlights: [
      "Refactored complex UI components to enhance visual performance and speed",
      "Designed and integrated server-side REST APIs for core client web portals",
      "Collaborated closely in an Agile sprint cycle environment to deliver key features"
    ],
    color: "var(--accent)"
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Independent Contracts",
    location: "Remote",
    period: "2024 - 2025",
    description: "Built custom full-stack solutions and automation pipelines for clients. Focused on creating user-centric frontend experiences and robust databases.",
    highlights: [
      "Integrated third-party APIs (including AI platforms and payment processors)",
      "Implemented role-based access control (RBAC) and JWT authentication",
      "Deployed high-availability production bundles with clean SEO settings"
    ],
    color: "var(--accent-2)"
  },
  {
    role: "Web Development Intern",
    company: "TechSolutions",
    location: "Chennai, India",
    period: "Summer 2024",
    description: "Gained hands-on experience in building landing pages and working with frontend technologies. Handled debugging tasks and responsiveness optimizations.",
    highlights: [
      "Created fully responsive landing pages using modern HTML5/CSS3 and JavaScript",
      "Assisted in debugging frontend issues and improving client loading times",
      "Learned version control practices using Git in a collaborative dev team"
    ],
    color: "#a78bfa"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = (index) => ({
  hidden: { 
    opacity: 0, 
    x: index % 2 === 0 ? -40 : 40,
    y: 20
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
});

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.5, ease: "easeInOut" }
  }
};

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>{"// Professional Path"}</span>
          <h2 className={styles.heading}>Work <em>Experience</em></h2>
          <p className={styles.sub}>My career journey as a developer, building software that matters</p>
        </div>

        <div className={styles.timelineWrapper}>
          {/* Vertical timeline line */}
          <motion.div 
            className={styles.timelineLine} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={lineVariants}
          />

          <motion.div 
            className={styles.timelineList}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experienceData.map((exp, idx) => (
              <div key={idx} className={`${styles.timelineItem} ${idx % 2 === 0 ? styles.leftSide : styles.rightSide}`}>
                
                {/* Glowing Dot on timeline line */}
                <div className={styles.timelineDot} style={{ "--accent-color": exp.color }}>
                  <div className={styles.dotCore} />
                </div>

                {/* Card Content */}
                <motion.div 
                  className={styles.card}
                  variants={cardVariants(idx)}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.01, 
                    borderColor: exp.color,
                    boxShadow: `0 10px 30px ${exp.color}10`
                  }}
                >
                  <span className={styles.period} style={{ color: exp.color }}>{exp.period}</span>
                  <h3 className={styles.roleTitle}>{exp.role}</h3>
                  <p className={styles.companyInfo}>
                    <span className={styles.company}>{exp.company}</span>
                    <span className={styles.separator}>·</span>
                    <span className={styles.location}>{exp.location}</span>
                  </p>
                  
                  <p className={styles.desc}>{exp.description}</p>
                  
                  <div className={styles.highlights}>
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className={styles.highlightItem}>
                        <span className={styles.bullet} style={{ color: exp.color }}>→</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
