import React, { useState } from "react";
import "./Complain.css"; // Import CSS file for styling
import Sidebar from "../components/Sidebar";

function Complain() {
  const [name, setName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [description, setDescription] = useState("");
  const [complaintType, setComplaintType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/student/complaints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          roomNumber,
          type: complaintType,
          description,
        }),
      });
      if (response.ok) {
        console.log("Complaint submitted successfully");
      } else {
        console.error("Failed to submit complaint");
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
    }
  };

  return (
    <Sidebar>
      <div className="App">
        <form className="com-frm" onSubmit={handleSubmit}>
          <center>
            <h1>Complaint Form</h1>
          </center>
          <br />
          <br />
          <div className="form-group">
            <label>Name</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <label>Room Number</label>
            <br />
            <input
              type="text"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              required
            />
            <br />
            <label>Complaint Type</label>
            <br />
            <select
              value={complaintType}
              onChange={(e) => setComplaintType(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="electronic">Electronic</option>
              <option value="water">Water</option>
              <option value="Wi-Fi">Wi - Fi</option>
              <option value="Food">Food</option>
            </select>
            <br />
            <label>Description</label>
            <br />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button className="comp-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Sidebar>
  );
}

export default Complain;
