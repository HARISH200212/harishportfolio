"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const projects = [
  {
    id: "01",
    name: "ScamShield.AI",
    emoji: "🛡️",
    tagline: "AI-Powered Job Scam Detection System",
    description:
      "An AI-powered web platform that detects fake job and internship postings using the Anthropic Claude API for real-time NLP-based text classification. Features a Chrome Extension that scans listings directly on Gmail, LinkedIn, and Internshala, providing instant scam risk scores.",
    highlights: [
      "Chrome Extension for Gmail, LinkedIn & Internshala",
      "Real-time NLP scam classification via Claude API",
      "JWT-based authentication with RBAC",
      "Admin analytics dashboard with MongoDB aggregation",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Anthropic API", "Chrome Extension", "JWT"],
    accent: "#e8ff47",
    featured: true,
  },
  {
    id: "02",
    name: "College Bus Tracker",
    emoji: "🚌",
    tagline: "Real-Time Bus Tracking & Safety System",
    description:
      "A real-time bus tracking system using GPS integration to improve student safety and reduce waiting time on campus. Features live route management, driver profile management, and real-time bus status monitoring through a responsive admin panel.",
    highlights: [
      "Real-time GPS integration for live tracking",
      "Admin panel for route & driver management",
      "Responsive React.js interface",
      "Improved student safety & reduced wait times",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "GPS API"],
    accent: "#00e5c3",
    featured: false,
  },
  {
    id: "03",
    name: "Vintage Vault",
    emoji: "🏺",
    tagline: "Online Auction Platform for Collectibles",
    description:
      "A full-stack online auction platform for buying and selling vintage and collectible items with real-time bidding mechanics. Includes secure authentication, session management, and an admin control panel for listing approval and transaction oversight.",
    highlights: [
      "Real-time bidding with live updates",
      "Secure user auth & session management",
      "Admin panel for listings & transactions",
      "Vintage & collectibles marketplace",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    accent: "#a78bfa",
    featured: false,
  },
  {
    id: "04",
    name: "KHM Platform",
    emoji: "🚀",
    tagline: "Knowledge Hub Management System",
    description:
      "A full-stack platform that centralizes documentation, tutorials, and resources for teams, featuring markdown rendering, role‑based access, and real‑time collaborative editing.",
    highlights: [
      "Markdown editor with live preview",
      "RBAC permissions and team management",
      "Realtime collaboration via WebSockets",
      "Searchable knowledge base with tags",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "TailwindCSS"],
    accent: "#f97316",
    featured: false,
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

export default function Projects() {
  const [active, setActive] = useState(0);
  const proj = projects[active];

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>{"// My Work"}</span>
          <h2 className={styles.heading}>Selected <em>Works</em></h2>
        </div>

        {/* Desktop Layout */}
        <div className={styles.desktopLayout}>
          <motion.div
            className={styles.layout}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={revealVariants}
          >
            {/* Sidebar */}
            <div className={styles.sidebar}>
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
                  onClick={() => setActive(i)}
                  style={{ "--accent-color": p.accent }}
                >
                  <span className={styles.tabNum}>{p.id}</span>
                  <div className={styles.tabContent}>
                    <span className={styles.tabEmoji}>{p.emoji}</span>
                    <span className={styles.tabName}>{p.name}</span>
                  </div>
                  {p.featured && <span className={styles.featuredBadge}>Featured</span>}
                  
                  {/* Sliding active indicator */}
                  {active === i && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className={styles.activeBg}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <motion.div
              className={styles.detail}
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className={styles.detailTop}>
                <div className={styles.detailEmoji} style={{ background: `${proj.accent}15`, border: `1px solid ${proj.accent}30` }}>
                  {proj.emoji}
                </div>
                <div>
                  <p className={styles.detailNum} style={{ color: proj.accent }}>{proj.id}</p>
                  <h3 className={styles.detailName}>{proj.name}</h3>
                  <p className={styles.detailTagline}>{proj.tagline}</p>
                </div>
              </div>

              <p className={styles.detailDesc}>{proj.description}</p>

              <div className={styles.highlights}>
                <p className={styles.highlightsTitle} style={{ color: proj.accent }}>Key Features</p>
                <ul className={styles.highlightList}>
                  {proj.highlights.map((h) => (
                    <li key={h} className={styles.highlightItem}>
                      <span className={styles.arrow} style={{ color: proj.accent }}>→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.stack}>
                <p className={styles.stackLabel}>Tech Stack</p>
                <div className={styles.stackPills}>
                  {proj.stack.map((s) => (
                    <span key={s} className={styles.stackPill} style={{ borderColor: `${proj.accent}30`, color: proj.accent }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className={styles.mobileLayout}>
          {projects.map((p) => (
            <div key={p.id} className={styles.mobileCard} style={{ "--project-accent": p.accent }}>
              <div className={styles.detailTop}>
                <div className={styles.detailEmoji} style={{ background: `${p.accent}15`, border: `1px solid ${p.accent}30` }}>
                  {p.emoji}
                </div>
                <div>
                  <div className={styles.mobileCardHeader}>
                    <p className={styles.detailNum} style={{ color: p.accent }}>{p.id}</p>
                    {p.featured && <span className={styles.featuredBadge}>Featured</span>}
                  </div>
                  <h3 className={styles.detailName}>{p.name}</h3>
                  <p className={styles.detailTagline}>{p.tagline}</p>
                </div>
              </div>

              <p className={styles.detailDesc}>{p.description}</p>

              <div className={styles.highlights}>
                <p className={styles.highlightsTitle} style={{ color: p.accent }}>Key Features</p>
                <ul className={styles.highlightList}>
                  {p.highlights.map((h) => (
                    <li key={h} className={styles.highlightItem}>
                      <span className={styles.arrow} style={{ color: p.accent }}>→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.stack}>
                <p className={styles.stackLabel}>Tech Stack</p>
                <div className={styles.stackPills}>
                  {p.stack.map((s) => (
                    <span key={s} className={styles.stackPill} style={{ borderColor: `${p.accent}30`, color: p.accent }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
