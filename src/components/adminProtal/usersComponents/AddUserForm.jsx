import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AddUserForm() {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    status: "",
    email: "",
    role: "Student",
    mobile: "",
    userId: "",
    password: "",
    passwordConfirmation: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className=" mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Add User Details</h4>
        <button className="btn btn-publish">PUBLISH</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-5 col-sm-12 mb-2">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-5 col-sm-12 mb-2">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2 col-sm-12 mb-2">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              className="form-select"
              id="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Choose...
              </option>
              <option value="1">Active</option>
              <option value="2">Inactive</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-8 col-sm-12 mb-2">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4 col-sm-12 mb-2">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <select
              className="form-select"
              id="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 col-sm-12 mb-2">
            <label htmlFor="mobile" className="form-label">
              Mobile Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 col-sm-12 mb-2">
            <label htmlFor="userId" className="form-label">
              User ID
            </label>
            <input
              type="text"
              className="form-control"
              id="userId"
              value={formData.userId}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 col-sm-12 mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 col-sm-12 mb-2">
            <label htmlFor="passwordConfirmation" className="form-label">
              Password Confirmation
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordConfirmation"
              value={formData.passwordConfirmation}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-cancel btn-secondary me-2">
            CANCEL
          </button>
          <button type="submit" className="btn btn-save btn-warning ">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUserForm;
