import React, { useState } from "react";
import Course from "../components/studentProfile/Course";
import { Link, useNavigate } from "react-router-dom";

// Define arrays for personal info, education, and contact info to dynamically generate the content
const personalInfoFields = [
  { label: "Student ID", value: "1420572", editable: false },
  { label: "Age", value: "26 yo", editable: true },
  { label: "Nationality", value: "Sudanese", editable: true },
  { label: "Country", value: "Egypt", editable: true },
  { label: "City", value: "Cairo", editable: true },
];

const educationFields = [
  {
    label: "University",
    value: "International Islamic University",
    editable: true,
  },
  { label: "Graduation Year", value: "2019", editable: true },
];

const contactInfoFields = [
  {
    label: "Email",
    value: "balqeessabir@gmail.com",
    editable: true,
    icon: "fa-regular fa-envelope",
  },
  {
    label: "Mobile Number",
    value: "0020 1064569047",
    editable: true,
    icon: "fa-solid fa-phone",
  },
];

function EditStudentProfile() {
  const navigate = useNavigate();
  const [major, setMajor] = useState("Computer Science");
  const [personalInfo, setPersonalInfo] = useState(personalInfoFields);
  const [educationInfo, setEducationInfo] = useState(educationFields);
  const [contactInfo, setContactInfo] = useState(contactInfoFields);

  const handleInputChange = (index, value, type) => {
    if (type === "personal") {
      const updatedInfo = [...personalInfo];
      updatedInfo[index].value = value;
      setPersonalInfo(updatedInfo);
    } else if (type === "education") {
      const updatedInfo = [...educationInfo];
      updatedInfo[index].value = value;
      setEducationInfo(updatedInfo);
    } else if (type === "contact") {
      const updatedInfo = [...contactInfo];
      updatedInfo[index].value = value;
      setContactInfo(updatedInfo);
    }
  };

  const handleMajorChange = (event) => {
    setMajor(event.target.value);
  };

  // const saveChanges = async () => {
  //   // Collect all data into an object
  //   const data = {
  //     major,
  //     age,
  //     nationality,
  //     country,
  //     city,
  //     university,
  //     graduationYear,
  //     email,
  //     mobileNumber,
  //     about,
  //   };

  //   try {
  //     // Send a POST request to the backend
  //     const response = await axios.post(
  //       "http://localhost:5000/api/student/profile",
  //       data
  //     );
  //     console.log("Data saved successfully:", response.data);
  //     alert("Changes saved successfully!");
  //   } catch (error) {
  //     console.error("Error saving changes:", error);
  //     alert("Failed to save changes.");
  //   }
  // };

  return (
    <div>
      <div className="text-white py-4 mb-4">
        <div className="container">
          <div className="text-left mb-4">
            <h2>Profile</h2>
            <div
              className="border-bottom"
              style={{ borderColor: "#ffc107", width: "100px" }}
            ></div>
            <p className="mt-2">6th June 2023</p>
          </div>

          {/* Profile Picture, Name, and Save Button */}
          <div className="car d-flex align-items-center justify-content-between py-2">
            <div className="d-flex align-items-center">
              <div className="position-relative">
                <div
                  className="profile-pic bg-secondary rounded-circle mx-3"
                  style={{ width: "100px", height: "100px" }}
                ></div>
                <div className="mt-2 position-absolute bottom-0 end-0 ">
                  <Link href="#">
                    <i
                      className="fs-6 fa-regular fa-pen-to-square icon"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </Link>
                </div>
              </div>
              <div className="ms-1">
                <h3>Balqees Hamdi Sabir</h3>
                <p>Computer Science, International Islamic University</p>
              </div>
            </div>
            <button
              className="btn me-3"
              style={{ color: "white", backgroundColor: "#ffc107" }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Personal Info Section */}
      <div className="container">
        <div className="row">
          <div className="col-lg-4 card">
            <div className="card mb-4 none">
              <div className="card-body">
                <h5 className="car2 ps-3">Personal Info</h5>
                {personalInfo.map((info, index) => (
                  <div
                    className="d-flex align-items-center mb-2 ps-3"
                    key={index}
                  >
                    <span className="editable-label">{info.label}</span>
                    {info.editable ? (
                      <input
                        type="text"
                        value={info.value}
                        onChange={(e) =>
                          handleInputChange(index, e.target.value, "personal")
                        }
                        className="form-control editable-text"
                      />
                    ) : (
                      <span className="Noneditable-text">{info.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="card mb-4 none">
              <div className="card-body">
                <h5 className="car2 ps-3">Education</h5>
                {educationInfo.map((info, index) => (
                  <div className="mt-3 ps-3" key={index}>
                    <span className="editable-label">{info.label}</span>
                    {info.editable ? (
                      <input
                        type="text"
                        value={info.value}
                        onChange={(e) =>
                          handleInputChange(index, e.target.value, "education")
                        }
                        className="form-control editable-text"
                      />
                    ) : (
                      <span className="Noneditable-text">{info.value}</span>
                    )}
                  </div>
                ))}
                <div className="ps-3 mt-2">
                  <label htmlFor="major" className="editable-label">
                    Major
                  </label>
                  <select
                    id="major"
                    className="form-control w-100"
                    value={major}
                    onChange={handleMajorChange}
                  >
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">
                      Information Technology
                    </option>
                    <option value="Software Engineering">
                      Software Engineering
                    </option>
                    <option value="Data Science">Data Science</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className=" mb-4 none">
              <div className="card-body">
                <h5 className="car2 ps-3">Contact Info</h5>
                {contactInfo.map((info, index) => (
                  <div
                    className="d-flex align-items-center mb-2 ps-3"
                    key={index}
                  >
                    <span className={`icon ${info.icon}`}>
                      <i className={info.icon}></i>
                    </span>
                    <span className="editable-label">{info.label}</span>
                    <input
                      type="text"
                      value={info.value}
                      onChange={(e) =>
                        handleInputChange(index, e.target.value, "contact")
                      }
                      className="form-control editable-text"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="col-lg-8">
            <div className="text-white card py-2 mb-4 px-3">
              <h5>About</h5>
              <textarea
                className="form-control editable-text user-profile-about-field"
                // defaultValue="At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
              />
            </div>

            {/* In Progress Courses */}
            <div className="mb-4">
              <h5 className="text-white">In Progress</h5>
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

            {/* Previous Courses */}
            <div className="mb-4">
              <h5 className="text-white">Previous Courses</h5>
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
        </div>
      </div>
    </div>
  );
}

export default EditStudentProfile;
