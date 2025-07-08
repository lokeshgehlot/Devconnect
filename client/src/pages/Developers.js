import React, { useEffect, useState } from "react";
import axios from "../api";
import { Link } from "react-router-dom";

const Developers = () => {
  const [devs, setDevs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchDevs = async () => {
      try {
        const res = await axios.get("/profile/all");
        setDevs(res.data);
      } catch (err) {
        console.error("Failed to fetch developers", err);
      }
    };

    fetchDevs();
  }, []);

  const handleConnect = async (receiverId) => {
    const token = localStorage.getItem("token");
    const text = prompt("Send a message to this developer:");

    if (!text) return;

    try {
      await axios.post(
        `/message/send/${receiverId}`,
        { text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("✅ Message sent!");
    } catch (err) {
      console.error("Error sending message:", err);
      alert("❌ Failed to send message.");
    }
  };

  const filteredDevs = devs.filter((dev) =>
    dev.skills?.join(",").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🌍 Developer Directory</h2>
      <input
        type="text"
        placeholder="Search by skill (e.g., React)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.searchInput}
      />
      <div style={styles.grid}>
        {filteredDevs.map((dev) => (
          <div key={dev._id} style={styles.card}>
            <h3>
              <Link to={`/profile/${dev._id}`} style={styles.nameLink}>
                {dev.name}
              </Link>
              <p>@{dev.username}</p>
            </h3>
            <p style={styles.bio}>{dev.bio || "No bio yet."}</p>

            <div style={styles.skills}>
              <strong>Skills:</strong>{" "}
              {dev.skills?.length ? (
                <div style={styles.skillChips}>
                  {dev.skills.map((skill, index) => (
                    <span key={index} style={styles.chip}>{skill}</span>
                  ))}
                </div>
              ) : (
                "Not added"
              )}
            </div>

            <div style={styles.links}>
              {dev.github && (
                <a href={dev.github} target="_blank" rel="noreferrer" style={styles.link}>
                  GitHub
                </a>
              )}
              {dev.linkdin && (
                <a href={dev.linkdin} target="_blank" rel="noreferrer" style={styles.link}>
                  LinkedIn
                </a>
              )}
            </div>

            <button onClick={() => handleConnect(dev._id)} style={styles.connectBtn}>
              🤝 Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    maxWidth: "1200px",
    margin: "auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "28px",
  },
  searchInput: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    marginBottom: "30px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "0.3s ease",
  },
  nameLink: {
    textDecoration: "none",
    color: "#2c3e50",
  },
  bio: {
    fontStyle: "italic",
    color: "#555",
    margin: "10px 0",
  },
  skills: {
    marginBottom: "10px",
  },
  skillChips: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "5px",
  },
  chip: {
    background: "#e1f5fe",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "14px",
  },
  links: {
    display: "flex",
    gap: "12px",
    marginBottom: "12px",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
    fontSize: "15px",
  },
  connectBtn: {
    padding: "8px 14px",
    backgroundColor: "#2ecc71",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Developers;
