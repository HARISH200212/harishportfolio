"use client";
import { useEffect, useRef } from "react";
import styles from "./VideoModal.module.css";

export default function VideoModal({ isOpen, onClose, videoUrl }) {
  const modalRef = useRef(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Default premium vimeo creative developer/3D design showreel if not provided
  const embedUrl = videoUrl || "https://player.vimeo.com/video/324240702?autoplay=1&color=e8ff47";

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div 
        className={styles.modalContent} 
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        {/* Close Button */}
        <button 
          className={styles.closeBtn} 
          onClick={onClose}
          aria-label="Close video player"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Video Wrapper (keeps 16:9 aspect ratio) */}
        <div className={styles.videoWrapper}>
          <iframe
            src={embedUrl}
            title="Portfolio Video Walkthrough"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className={styles.iframe}
          />
        </div>
      </div>
    </div>
  );
}
