import React, { useEffect, useState } from "react";
import axios from "../api";

const Sentbox = () => {
  const [sentMessages, setSentMessages] = useState([]);

  useEffect(() => {
    const fetchSent = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("/message/sent", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSentMessages(res.data);
      } catch (err) {
        console.error("Failed to load sent messages", err);
      }
    };

    fetchSent();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📤 Sent Messages</h2>

      {sentMessages.length === 0 ? (
        <p style={styles.empty}>You haven’t sent any messages yet.</p>
      ) : (
        <div style={styles.messageList}>
          {sentMessages.map((msg, idx) => (
            <div key={idx} style={styles.card}>
              <div style={styles.header}>
                <strong>To:</strong> {msg.to?.name || "Unknown"}
                <span style={styles.email}>({msg.to?.email})</span>
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

export default Sentbox;
