import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import schoolLogo from "../../assets/World_One_School.png";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/memories", text: "Memories" },
    { to: "/awards", text: "Awards" },
    { to: "/guestbook", text: "Teacher Messages" },
  ];

  return (
    <nav className="cinema-navbar">
      <div className="navbar-brand-section">
        <img src={schoolLogo} alt="World One School" className="school-logo" />
        <Link to="/" className="nav-brand">
          Batch of 2026
        </Link>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {navLinks.map(({ to, text }) => (
          <Link
            key={to}
            to={to}
            className={`nav-link ${location.pathname === to ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            {text}
          </Link>
        ))}
      </div>
    </nav>
  );
}