import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import AdminLoginPage from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDash";
import StudentLoginPage from "./Student/StudentLogin";
import StudentDashboard from "./Student/StudentDash";
import Complain from "./Student/Complain";
import Fee from "./Student/Fee";
import Food from "./Student/Food";
import Leave from "./Student/Leave";
import NoticeBord from "./Student/NoticeBord";
import Service from "./Student/Service";
import "./App.css";
import AddStudent from "./Admin/AddStudent";
import AllData from "./Admin/AllData";
import FoodMenu from "./Admin/FoodMenu";
import ManagComplain from "./Admin/ManagComplain";
import ManagLeave from "./Admin/ManagLeave";
import ManagNotice from "./Admin/ManagNotice";
import UpdateFee from "./Admin/UpdateFee";
import UpdateFood from "./Admin/UpdateFood";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/login" element={<StudentLoginPage />} />
        {/* <Route path="/student/dashboard" element={<StudentDashboard />} /> */}
        <Route
          path="/student/dashboard/:sessionId"
          element={<StudentDashboard />}
        />
        {/* student components */}
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/Complain" element={<Complain />} />
        <Route path="/Fee" element={<Fee />} />
        <Route path="/Food" element={<Food />} />
        {/* <Route path="/UpdateFood/:id" element={<UpdateFood />} /> */}

        <Route path="/Leave" element={<Leave />} />
        <Route path="/NoticeBord" element={<NoticeBord />} />
        <Route path="/Service" element={<Service />} />
        {/* Admin components */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/AddStudent" element={<AddStudent />} />
        <Route path="/AllData" element={<AllData />} />
        <Route path="/FoodMenu" element={<FoodMenu />} />
        <Route path="/ManagComplain" element={<ManagComplain />} />
        <Route path="/ManagLeave" element={<ManagLeave />} />
        <Route path="/ManagNotice" element={<ManagNotice />} />
        <Route path="/UpdateFee" element={<UpdateFee />} />
        <Route exact path="/UpdateFood/:id" component={<UpdateFood />} />
      </Routes>
    </Router>
  );
};

export default App;
