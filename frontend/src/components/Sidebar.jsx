import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/StudentDashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/Fee",
      name: "Fee Detail",
      icon: <FaThList />,
    },
    {
      path: "/complain",
      name: "Complaint",
      icon: <FaRegChartBar />,
    },
    {
      path: "/food",
      name: "Food",
      icon: <FaCommentAlt />,
    },
    {
      path: "/leave",
      name: "Leave",
      icon: <FaShoppingBag />,
    },
    {
      path: "/noticebord",
      name: "Noticebord",
      icon: <AiFillContacts />,
    },
    {
      path: "/Service",
      name: "Service",
      icon: <FaUserAlt />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
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
            activeClassName="active" // Changed to activeClassName
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
