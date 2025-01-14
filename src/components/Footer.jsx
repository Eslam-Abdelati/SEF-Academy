import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import "./Footer.css";
import logo from "../assets/images/seff_logo_black.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="footer-container d-none d-lg-block">
        <div className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp className="up-arrow-icon" />
        </div>

        <div className="footer-content">
          {/* First Stage */}
          <div className="footer-stage first-stage">
            <img src={logo} alt="Logo" className="footer-logo" />
            <div className="footer-text">
              <h2 className="footer-title">SOFTWARE ENGINEERING FOR FUTURE</h2>
              <div className="d-none d-lg-block">
                <div className="footer-line">
                  <Link>Link 1</Link>
                  <Link>Link 2</Link>
                  <Link>Link 3</Link>
                  <Link>Link 4</Link>
                  <Link>Link 5</Link>
                </div>
                <div className="footer-line">
                  <Link>Link 1</Link>
                  <Link>Link 2</Link>
                  <Link>Link 3</Link>
                  <Link>Link 4</Link>
                  <Link>Link 5</Link>
                  <Link>Link 6</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Second Stage */}
          <div className="footer-stage second-stage">
            <div className="contact-info d-flex flex-column gap-3">
              <div className="contact-line d-flex gap-2 align-items-center justify-content-start">
                <FaEnvelope className="contact-icon" />
                <span>example@example.com</span>
              </div>
              <div className="contact-line d-flex gap-2 align-items-center justify-content-start">
                <FaPhoneAlt className="contact-icon" />
                <span>+123 456 7890</span>
              </div>
              <div className="contact-line d-flex gap-2 align-items-center justify-content-start">
                <FaPhoneAlt className="contact-icon" />
                <span>+098 765 4321</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <FaRegCopyright className="copy-icon" />
            <span>2023 EGYPT, All RIGHTS RESERVED</span>
          </div>
          <div className="footer-socials">
            <Link
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="social-icon" />
            </Link>
            <Link
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </Link>
            <Link
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="social-icon" />
            </Link>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}
      <div className="footer-container d-block d-lg-none ">
        <img src={logo} alt="SEF Future Logo" className="footer-logo" />
        <div></div>
        <div className=" d-flex justify-content-between">
          <div className="footer-content d-flex flex-column align-items-start text-start">
            <h3 className="">SOFTWARE ENGINEERING FOR FUTURE</h3>

            {/* Contact Information */}
            <div className="contact-info">
              <p className="">sefffuture@gmail.com</p>
              <p className="">+20 109 8481 288</p>
              <p className="">+20 155 5177 645</p>
            </div>
            <p>@2023 EGYPT, ALL RIGHTS RESERVED</p>
          </div>

          {/* Social Media Icons */}
          <div className="d-flex flex-column justify-content-around">
            <Link
              to="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </Link>
          </div>

          {/* Footer Text */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
