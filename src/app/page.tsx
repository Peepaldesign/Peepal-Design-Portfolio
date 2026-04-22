"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThreadBackground from "@/components/ThreadBackground";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />

      {/* Hero Section */}
      <section id="home" style={{ 
        height: "100vh", 
        width: "100%",
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        position: "relative",
        overflow: "hidden",
        background: "white"
      }}>
        <ThreadBackground />
        
        <div style={{ 
          maxWidth: "1200px", 
          width: "100%", 
          margin: "0 auto", 
          padding: "0 2rem",
          position: "relative",
          zIndex: 1
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ maxWidth: "800px" }}
          >
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ 
                fontSize: "clamp(3rem, 10vw, 6rem)", 
                fontWeight: 800, 
                lineHeight: 1, 
                marginBottom: "2rem",
                letterSpacing: "-0.04em",
                textAlign: "left"
              }}
            >
              Crafting Digital <br />
              <span className="gradient-text">Masterpieces</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ 
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)", 
                color: "#4b5563", 
                marginBottom: "3rem", 
                lineHeight: 1.6,
                textAlign: "left"
              }}
            >
              We are a global UX studio specializing in research-driven design 
              and international training for industry-leading enterprises.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <a href="#work">
                  <button style={{ 
                    background: "var(--foreground)", 
                    color: "var(--background)", 
                    padding: "1rem 2.5rem", 
                    borderRadius: "12px", 
                    border: "none", 
                    fontWeight: 700, 
                    fontSize: "1.1rem", 
                    cursor: "pointer",
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    Explore Our Work
                  </button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div>
        <ServicesSection />
        <WorkSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
