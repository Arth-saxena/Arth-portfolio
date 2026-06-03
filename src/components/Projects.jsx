const projects = [
  {
    title: "Online Test System",
    tools: "Java, JDBC, MySQL",
    desc:
      "A Java-based online test system allowing students to take tests digitally with dynamic question management.",
  },
  {
    title: "Eco Tracker",
    tools:
      "Node.js, Express.js, React.js, JSON",
    desc:
      "A carbon-footprint tracking web application with AI-powered suggestions.",
  },
  {
    title: "Recipe Finder",
    tools: "HTML, CSS, Python",
    desc:
      "A recipe recommendation app based on ingredients or time of day.",
  },
];

const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 20px",
        background: darkMode
          ? "#071225"
          : "#e2e8f0",
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
              background: darkMode
                ? "#0f172a"
                : "#ffffff",
              width: "340px",
              padding: "30px",
              borderRadius: "24px",
              cursor: "pointer",
              transition: "0.3s ease",
              border:
                "1px solid rgba(59,130,246,0.15)",
              boxShadow:
                "0 5px 20px rgba(0,0,0,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(59,130,246,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 5px 20px rgba(0,0,0,0.08)";
            }}
          >
            <h3
              style={{
                color: "#60a5fa",
                marginBottom: "15px",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                color: darkMode
                  ? "#cbd5e1"
                  : "#475569",
                lineHeight: "1.7",
              }}
            >
              {project.desc}
            </p>

            <p
              style={{
                marginTop: "20px",
                fontWeight: "600",
              }}
            >
              Tools: {project.tools}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;