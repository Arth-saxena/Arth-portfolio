import profilePic from "../assets/profile.jpeg";
import resume from "../assets/resume.pdf";

const Hero = ({ darkMode }) => {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <div>
        <img
          src={profilePic}
          alt="Arth Saxena"
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #3b82f6",
            boxShadow:
              "0 0 45px rgba(59,130,246,0.35)",
            marginBottom: "25px",
          }}
        />

        <h1
          style={{
            fontSize:
              window.innerWidth < 768
                ? "42px"
                : "64px",
            marginBottom: "10px",
            fontWeight: "700",
          }}
        >
          Arth Saxena
        </h1>

        <h2
          style={{
            color: "#60a5fa",
            fontSize: "28px",
            marginBottom: "18px",
          }}
        >
          CSE Student
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "auto",
            lineHeight: "1.8",
            color: darkMode
              ? "#cbd5e1"
              : "#475569",
            marginBottom: "35px",
            fontSize: "18px",
          }}
        >
          Aspiring Software Engineer passionate
          about building impactful applications,
          solving problems, and creating
          technology-driven solutions.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/Arth-saxena"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#2563eb",
              color: "white",
              padding: "14px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/arth-saxena-b73263386"
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid #3b82f6",
              color: darkMode
                ? "white"
                : "#0f172a",
              padding: "14px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            LinkedIn
          </a>

          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid #60a5fa",
              color: "#60a5fa",
              padding: "14px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;