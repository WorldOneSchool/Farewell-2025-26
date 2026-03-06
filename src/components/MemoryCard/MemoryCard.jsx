import React from "react";
import { motion } from "framer-motion";
import "./MemoryCard.css";

export default function MemoryCard({ memory, onClick }) {
  return (
    <motion.div
      className="memory-card"
      onClick={onClick}
      initial={{ opacity: 0, rotate: -5 }}
      animate={{ opacity: 1, rotate: 0 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.3 }}
    >
      <div className="polaroid-wrapper">
        <img src={memory.image} alt={memory.title} className="polaroid-image" />
        <div className="polaroid-text">
          <h3>{memory.title}</h3>
          <p className="memory-date">{memory.date}</p>
        </div>
      </div>
      <div className="pin pin-1"></div>
      <div className="pin pin-2"></div>
    </motion.div>
  );
}