import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Food.css";

const FoodTable = () => {
  const [foodMenu, setFoodMenu] = useState([]);

  useEffect(() => {
    fetchFoodMenu();
  }, []);

  const fetchFoodMenu = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/student/food-menu"
      );
      if (response.data && response.data.foodMenu) {
        setFoodMenu(response.data.foodMenu);
      } else {
        console.error("Error fetching food menu: Invalid response format");
      }
    } catch (error) {
      console.error("Error fetching food menu:", error);
    }
  };

  return (
    <Sidebar>
      <br/>
      <div className="food-table">
        <center>
          <h1>Weekly Food Menu</h1>
          <br/>
          <br/>
        </center>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
            </tr>
          </thead>
          <tbody>
            {foodMenu.length > 0 ? (
              foodMenu.map((item, index) => (
                <tr key={index}>
                  <td>{item.day}</td>
                  <td>{item.breakfast}</td>
                  <td>{item.lunch}</td>
                  <td>{item.dinner}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Sidebar>
  );
};

export default FoodTable;
