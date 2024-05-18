import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"; // Import your CSS file for styling

const StudentLoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "ADMIN123" && password === "ADMIN123") {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome Admin!! Login into Your Account</h1>
      <br />
      <form className="form-login" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button className="login-btn" type="submit">
          Login
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <footer className="footer">
        <p>&copy; 2024 Hostel Management System</p>
      </footer>
    </div>
  );
};

export default StudentLoginPage;
