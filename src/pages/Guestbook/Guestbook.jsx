import React from "react";
import { motion } from "framer-motion";
import "./Guestbook.css";

export default function Guestbook() {
  const teacherTestimonials = [
    {
      id: 1,
      name: "Mrs. Priya Sharma",
      subject: "English Literature",
      message: "Batch of 2026, you've been an absolute joy to teach. Your creativity and enthusiasm in class discussions will always remain with me. I'll miss your laughter and brilliant insights!",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Mr. Rajesh Kumar",
      subject: "Mathematics",
      message: "This batch has taught me as much as I've taught you. Your persistence, curiosity, and willingness to challenge conventions have inspired me. You will do great things!",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Ms. Ananya Singh",
      subject: "Science",
      message: "Your inquisitive minds and passion for learning made every lab session memorable. I'm so proud of each and every one of you. The world is ready for your brilliance!",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Dr. Vikram Patel",
      subject: "History & Geography",
      message: "Your thoughtful questions and perspectives have enriched my teaching. It's been a privilege watching you grow into thoughtful young adults. Never lose your curiosity!",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    },
    {
      id: 5,
      name: "Mrs. Deepika Desai",
      subject: "Art & Design",
      message: "The creativity and expression you've shown in class has been wonderful to witness. You all have unique talents that make the world more beautiful. Keep creating!",
      photo: "https://images.unsplash.com/photo-1502085945533-8a40f178bac4?w=200&h=200&fit=crop",
    },
    {
      id: 6,
      name: "Mr. Arun Singh",
      subject: "Physical Education",
      message: "You've shown tremendous spirit and teamwork. Your dedication both on and off the field has been inspiring. Go out there and make us proud!",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="guestbook-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="guestbook-header">
        <h1 className="section-title">Teacher's Messages</h1>
        <p className="section-subtitle">
          Words of wisdom and love from our mentors
        </p>
      </div>

      <motion.div
        className="testimonials-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teacherTestimonials.map((teacher) => (
          <motion.div
            key={teacher.id}
            className="testimonial-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className="teacher-photo-wrapper">
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="teacher-photo"
              />
            </div>

            <div className="testimonial-content">
              <h3 className="teacher-name">{teacher.name}</h3>
              <p className="teacher-subject">{teacher.subject}</p>

              <p className="testimonial-message">{teacher.message}</p>
            </div>

            <div className="testimonial-decoration"></div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
