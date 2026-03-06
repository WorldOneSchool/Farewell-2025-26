import React, { useEffect } from "react";
import "./Confetti.css";

export default function Confetti() {
  useEffect(() => {
    const container = document.getElementById("confetti-container");
    if (!container) return;

    const confettiEmojis = ["●", "■", "▲", "◆", "★", "✦", "✧"];

    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti-piece";
      confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.delay = Math.random() * 0.5 + "s";
      confetti.style.animationDuration = 2 + Math.random() * 1 + "s";
      confetti.style.opacity = Math.random() * 0.7 + 0.3;
      container.appendChild(confetti);
    }
  }, []);

  return <div id="confetti-container" className="confetti-container"></div>;
}