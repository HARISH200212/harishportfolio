"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

const themes = [
  {
    name: "Lime",
    primary: "#e8ff47",
    accent2: "#00e5c3",
    dim: "rgba(232, 255, 71, 0.12)",
  },
  {
    name: "Cyber",
    primary: "#a78bfa",
    accent2: "#fbbf24",
    dim: "rgba(167, 139, 250, 0.12)",
  },
  {
    name: "Aqua",
    primary: "#00e5c3",
    accent2: "#3b82f6",
    dim: "rgba(0, 229, 195, 0.12)",
  },
  {
    name: "Coral",
    primary: "#f97316",
    accent2: "#ef4444",
    dim: "rgba(249, 115, 22, 0.12)",
  },
];

const ScribbleBg = () => (
  <svg 
    viewBox="0 0 120 45" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={styles.scribbleBg}
    aria-hidden="true"
  >
    <path 
      d="M10 22C30 9 95 6 108 17C118 25 75 39 42 38C15 37 4 23 22 14C38 6 95 9 102 21" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("Lime");
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) {
      const matched = themes.find((t) => t.name === saved);
      if (matched) {
        selectTheme(matched);
      }
    }

    // Set active link based on scroll position
    const handleScrollActive = () => {
      const scrollPos = window.scrollY + 200;
      for (const link of links) {
        const el = document.getElementById(link.href.replace("#", ""));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveLink(link.href);
            return;
          }
        }
      }
      setActiveLink("");
    };

    window.addEventListener("scroll", handleScrollActive);
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  const selectTheme = (theme) => {
    document.documentElement.style.setProperty("--accent", theme.primary);
    document.documentElement.style.setProperty("--accent-2", theme.accent2);
    document.documentElement.style.setProperty("--accent-dim", theme.dim);
    localStorage.setItem("portfolio-theme", theme.name);
    setCurrentTheme(theme.name);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo styled like Lendex */}
        <a href="#" className={styles.logo}>
          <div className={styles.logoMark}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className={styles.logoText}>Harish.R</span>
        </a>

        {/* Navigation links with scribble background hover */}
        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a 
                href={l.href} 
                onClick={() => setMenuOpen(false)} 
                className={`${styles.link} ${activeLink === l.href ? styles.linkActive : ""}`}
              >
                <span className={styles.linkText}>{l.label}</span>
                <ScribbleBg />
              </a>
            </li>
          ))}
          
          {/* Hire Me CTA styled exactly like Lendex */}
          <li>
            <a href="mailto:harishpostmail@gmail.com" className={styles.cta}>
              Hire Me <span className={styles.arrowIcon}>»</span>
            </a>
          </li>
        </ul>

        {/* Right side controls (Theme Switcher + Burger Menu Trigger) */}
        <div className={styles.rightActions}>
          <div className={styles.themeSwitcher}>
            {themes.map((t) => (
              <button
                key={t.name}
                className={`${styles.themeBtn} ${currentTheme === t.name ? styles.themeBtnActive : ""}`}
                style={{ backgroundColor: t.primary }}
                onClick={() => selectTheme(t)}
                title={`${t.name} Theme`}
                aria-label={`Switch to ${t.name} theme`}
              />
            ))}
          </div>

          {/* Mobile menu trigger */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? styles.burgerOpen : ""}></span>
            <span className={menuOpen ? styles.burgerOpen : ""}></span>
            <span className={menuOpen ? styles.burgerOpen : ""}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

