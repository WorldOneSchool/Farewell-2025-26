import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import StudentCard from "../../components/StudentCard/StudentCard";
import "./Gallery.css";

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Sample student data
  const studentsData = [
    {
      id: 1,
      name: "Aarav Sharma",
      nickname: "The Director",
      bio: "Passionate filmmaker and storyteller",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      achievements: ["Film Club President", "Best Video Award"],
      quote: "Life is cinema, make it a masterpiece",
    },
    {
      id: 2,
      name: "Priya Verma",
      nickname: "The Star",
      bio: "Charismatic and full of energy",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
      achievements: ["Debate Champion", "Cultural Fest Lead"],
      quote: "Every moment is a scene worth capturing",
    },
    {
      id: 3,
      name: "Arjun Patel",
      nickname: "The Producer",
      bio: "Organized and makes things happen",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      achievements: ["Student Council VP", "Event Organizer"],
      quote: "Success is the best production",
    },
    {
      id: 4,
      name: "Divya Malhotra",
      nickname: "The Genius",
      bio: "Brilliant and innovative thinker",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
      achievements: ["Science Fair Winner", "Topper"],
      quote: "Dream big, achieve bigger",
    },
    {
      id: 5,
      name: "Rohan Singh",
      nickname: "The Athlete",
      bio: "Sports champion with determination",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
      achievements: ["Sports Captain", "National Award"],
      quote: "Sweat today, shine tomorrow",
    },
    {
      id: 6,
      name: "Ananya Desai",
      nickname: "The Artist",
      bio: "Creative and expressive soul",
      photo: "https://images.unsplash.com/photo-1502085945533-8a40f178bac4?w=400&h=500&fit=crop",
      achievements: ["Art Exhibition", "Best Sketch"],
      quote: "Colors of life make it beautiful",
    },
  ];

  const filteredStudents = useMemo(() => {
    return studentsData.filter(
      (student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.nickname.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <motion.div className="gallery-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <div className="gallery-header">
        <h1 className="section-title">Red Carpet Gallery</h1>
        <p className="section-subtitle">Meet the stars of the class of 2026</p>
      </div>

      {/* Search Bar */}
      <div className="search-wrapper">
        <Search size={20} className="search-icon" />
        <input
          type="text"
          placeholder="Search by name or nickname..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button
            className="search-clear"
            onClick={() => setSearchTerm("")}
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        <AnimatePresence mode="wait">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onClick={() => setSelectedStudent(student)}
              />
            ))
          ) : (
            <motion.p
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No students found. Try a different search!
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Student Modal */}
      <AnimatePresence>
        {selectedStudent && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudent(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedStudent(null)}>
                <X size={24} />
              </button>

              <div className="modal-body">
                <div className="modal-image">
                  <img src={selectedStudent.photo} alt={selectedStudent.name} />
                </div>

                <div className="modal-info">
                  <h2>{selectedStudent.name}</h2>
                  <p className="modal-nickname">"{selectedStudent.nickname}"</p>
                  <p className="modal-bio">{selectedStudent.bio}</p>

                  <div className="modal-achievements">
                    <h4>Achievements</h4>
                    <ul>
                      {selectedStudent.achievements.map((achievement, idx) => (
                        <li key={idx}>✨ {achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-quote">
                    <p>"{selectedStudent.quote}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}