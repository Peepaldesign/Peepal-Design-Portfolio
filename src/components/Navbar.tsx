"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ["home", "services", "work", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="glass" style={{ 
      position: "fixed", 
      top: 0, 
      left: 0, 
      width: "100%", 
      padding: "1rem 0", 
      borderRadius: "0", 
      zIndex: 100,
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none"
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "0 2rem",
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center"
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="#home" style={{ display: "flex", alignItems: "center" }}>
            <img 
              src="https://peepaldesign.com/wp-content/uploads/2023/10/Logo3.png" 
              alt="Peepal Design" 
              style={{ height: "40px", objectFit: "contain" }} 
            />
          </a>
        </div>

        <div style={{ display: "none", gap: "2.5rem", alignItems: "center" }} className="md-flex">
          {[
            { name: "Home", id: "home" },
            { name: "Services", id: "services" },
            { name: "Work", id: "work" },
            { name: "Contact", id: "contact" }
          ].map((item) => (
            <a 
              key={item.name} 
              href={`#${item.id}`} 
              className="nav-link"
              style={{ 
                fontSize: "0.95rem", 
                fontWeight: 400, 
                color: activeSection === item.id ? "var(--primary)" : "black",
                transition: "color 0.3s ease",
                textDecoration: "none",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <span style={{ fontWeight: 700, visibility: "hidden", height: 0 }}>{item.name}</span>
              {item.name}
            </a>
          ))}
          <a href="https://peepaldesign.com" target="_blank" rel="noopener noreferrer">
            <button style={{ 
              background: "var(--foreground)", 
              color: "var(--background)", 
              padding: "0.75rem 1.75rem", 
              borderRadius: "12px", 
              border: "none", 
              fontWeight: 700, 
              fontSize: "0.95rem",
              cursor: "pointer"
            }}>
              Visit our Official Website
            </button>
          </a>
        </div>

        <div style={{ display: "block" }} className="md-none">
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: "none", border: "none", color: "var(--foreground)", cursor: "pointer" }}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "white", width: "100%", padding: "1rem 2rem", borderBottom: "1px solid rgba(0,0,0,0.1)", overflow: "hidden" }}
            className="md-none"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {["Home", "Services", "Work", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  style={{ 
                    fontSize: "1.1rem", 
                    fontWeight: activeSection === item.toLowerCase() ? 700 : 400, 
                    color: activeSection === item.toLowerCase() ? "var(--primary)" : "black" 
                  }}
                >
                  {item}
                </a>
              ))}
              <a href="https://peepaldesign.com" target="_blank" rel="noopener noreferrer">
                <button style={{ 
                  background: "black", 
                  color: "white", 
                  padding: "1rem", 
                  borderRadius: "12px", 
                  border: "none", 
                  width: "100%", 
                  fontWeight: 700 
                }}>
                  Visit our Official Website
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-none { display: none !important; }
        }
        .nav-link:hover {
          font-weight: 700 !important;
          color: black !important;
        }
      `}</style>
    </nav>
  );
}
