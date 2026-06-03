const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        background: darkMode
          ? "#020617"
          : "#f8fafc",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          color: "#60a5fa",
          marginBottom: "25px",
        }}
      >
        Contact
      </h2>

      <p
        style={{
          fontSize: "18px",
          marginBottom: "10px",
        }}
      >
        saxenaarth123@gmail.com
      </p>

      <p
        style={{
          color: darkMode
            ? "#94a3b8"
            : "#475569",
          marginBottom: "35px",
        }}
      >
        Open to internships, collaborations,
        and software development opportunities.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
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
      </div>
    </section>
  );
};

export default Contact;