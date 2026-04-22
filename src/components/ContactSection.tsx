"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" style={{ width: "100%", maxWidth: "1200px", margin: "10rem auto 0", padding: "0 2rem 10rem" }}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass" 
        style={{ 
          padding: "4rem", 
          borderRadius: "40px", 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "4rem" 
        }}
      >
        <div>
          <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1.5rem" }}>Let's build something <span className="gradient-text">exceptional</span> together.</h2>
          <p style={{ color: "#4b5563", fontSize: "1.2rem", marginBottom: "3rem" }}>
            Ready to elevate your digital presence? Get in touch and let's start a conversation.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(59, 130, 246, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ fontSize: "0.9rem", color: "#71717a" }}>Email us at</p>
                <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>info@peepaldesign.com</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--secondary)" }}>
                <MessageSquare size={24} />
              </div>
              <div>
                <p style={{ fontSize: "0.9rem", color: "#71717a" }}>Call us</p>
                <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>+91-80-4854-1615</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(245, 158, 11, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                <MapPin size={24} />
              </div>
              <div>
                <p style={{ fontSize: "0.9rem", color: "#71717a" }}>Bangalore Studio</p>
                <p style={{ fontSize: "0.9rem", fontWeight: 500, maxWidth: "250px", lineHeight: 1.4 }}>806, 1st Floor, 19th Main, HSR Sector-2, Bangalore 560102</p>
              </div>
            </div>
          </div>
        </div>

        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <input type="text" placeholder="Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
          </div>
          <input type="text" placeholder="Subject" style={inputStyle} />
          <textarea placeholder="Tell us about your project" rows={6} style={{ ...inputStyle, resize: "none" }}></textarea>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              padding: "1.25rem", 
              borderRadius: "16px", 
              background: "var(--foreground)", 
              color: "var(--background)", 
              border: "none", 
              fontWeight: 700, 
              fontSize: "1.1rem", 
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem"
            }}
          >
            Send Message <Send size={20} />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "1.25rem",
  borderRadius: "16px",
  background: "rgba(0,0,0,0.03)",
  border: "1px solid rgba(0,0,0,0.08)",
  color: "var(--foreground)",
  fontSize: "1rem",
  outline: "none",
  transition: "all 0.3s ease"
};
