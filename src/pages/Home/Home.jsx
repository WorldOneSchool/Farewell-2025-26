import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const curtainLeftRef = useRef(null);
  const curtainRightRef = useRef(null);

  useEffect(() => {
    // Faster curtain opening animation
    gsap.to(curtainLeftRef.current, {
      x: -100,
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.2,
    });

    gsap.to(curtainRightRef.current, {
      x: 100,
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.2,
    });
  }, []);

  // Character animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20, rotate: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: 1 + i * 0.08,
        duration: 0.6,
        ease: "circOut",
      },
    }),
  };

  const crystalVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.12,
        duration: 0.7,
        ease: "backOut",
      },
    }),
  };

  return (
    <main className="home-page">
      {/* Curtains */}
      <div ref={curtainLeftRef} className="curtain curtain-left"></div>
      <div ref={curtainRightRef} className="curtain curtain-right"></div>

      {/* Crystal Glass Elements */}
      <motion.div
        className="crystal crystal-1"
        custom={0}
        variants={crystalVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <motion.div
        className="crystal crystal-2"
        custom={1}
        variants={crystalVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <motion.div
        className="crystal crystal-3"
        custom={2}
        variants={crystalVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <motion.div
        className="crystal crystal-4"
        custom={3}
        variants={crystalVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>

      {/* Particle Effects */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: [0, 1, 0], y: -100 }}
            transition={{
              delay: 1 + i * 0.1,
              duration: 2.5,
              ease: "easeOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          ></motion.div>
        ))}
      </div>

      {/* Film Reel Background - Updated */}
      <div className="film-reel-bg">
        <svg viewBox="0 0 100 100" className="film-reel">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#00D9FF" strokeWidth="2" opacity="0.6" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="#00D9FF" strokeWidth="1" opacity="0.3" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle
              key={i}
              cx={50 + 35 * Math.cos((i * 60 * Math.PI) / 180)}
              cy={50 + 35 * Math.sin((i * 60 * Math.PI) / 180)}
              r="3"
              fill="#00D9FF"
            />
          ))}
        </svg>
      </div>

      {/* Enhanced Spotlight Effects */}
      <div className="spotlight spotlight-1"></div>
      <div className="spotlight spotlight-2"></div>
      <div className="spotlight spotlight-3"></div>

      {/* Main Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="title-wrapper"
        >
          <h1 className="hero-title">
            {"BATCH OF 2025-26".split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "circOut" }}
        >
          Farewell 2026 – The Final Scene
        </motion.h2>

        <motion.div
          className="divider-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        ></motion.div>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.7 }}
        >
          Every ending is a new beginning
        </motion.p>

        <motion.button
          className="enter-button"
          onClick={() => navigate("/memories")}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.4, duration: 0.6, ease: "backOut" }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          ▶ Enter The Premiere
        </motion.button>
      </div>

      {/* Countdown Timer - Faster */}
      <motion.div
        className="countdown"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 0.8 }}
      >
        <p>Farewell Day: <strong>9th March 2025</strong></p>
      </motion.div>
    </main>
  );
}