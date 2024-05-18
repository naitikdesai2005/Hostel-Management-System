import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar1 from "../components/Sidebar1";

const AdminFoodMenu = () => {
  const [foodMenu, setFoodMenu] = useState([]);

  useEffect(() => {
    fetchFoodMenu();
  }, []);

  const fetchFoodMenu = async () => {
    try {
      const response = await axios.get("http://localhost:3000/admin/food-menu");
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
    <Sidebar1>
      <div className="admin-food-menu">
        <h1>Admin Food Menu</h1>
        <br/>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {foodMenu.map((item, index) => (
              <tr key={index}>
                <td>{item.day}</td>
                <td>{item.breakfast}</td>
                <td>{item.lunch}</td>
                <td>{item.dinner}</td>
                <td>
                <Link to={`/UpdateFood/${item._id}`}>Update</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Sidebar1>
  );
};

export default AdminFoodMenu;
