import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../../redux/slice/CvSlice"; // Adjust the path to your cvSlice
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import PhoneInput styles

function CvMainInformation() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [nationality, setNationality] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  
  const fileInputRef = useRef(null);
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };
  

  
  const cv = useSelector((state) => state.cv.cv.mainInformaition);
  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    dispatch(updateField({ field: `mainInformaition.${field}`, value })); 
    console.log(cv);
  };

  return (
    <div>
      <div className="">
        <div className="row mb-3">
          <div className="col">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="form-control"
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                handleInputChange("fname", e.target.value); 
              }}
            />
          </div>
          <div className="col">
            <label className="form-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="form-control"
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                handleInputChange("lname", e.target.value); // Use 'lname' for last name
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label" htmlFor="profession">
              Profession
            </label>
            <input
              className="form-control"
              id="profession"
              type="text"
              value={profession}
              onChange={(e) => {
                setProfession(e.target.value);
                handleInputChange("profession", e.target.value); // Use 'profession'
              }}
            />
          </div>
          <div className="col">
            <label className="form-label" htmlFor="country">
              Country
            </label>
            <input
              className="form-control"
              id="country"
              type="text"
              value={nationality}
              onChange={(e) => {
                setNationality(e.target.value);
                handleInputChange("nationality", e.target.value); // Use 'nationality'
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3">
            <label className="form-label" htmlFor="city">
              City
            </label>
            <input
              className="form-control"
              id="city"
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                handleInputChange("address", e.target.value); // Use 'address' for city
              }}
            />
          </div>
          <div className="col-9">
            <label className="form-label" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="EG"
              value={phoneNumber}
              onChange={(value) => {
                setPhoneNumber(value);
                handleInputChange("phone", value); // Use 'phone'
              }}
              id="mobileNumber"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleInputChange("email", e.target.value); // Use 'email'
            }}
          />
        </div>
        <div className="cv-upload-logo-container mt-3">
          <span className="details">Personal Photo</span>
          <div className="upload-container">
            <div className="upload-box">
              <div className="upload-icon">
                <i className="fa-solid fa-cloud-arrow-up"></i>
              </div>
              <p className="upload-text">
                Drag & drop files or
                <span className="browse" onClick={handleBrowseClick}>
                  Browse
                </span>
              </p>
              <p className="supported-formats">
                Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
              </p>
              <input
                type="file"
                ref={fileInputRef}
                id="fileInput"
                name="file"
                accept=".jpg,.png,.gif,.mp4,.ppt,.pdf,.psd,.ai,.doc,.docx"
                style={{ display: "none" }}
                onChange={(e) => {
                  const fileName = e.target.files[0].name;
                  handleInputChange("img", fileName); // Use 'img' for personal photo
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvMainInformation;
