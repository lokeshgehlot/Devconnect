import React, { useEffect, useState } from "react";
import axios from "../api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    bio: "",
    skills: "",
    github: "",
    linkdin: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await axios.get("/profile/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setForm({
          ...res.data,
          skills: res.data.skills?.join(", ") || "",
        });
      } catch (err) {
        setMessage("⚠️ Could not load profile");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const token = localStorage.getItem("token");
      const updatedData = {
        ...form,
        skills: form.skills.split(",").map((s) => s.trim()),
      };

      await axios.put("/profile/me", updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage("✅ Profile updated successfully!");
    } catch (err) {
      setMessage("❌ Error updating profile");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛠 Developer Profile</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={form.bio}
          onChange={handleChange}
          style={{ ...styles.input, height: "80px" }}
        />
        <input
          name="skills"
          placeholder="Skills (comma separated)"
          value={form.skills}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="github"
          placeholder="GitHub URL"
          value={form.github}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="linkdin"
          placeholder="LinkedIn URL"
          value={form.linkdin}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Save Profile
        </button>
      </form>
      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    maxWidth: "500px",
    margin: "auto",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  heading: {
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Profile;
