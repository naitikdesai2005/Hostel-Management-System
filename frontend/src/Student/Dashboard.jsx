import React from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";

const Card = ({ title, description, icon, linkTo }) => {
  return (
    <div className="card">
      <NavLink to={linkTo} className="card-link" activeclassname="active">
        <div className="icons">{icon}</div>
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </NavLink>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="containerr">
      <h1>Welcome to student Dashboard</h1>
      <br />
      <br />
      <div className="card-container">
        <div className="card1">
          <Card
            title="Leave"
            description="Apply for leave and manage your time off."
            icon="📅"
            linkTo="/Leave"
          />
        </div>
        <div className="card2">
          <Card
            title="Complaint"
            description="Submit complaints or report issues."
            icon="📝"
            linkTo="/Complain"
          />
        </div>
        <div className="card3">
          <Card
            title="Food"
            description="Explore dining options and order food."
            icon="🍔"
            linkTo="/Food"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
