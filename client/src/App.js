// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Developers from "./pages/Developers";
import ProfilePage from "./pages/ProfilePage";
import Inbox from "./pages/Inbox";
import SentMessages from "./pages/SentMessages";
import Sentbox from "./pages/Sentbox";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/sent" element={<SentMessages />} />
          <Route path="/sentbox" element={<Sentbox />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
