import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for making HTTP requests
import "./StudentLogin.css"; // Import your CSS file for styling

const StudentLoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/student/login", {
        username,
        password,
      });
      const { sessionId } = response.data;
      sessionStorage.setItem("sessionId", sessionId);
      navigate(`/student/dashboard/${sessionId}`);
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome Student!! Login into Your Account</h1>
        <br />
        <form className="login-stu-form" onSubmit={handleSubmit}>
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
      </div>
      <footer className="footer">
        <p>&copy; 2024 Hostel Management System</p>
      </footer>
    </div>
  );
};

export default StudentLoginPage;
