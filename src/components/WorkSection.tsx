"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { projects, Project } from "@/data/projects";

export default function WorkSection() {
  const [filter, setFilter] = useState<'All' | 'UX Design' | 'Research'>('All');
  const [activePrototype, setActivePrototype] = useState<Project | null>(null);

  const filteredProjects = projects.filter(p => 
    filter === 'All' ? true : p.category === filter
  );

  const isForcedSmall = filter !== 'All';

  return (
    <section id="work" style={{ width: "100%", maxWidth: "1200px", margin: "10rem auto 0", padding: "0 2rem" }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "left", marginBottom: "4rem" }}
      >
        <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1.5rem" }}>Our Work</h2>
        
        {/* Tabs Component */}
        <div className="glass" style={{ 
          display: "inline-flex", 
          padding: "0.5rem", 
          borderRadius: "16px", 
          gap: "0.5rem",
          marginBottom: "3rem"
        }}>
          {['All', 'UX Design', 'Research'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab as any)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "12px",
                border: "none",
                background: filter === tab ? "var(--foreground)" : "transparent",
                color: filter === tab ? "var(--background)" : "var(--foreground)",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontSize: "0.9rem"
              }}
            >
              {tab === 'All' ? 'All Work' : tab}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Bento Grid Layout */}
      <motion.div 
        layout
        style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gridAutoRows: "300px",
          gap: "1.5rem" 
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isForcedSmall={isForcedSmall}
              onVisitPrototype={() => setActivePrototype(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Figma Prototype Modal */}
      <AnimatePresence>
        {activePrototype && activePrototype.prototypeUrl && (
          <div style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            zIndex: 10001, 
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
              style={{ 
                position: "absolute", 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                background: "rgba(0,0,0,0.8)", 
                backdropFilter: "blur(12px)" 
              }} 
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              style={{ 
                background: "white", 
                width: "95%", 
                maxWidth: "1200px", 
                height: "90vh",
                borderRadius: "32px", 
                position: "relative", 
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div style={{ 
                padding: "1.5rem 2rem", 
                borderBottom: "1px solid rgba(0,0,0,0.05)", 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                background: "white",
                zIndex: 10
              }}>
                <div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "black" }}>{activePrototype.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>Figma Prototype</p>
                </div>
                <button 
                  onClick={() => setActivePrototype(null)}
                  style={{ 
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
              </div>

              <div style={{ flexGrow: 1, background: "#f3f4f6", position: "relative" }}>
                <iframe 
                  style={{ border: "none", width: "100%", height: "100%" }} 
                  src={activePrototype.prototypeUrl} 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 768px) {
          div[style*="grid"] {
            gridTemplateColumns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, onVisitPrototype, isForcedSmall }: { project: Project, onVisitPrototype: () => void, isForcedSmall: boolean }) {
  const isLarge = !isForcedSmall && project.size === 'large';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="glass"
      style={{
        gridColumn: isLarge ? "span 2" : "span 1",
        gridRow: isLarge ? "span 2" : "span 1",
        borderRadius: "24px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer"
      }}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
      />
      <div style={{ 
        position: "absolute", 
        bottom: 0, 
        left: 0, 
        right: 0, 
        padding: "2rem", 
        background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "60%"
      }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem" }}>
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
        <h3 style={{ fontSize: isLarge ? "2rem" : "1.25rem", fontWeight: 700, marginBottom: "0.5rem", color: "#ffffff" }}>{project.title}</h3>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.5, marginBottom: project.prototypeUrl ? "1.5rem" : 0 }}>{project.description}</p>
        
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
              backdropFilter: "blur(10px)"
            }}
          >
            Visit Prototype <ExternalLink size={14} />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
