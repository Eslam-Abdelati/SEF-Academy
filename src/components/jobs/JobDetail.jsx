import React from "react";
import { useParams, Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { CiLocationOn } from "react-icons/ci";
import { CgTimer } from "react-icons/cg";
import { useSelector } from "react-redux";
// import "./Jobs.css"

const JobDetail = () => {
  const { id } = useParams();
  const jobs = useSelector((state) => state.jobs.jobsdata); // Get the job ID from the URL
  const job = jobs?.find((job) => job._id === id); // Find the job by ID

  if (!job) {
    return <h2>Job not found</h2>; // Fallback if job is not found
  }

  return (
    <div className="content-bottom-right px-3">
      <div className="job" key={job._id}>
        <div className="job-header">
          <div className="title">
            <p>
              <ImMenu size={50} />
              IT
            </p>
            <div>
              <h2>{job.jobName}</h2>
              <h3>
                {job.companyName} , {job.location}
              </h3>
            </div>
          </div>
          <div className="price">
            <p>
              {job.minPrice} EGB - {job.maxPrice} EGB per Month
            </p>
            <p>
              <CiLocationOn
                className="inline-block"
                color="#b49b30"
                size={25}
              />{" "}
              On Site
            </p>
          </div>
        </div>
        <div className="job-desc">
          <p>{job.description}</p>
          <div className="tools">
            {job.tools.map((tool, index) => (
              <p key={index}>{tool}</p>
            ))}
          </div>
        </div>
        <div className="job-details">
          <p>
            <CgTimer color="#474646" size={35} /> {job.time} ago
          </p>
        </div>
        <div className="d-flex flex-column gap-5 mt-5">
          <div>
            <h3>About Us</h3>
            <p>{job.aboutUs}</p>
          </div>
          <div>
            <h3>Job Description</h3>
            <p>{job.jobDescription}</p>
          </div>
          <div>
            <h3>Job Requirement</h3>
            <p>{job.jobRequirements}</p>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-4">
          <Link to={`/jobs/application/${job._id}`}>
            <button className="btn btn-warning" >Applay</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
