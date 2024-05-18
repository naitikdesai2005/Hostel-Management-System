import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ManagNotice.css";
import Sidebar1 from "../components/Sidebar1";

const ManagNotice = () => {
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState({ title: "", content: "" });

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get("http://localhost:3000/admin/notices");
      setNotices(response.data.notices || []); // Ensure notices is initialized as an empty array if response.data.notices is undefined
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNotice({ ...newNotice, [name]: value });
  };

  const addNotice = async () => {
    try {
      if (newNotice.title && newNotice.content) {
        await axios.post("http://localhost:3000/admin/add-notice", newNotice);
        setNewNotice({ title: "", content: "" });
        fetchNotices();
      } else {
        console.error("Please fill in both title and content fields.");
      }
    } catch (error) {
      console.error("Error adding notice:", error);
    }
  };

  const deleteNotice = async (id) => {
    try {
      await axios.get(`http://localhost:3000/admin/delete-notice/${id}`);
      fetchNotices();
    } catch (error) {
      console.error("Error deleting notice:", error);
    }
  };

  return (
    <Sidebar1>
      <div className="notice-container">
        <h1>Notice Board</h1>
        <form
          className="notic-form"
          onSubmit={(e) => {
            e.preventDefault();
            addNotice();
          }}
        >
          <input
            type="text"
            name="title"
            value={newNotice.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <br/>
          <br/>
          <textarea
            name="content"
            value={newNotice.content}
            onChange={handleInputChange}
            placeholder="Content"
          ></textarea>
          <button className="notic-btn" type="submit">
            Add Notice
          </button>
        </form>
        <ul>
          {notices.map((notice) => (
            <li key={notice._id}>
              <div className="notice-description">
                <h3 className="titlenotice">Title : {notice.title}</h3>
                <p className="descnotice">Content : {notice.content}</p>
              </div>
              <br />
              <button
                className="notic-btn-del"
                onClick={() => deleteNotice(notice._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Sidebar1>
  );
};

export default ManagNotice;
