import React from "react";
import { motion } from "framer-motion";
import AwardCard from "../../components/AwardCard/AwardCard";
import "./Awards.css";

export default function Awards() {
  const awards = [
    {
      id: 1,
      title: "Most Dramatic",
      recipient: "Vivan Kapoor",
      description: "Master of emotions and expressions",
      tier: "gold",
    },
    {
      id: 2,
      title: "Future Scientist",
      recipient: "Divya Malhotra",
      description: "Curious mind, brilliant experimenter",
      tier: "gold",
    },
    {
      id: 3,
      title: "Silent Killer",
      recipient: "Rohan Singh",
      description: "Quiet but incredibly effective",
      tier: "silver",
    },
    {
      id: 4,
      title: "Class Comedian",
      recipient: "Ananya Patel",
      description: "Laughter is her superpower",
      tier: "gold",
    },
    {
      id: 5,
      title: "Most Stylish",
      recipient: "Kavya Sharma",
      description: "Fashion icon of the batch",
      tier: "silver",
    },
    {
      id: 6,
      title: "Film King",
      recipient: "Arjun Verma",
      description: "Passion for cinema is unmatched",
      tier: "gold",
    },
    {
      id: 7,
      title: "Book Worm",
      recipient: "Priya Sharma",
      description: "Lost in stories and imagination",
      tier: "bronze",
    },
    {
      id: 8,
      title: "Tech Genius",
      recipient: "Aditya Singh",
      description: "Code wizard and problem solver",
      tier: "gold",
    },
  ];

  return (
    <motion.div
      className="awards-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="awards-header">
        <h1 className="section-title">Awards Night</h1>
        <p className="section-subtitle">
          Celebrating the superstars of 2026
        </p>
      </div>

      <div className="awards-grid">
        {awards.map((award, index) => (
          <AwardCard key={award.id} award={award} index={index} />
        ))}
      </div>
    </motion.div>
  );
}