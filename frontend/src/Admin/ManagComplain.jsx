import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Complain.css";
import Sidebar1 from "../components/Sidebar1";

const ComplaintStatusPage = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/admin/complaints"
      );
      if (response.status === 200) {
        setComplaints(response.data.complaints);
      } else {
        console.error("Failed to fetch complaints");
      }
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  const handleResolve = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/admin/complaints/${id}/update`,
        {
          status: "Resolved",
        }
      );
      if (response.status === 200) {
        console.log("Complaint resolved successfully");
        fetchComplaints(); 
      } else {
        console.error("Failed to resolve complaint");
      }
    } catch (error) {
      console.error("Error resolving complaint:", error);
    }
  };

  return (
    <Sidebar1>
      <div className="complaint-status-page">
        <h1>Complaint Status</h1>
        <br />
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Status</th>
              <th>Room Number</th>
              <th>Student Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint._id}>
                <td>{complaint.type}</td>
                <td>{complaint.description}</td>
                <td>{complaint.status}</td>
                <td>{complaint.roomNumber}</td>
                <td>{complaint.name}</td>
                <td>
                  <button
                    className="resolve-button"
                    onClick={() => handleResolve(complaint._id)}
                  >
                    Resolve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Sidebar1>
  );
};

export default ComplaintStatusPage;
