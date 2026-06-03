const patents = [
  {
    title:
      "Hydro-Electric Energy Conversion System",
    status:
      "Filed – Indian Patent Office (2023)",
  },
  {
    title:
      "Wind-Electric Hybrid System for EVs",
    status:
      "Filed – Under Process",
  },
];

const Patents = ({ darkMode }) => {
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
        Patents & Innovation
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {patents.map((patent) => (
          <div
            key={patent.title}
            style={{
              background: darkMode
                ? "#0f172a"
                : "#ffffff",
              width: "360px",
              padding: "30px",
              borderRadius: "24px",
              border:
                "1px solid rgba(59,130,246,0.15)",
              boxShadow:
                "0 5px 20px rgba(0,0,0,0.08)",
              transition: "0.3s ease",
              cursor: "pointer",
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
                marginBottom: "14px",
                lineHeight: "1.5",
              }}
            >
              {patent.title}
            </h3>

            <p
              style={{
                color: darkMode
                  ? "#cbd5e1"
                  : "#475569",
              }}
            >
              {patent.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Patents;