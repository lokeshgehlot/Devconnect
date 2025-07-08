// src/components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
