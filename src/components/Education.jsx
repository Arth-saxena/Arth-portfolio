const Education = ({ darkMode }) => {
  return (
    <section
      style={{
        padding: "100px 20px",
        background: darkMode
          ? "#020617"
          : "#f8fafc",
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
        Education
      </h2>

      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: darkMode
            ? "#0f172a"
            : "#ffffff",
          borderRadius: "24px",
          padding: "40px",
          textAlign: "center",
          border:
            "1px solid rgba(59,130,246,0.15)",
          boxShadow:
            "0 5px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h3
          style={{
            fontSize: "28px",
            marginBottom: "10px",
          }}
        >
          IMS Engineering College, Ghaziabad
        </h3>

        <p
          style={{
            color: darkMode
              ? "#cbd5e1"
              : "#475569",
          }}
        >
          B.Tech in Computer Science Engineering
        </p>

        <p style={{ marginTop: "10px" }}>
          2023 – 2027
        </p>

        <p>
          CGPA: <strong>8.30</strong>
        </p>
      </div>
    </section>
  );
};

export default Education;