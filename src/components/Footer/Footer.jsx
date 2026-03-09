import React from "react";
import { Heart } from "lucide-react";
import schoolLogo from "../../assets/World_One_School.png";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cinema-footer">
      <div className="school-branding-footer">
        <img src={schoolLogo} alt="World One School" className="footer-logo" />
        <p className="school-tagline">Excellence in Education</p>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h4>Batch of 2026</h4>
          <p>Celebrating memories that last forever</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/guestbook">Guestbook</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/WorldOneSchoolKondapur/" className="social-icon" title="Facebook">f</a>
            <a href="https://www.instagram.com/worldoneschool_kondapur/?hl=en" className="social-icon" title="Instagram">@</a>
            <a href="https://www.youtube.com/@WorldOneSchoolKondapur" className="social-icon" title="YouTube">▶</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Made with <Heart size={16} /> By Prajwal Mattela & Bandari Manvitha for the Class of 2026 | © {currentYear} Vignan World One All Rights Reserved
        </p>
      </div>
    </footer>
  );
}