import React from "react";
import "./Order.css";

const Order = () => {
  return (
    <div className="order-container">
      <div className="overlay"></div> {/* Blur effect overlay */}
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

          <form className="order-form">
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Address" required />
            <button className="order-button">Schedule Free Pick up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
