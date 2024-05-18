import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/AdminDashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/AddStudent",
      name: "Add Student",
      icon: <FaUserAlt />,
    },
    {
      path: "/AllData",
      name: "All Students Data",
      icon: <FaRegChartBar />,
    },
    {
      path: "/FoodMenu",
      name: "Food-Menu",
      icon: <FaCommentAlt />,
    },
    {
      path: "/ManagComplain",
      name: "Manage Complaint",
      icon: <FaShoppingBag />,
    },
    {
      path: "/ManagLeave",
      name: "Manage Leave",
      icon: <FaThList />,
    },
    {
      path: "/ManagNotice",
      name: "Manage Notice",
      icon: <FaTh />,
    },
    {
      path: "/UpdateFee",
      name: "Update Fee",
      icon: <FaCommentAlt />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1
            style={{ display: isOpen ? "block" : "none", color: "black" }}
            className="logo"
          >
            SGM
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
