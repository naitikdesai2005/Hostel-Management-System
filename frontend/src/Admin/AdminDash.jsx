import React from "react";
import "./AdminApp.css";
import Sidebar1 from "../components/Sidebar1";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

const AdminDashboard = () => {
  return (
    <Sidebar1>
      <br />
      <br />
      <Link to="/Admin/AdminDash" />
      <Link to="/Admin/AddStudent" />
      <Link to="/Admin/AllData" />
      <Link to="/Admin/FoodMenu" />
      <Link to="/Admin/ManagComplain" />
      <Link to="/Admin/ManagNotice" />
      <Link to="/Admin/ManagLeave" />
      <Link to="/Admin/UpdateFee" />
      <Link to="/Admin/UpdateFood" />
      <Dashboard />
    </Sidebar1>
  );
};

export default AdminDashboard;
