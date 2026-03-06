import React from "react";
import { motion } from "framer-motion";
import "./AwardCard.css";

export default function AwardCard({ award, index }) {
  return (
    <motion.div
      className={`award-card ${award.tier}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)" }}
    >
      <div className="award-spotlight"></div>

      <h3 className="award-title">{award.title}</h3>

      <div className="award-ribbon"></div>

      <p className="award-recipient">{award.recipient}</p>

      <p className="award-description">{award.description}</p>

      <div className="award-stars">
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            ★
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}