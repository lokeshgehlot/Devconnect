import React, { useState } from "react";
import axios from "../api";
import { Link } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({ name: "", username: "", email: "", password: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            const res = await axios.post("/auth/register", form);
            setSuccess("✅ Registration successful!");
            console.log(res.data);
        } catch (err) {
            console.log("🔥 Registration error:", err);
            setError(err.response?.data?.msg || "Something went wrong");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={{ marginBottom: "20px" }}>🚀 Create Your Account</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={form.username}
                        onChange={handleChange}
                        required
                        style={styles.input} // ✅ Added consistent styling
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Register</button>
                </form>

                {error && <p style={styles.error}>❌ {error}</p>}
                {success && (
                    <div style={styles.success}>
                        {success} <br />
                        <Link to="/login" style={styles.link}>➡️ Click here to login</Link>
                    </div>
                )}

                {!success && (
                    <p style={styles.loginText}>
                        Already have an account?{" "}
                        <Link to="/login" style={styles.link}>Login</Link>
                    </p>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        backgroundColor: "#f0f2f5",
    },
    card: {
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    input: {
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "1em",
    },
    button: {
        backgroundColor: "#4CAF50",
        color: "#fff",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        fontWeight: "bold",
        cursor: "pointer",
    },
    error: {
        marginTop: "15px",
        color: "red",
        fontWeight: "bold",
    },
    success: {
        marginTop: "15px",
        color: "green",
        fontWeight: "bold",
    },
    loginText: {
        marginTop: "20px",
        fontSize: "0.9em",
    },
    link: {
        color: "#007bff",
        textDecoration: "none",
        fontWeight: "bold",
    },
};

export default Register;
