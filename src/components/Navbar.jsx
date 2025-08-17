import React, { useState, useEffect } from 'react';
import './Navbar.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // scroll threshold in px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px 0px -50px 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <div className="navbar-brand"><span>Aqeel</span>Jabir</div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li><a href="#home" className={`navbar-link ${activeSection === "home" ? "active" : ""}`}>Home</a></li>
          <li><a href="#about" className={`navbar-link ${activeSection === "about" ? "active" : ""}`}>About</a></li>
          <li><a href="#projects" className={`navbar-link ${activeSection === "projects" ? "active" : ""}`}>Projects</a></li>
          <li><a href="#services" className={`navbar-link ${activeSection === "services" ? "active" : ""}`}>Services</a></li>
          <li><a href="#contact" className={`navbar-link btn btn-primary ${activeSection === "contact" ? "active" : ""}`}>Contact Me</a></li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-toggle"
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <svg
            className="navbar-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="navbar-mobile-menu">
          <li><a href="#home" className="navbar-link" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="navbar-link" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" className="navbar-link" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#services" className="navbar-link" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#contact" className="navbar-link" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
