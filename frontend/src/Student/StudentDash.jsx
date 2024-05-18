import React from "react";
import "./StudentApp.css";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Sidebar>
      <br />
      <br />
      <Link to="/Student/StudentDash" />
      <Link to="/Student/Complain" />
      <Link to="/Student/Fee" />
      <Link to="/Student/Food" />
      <Link to="/Student/Leave" />
      <Link to="/Student/NoticeBord" />
      <Link to="/Student/Service" />
      <Dashboard />
    </Sidebar>
  );
};
export default App;
