import React, { useState } from "react";
import axios from "axios";
import { Button, Input } from "@chakra-ui/react";
import "./AddStudent.css";
import Sidebar1 from "../components/Sidebar1";

function AddStudentForm({ onAddStudent }) {
  const [student, setStudent] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    roomNo: "",
    collegeID: "",
    collegeCourse: "",
    year: "",
    guardianName: "",
    guardianPhone: "",
    guardianEmail: "",
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend route to add a new student
      const response = await axios.post(
        "http://localhost:3000/admin/add-student",
        student
      );
      console.log("Student added successfully:", response.data);
      // Clear the form fields after successful submission
      setStudent({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        roomNo: "",
        collegeID: "",
        collegeCourse: "",
        year: "",
        guardianName: "",
        guardianPhone: "",
        guardianEmail: "",
        username: "",
        password: "",
      });
    } catch (error) {
      console.error("Error adding student:", error);
      setErrorMessage("Error adding student");
    }
  };

  return (
    <Sidebar1>
      <h1>Add New Student</h1>
      <br />
      {errorMessage && <p>{errorMessage}</p>}
      <form className="add-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <Input
            type="text1"
            name="fullName"
            value={student.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <br />
          <Input
            type="email1"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone:
          <Input
            type="text1"
            name="phone"
            value={student.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Address:
          <Input
            type="text1"
            name="address"
            value={student.address}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Room No:
          <Input
            type="text1"
            name="roomNo"
            value={student.roomNo}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          College ID:
          <Input
            type="text1"
            name="collegeID"
            value={student.collegeID}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          College Course:
          <Input
            type="text1"
            name="collegeCourse"
            value={student.collegeCourse}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Current Year:
          <br />
          <Input
            type="number"
            name="year"
            value={student.year}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Guardian/Parent Name:
          <Input
            type="text1"
            name="guardianName"
            value={student.guardianName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Guardian/Parent Phone:
          <Input
            type="text1"
            name="guardianPhone"
            value={student.guardianPhone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Guardian/Parent Email:
          <br />
          <Input
            type="email1"
            name="guardianEmail"
            value={student.guardianEmail}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Username:
          <Input
            type="text1"
            name="username"
            value={student.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <Input
            type="password"
            name="password"
            value={student.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <Button className="add-stu-btn" type="submit">
          Add Student
        </Button>
      </form>
    </Sidebar1>
  );
}

export default AddStudentForm;
