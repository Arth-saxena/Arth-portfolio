const Certifications = ({ darkMode }) => {
  return (
    <section
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
        Certifications
      </h2>

      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          background: darkMode
            ? "#0f172a"
            : "#ffffff",
          borderRadius: "24px",
          padding: "30px",
          border:
            "1px solid rgba(59,130,246,0.15)",
          boxShadow:
            "0 5px 20px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#60a5fa",
          }}
        >
          Graphic Design – Adobe
        </h3>

        <p
          style={{
            color: darkMode
              ? "#cbd5e1"
              : "#475569",
          }}
        >
          Coursera Certification
        </p>
      </div>
    </section>
  );
};

export default Certifications;