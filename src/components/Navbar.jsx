const Navbar = ({
  darkMode,
  setDarkMode,
}) => {
  const navStyle = {
    color: darkMode ? "white" : "#0f172a",
    textDecoration: "none",
    fontWeight: "500",
    transition: "0.3s",
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(12px)",
        background: darkMode
          ? "rgba(15,23,42,0.85)"
          : "rgba(255,255,255,0.85)",
        borderBottom:
          "1px solid rgba(59,130,246,0.2)",
        padding: "18px 50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <h1
          style={{
            color: "#60a5fa",
            fontSize: "28px",
            fontWeight: "700",
            margin: 0,
          }}
        >
          Arth Saxena
        </h1>

        <div
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {["about", "skills", "projects", "contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                style={navStyle}
                onMouseEnter={(e) =>
                  (e.target.style.color =
                    "#60a5fa")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    darkMode
                      ? "white"
                      : "#0f172a")
                }
              >
                {item.charAt(0).toUpperCase() +
                  item.slice(1)}
              </a>
            )
          )}

          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            style={{
              border: "none",
              background: "transparent",
              fontSize: "22px",
              cursor: "pointer",
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;