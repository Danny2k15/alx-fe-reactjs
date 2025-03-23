function Services() {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Verdana, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ color: "#007bff", marginBottom: "20px" }}>Our Services</h1>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li style={{ marginBottom: "10px", color: "#333" }}>
          Technology Consulting
        </li>
        <li style={{ marginBottom: "10px", color: "#333" }}>Market Analysis</li>
        <li style={{ marginBottom: "10px", color: "#333" }}>
          Product Development
        </li>
        <li style={{ marginBottom: "10px", color: "#333" }}>
          Software Development
        </li>
        <li style={{ marginBottom: "10px", color: "#333" }}>UI/UX Design</li>
      </ul>
      <p style={{ marginTop: "20px", fontStyle: "italic", color: "#666" }}>
        We are dedicated to providing high-quality services to meet your
        business needs.
      </p>
    </div>
  );
}

export default Services;
