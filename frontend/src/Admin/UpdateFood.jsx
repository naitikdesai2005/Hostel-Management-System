import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar1 from "../components/Sidebar1";
import { useParams } from "react-router-dom";

const UpdateFoodItem = () => {
  const [foodItem, setFoodItem] = useState(null);
  const { id } = useParams(); // Get the id parameter from the URL

  useEffect(() => {
    const fetchFoodItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/admin/food-menu/update/${id}`);
        if (response.data && response.data.foodItem) {
          setFoodItem(response.data.foodItem);
        } else {
          console.error("Error fetching food item: Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching food item:", error);
      }
    };

    fetchFoodItem();
  }, [id]); // Include id in the dependency array

  const handleChange = (event) => {
    setFoodItem({ ...foodItem, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `http://localhost:3000/admin/food-menu/update/${foodItem._id}`,
        foodItem
      );
      console.log("Food item updated successfully!");
      // Optionally, you can navigate back to the admin menu page or perform any other action
    } catch (error) {
      console.error("Error updating food item:", error);
    }
  };

  if (!foodItem) {
    return <div>Loading...</div>;
  }

  return (
    <Sidebar1>
      <div>
        <h1>Update Food Menu</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="day">Day:</label>
          <input
            type="text"
            id="day"
            name="day"
            value={foodItem.day}
            readOnly
          />
          <br />
          <label htmlFor="breakfast">Breakfast:</label>
          <input
            type="text"
            id="breakfast"
            name="breakfast"
            value={foodItem.breakfast}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="lunch">Lunch:</label>
          <input
            type="text"
            id="lunch"
            name="lunch"
            value={foodItem.lunch}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="dinner">Dinner:</label>
          <input
            type="text"
            id="dinner"
            name="dinner"
            value={foodItem.dinner}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Update</button>
        </form>
      </div>
    </Sidebar1>
  );
};

export default UpdateFoodItem;
