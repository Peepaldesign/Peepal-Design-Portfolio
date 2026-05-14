"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ExternalLink, Maximize } from "lucide-react";
import { projects, Project } from "@/data/projects";

export default function WorkSection() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [customTabIndex, setCustomTabIndex] = useState(0);

  // Lock body scroll when panel is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setCustomTabIndex(0); // Reset tab when opening new project
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = projects.filter(p => 
    filter === 'All' ? true : p.category === filter
  );

  return (
    <section id="work" style={{ width: "100%", maxWidth: "1200px", margin: "4rem auto 0", padding: "0 2rem" }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "left", marginBottom: "4rem" }}
      >
        <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1.5rem" }}>Our Work</h2>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "3rem" }}>
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
            gridAutoRows: "350px",
            gap: "1.5rem" 
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Dribbble-style Full-Screen Slide-Up Detail */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(null)}
              style={{
                position: "fixed",
                top: 0, left: 0, width: "100vw", height: "100vh",
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(8px)",
                zIndex: 1100
              }}
            />

            {/* Full-screen panel */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              style={{
                position: "fixed",
                top: "40px",
                left: 0,
                width: "100vw",
                height: "calc(100vh - 40px)",
                background: "#ffffff",
                borderRadius: "24px 24px 0 0",
                zIndex: 1200,
                overflowY: "auto",
                overflowX: "hidden"
              }}
            >
              {/* Sticky top bar */}
              <div style={{
                position: "sticky",
                top: 0,
                zIndex: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem 2rem",
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(16px)",
                borderBottom: "1px solid #f0f0f0",
                borderRadius: "24px 24px 0 0"
              }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111" }}>
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    width: "36px", height: "36px",
                    borderRadius: "50%",
                    background: "#f3f4f6",
                    border: "none",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", color: "#111"
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Sticky Hero Image */}
              <div style={{
                position: "sticky",
                top: "52px",
                zIndex: 1,
                width: "100%",
                height: "70vh",
                overflow: "hidden"
              }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {/* Subtle dark overlay for readability */}
                <div style={{
                  position: "absolute",
                  bottom: 0, left: 0, width: "100%", height: "60%",
                  background: "linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0.4) 40%, transparent)"
                }} />
              </div>

              {/* Content that overlaps and scrolls over the image */}
              <div style={{
                position: "relative",
                zIndex: 5,
                marginTop: "-35vh",
                background: "#ffffff",
                borderRadius: "28px 28px 0 0",
                minHeight: "60vh"
              }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem 2rem" }}>
                  <h1 style={{
                    fontSize: "2.75rem",
                    fontWeight: 800,
                    color: "#111",
                    lineHeight: 1.15,
                    marginBottom: "1.5rem"
                  }}>
                    {selectedProject.title}
                  </h1>

                  <div style={{ display: "flex", gap: "0.6rem", marginBottom: "2rem", flexWrap: "wrap" }}>
                    {selectedProject.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: "0.8rem",
                        background: "#f3f4f6",
                        padding: "0.4rem 1rem",
                        borderRadius: "100px",
                        border: "1px solid #e5e7eb",
                        color: "#6b7280",
                        fontWeight: 600
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ color: "#4b5563", lineHeight: 1.9, fontSize: "1.1rem" }}>
                    <h4 style={{ color: "#111", marginBottom: "0.75rem", fontWeight: 700, fontSize: "1.2rem" }}>Project Context</h4>
                    {selectedProject.longDescription ? (
                      <p>{selectedProject.longDescription}</p>
                    ) : (
                      <p>{selectedProject.description}</p>
                    )}
                  </div>
                </div>

              {/* Action Tabs & Iframe */}
              <div style={{
                maxWidth: "1100px",
                margin: "0 auto",
                padding: "0 2rem 4rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem"
              }}>
                {(() => {
                  const projectTabs = selectedProject.customButtons || [
                    ...(selectedProject.caseStudyUrl ? [{ label: "Case Study", url: selectedProject.caseStudyUrl }] : []),
                    ...(selectedProject.prototypeUrl ? [{ label: "Prototype", url: selectedProject.prototypeUrl }] : [])
                  ];

                  if (projectTabs.length === 0) return null;

                  return (
                    <div>
                      {/* Tabs */}
                      <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginBottom: "1.5rem"
                      }}>
                        {projectTabs.map((btn, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCustomTabIndex(idx)}
                            style={{
                              padding: "0.75rem 1.25rem",
                              borderRadius: "12px",
                              border: customTabIndex === idx ? "none" : "1.5px solid #e5e7eb",
                              background: customTabIndex === idx ? "#111" : "#fff",
                              color: customTabIndex === idx ? "#fff" : "#555",
                              fontSize: "0.85rem",
                              fontWeight: 700,
                              cursor: "pointer",
                              transition: "all 0.2s ease"
                            }}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>

                      {/* Inline Embedded Iframe */}
                      <div style={{
                        width: "100%",
                        height: "85vh",
                        border: "1px solid #e5e7eb",
                        background: "#f9fafb",
                        position: "relative"
                      }}>
                        <iframe
                          key={customTabIndex}
                          src={projectTabs[customTabIndex]?.url}
                          style={{ width: "100%", height: "100%", border: "none" }}
                          allow="fullscreen; clipboard-read; clipboard-write"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  );
                })()}
              </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}

function ProjectCard({ project, onClick }: { project: Project, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        gridColumn: "span 1",
        gridRow: "span 1",
        position: "relative",
        borderRadius: "24px",
        overflow: "hidden",
        cursor: "pointer",
        background: "#f3f4f6"
      }}
      onClick={onClick}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
        className="card-image"
      />
      
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, width: "100%", height: "100%",
        background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
        padding: "2rem",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
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
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>{project.description}</p>
      </div>

      <style jsx>{`
        div:hover .card-image {
          transform: scale(1.05);
        }
      `}</style>
    </motion.div>
  );
}
