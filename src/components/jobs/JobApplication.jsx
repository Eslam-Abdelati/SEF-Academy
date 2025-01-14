import React from "react";
import { useParams } from "react-router-dom";
import "./JobApplication.css"; // Import the CSS file
import { useRef } from "react";
import { useSelector } from "react-redux";

function JobApplication() {
  const fileInputRef = useRef(null);
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };
  const { id } = useParams();
  const jobs = useSelector((state) => state.jobs.jobsdata);
  const job = jobs?.find((job) => job._id === id);

  if (!job) {
    return <h2>Job not found</h2>;
  }

  return (
    <div className="job-application">
      <div className="job-application-container">
        <div className="header d-flex justify-content-between">
          <div className="title ">
            <div className=" text-danger">EIT</div>
            <div className="details">
              <div>{job.jobName}</div>
              <div className="location">{job.location}</div>
            </div>
          </div>
          <div className="price">
            <div className="range">
              {job.minPrice} EGP - {job.maxPrice} EGP
            </div>
            <div className="text-sm flex items-center justify-end">
              <i className="fas fa-map-marker-alt mr-1"></i> On Site
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="name">Applicant Name</div>
          <div className="subtext">User Name HERE</div>
        </div>

        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" required />
          </div>

          <div className="input-group">
            <label>Years Of Experience</label>
            <input type="text" required />
          </div>

          <div className="input-group">
            <label>Mobile Number</label>
            <input type="text" required />
          </div>

          <div className="upload-cv ">
            <div className="upload-icon">
              <i className="fas fa-cloud-upload-alt text-3xl"></i>
            </div>
            <div className="text-sm">
              Drag & drop files or{" "}
              <span className="text-warning browse-word" onClick={handleBrowseClick}>
                Browse
              </span>
            </div>
            <div className="formats">
              Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
            </div>
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

          <div className="actions">
            <button type="button" className="cancel-button">
              CANCEL
            </button>
            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobApplication;
