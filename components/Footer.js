import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>HR</span>
            <span className={styles.logoText}>Harish R</span>
          </div>
          <p className={styles.tagline}>MERN Stack Developer · Bangalore, India</p>
        </div>

        <div className={styles.links}>
          <a href="#about" className={styles.link}>About</a>
          <a href="#skills" className={styles.link}>Skills</a>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#certifications" className={styles.link}>Certs</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </div>

        <p className={styles.copy}>
          © {year} Harish R. Built with Next.js
        </p>
      </div>
    </footer>
  );
}
