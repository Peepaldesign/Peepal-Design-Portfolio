"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

const socialLinks = [
  { icon: <Linkedin size={20} />, href: "https://in.linkedin.com/company/peepaldesign", name: "LinkedIn" },
  { icon: <Twitter size={20} />, href: "https://twitter.com/peepaldesign", name: "Twitter" },
  { icon: <Instagram size={20} />, href: "https://www.instagram.com/peepal_design/", name: "Instagram" },
  { icon: <Facebook size={20} />, href: "https://www.facebook.com/peepaldesign", name: "Facebook" },
  { icon: <Youtube size={20} />, href: "https://www.youtube.com/@Peepaldesign", name: "YouTube" }
];

export default function Footer() {
  return (
    <footer style={{ 
      padding: "6rem 2rem 3rem", 
      background: "rgba(0,0,0,0.02)", 
      borderTop: "1px solid rgba(0,0,0,0.05)",
      marginTop: "5rem"
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        gap: "3rem" 
      }}>
        <img 
          src="https://peepaldesign.com/wp-content/uploads/2023/10/Logo3.png" 
          alt="Peepal Design" 
          style={{ height: "50px", objectFit: "contain", opacity: 0.8 }} 
        />
        
        <div style={{ display: "flex", gap: "2rem" }}>
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "var(--primary)" }}
              style={{ color: "#4b5563", transition: "color 0.3s ease" }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div style={{ textAlign: "center", borderTop: "1px solid rgba(0,0,0,0.05)", width: "100%", paddingTop: "2rem" }}>
          <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
            © {new Date().getFullYear()} Peepal Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
