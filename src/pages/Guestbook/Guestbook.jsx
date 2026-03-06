import React from "react";
import { motion } from "framer-motion";
import "./Guestbook.css";

export default function Guestbook() {
  const teacherTestimonials = [
    {
      id: 1,
      name: "Mrs. Priya Sharma",
      subject: "English Literature",
      message: "Batch of 2026, I miss your lively discussions and creative writing sessions every day. Your enthusiasm for literature made my classes unforgettable. Come back and visit soon!",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Mr. Rajesh Kumar",
      subject: "Mathematics",
      message: "I miss seeing your bright faces in math class and hearing your 'aha!' moments when solving problems. This batch was special - your curiosity and determination will always stay with me.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Ms. Ananya Singh",
      subject: "Science",
      message: "The lab just isn't the same without your excited questions and discoveries. I miss your passion for science and the way you made every experiment an adventure. You were an incredible batch!",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Dr. Vikram Patel",
      subject: "History & Geography",
      message: "I miss our debates about historical events and your thoughtful perspectives on world issues. This batch challenged me to be a better teacher. Your curiosity and kindness will be deeply missed.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    },
    {
      id: 5,
      name: "Mrs. Deepika Desai",
      subject: "Art & Design",
      message: "My art room feels empty without your creative energy and unique artistic voices. I miss seeing your projects come to life and the joy you brought to every class. You were truly inspiring!",
      photo: "https://images.unsplash.com/photo-1502085945533-8a40f178bac4?w=200&h=200&fit=crop",
    },
    {
      id: 6,
      name: "Mr. Arun Singh",
      subject: "Physical Education",
      message: "The playground echoes with memories of your teamwork and sportsmanship. I miss your energy, your cheers, and the way you supported each other. This was the most spirited batch I've ever coached!",
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

              <p className="testimonial-message">"{teacher.message}"</p>
            </div>

            <div className="testimonial-decoration"></div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
