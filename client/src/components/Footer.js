// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#333", color: "#fff", padding: "10px 20px", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} DevConnect. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
