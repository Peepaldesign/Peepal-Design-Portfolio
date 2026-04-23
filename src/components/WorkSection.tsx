"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { projects, Project } from "@/data/projects";

export default function WorkSection() {
  const [filter, setFilter] = useState<string>('All');
  const [activePrototype, setActivePrototype] = useState<Project | null>(null);

  // Dynamically extract categories from project data
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = projects.filter(p => 
    filter === 'All' ? true : p.category === filter
  );

  // We keep the Bento layout only for the "All" tab. 
  // For specific industry tabs, we use a uniform small-card grid.
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
              {tab === 'All' ? 'All Work' : tab}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Bento Grid Layout */}
      <motion.div 
        layout
        className="projects-grid"
        style={{ 
          display: "grid", 
          gridAutoFlow: "dense",
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

      <style jsx>{`
        .projects-grid {
          grid-template-columns: repeat(1, 1fr);
          grid-auto-rows: minmax(300px, auto);
        }
        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 300px;
          }
        }
        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 300px;
          }
        }
      `}</style>

      {/* Figma Prototype Modal */}
      <AnimatePresence>
        {activePrototype && (
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
                  right: "1.5rem", 
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

function ProjectCard({ project, isForcedSmall, onVisitPrototype }: { project: Project, isForcedSmall: boolean, onVisitPrototype: () => void }) {
  const isLarge = project.size === 'large' && !isForcedSmall;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      style={{
        gridColumn: isLarge ? "span 2" : "span 1",
        gridRow: isLarge ? "span 2" : "span 1",
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
        <h3 style={{ fontSize: isLarge ? "2rem" : "1.25rem", fontWeight: 700, marginBottom: "0.5rem", color: "#ffffff" }}>{project.title}</h3>
        <p style={{ 
          fontSize: "0.95rem", 
          color: "rgba(255,255,255,0.75)", 
          lineHeight: 1.5, 
          marginBottom: project.prototypeUrl ? "1.5rem" : 0,
          display: "-webkit-box",
          WebkitLineClamp: isLarge ? 3 : 2,
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
            Visit Prototype <ExternalLink size={14} />
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
