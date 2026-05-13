"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { projects, Project } from "@/data/projects";

export default function WorkSection() {
  const [filter, setFilter] = useState<string>('All');
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

      {/* Project Grid with Fade Animation */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ 
            display: "grid", 
            // Dynamic grid: Bento for 'All', 3-column minmax for others
            gridTemplateColumns: filter === 'All' 
              ? "repeat(auto-fill, minmax(300px, 1fr))" 
              : "repeat(auto-fill, minmax(min(100%, 350px), 1fr))",
            gridAutoRows: filter === 'All' ? "300px" : "300px",
            gap: "1.5rem" 
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isForcedSmall={isForcedSmall}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Details Dialog Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            width: "100vw", 
            height: "100vh", 
            zIndex: 1100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem"
          }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              style={{ position: "absolute", width: "100%", height: "100%", background: "rgba(0,0,0,0.8)", backdropFilter: "blur(12px)" }}
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ 
                position: "relative", 
                width: "100%",
                maxWidth: "800px",
                maxHeight: "85vh",
                background: "white", 
                borderRadius: "32px", 
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
              }}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                style={{ 
                  position: "absolute", 
                  top: "1.5rem", 
                  right: "1.5rem", 
                  zIndex: 10,
                  background: "#f3f4f6",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "black"
                }}
              >
                <X size={20} />
              </button>

              <div style={{ flex: 1, overflowY: "auto" }}>
                {/* Hero Image in Modal */}
                <div style={{ width: "100%", height: "300px", position: "relative" }}>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{ 
                    position: "absolute", 
                    bottom: 0, 
                    left: 0, 
                    width: "100%", 
                    height: "50%", 
                    background: "linear-gradient(to top, white, transparent)" 
                  }} />
                </div>

                <div style={{ padding: "0 3rem 3rem" }}>
                  <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1.5rem", color: "#111827", marginTop: "-2rem", position: "relative" }}>{selectedProject.title}</h2>
                  
                  <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
                    {selectedProject.tags.map(tag => (
                      <span key={tag} style={{ 
                        fontSize: "0.75rem", 
                        background: "#f3f4f6", 
                        padding: "0.4rem 1rem", 
                        borderRadius: "100px",
                        border: "1px solid #e5e7eb",
                        color: "#4b5563",
                        fontWeight: 600
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1.1rem" }}>
                    <h4 style={{ color: "#111827", marginBottom: "0.75rem", fontWeight: 700 }}>Project Context</h4>
                    {selectedProject.longDescription ? (
                      <p>{selectedProject.longDescription}</p>
                    ) : (
                      <>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                        </p>
                        <p style={{ marginTop: "1rem" }}>
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div style={{ 
                padding: "2rem 3rem", 
                borderTop: "1px solid #f3f4f6",
                display: "flex",
                gap: "1rem",
                background: "#fafafa"
              }}>
                {selectedProject.customButtons ? (
                  selectedProject.customButtons.map((btn, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveUrl(btn.url)}
                      style={{
                        flex: 1,
                        padding: "1rem",
                        borderRadius: "16px",
                        background: idx === 0 ? "var(--foreground)" : "white",
                        border: idx === 0 ? "none" : "2px solid #e5e7eb",
                        color: idx === 0 ? "var(--background)" : "#111827",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.75rem",
                        cursor: "pointer"
                      }}
                    >
                      {btn.label} <ExternalLink size={18} />
                    </motion.button>
                  ))
                ) : (
                  <>
                    {selectedProject.caseStudyUrl && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveUrl(selectedProject.caseStudyUrl!)}
                        style={{
                          flex: 1,
                          padding: "1rem",
                          borderRadius: "16px",
                          background: "var(--foreground)",
                          border: "none",
                          color: "var(--background)",
                          fontSize: "1rem",
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.75rem",
                          cursor: "pointer"
                        }}
                      >
                        View Case Study <ExternalLink size={18} />
                      </motion.button>
                    )}

                    {selectedProject.prototypeUrl && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveUrl(selectedProject.prototypeUrl!)}
                        style={{
                          flex: 1,
                          padding: "1rem",
                          borderRadius: "16px",
                          background: "white",
                          border: "2px solid #e5e7eb",
                          color: "#111827",
                          fontSize: "1rem",
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.75rem",
                          cursor: "pointer"
                        }}
                      >
                        Visit Prototype <ExternalLink size={18} />
                      </motion.button>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Figma Prototype Modal */}
      <AnimatePresence>
        {activeUrl && (
          <div style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            width: "100vw", 
            height: "100vh", 
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem"
          }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveUrl(null)}
              style={{ position: "absolute", width: "100%", height: "100%", background: "rgba(0,0,0,0.95)", backdropFilter: "blur(10px)" }}
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
                onClick={() => setActiveUrl(null)}
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
                src={activeUrl}
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

function ProjectCard({ project, isForcedSmall, onClick }: { project: Project, isForcedSmall: boolean, onClick: () => void }) {
  const isLarge = project.size === 'large' && !isForcedSmall;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        gridColumn: isLarge ? "span 2" : "span 1",
        gridRow: isLarge ? "span 2" : "span 1",
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
          display: "-webkit-box",
          WebkitLineClamp: isLarge ? 3 : 2,
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
