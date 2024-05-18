import React, { useEffect, useState } from "react";
import "./AllData.css";
import { useNavigate } from "react-router-dom";
import Sidebar1 from "../components/Sidebar1";

function Table() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/students-data")
      .then((response) => response.json())
      .then((data) => {
        if (data.students) {
          setStudents(data.students);
        }
      })
      .catch((error) => console.error("Error fetching student data:", error));
  }, []);

  const navigate = useNavigate();
  const handleRowClick = () => {
    navigate("/form");
  };

  return (
    <Sidebar1>
      <div className="table-container">
        <table>
          {/* Render table header */}
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Room No</th>
              <th>College ID</th>
              <th>College Course</th>
              <th>Year</th>
              <th>Guardian Name</th>
              <th>Guardian Phone</th>
              <th>Guardian Email</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr>
                <td>{student.fullName}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.address}</td>
                <td>{student.roomNo}</td>
                <td>{student.collegeID}</td>
                <td>{student.collegeCourse}</td>
                <td>{student.year}</td>
                <td>{student.guardianName}</td>
                <td>{student.guardianPhone}</td>
                <td>{student.guardianEmail}</td>
                <td>{student.username}</td>
                <td>{student.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Sidebar1>
  );
}

export default Table;
