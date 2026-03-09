import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import "./AudioToggle.css";

export default function AudioToggle() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  const handleToggle = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {
          console.log("Audio autoplay was blocked");
        });
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <>
      <motion.button
        className={`audio-toggle ${isMuted ? "muted" : "playing"}`}
        onClick={handleToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </motion.button>

      <audio
        ref={audioRef}
        loop
        src={require('../../assets/songs/background song.mp3')}
      />
    </>
  );
}