import React from "react";
import "../assets/styles/contactus.css";
import useFormattedDate from "../hooks/useFormattedDate";
import { Link } from "react-router-dom";
function ContactUs() {
  const date = useFormattedDate();
  return (
    <div>
      <div className=" d-inline-block px-5">
        <h6 className="page-title">Contact Us</h6>
        <p>{date}</p>
      </div>
      <div className="container-fluid p-4 d-flex justify-content-between flex-column flex-lg-row gap-5 ">
        <div className="d-flex flex-column gap-5 contact-side-info">
          <div>
            <h4>Visit Us</h4>
            <p>Here is the address of the Organization</p>
          </div>
          <div>
            <h4>Leave Us An Email</h4>
            <p>mailTo: SEFFFuture@gmail.com</p>
          </div>
          <div>
            <h4>Follow us on Social Media</h4>
            <div className="d-flex gap-3">
              <Link to="" className="contact-social-icon">
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link to="" className="contact-social-icon">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link to="" className="contact-social-icon">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link to="" className="contact-social-icon">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="contact-form-container ">
          <div>
            <h3>Get In Touch</h3>
            <p>We'd love to hear from you</p>
          </div>
          <form>
            <div className="d-flex  gap-3">
              <div className="col">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="col">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="d-flex  gap-3">
              <div className="col">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="col">
                <label>Phone Number</label>
                <input type="text" />
              </div>
            </div>
            <div className="col">
              <label>Message</label>
              <textarea className="contact-textarea"></textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-warning">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
