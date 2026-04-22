"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Palette, GraduationCap, X, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "research",
    icon: <Search size={40} strokeWidth={1.5} />,
    title: "User Research",
    shortDesc: "Evidence-based insights to drive design decisions and validate product market fit.",
    fullDesc: "Our research-first approach uncovers deep behavioral patterns and hidden user needs. We help you move from assumptions to certainty with a comprehensive suite of methodologies.",
    features: [
      "Usability Testing & Validation",
      "Field Ethnography & Behavioral Studies",
      "Eye Tracking & Visual Hierarchy Analysis",
      "Expert UX Audits & Benchmarking",
      "International Cross-Cultural Research"
    ]
  },
  {
    id: "design",
    icon: <Palette size={40} strokeWidth={1.5} />,
    title: "UX Design",
    shortDesc: "Scalable, innovative design solutions for complex systems across diverse industries.",
    fullDesc: "We create meaningful digital experiences that balance business goals with human needs. Our design team specializes in enterprise-grade complexity and startup-level innovation.",
    features: [
      "End-to-End UI/UX Design Systems",
      "Fintech, Healthcare & B2B Specialization",
      "Rapid Prototyping & Iterative Design",
      "Accessible & Inclusive Design Architecture",
      "Product Strategy & Vision Casting"
    ]
  },
  {
    id: "training",
    icon: <GraduationCap size={40} strokeWidth={1.5} />,
    title: "UX Training",
    shortDesc: "Official international UX-PM certification program for professionals and teams.",
    fullDesc: "As the official partner of the UX Alliance, we provide globally recognized certification that empowers your team to lead with a customer-centric mindset.",
    features: [
      "UX-PM Level 1: Adopting UX Mindset",
      "UX-PM Level 2: Executing UX Projects",
      "UX-PM Level 3: Leading UX Strategy",
      "Corporate Workshops & Team Training",
      "International Certification Exams"
    ]
  }
];

export default function ServicesSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedService = services.find(s => s.id === selectedId);

  return (
    <section id="services" style={{ width: "100%", maxWidth: "1200px", margin: "10rem auto 0", padding: "0 2rem" }}>
      <div style={{ marginBottom: "5rem", textAlign: "left" }}>
        <span style={{ color: "var(--primary)", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.8rem" }}>Capabilities</span>
        <h2 style={{ fontSize: "3.5rem", fontWeight: 700, marginTop: "1rem" }}>Our Core Services</h2>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
        gap: "2rem" 
      }}>
        {services.map((service, i) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedId(service.id)}
            style={{ 
              padding: "3rem", 
              borderRadius: "32px", 
              border: "1px solid rgba(0,0,0,0.05)",
              background: "rgba(0,0,0,0.015)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              height: "100%"
            }}
            whileHover={{ 
              borderColor: "var(--primary)", 
              background: "#ffffff", 
              boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
              y: -5
            }}
          >
            <div style={{ color: "var(--primary)", marginBottom: "2rem" }}>{service.icon}</div>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "1rem" }}>{service.title}</h3>
            <p style={{ color: "#4b5563", lineHeight: 1.7, fontSize: "1.1rem", marginBottom: "2rem", flexGrow: 1 }}>{service.shortDesc}</p>
            <span style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              Learn more <span>→</span>
            </span>
          </motion.div>
        ))}
      </div>

      {/* Modal / Popup */}
      <AnimatePresence>
        {selectedId && selectedService && (
          <div style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            zIndex: 1000, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            padding: "2rem" 
          }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              style={{ 
                position: "absolute", 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                background: "rgba(0,0,0,0.6)", 
                backdropFilter: "blur(8px)" 
              }} 
            />
            
            <motion.div 
              layoutId={selectedId}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{ 
                background: "white", 
                width: "100%", 
                maxWidth: "700px", 
                borderRadius: "32px", 
                position: "relative", 
                padding: "4rem", 
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
              }}
            >
              <button 
                onClick={() => setSelectedId(null)}
                style={{ 
                  position: "absolute", 
                  top: "1.5rem", 
                  right: "1.5rem", 
                  background: "rgba(0,0,0,0.05)", 
                  border: "none", 
                  borderRadius: "100px", 
                  padding: "0.5rem", 
                  cursor: "pointer",
                  color: "#6b7280"
                }}
              >
                <X size={24} />
              </button>

              <div style={{ color: "var(--primary)", marginBottom: "2rem" }}>{selectedService.icon}</div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem", color: "black" }}>{selectedService.title}</h2>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.6, color: "#4b5563", marginBottom: "3rem" }}>{selectedService.fullDesc}</p>
              
              <div style={{ display: "grid", gap: "1rem" }}>
                {selectedService.features.map((feature, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <CheckCircle2 size={20} color="var(--primary)" />
                    <span style={{ fontSize: "1.1rem", color: "#1f2937", fontWeight: 500 }}>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setSelectedId(null)}
                style={{ 
                  marginTop: "4rem", 
                  width: "100%", 
                  padding: "1.25rem", 
                  borderRadius: "16px", 
                  background: "var(--foreground)", 
                  color: "var(--background)", 
                  border: "none", 
                  fontWeight: 700, 
                  fontSize: "1.1rem", 
                  cursor: "pointer" 
                }}
              >
                Close Details
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
