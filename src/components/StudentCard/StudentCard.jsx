import React from "react";
import { motion } from "framer-motion";
import "./StudentCard.css";

export default function StudentCard({ student, onClick }) {
  return (
    <motion.div
      className="student-card"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="poster-frame">
        <img src={student.photo} alt={student.name} className="student-photo" />
        <div className="film-overlay"></div>
        <div className="gold-trim"></div>
        <div className="spotlight-effect"></div>
      </div>

      <div className="student-info">
        <h3 className="student-name">{student.name}</h3>
        <p className="student-nickname">"{student.nickname}"</p>
        <p className="student-bio">{student.bio}</p>
      </div>

      <div className="film-strip-decoration"></div>
    </motion.div>
  );
}