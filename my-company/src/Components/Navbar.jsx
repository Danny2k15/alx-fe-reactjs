
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#f0f0f0",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{}}>Your Logo/Brand</div>

      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
        }}
      >
        <li style={{ marginRight: "15px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ marginRight: "15px" }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ marginRight: "15px" }}>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
