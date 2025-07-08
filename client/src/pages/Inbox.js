import React, { useEffect, useState } from "react";
import axios from "../api";

const Inbox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchInbox = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("/message/inbox", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessages(res.data);
      } catch (err) {
        console.error("Failed to load inbox", err);
      }
    };

    fetchInbox();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📥 Your Inbox</h2>

      {messages.length === 0 ? (
        <p style={styles.empty}>No messages yet.</p>
      ) : (
        <div style={styles.messageList}>
          {messages.map((msg, idx) => (
            <div key={idx} style={styles.card}>
              <div style={styles.header}>
                <strong>{msg.from?.name || "Unknown"}</strong>
                <span style={styles.email}>({msg.from?.email})</span>
              </div>
              <p style={styles.message}>{msg.text}</p>
              <div style={styles.timestamp}>
                {new Date(msg.timestamp).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    maxWidth: "800px",
    margin: "auto",
  },
  heading: {
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "30px",
  },
  empty: {
    textAlign: "center",
    fontStyle: "italic",
    color: "#777",
  },
  messageList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  card: {
    background: "#fefefe",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  header: {
    marginBottom: "8px",
    fontSize: "16px",
    color: "#2c3e50",
  },
  email: {
    fontSize: "14px",
    color: "#666",
    marginLeft: "5px",
  },
  message: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "10px",
  },
  timestamp: {
    fontSize: "13px",
    color: "#888",
    textAlign: "right",
  },
};

export default Inbox;
