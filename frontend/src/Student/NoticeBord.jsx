import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Notice.css";
import Sidebar from "../components/Sidebar";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/student/notice-board"
      );
      setNotices(response.data.notices);
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  return (
    <Sidebar>
      <div className="notice-board">
        <h1>Notice Board</h1>
        <ul>
          <br/>
          {notices.map((notice, index) => (
            <li key={index}>
              <h2>Title : {notice.title}</h2>
              <p>Content : {notice.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </Sidebar>
  );
};

export default NoticeBoard;
