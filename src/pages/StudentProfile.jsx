import React, { useState } from "react";
import Profile from "../components/studentProfile/Profile";
import PersonalInfo from "../components/studentProfile/PersonalInfo";
import Education from "../components/studentProfile/Education";
import ContactInfo from "../components/studentProfile/ContactInfo";
import About from "../components/studentProfile/AboutUser";
import InProgressCourses from "../components/studentProfile/InProgressCourses";
import PreviousCourses from "../components/studentProfile/PreviousCourses";
import Course from "../components/studentProfile/Course";
import useFormattedDate from "../hooks/useFormattedDate";
import { Link } from "react-router-dom";

function StudentProfile() {
  const date = useFormattedDate();
  return (
    <div>
      {/* <Profile />
      <PersonalInfo /> */}

      <div className="text-white">
        <div className="container">
          {/* Top Section with "Profile", Line, and Date */}
          <div className="d-flex flex-column mb-4 ">
            <h2 className="page-title ">Profile</h2>
            <p className="mt-2">{date}</p>
          </div>

          {/* Profile Picture, Name, and Save Button */}
          <div className="car d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div
                className="profile-pic bg-secondary rounded-circle mx-3"
                style={{ width: "100px", height: "100px" }}
              ></div>
              <div className="ms-1">
                <h3>Balqees Hamdi Sabir</h3>
                <p>Computer Science, International Islamic University</p>
              </div>
            </div>
            <Link
              to="/profile-edit"
              className="btn me-3"
              style={{ color: "white", backgroundColor: "#ffc107" }}
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
      {/* ******************************************* */}
      <div className="container">
        <div className="row">
          <div className="col-md-4 card">
            {/* <PersonalInfo /> */}

            <div className="card mb-4 none">
              <div className="card-body">
                <h5 className="car2">Personal Info</h5>
                <div className="d-flex justify-content-between">
                  <span className="Noneditable-text">Student ID</span>
                  <span className="text-start flex-grow-1"> 1420572</span>
                </div>
                <div className="editable-container">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="editable-label">Age </span>
                    <span className="text-start flex-grow-1">26 yo</span>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <span className="editable-label">Nationality </span>
                    <span className="text-start flex-grow-1">Sudanese</span>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <span className="editable-label">Country </span>
                    <span className="text-start flex-grow-1">Egypt</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <span className="editable-label">City</span>
                    <span className="text-start flex-grow-1">Cairo</span>
                  </div>
                </div>
              </div>
            </div>
            {/* *************************************************** */}
            {/* <Education /> */}
            <div className="card mb-4 none">
              <div className="card-body">
                <h5 className="car2">Education</h5>
                <div className="mt-3 d-flex flex-column">
                  <span className="editable-label">University </span>
                  <span className="text-start flex-grow-1 w-100">
                    International Islamic University
                  </span>
                </div>
                <div className="mt-3 d-flex flex-column">
                  <label htmlFor="major" className="editable-label">
                    Major
                  </label>

                  <span className="text-start flex-grow-1 ">
                    Computer Science
                  </span>
                </div>
                <div className=" mt-3 d-flex flex-column">
                  <span className="editable-label">Graduation Year </span>
                  <span className="text-start flex-grow-1 w-100">2019</span>
                </div>
              </div>
            </div>
            {/* *************************************************** */}

            {/* <ContactInfo /> */}
            <div className=" mb-4 none">
              <div className="card-body">
                <h5 className="car2">Contact Info</h5>
                <div className="d-flex mt-2 gap-2">
                  <span className="icon-email">
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <div className="d-flex flex-column ">
                    <span className="editable-label">Email</span>
                    <span className="text-start ">balqeessabir@gmail.com</span>
                  </div>
                </div>
                <div className="d-flex mt-2 gap-2">
                  <span className="icon-phone">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <div className="d-flex flex-column ">
                    <span className="editable-label">Mobile Number</span>
                    <span className="text-start flex-grow-1 ">
                      0020 1064569047
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* *************************************************** */}
          </div>
          <div className="col-md-8">
            {/* <About /> */}
            <div className="text-white card py-2 mb-4 px-3">
              <h5>About</h5>
              <p className="text-start flex-grow-1">
                At vero eos et accusamus et justo odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores.
              </p>
            </div>
            {/* *************************************************** */}
            {/* <InProgressCourses /> */}

            <div className="mb-4">
              <h5 className="text-white">In Progress</h5>
              <div>
                <div className="card-body">
                  <Course
                    title="Introduction to Data Analysis"
                    instructor="Mohammed Nour"
                    level="1"
                  />
                  <Course
                    title="Introduction to React JS"
                    instructor="Tariq Ali"
                    level="1"
                  />
                </div>
              </div>
            </div>
            {/* *************************************************** */}
            {/* <PreviousCourses /> */}
            <div className="mb-4">
              <h5 className="text-white">Previous Courses</h5>
              <div>
                <div className="card-body">
                  <Course
                    title="System Analysis and Design"
                    instructor="Sarah Ahmed"
                    level="1"
                  />
                  <Course
                    title="Introduction to Web Development"
                    instructor="Alaa Sameer"
                    level="1"
                  />
                </div>
              </div>
            </div>
            {/* *************************************************** */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
