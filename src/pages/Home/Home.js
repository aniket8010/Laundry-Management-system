import React from "react";
import "./Home.css";
import "./responsive.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      // If logged in, redirect to some other page (like the order page)
      navigate("/order");
    } else {
      // If not logged in, redirect to the registration page
      navigate("/registration");
    }
  };

  return (
    <div style={{ backgroundColor: "#F3F3F3" }} className="session ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="home_banner m-auto">
              <img
                src="https://assets.ucleanlaundry.com/assets/images/service_main_image_11zon.webp"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="a_h5">
              <h5>LAUNDRY</h5>
            </div>
            <p>
              Customer satisfaction is at the heart of everything we do. With a
              team of <br /> experienced professionals, modern equipment, and a
              commitment <br /> to excellence, we aim to make laundry day
              stress-free for you. Experience <br /> the difference with Rutuja
              Laundry and Drycleaners because your clothes <br /> deserve the
              best..!
            </p>
            <div className="a_order">
              <span>Create Your Order..!</span>
            </div>
              <div className="a_button">
                <button onClick={handleOrderNow}>ORDER NOW</button>
              </div>
            <div className="a_place">
              <h6>Place Your Order Now</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
