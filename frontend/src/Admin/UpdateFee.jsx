import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar1 from "../components/Sidebar1";
import "./UpdateFee.css";

const UpdateFee = () => {
  const [formData, setFormData] = useState({
    acRoomFee: "",
    nonAcRoomFee: "",
    foodFee: "",
  });

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = async () => {
    try {
      const response = await axios.get("http://localhost:3000/fees"); // Replace with your backend API endpoint
      const { acRoomFee, nonAcRoomFee, foodFee } = response.data;
      setFormData({ acRoomFee, nonAcRoomFee, foodFee });
    } catch (error) {
      console.error("Error fetching fees:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3000/fees", formData); // Replace with your backend API endpoint
      console.log("Fees updated successfully!");
    } catch (error) {
      console.error("Error updating fees:", error);
    }
  };

  return (
    <Sidebar1>
      <div className="update-form-container">
        <form className="frm-fee" onSubmit={handleSubmit}>
          <center>
            <h1>Update Fees</h1>
          </center>
          <br/><br/>
          <div className="form-group">
            <label htmlFor="acRoomFee">AC Room Fee:</label>
            <input
              type="number"
              id="acRoomFee"
              name="acRoomFee"
              value={formData.acRoomFee}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="nonAcRoomFee">Non-AC Room Fee:</label>
            <input
              type="number"
              id="nonAcRoomFee"
              name="nonAcRoomFee"
              value={formData.nonAcRoomFee}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="foodFee">Food Fee:</label>
            <input
              type="number"
              id="foodFee"
              name="foodFee"
              value={formData.foodFee}
              onChange={handleChange}
            />
          </div>
          <button className="upd-btn" type="submit">
            Update
          </button>
        </form>
      </div>
    </Sidebar1>
  );
};

export default UpdateFee;
