// src/pages/About.js
import React from "react";

const About = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>About DevConnect 🧩</h1>
      <p>
        <strong>DevConnect</strong> is a full-stack developer collaboration platform built with the MERN stack.
        It enables developers to:
      </p>
      <ul style={{ lineHeight: "1.8" }}>
        <li>📝 Create and update their developer profiles</li>
        <li>🌍 Browse and search fellow developers by skills</li>
        <li>💬 Send and receive messages securely</li>
        <li>📥 Track communication via inbox and sentbox</li>
      </ul>
      <p>
        This project is built for learning, networking, and growing as a community.
        If you're a developer looking to collaborate, you're in the right place!
      </p>
    </div>
  );
};

export default About;
