const Footer = ({ darkMode }) => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "30px",
        borderTop:
          "1px solid rgba(59,130,246,0.15)",
        background: darkMode
          ? "#0f172a"
          : "#ffffff",
      }}
    >
      <p
        style={{
          color: darkMode
            ? "#94a3b8"
            : "#475569",
          margin: 0,
        }}
      >
        © 2026 Arth Saxena • Built with React
      </p>
    </footer>
  );
};

export default Footer;