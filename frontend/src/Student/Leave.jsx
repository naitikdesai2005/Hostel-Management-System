// import React, { useState } from "react";
// import "./Leave.css";
// import Sidebar from "../components/Sidebar";

// function HostelLeaveForm() {
//   const [formData, setFormData] = useState({
//     startDate: "",
//     endDate: "",
//     reason: "",
//     place: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     setFormData({
//       startDate: "",
//       endDate: "",
//       reason: "",
//       place: "",
//     });
//   };

//   return (
//     <div className="container">
//       <Sidebar>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="start_date">Start Date:</label>
//             <input
//               type="date"
//               id="start_date"
//               name="startDate"
//               value={formData.startDate}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="end_date">End Date:</label>
//             <input
//               type="date"
//               id="end_date"
//               name="endDate"
//               value={formData.endDate}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="reason">Reason:</label>
//             <textarea
//               id="reason"
//               name="reason"
//               value={formData.reason}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="place">Place:</label>
//             <input
//               type="text"
//               id="place"
//               name="place"
//               value={formData.place}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <input className="lev-btn" type="submit" value="Submit" />
//         </form>
//       </Sidebar>
//     </div>
//   );
// }

// export default HostelLeaveForm;

import React, { useState } from "react";
import axios from "axios";
import "./Leave.css";
import Sidebar from "../components/Sidebar";

function HostelLeaveForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    roomNo: "",
    startDate: "",
    endDate: "",
    reason: "",
    place: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/student/submit-leave",
        formData
      );
      if (response.status === 201) {
        console.log("Leave submitted successfully");
      } else {
        console.error("Failed to submit leave");
      }
    } catch (error) {
      console.error("Error submitting leave:", error);
    }
    setFormData({
      studentName: "",
      roomNo: "",
      startDate: "",
      endDate: "",
      reason: "",
      place: "",
    });
  };

  return (
    <Sidebar>
      <div className="container">
        <form className="leave-form" onSubmit={handleSubmit}>
          <h1>Leave Application</h1>
          <br/><br/>
          <div className="form-group">
            <label htmlFor="studentName">Student Name:</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="roomNo">Room Number:</label>
            <input
              type="text"
              id="roomNo"
              name="roomNo"
              value={formData.roomNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason:</label>
            <input
            type="text"
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="place">Place:</label>
            <input
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleChange}
              required
            />
          </div>
          <input className="lev-btn" type="submit" value="Submit" />
        </form>
      </div>
    </Sidebar>
  );
}

export default HostelLeaveForm;
