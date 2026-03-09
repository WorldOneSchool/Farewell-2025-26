import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AudioToggle from "./components/AudioToggle/AudioToggle";
import Confetti from "./components/Confetti/Confetti";

// Pages
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Memories from "./pages/Memories/Memories";
import Awards from "./pages/Awards/Awards";
import Guestbook from "./pages/Guestbook/Guestbook";
import Agenda from "./pages/Agenda/Agenda";

// Styles
import "./App.css";

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL || "/"}>
      <div className="app-container">
        {showConfetti && <Confetti />}
        <AudioToggle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/agenda" element={<Agenda />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;