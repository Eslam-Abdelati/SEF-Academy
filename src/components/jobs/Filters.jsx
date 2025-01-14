import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetFilter, setFilter } from "../../redux/slice/JobsSlice";

const Filters = () => {
  const filterData = useSelector((state) => state.jobs.filter);
  console.log(filterData);
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobSalary, setJobSalary] = useState([0, 500000]);
  const [jobLevel, setJobLevel] = useState("");

  const setFilters = () => {
    setJobLocation(filterData.location);
    setJobType(filterData.jobType);
    setJobSalary(filterData.salaryRang);
    setJobLevel(filterData.level);
  };
  useEffect(() => {
    setFilters();
  });

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(jobLocation, jobType, jobSalary, jobLevel);

    dispatch(
      setFilter({
        location: jobLocation,
        jobType: jobType,
        salaryRang: jobSalary,
        level: jobLevel,
      })
    );
    console.log(filterData);
  }, [jobLocation, jobType, jobSalary, jobLevel]);

  const resetFilters = () => {
    dispatch(resetFilter());
    setJobLocation("");
    setJobType("");
    setJobSalary([0, 500000]);
    setJobLevel("");
  };

  const isChecked = (value, list) => list.includes(value);
  return (
    <div className={`content-bottom-left `}>
      <div className="filters-clear">
        <h4>Filters</h4>
        <button className="btn " onClick={resetFilters}>
          Clear All
        </button>
      </div>
      <div className="location">
        <h2>Location</h2>
        <select
          className="form-select"
          onChange={(e) => {
            setJobLocation(e.target.value);
          }}
        >
          <option value="">All</option>
          <option value="cairo">Cairo</option>
          <option value="alex">ALEX</option>
          <option value="giza">Giza</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="job-type">
        <h2>Job Type</h2>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              name="jobType"
              value="fullTime"
              checked={isChecked("fullTime", jobType)}
              onChange={(e) => {
                if (jobType === e.target.value) {
                  setJobType("");
                } else {
                  setJobType(e.target.value);
                }
              }}
            />
            Full Time
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              name="jobType"
              value="partTime"
              checked={isChecked("partTime", jobType)}
              onChange={(e) => {
                if (jobType === e.target.value) {
                  setJobType("");
                } else {
                  setJobType(e.target.value);
                }
              }}
            />
            Part Time
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              name="jobType"
              value="remote"
              checked={isChecked("remote", jobType)}
              onChange={(e) => {
                if (jobType === e.target.value) {
                  setJobType("");
                } else {
                  setJobType(e.target.value);
                }
              }}
            />
            Remote
          </label>
        </div>
      </div>
      <div className="job-type">
        <h2>Job Level</h2>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              name="jobLevel"
              value="entery"
              checked={isChecked("entery", jobLevel)}
              onChange={(e) => {
                if (jobLevel === e.target.value) {
                  setJobLevel("");
                } else {
                  setJobLevel(e.target.value);
                }
              }}
            />
            Entry Level
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              name="jobLevel"
              value="intermediate"
              checked={isChecked("intermediate", jobLevel)}
              onChange={(e) => {
                if (jobLevel === e.target.value) {
                  setJobLevel("");
                } else {
                  setJobLevel(e.target.value);
                }
              }}
            />
            Intermediate
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              name="jobLevel"
              value="expert"
              checked={isChecked("expert", jobLevel)}
              onChange={(e) => {
                if (jobLevel === e.target.value) {
                  setJobLevel("");
                } else {
                  setJobLevel(e.target.value);
                }
              }}
            />
            Expert
          </label>
        </div>
      </div>
      <div className="salary-range mt-5">
        <h2>Salary Range</h2>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              name="jobSalary"
              // value={[0, 4000]}
              checked={jobSalary[1] === 4000}
              onChange={(e) => {
                if (jobSalary[1] === 4000) {
                  setJobSalary([0, 500000]);
                } else {
                  setJobSalary([0, 4000]);
                }
              }}
            />
            Under 4000 EGP
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              name="jobSalary"
              // value={[4000, 10000]}
              checked={jobSalary[0] === 4000 && jobSalary[1] === 10000}
              onChange={(e) => {
                if (jobSalary[0] === 4000 && jobSalary[1] === 10000) {
                  setJobSalary([0, 500000]);
                } else {
                  setJobSalary([4000, 10000]);
                }
              }}
            />
            between 4000 & 10000 EGP
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              name="jobSalary"
              // value={[10000, 500000]}
              checked={jobSalary[0] === 10000}
              onChange={(e) => {
                if (jobSalary[0] === 10000) {
                  setJobSalary([0, 500000]);
                } else {
                  setJobSalary([10000, 500000]);
                }
              }}
            />
            More Than 10000 EGP
          </label>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Link to="/create-cv" className="text-center d-block w-50">
          <button className="btn btn-warning  px-5">Create CV</button>
        </Link>
      </div>
    </div>
  );
};

export default Filters;
