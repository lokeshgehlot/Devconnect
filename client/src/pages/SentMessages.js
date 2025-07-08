import React, { useEffect, useState } from "react";
import axios from "../api";
import { useNavigate } from "react-router-dom";

const SentMessages = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSentMessages = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("/message/sent", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessages(res.data);
      } catch (err) {
        console.error("Failed to load sent messages", err);
      }
    };

    fetchSentMessages();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📤 Sent Messages</h2>

      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "6px 12px",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        🔙 Back
      </button>

      {messages.length === 0 ? (
        <p>No sent messages yet.</p>
      ) : (
        <ul>
          {messages.map((msg, idx) => (
            <li
              key={idx}
              style={{
                borderBottom: "1px solid #ccc",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <p>
                <strong>To:</strong> {msg.to?.name || "Unknown"} ({msg.to?.email})
              </p>
              <p>
                <strong>Message:</strong> {msg.text}
              </p>
              <p style={{ fontSize: "0.9em", color: "#555" }}>
                {new Date(msg.timestamp).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SentMessages;
