import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Fee.css";
import Sidebar from "../components/Sidebar";

const FeeStructure = () => {
  const [fees, setFees] = useState({});

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = async () => {
    try {
      const response = await axios.get("http://localhost:3000/student/fees");
      setFees(response.data);
    } catch (error) {
      console.error("Error fetching fees:", error);
    }
  };

  return (
    <Sidebar>
      <div className="fee">
        <h1>Fee Structure</h1>
        <div className="fee-structure">
          <div className="room-type">
            <ul>
              <li>AC Room: {fees.acRoomFee}</li>
              <li>Non-AC Room: {fees.nonAcRoomFee}</li>
              <li>Mess Fee: {fees.foodFee}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rule">
        <div className="rules-container">
          <h1>Rules</h1>
          <br/>
          <ol>
            <li>Gym timings will be 5 to 7 in the morning and evening.</li>
            <li>
              Hostel free does not include electric bill as per the reading of
              the meter attached to the room which will be charged as per the
              unit rate fixed by the management at that time. This current year
              unit price will be Rs 10.50.
            </li>
            <li>
              Vandalism or loss of belongings in the hostel and rooms at the
              rate decided by the management which will be jointly recovered
              from the students staying in those rooms.
            </li>
            <li>
              Electrical devices other than mobile charger / laptop charger /
              cannot be used in the room. (like iron, water heater, electric
              fireplace, speaker etc.) otherwise the appliance will be
              confiscated and fine will be levied.
            </li>
            <li>A fine of Rs 500 will be charged if the room key is lost.</li>
            <li>
              Any kind of writing or any kind of poster will not be allowed to
              be pasted on the walls of the room, it should be noted that if it
              is done, the damage and penalty will be charged.
            </li>
            <li>
              It will be the responsibility of the students to keep the rooms
              clean.
            </li>
            <li>
              Not changing the position of the bed within the room, if so Rs.
              1000/- penalty will be levied.
            </li>
            <li>
              Once the room is allotted, the room will not be changed during the
              year. Students have to stay in allotted rooms only.
            </li>
            <li>
              Students wishing to go for re-shuffling should not take admission
              in the hostel. Taking admission in the hostel only after deciding
              the admission in the college, students leaving the hostel due to
              reshuffling after completing the admission process or due to other
              reasons will not be given refund in fees.
            </li>
            <li>
              A student who wastes food will be charged Rs. 100/- penalty will
              be levied. Students and their parents should take note of this.
            </li>
            <li>
              It is strictly forbidden to bring or eat non-veg food in the
              hostel, any student found doing so will be immediately rusticated
              from the hostel.
            </li>
            <li>
              Every student shall take proper care of his/her valuables, any
              loss, theft or loss shall be the sole responsibility of the
              student. Management will not take any responsibility for the same.
            </li>
            <li>
              Students outside the hostel are not allowed to enter the hostel,
              strict action will be taken against any student found doing so. A
              student residing in the hostel is strictly prohibited from
              bringing a student from outside the hostel with him, if any
              student is caught doing so, he will be fined Rs. 1000/- penalty
              will be levied.
            </li>
          </ol>
        </div>
      </div>
    </Sidebar>
  );
};

export default FeeStructure;
