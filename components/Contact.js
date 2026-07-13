"use client";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import TiltCard from "./TiltCard";

const contactLinks = [
  {
    icon: "✉️",
    label: "Email",
    value: "harishpostmail@gmail.com",
    href: "mailto:harishpostmail@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 73396 27727",
    href: "tel:+917339627727",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Tiruvannamalai, Tamil Nadu, India",
    href: null,
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

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.inner}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealVariants}
        >
          <div className={styles.left}>
            <span className={styles.label}>{"// Let's Talk"}</span>
            <h2 className={styles.heading}>
              Open to new
              <br />
              <em>opportunities</em>
            </h2>
            <p className={styles.body}>
              I&apos;m actively looking for MERN Stack Developer roles where I can contribute,
              grow, and keep building great things. If you&apos;re looking for someone who writes
              clean code and ships fast — let&apos;s connect!
            </p>

            <div className={styles.links}>
              {contactLinks.map((c) => (
                <div key={c.label} className={styles.linkItem}>
                  <span className={styles.linkIcon}>{c.icon}</span>
                  <div>
                    <p className={styles.linkLabel}>{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className={styles.linkValue}>{c.value}</a>
                    ) : (
                      <p className={styles.linkValueStatic}>{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <TiltCard
              className={styles.cta}
              whileHover={{ borderColor: "var(--accent)", boxShadow: "0 12px 30px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.ctaGlow} />
              <p className={styles.ctaEmoji}>👋</p>
              <h3 className={styles.ctaTitle}>Ready to work together?</h3>
              <p className={styles.ctaText}>
                Drop me an email and let&apos;s discuss how I can help bring your project to life.
              </p>
              <a href="mailto:harishpostmail@gmail.com" className={styles.ctaBtn}>
                Send me an email
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="tel:+917339627727" className={styles.ctaBtnSecondary}>
                Call +91 73396 27727
              </a>
            </TiltCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
