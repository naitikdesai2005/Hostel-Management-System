import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Leave.css";
import Sidebar1 from "../components/Sidebar1";

const LeaveStatusPage = () => {
  const [leaves, setLeaves] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/admin/leave-requests"
      );
      if (response.status === 200) {
        setLeaves(response.data.leaves);
      } else {
        setError("Failed to fetch leaves");
      }
    } catch (error) {
      setError("Error fetching leaves");
    }
  };

  const handleApprove = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/admin/leave-requests/${id}/approve`
      );
      if (response.status === 200) {
        console.log("leave approved successfully");
        fetchLeaves();
      } else {
        setError("Failed to approve leave");
      }
    } catch (error) {
      setError("Error approving leave");
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/admin/leave-requests/${id}/reject`
      );
      if (response.status === 200) {
        console.log("leave rejected successfully");
        fetchLeaves();
      } else {
        setError("Failed to reject leave");
      }
    } catch (error) {
      setError("Error rejecting leave");
    }
  };

  return (
    <Sidebar1>
      <div className="leave-status-page">
        <h1>Leave Status</h1>
        {error && <p>{error}</p>}
        <br />
        <table>
          <thead>
            <tr>
              <th>Place</th>
              <th>Reason</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Room Number</th>
              <th>Student Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave._id}>
                <td>{leave.place}</td>
                <td>{leave.reason}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>{leave.status}</td>
                <td>{leave.roomNo}</td>
                <td>{leave.studentName}</td>
                <td>
                  {leave.status === "pending" && (
                    <>
                      <button
                        className="accept-button"
                        onClick={() => handleApprove(leave._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="reject-button"
                        onClick={() => handleReject(leave._id)}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Sidebar1>
  );
};

export default LeaveStatusPage;
