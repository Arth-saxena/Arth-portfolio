import React from "react";

const projects = [
  {
    title: "Oracle APEX Management Portal",
    tools: ["Oracle APEX", "PL/SQL", "Oracle Cloud", "SQL"],
    desc: "An enterprise web app featuring interactive reports, dynamic dashboards, and automated database workflows.",
    link: "https://oracleapex.com/ords/r/arth_apex_worrkspace/ticketing-system/login",
    demoCredentials: "Demo Login — UserName: Guest | Pass: Guest123", 
  },
  {
    title: "File Doctor",
    tools: ["Express.js", "Python"],
    desc: "A Document, Presentation Syntax Analyzer to find Font/Style Errors.",
    link: "https://your-file-doctor.vercel.app",
  },
  {
    title: "Online Test System",
    tools: ["Java", "JDBC", "MySQL"],
    desc: "A Java-based online test system allowing students to take tests digitally with dynamic question management.",

  },
  {
    title: "Eco Tracker",
    tools: ["Node.js", "Express.js", "React.js", "JSON"],
    desc: "A carbon-footprint tracking web application with AI-powered suggestions.",

  },
  {
    title: "Recipe Finder",
    tools: ["HTML", "CSS", "Python"],
    desc: "A recipe recommendation app based on ingredients or time of day.",

  },
];

const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 20px",
        background: darkMode ? "#071225" : "#e2e8f0",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#60a5fa",
          marginBottom: "50px",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              background: darkMode ? "#0f172a" : "#ffffff",
              width: "340px",
              padding: "30px",
              borderRadius: "24px",
              transition: "0.3s ease",
              border: "1px solid rgba(59,130,246,0.15)",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(59,130,246,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 5px 20px rgba(0,0,0,0.08)";
            }}
          >
            <div>
              <h3
                style={{
                  color: "#60a5fa",
                  marginBottom: "15px",
                  fontSize: "22px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: darkMode ? "#cbd5e1" : "#475569",
                  lineHeight: "1.7",
                  marginBottom: "15px",
                }}
              >
                {project.desc}
              </p>

              {/* Show Guest Login Info if APEX App requires login */}
              {project.demoCredentials && (
                <p
                  style={{
                    fontSize: "12px",
                    background: darkMode ? "#1e293b" : "#f1f5f9",
                    color: "#60a5fa",
                    padding: "6px 10px",
                    borderRadius: "8px",
                    marginBottom: "15px",
                  }}
                >
                  💡 {project.demoCredentials}
                </p>
              )}

              {/* Tech Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "25px",
                }}
              >
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      background: darkMode ? "#1e293b" : "#dbeafe",
                      color: darkMode ? "#93c5fd" : "#1e40af",
                      padding: "4px 12px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    background: "#3b82f6",
                    color: "#ffffff",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Live Demo ↗
                </a>
              )}

              {project.videoLink && (
                <a
                  href={project.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textAlign: "center",
                    border: "1px solid #3b82f6",
                    color: darkMode ? "#93c5fd" : "#2563eb",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Video 🎥
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;