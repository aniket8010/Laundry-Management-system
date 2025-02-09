import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
           {/* left logo part of header */}
          <div className="col-12 col-lg-6 logo ml-4">
            <div style={{display:"flex", alignItems:"center", justifyContent:"start"}}>
            <img src="images/logo2.jpg" alt="img" />
            <h5 className="pt-2" style={{fontFamily:"All Round Gothic"}}>Rutuja Drycleaners</h5>
            </div>
          </div>
          {/* The Right portion Navlink part is started  */}
          <div className="col-12 col-lg-6">
            <div className="h_right">
              <nav className="navbar">
              <ul className="gap-4 ">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/aboutus"}>About us</NavLink>
                </li>
                <li>
                  <NavLink to={"/services"}>Services</NavLink>
                </li>
                <li>
                  <NavLink to={"/registration"}>
                    {" "}
                    <button className="a_btn">Register/Login</button>{" "}
                  </NavLink>
                </li>
              </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
