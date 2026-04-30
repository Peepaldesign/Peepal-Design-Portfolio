"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { caseStudies, CaseStudy } from "@/data/caseStudies";

export default function CaseStudiesSection() {
  const [filter, setFilter] = useState<string>('All Case Studies');
  const [activePrototype, setActivePrototype] = useState<CaseStudy | null>(null);

  // Dynamically extract categories from case studies data
  const categories = ['All Case Studies', ...Array.from(new Set(caseStudies.map(p => p.category)))];

  const filteredProjects = caseStudies.filter(p => 
    filter === 'All Case Studies' ? true : p.category === filter
  );

  return (
    <section id="case-studies" style={{ width: "100%", maxWidth: "1200px", margin: "10rem auto 0", padding: "0 2rem" }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "left", marginBottom: "4rem" }}
      >
        <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1.5rem" }}>Case Studies</h2>
        <p style={{ fontSize: "1.1rem", color: "#4b5563", maxWidth: "600px" }}>
          Dive deep into our process, challenges, and the solutions we crafted for these transformative projects.
        </p>
      </motion.div>

      {/* Dynamic Industry Tabs */}
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap",
        gap: "0.75rem",
        marginBottom: "3rem"
      }}>
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "12px",
              border: filter === tab ? "none" : "1px solid rgba(0,0,0,0.1)",
              background: filter === tab ? "var(--foreground)" : "transparent",
              color: filter === tab ? "var(--background)" : "var(--foreground)",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "0.9rem"
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 350px), 1fr))",
            gap: "1.5rem" 
          }}
          className="case-studies-grid"
        >
          {filteredProjects.map((project) => (
            <CaseStudyCard 
              key={project.id} 
              project={project} 
              onVisitPrototype={() => setActivePrototype(project)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

        <style jsx>{`
          @media (min-width: 768px) {
            .case-studies-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (min-width: 1024px) {
            .case-studies-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          
          /* Ensure uniform height for category grid */
          .case-studies-grid > div {
            height: 300px !important;
          }

          /* Compact text for smaller category cards */
          .case-studies-grid h3 {
            font-size: 1.15rem !important;
          }
          .case-studies-grid p {
            font-size: 0.85rem !important;
            -webkit-line-clamp: 2 !important;
          }
        `}</style>

      {/* Figma Prototype Modal */}
      <AnimatePresence>
        {activePrototype && activePrototype.prototypeUrl && (
          <div style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            width: "100vw", 
            height: "100vh", 
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
              onClick={() => setActivePrototype(null)}
              style={{ position: "absolute", width: "100%", height: "100%", background: "rgba(0,0,0,0.9)", backdropFilter: "blur(10px)" }}
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{ 
                position: "relative", 
                width: "95vw", 
                height: "90vh", 
                background: "black", 
                borderRadius: "24px", 
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
              }}
            >
              <button 
                onClick={() => setActivePrototype(null)}
                style={{ 
                  position: "absolute", 
                  top: "1.5rem", 
                  left: "1.5rem", 
                  zIndex: 10,
                  background: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                <X size={24} />
              </button>
              
              <iframe 
                src={activePrototype.prototypeUrl}
                style={{ width: "100%", height: "100%", border: "none" }}
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CaseStudyCard({ project, onVisitPrototype }: { project: CaseStudy, onVisitPrototype: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        position: "relative",
        borderRadius: "24px",
        overflow: "hidden",
        cursor: "pointer",
        background: "#f3f4f6"
      }}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
        className="card-image"
      />
      
      {/* Overlay */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        transition: "opacity 0.3s ease"
      }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
          {project.tags.map(tag => (
            <span key={tag} style={{ 
              fontSize: "0.7rem", 
              background: "rgba(255,255,255,0.1)", 
              padding: "0.25rem 0.75rem", 
              borderRadius: "100px",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "white"
            }}>
              {tag}
            </span>
          ))}
        </div>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem", color: "#ffffff" }}>{project.title}</h3>
        <p style={{ 
          fontSize: "0.95rem", 
          color: "rgba(255,255,255,0.75)", 
          lineHeight: 1.5, 
          marginBottom: project.prototypeUrl ? "1.5rem" : 0,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>{project.description}</p>
        
        {project.prototypeUrl && (
          <motion.button
            whileHover={{ scale: 1.05, background: "var(--primary)" }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onVisitPrototype();
            }}
            style={{
              alignSelf: "flex-start",
              padding: "0.6rem 1.2rem",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              fontSize: "0.85rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
              backdropFilter: "blur(8px)"
            }}
          >
            View Case Study <ExternalLink size={14} />
          </motion.button>
        )}
      </div>

      <style jsx>{`
        div:hover .card-image {
          transform: scale(1.05);
        }
      `}</style>
    </motion.div>
  );
}
