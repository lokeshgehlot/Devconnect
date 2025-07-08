import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api";

const ProfilePage = () => {
  const { id } = useParams();
  const [dev, setDev] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`/profile/${id}`);
        setDev(res.data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };
    fetchProfile();
  }, [id]);

  if (!dev) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{dev.name}</h2>
      <p><strong>Username:</strong> @{dev.username}</p>
      <p><strong>Bio:</strong> {dev.bio || "No bio provided."}</p>
      <p><strong>Skills:</strong> {dev.skills?.join(", ") || "Not added"}</p>
      {dev.github && <p><a href={dev.github} target="_blank" rel="noreferrer">GitHub</a></p>}
      {dev.linkdin && <p><a href={dev.linkdin} target="_blank" rel="noreferrer">LinkedIn</a></p>}
    </div>
  );
};

export default ProfilePage;
