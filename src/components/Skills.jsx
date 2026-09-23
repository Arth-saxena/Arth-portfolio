import React from "react";

const skills = {
  Languages: ["C","Python","Java"],
  Frontend: ["React.js", "HTML", "CSS", "Tailwind CSS"],
  Database: [ "MySQL", "JDBC"],
  Cloud:["Oracle APEX Cloud"],
  Tools: ["Git", "GitHub", "VS Code","Gemini","Claude", "MS-Office","Photoshop","Filmora"],
  Design:["AutoCAD","Solidworks"],
};

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 20px",
        background: darkMode ? "#020617" : "#f8fafc",
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
        Skills
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            style={{
              background: darkMode ? "#0f172a" : "#ffffff",
              border: "1px solid rgba(59,130,246,0.15)",
              borderRadius: "24px",
              padding: "30px",
              width: "280px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                color: "#60a5fa",
                marginBottom: "20px",
              }}
            >
              {category}
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {items.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: darkMode ? "#1e293b" : "#dbeafe",
                    color: darkMode ? "#e2e8f0" : "#1e3a8a",
                    padding: "10px 16px",
                    borderRadius: "999px",
                    fontSize: "14px",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;