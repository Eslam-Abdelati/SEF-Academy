import React, { useRef } from "react";
import "./CertificateForm.css"
function CertificateForm() {
 const fileInputRef = useRef(null);
   const handleBrowseClick = () => {
     fileInputRef.current.click();
   };
  return (
    <div className="container d-flex flex-column ">
      <div className="title">Certificate Details</div>
      <form action="#">
        <div className="user_details">
          <div className="input-box">
            <span className="details">Student Name</span>
            <input type="text" required  placeholder=""/>
            {/* <select required defaultValue="">
              <option value="" disabled>
                
              </option>
              <option value="student1">Student 1</option>
              <option value="student2">Student 2</option>
            </select> */}
          </div>
          <div className="input-box">
            <span className="details">Date Acquired</span>
            {/* <input type="date" required  placeholder=""/> */}
            <input type="text" required  placeholder=""/>
          </div>
          <div className="input-box">
            <span className="details">Upload Date</span>
            {/* <input type="date" required /> */}
            <input type="text" required  placeholder=""/>
          </div>
          <div className="input-box full-width">
            <span className="details">Course</span>
            <select required defaultValue="">
              <option value="" disabled>
               
              </option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course1">Course 3</option>
            </select>
          </div>

          {/* Mohammed hussein kamel started from here */}
          <div className="mohammed">
            <span className="details">Upload Certificate</span>
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
                  Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word,
                  PPT
                </p>
                {/* <input
                  type="file"
                  id="fileInput"
                  name="file"
                  accept=".jpg,.png,.gif"
                  required
                /> */}

                <input
                  type="file"
                  ref={fileInputRef}
                  id="fileInput"
                  name="file"
                  accept=".jpg,.png,.gif,.mp4,.ppt, .pdf, .psd, .ai, .doc, .docx"
                  required
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="buttons">
              <input
                type="button"
                value="CANCEL"
                style={{ backgroundColor: "grey" }}
              />
              <input type="submit" value="UPLOAD" />
            </div>
          </div>
          {/* Mohammed hussein kamel ended here */}
        </div>
      </form>
    </div>
  );
}

export default CertificateForm;
