import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "./Memories.css";

// Import all images from assets folder
const imageContext = require.context("../../assets", false, /\.(jpg|jpeg|png|gif|webp)$/i);
const imageList = imageContext.keys().map((key) => ({
  id: key,
  src: imageContext(key),
  alt: key.replace(/^\.\//, "").split(".")[0],
}));

export default function Memories() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Sort images by filename
    setImages(imageList.sort((a, b) => a.alt.localeCompare(b.alt, undefined, { numeric: true })));
  }, []);

  return (
    <motion.div
      className="memories-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="memories-header">
        <h1 className="section-title">Class Gallery</h1>
        <p className="section-subtitle">Beautiful moments of Batch 2026</p>
      </div>

      <div className="memories-grid">
        <AnimatePresence mode="wait">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="memory-photo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                onError={(e) => {
                  // Handle broken images gracefully
                  e.target.style.display = "none";
                }}
              />
              <div className="photo-overlay">
                <span>Click to view</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="memory-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="memory-modal-content full-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="memory-modal-close"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>

              <div className="memory-modal-body full-image-body">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="full-view-image"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}