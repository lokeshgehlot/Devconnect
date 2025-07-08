// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to <span style={styles.brand}>DevConnect</span> 👋</h1>
      <p style={styles.text}>
        A platform for developers to connect, collaborate, and grow together.
        Whether you're a beginner or a pro, DevConnect is your space to explore and contribute.
      </p>
      <div style={styles.buttons}>
        <Link to="/register" style={styles.button}>Get Started</Link>
        <Link to="/developers" style={{ ...styles.button, backgroundColor: "#555" }}>Explore Developers</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  brand: {
    color: "#3498db",
  },
  text: {
    fontSize: "18px",
    maxWidth: "600px",
    margin: "20px auto",
    lineHeight: 1.6,
  },
  buttons: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    textDecoration: "none",
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "#fff",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};

export default Home;
