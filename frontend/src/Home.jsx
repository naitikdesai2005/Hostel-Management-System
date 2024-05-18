import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="welcome-page">
      <header className="header">
        <h1>Welcome to ShreeDeep Grand Management</h1>
      </header>
      <main className="main-content">
        <p>
          Welcome to our Hostel Management System. Our system provides an
          efficient and user-friendly platform for managing all aspects of your
          hostel operations.
        </p>
        <p>
          With our comprehensive features, you can easily manage student
          admissions, room allocations, fee payments, attendance tracking, and
          more. Our goal is to streamline your hostel management process, saving
          you time and effort while ensuring smooth operations.
        </p>
        <div className="button-container">
          <Link to="/admin/login">
            <button className="transparent-button">Admin Login</button>
          </Link>
          <Link to="/student/login">
            <button className="transparent-button">Student Login</button>
          </Link>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Hostel Management System</p>
      </footer>
    </div>
  );
};

export default HomePage;
