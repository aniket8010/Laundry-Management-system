import React, { useState } from "react";
import axios from "axios";
import "./Order.css";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost/LAUNDRYMANAGEMENTSYSTEM/backend/order.php", formData, {
        headers: { "Content-Type": "application/json" },
      });

      alert(response.data.message); // Show success/error message
      if (response.data.status === "success") {
        setFormData({ name: "", phone: "", address: "" }); // Clear form after success
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="order-container">
      <div className="overlay"></div>
      <div className="form-container">
        <div className="order-text">
          <h3 className="looking-for">Looking For The</h3>
          <h2 className="best-service">"BEST DRY CLEANING SERVICE?"</h2>
          <h1 className="welcome-text">WELCOME TO TUMBLEDRY</h1>
          <hr />
          <div className="middle-text">
            <p className="trusted-text">Trusted By <strong>20 Lac+</strong> Customers</p>
            <p className="stores-text">1100+ Stores Across <strong>400+</strong> Cities</p>
            <p className="highlight-text"><strong>Flat 20% Off On 1st Order</strong></p>
          </div>
          <hr />
          <p className="subtext">Feel the Difference, Yourself!</p>

          <form className="order-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            <button type="submit" className="order-button">Schedule Free Pick Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
