"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies, CaseStudy } from "@/data/caseStudies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState<"User Research" | "UX Design">("UX Design");

  const filteredStudies = caseStudies.filter(study => study.category === activeTab);

  return (
    <main style={{ minHeight: "100vh", background: "var(--background)", paddingTop: "100px", display: "flex", flexDirection: "column" }}>
      <Navbar />
      
      <section style={{ width: "100%", maxWidth: "1200px", margin: "4rem auto", padding: "0 2rem", flex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "left", marginBottom: "4rem" }}
        >
          <h1 style={{ fontSize: "3.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Case Studies</h1>
          
          <div style={{ 
            display: "flex", 
            gap: "1rem",
            marginBottom: "3rem"
          }}>
            {["UX Design", "User Research"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "12px",
                  border: activeTab === tab ? "none" : "1px solid rgba(0,0,0,0.1)",
                  background: activeTab === tab ? "var(--foreground)" : "transparent",
                  color: activeTab === tab ? "var(--background)" : "var(--foreground)",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontSize: "0.95rem"
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ 
              display: "grid", 
              gap: "1.5rem",
            }}
            className="case-study-grid"
          >
            {filteredStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </motion.div>
        </AnimatePresence>

        <style jsx>{`
          .case-study-grid {
            grid-template-columns: repeat(1, 1fr);
          }
          @media (min-width: 768px) {
            .case-study-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              grid-auto-rows: 300px;
            }
          }
          @media (min-width: 1024px) {
            .case-study-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          .case-study-grid > div {
            height: 300px !important;
          }
        `}</style>
      </section>

      <Footer />
    </main>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "relative",
        borderRadius: "24px",
        overflow: "hidden",
        cursor: "pointer",
        background: "#f3f4f6"
      }}
    >
      <img 
        src={study.image} 
        alt={study.title} 
        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
        className="card-image"
      />
      
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        transition: "opacity 0.3s ease"
      }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ 
            fontSize: "0.7rem", 
            background: "rgba(255,255,255,0.1)", 
            padding: "0.25rem 0.75rem", 
            borderRadius: "100px",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "white"
          }}>
            {study.category}
          </span>
        </div>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {study.title}
        </h3>
      </div>

      <style jsx>{`
        div:hover .card-image {
          transform: scale(1.05);
        }
      `}</style>
    </motion.div>
  );
}
