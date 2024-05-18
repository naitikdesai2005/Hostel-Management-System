import React from "react";
import Faq from "react-faq-component";
import Sidebar from "../components/Sidebar";
import "./Service.css"; // Import the CSS file for custom styling

const data = {
  title: "Hostel Management System FAQs",
  rows: [
    {
      title: "How can I obtain access to the Hostel WiFi?",
      content:
        "To access the Hostel WiFi, you need to submit a yearly payment of 500 Rupees along with a copy of your Aadhar card. Upon submission, you will be prompted to choose a password for your WiFi connection.",
    },
    {
      title: "What are my WiFi username and password?      ",
      content:
        "Your WiFi username will be in the format ({name}{room no.})where {name} is your name and {room no.} is your room number. As for the password it will be the one you submitted during the registration process.",
    },
    {
      title: "What are the operating hours of the canteen?      ",
      content: "The canteen operates from 3:00 PM to 1:00 AM.",
    },
    {
      title: "What forms of payment do you accept?",
      content:
        "Hostels typically accept payment by credit/debit card and cash. Some may also accept payment through online platforms or mobile payment apps. It's always best to check with the hostel in advance to see which forms of payment they accept.",
    },
  ],
};

export default function FaqPage() {
  return (
    <Sidebar>
      <div className="faq-container">
        <Faq data={data} />
      </div>
    </Sidebar>
  );
}
