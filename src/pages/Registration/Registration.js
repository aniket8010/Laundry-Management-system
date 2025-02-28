import React, { useState } from "react";
import "./registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // To redirect after login

  const handleRegister = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/LaundryManagementSystem/backend/register.php",
        { name, email, contact, address, password }
      );
      alert(response.data.message);
    } catch {
      alert("Registration failed.");
    }
  };

  const handleLogin = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/LaundryManagementSystem/backend/login.php",
        {
          email,
          password,
        }
      );

      if (response.data.message === "Login successful") {
        localStorage.setItem("isLoggedIn", "true"); //  Store login state
        navigate("/"); //  Redirect to home page
        window.location.reload(); //  Refresh to update the header
      } else {
        alert("Invalid credentials!");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="container">
      {isLogin ? (
        <div className="a_box">
          <div className="form-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      ) : (
        <div className="a_box">
          <div className="form-box">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Current Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Register</button>
              <p>
                Already have an account?{" "}
                <a href="#" onClick={() => setIsLogin(true)}>
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
