"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./BackgroundVideo.module.css";

const videos = [
  {
    id: "plexus",
    name: "Quantum Plexus",
    url: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e36913c10da2e2eaf5da5d1e38b&profile_id=139&oauth2_token_id=57447761",
  },
  {
    id: "matrix",
    name: "Digital Matrix",
    url: "https://player.vimeo.com/external/403848777.sd.mp4?s=d001289139fb2b66723b7a544c20583b4b5ca182&profile_id=139&oauth2_token_id=57447761",
  },
  {
    id: "aurora",
    name: "Aurora Flow",
    url: "https://player.vimeo.com/external/517602123.sd.mp4?s=d9f4859a0f4438341b53e7f91040523f2f8a42f4&profile_id=139&oauth2_token_id=57447761",
  },
];

export default function BackgroundVideo() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [activeVideo, setActiveVideo] = useState("plexus");
  const [opacity, setOpacity] = useState(0.12);
  const [blur, setBlur] = useState(2);
  const videoRef = useRef(null);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
    const savedEnabled = localStorage.getItem("bg-video-enabled");
    const savedVideo = localStorage.getItem("bg-video-active");
    const savedOpacity = localStorage.getItem("bg-video-opacity");
    const savedBlur = localStorage.getItem("bg-video-blur");

    if (savedEnabled !== null) setEnabled(savedEnabled === "true");
    if (savedVideo !== null) setActiveVideo(savedVideo);
    if (savedOpacity !== null) setOpacity(parseFloat(savedOpacity));
    if (savedBlur !== null) setBlur(parseInt(savedBlur));
  }, []);

  // Sync settings with localStorage and update video element
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("bg-video-enabled", enabled);
    localStorage.setItem("bg-video-active", activeVideo);
    localStorage.setItem("bg-video-opacity", opacity);
    localStorage.setItem("bg-video-blur", blur);

    if (videoRef.current) {
      if (enabled) {
        videoRef.current.load();
        videoRef.current.play().catch((err) => {
          console.log("Auto-play was prevented by browser:", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [enabled, activeVideo, opacity, blur, mounted]);

  if (!mounted) return null;

  const currentVideo = videos.find((v) => v.id === activeVideo) || videos[0];

  return (
    <>
      {/* Background Video Layer */}
      {enabled && (
        <div 
          className={styles.videoContainer} 
          style={{ 
            opacity: opacity, 
            filter: `blur(${blur}px)` 
          }}
        >
          <video
            ref={videoRef}
            key={currentVideo.id}
            autoPlay
            loop
            muted
            playsInline
            className={styles.video}
            preload="auto"
          >
            <source src={currentVideo.url} type="video/mp4" />
          </video>
          <div className={styles.overlay} />
        </div>
      )}

      {/* Floating Control Panel */}
      <div className={`${styles.controlWrapper} ${isOpen ? styles.open : ""}`}>
        {/* Toggle Widget Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.triggerButton}
          title="Customize Background Video"
          aria-label="Customize Background Video"
        >
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 7a2 2 0 0 0-2.45-1.45L16 7V5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2l4.55 1.45A2 2 0 0 0 23 17V7z"/>
            </svg>
          )}
          {!isOpen && enabled && <span className={styles.activeDot} />}
        </button>

        {/* Settings Panel */}
        <div className={styles.settingsPanel}>
          <div className={styles.panelHeader}>
            <h3>Background Video</h3>
            <span className={styles.badge}>Beta</span>
          </div>

          <div className={styles.controlGroup}>
            <div className={styles.switchRow}>
              <span className={styles.label}>Enable Video</span>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={(e) => setEnabled(e.target.checked)}
                />
                <span className={styles.slider} />
              </label>
            </div>
          </div>

          {enabled && (
            <>
              {/* Select Video Theme */}
              <div className={styles.controlGroup}>
                <span className={styles.sectionTitle}>Video Source</span>
                <div className={styles.videoGrid}>
                  {videos.map((vid) => (
                    <button
                      key={vid.id}
                      className={`${styles.vidBtn} ${
                        activeVideo === vid.id ? styles.activeVidBtn : ""
                      }`}
                      onClick={() => setActiveVideo(vid.id)}
                    >
                      <span className={styles.vidName}>{vid.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Adjust Opacity */}
              <div className={styles.controlGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sectionTitle}>Opacity</span>
                  <span className={styles.valDisplay}>{Math.round(opacity * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.40"
                  step="0.01"
                  value={opacity}
                  onChange={(e) => setOpacity(parseFloat(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>

              {/* Adjust Blur */}
              <div className={styles.controlGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sectionTitle}>Blur</span>
                  <span className={styles.valDisplay}>{blur}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="12"
                  step="1"
                  value={blur}
                  onChange={(e) => setBlur(parseInt(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>
            </>
          )}

          <div className={styles.panelFooter}>
            <p>Designed for Harish&apos;s Portfolio</p>
          </div>
        </div>
      </div>
    </>
  );
}
