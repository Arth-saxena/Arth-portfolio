const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      style={{
        padding: "100px 20px",
        background: darkMode
          ? "#071225"
          : "#e2e8f0",
        transition: "0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            color: "#60a5fa",
            marginBottom: "20px",
          }}
        >
          About Me
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.9",
            color: darkMode
              ? "#cbd5e1"
              : "#334155",
          }}
        >
          I am an aspiring Software Engineer and
          Computer Science student passionate about
          building impactful applications and
          solving real-world problems through
          technology. I enjoy working with Java,
          Python, web development, and exploring
          intelligent systems that create meaningful
          user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;