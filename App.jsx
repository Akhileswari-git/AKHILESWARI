export default function Portfolio() {
  const skills = ["Python", "SQL", "Tableau", "Power BI", "Data Visualization", "Machine Learning"];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      fontFamily: "Arial",
      padding: "40px"
    }}>
      <h1 style={{fontSize: "48px"}}>Akhileswari Mekala</h1>
      <h2 style={{color: "#38bdf8"}}>Aspiring Data Professional</h2>

      <p style={{maxWidth: "700px", lineHeight: "1.8"}}>
        B.Tech Computer Science (Data Science) student passionate about
        Data Analytics, Machine Learning, SQL, Python, and Data Visualization.
      </p>

      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Contact</h2>
      <p>Email: akhileswari.mekala@gmail.com</p>

      <a
        href="https://www.linkedin.com/in/akhileswari-mekala-342914290"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          background: "#38bdf8",
          color: "black",
          textDecoration: "none",
          borderRadius: "10px",
          fontWeight: "bold"
        }}
      >
        LinkedIn
      </a>
    </div>
  );
}
