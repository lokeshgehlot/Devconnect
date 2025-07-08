// src/pages/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>👋 Welcome, {user?.name || "Developer"}!</h2>
      <p style={styles.subheading}>This is your personal DevConnect dashboard.</p>

      <div style={styles.cardContainer}>
        <Link to="/profile" style={styles.card}>
          <h3>👤 My Profile</h3>
          <p>Update your bio, skills, and links.</p>
        </Link>
        <Link to="/developers" style={styles.card}>
          <h3>🌐 Browse Developers</h3>
          <p>Find and connect with others.</p>
        </Link>
        <Link to="/inbox" style={styles.card}>
          <h3>📥 Inbox</h3>
          <p>See messages you've received.</p>
        </Link>
        <Link to="/sent" style={styles.card}>
          <h3>📤 Sentbox</h3>
          <p>Review messages you've sent.</p>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "30px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    width: "220px",
    padding: "20px",
    background: "#f4f4f4",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#333",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease-in-out",
  },
};

export default Dashboard;
