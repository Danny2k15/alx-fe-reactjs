function Home() {
  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center",
        backgroundColor: "#e0f7fa",
        borderRadius: "8px",
      }}
    >
      <h1
        style={{
          color: "#2e7d32",
          fontSize: "28px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Welcome to Our Company
      </h1>
      <p style={{ fontSize: "18px", color: "#424242", lineHeight: "1.6" }}>
        We are dedicated to delivering excellence in all our services, with a
        focus on innovation and customer satisfaction.
      </p>
      <button
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          backgroundColor: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Learn More
      </button>
    </div>
  );
}

export default Home;
