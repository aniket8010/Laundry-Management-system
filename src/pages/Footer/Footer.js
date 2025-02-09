import React from "react";
import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <div className="footer">
      <div className="container pt-3">
        <div className="row  d-flex justify-content-center align-items-center">
          <div className="col-12 col-lg-3 services">
            <div className="a_left ">
              {/* <img
                src="https://assets.ucleanlaundry.com/assets/images/logo.png"
                alt=""
              /> */}
              <h5>Overview</h5>
              <p className="pt-2">
              Welcome to Rutuja Laundry, your trusted partner for professional laundry and dry cleaning services. Founded in 2017, we started with a simple mission to provide top-quality, convenient, and affordable laundry solutions for busy individuals, families, and businesses.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div style={{paddingLeft:"70px"}} className="a_right">
              <h6 style={{ paddingLeft: "25px" }} className="fw-3 pt-3">
                OUR SERVICES
              </h6>
              <div className="list">
                <ol>
                  <li>Dry Cleaning</li>
                  <li>Laundry by Kg</li>
                  <li>Premium Laundry</li>
                  <li>Steam Ironing</li>
                  <li>Shoe Cleaning</li>
                  <li>Bag Cleaning</li>
                  <li>Curtain Cleaning</li>
                  <li>Sofa Cleaning</li>
                  <li>Carpet Cleaning</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="contact">
              <div className="left_most">
                <h6 className="fw-3">CONTACT US</h6>
                <FaLocationDot style={{ color: "#79B64A" }} />{" "}
                <span>
                  RFH-09 Green Ville, <br /> Chouvisawadi road charoli, <br />{" "}
                  pune-412105, India
                </span>
                <br />
                <div style={{ paddingTop: "10px" }} className="a_icon ">
                  <FaPhone style={{ color: "#79B64A", fontSize: "13px" }} />{" "}
                  <span style={{ cursor: "pointer" }}>+918010248192</span>
                </div>
                <div className="m_icon">
                  <MdMail style={{ color: "#79B64A" }} />{" "}
                  <span style={{ cursor: "pointer" }}>support@rclean.in</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="contact">
              <div className="right_most">
                <h6 className="fw-3">FOLLOW US</h6>
                <div style={{ cursor: "pointer" }} className="img_box">
                  <a href="https://www.facebook.com/jagdish.shinde.79677?mibextid=ZbWKwL">
                    <div
                      style={{ backgroundColor: "#41639D" }}
                      className="a_img"
                    >
                      <FaFacebookF />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/akshay_solanke_003?igsh=MnRtc2FtYm5rejNu">
                    <div
                      style={{ backgroundColor: "#022317" }}
                      className="a_img"
                    >
                      <FaXTwitter />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/akshay_solanke_003?igsh=MnRtc2FtYm5rejNu">
                    <div
                      style={{ backgroundColor: "#0678B6" }}
                      className="a_img"
                    >
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/akshay_solanke_003?igsh=MnRtc2FtYm5rejNu">
                    <div
                      style={{ backgroundColor: "#D53F59" }}
                      className="a_img"
                    >
                      <FaInstagram />
                    </div>
                  </a>
                  <a href="https://www.youtube.com/channel/UC81xLefoQJZD5J6-sbIzGAA">
                    <div
                      style={{ backgroundColor: "#FFFFFF", color: "red" }}
                      className="a_img"
                    >
                      <IoLogoYoutube />
                    </div>
                  </a>
                </div>
                <h6 className="pt-4">Download The App</h6>
                <div className="apps">
                  <img
                    height={"50px"}
                    width={"50px"}
                    src="https://assets.ucleanlaundry.com/assets/img/apple-icon.png"
                    alt=""
                  />
                  <img
                    height={"50px"}
                    width={"50px"}
                    src="https://assets.ucleanlaundry.com/assets/img/playstoreicon.png"
                    alt=""
                  />
                  <img
                    height={"50px"}
                    width={"50px"}
                    src="https://assets.ucleanlaundry.com/assets/img/whatsappicon.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_border pt-3">
          <div>
            {/* The last and lowest part of footer is started */}
            <div className="row">
              <div className="col-12 col-lg-6">
                <h6>© 2024 RClean. All rights reserved</h6>
              </div>
              <div className="col-12 col-lg-6">
                <h6>Privacy Policy | Terms and conditions</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
