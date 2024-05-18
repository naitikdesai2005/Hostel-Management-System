import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Card = ({ title, description, icon, linkTo }) => {
  return (
    <div className="card">
      <Link to={linkTo} className="card-link">
        <div className="icons">{icon}</div>
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <br />
      <div className="containerr">
        <div className="card-container">
          <div className="card1">
            <Card
              title="Leave"
              description="Manage All Student leaves."
              icon="📅"
              linkTo="/ManagLeave"
            />
          </div>
          <div className="card2">
            <Card
              title="Complaint"
              description="Resolve All Student Complaints"
              icon="📝"
              linkTo="/ManagComplain"
            />
          </div>
          <div className="card3">
            <Card
              title="Update Food"
              description="Update Current Food Menu"
              icon="🍔"
              linkTo="/FoodMenu"
            />
          </div>
          <div className="card4">
            <Card
              title="All Student Data"
              description="Find - update All Student Data"
              icon="👤"
              linkTo="/AllData"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
