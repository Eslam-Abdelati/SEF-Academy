import React, { useEffect, useState } from "react";
import "./Jobs.css";
import { IoMdSearch } from "react-icons/io";
import { CgTimer } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { ImMenu } from "react-icons/im";
import { RiMenu5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import Filters from "./Filters";
import JobList from "./JobList";
import { Route, Routes } from "react-router-dom";
import JobDetail from "./JobDetail";
import JobApplication from "./JobApplication";
import { setFilter } from "../../redux/slice/JobsSlice";

const Jobs = () => {
  const dispatch = useDispatch();

  const [inputsearch, setInputsearch] = useState("");

  useEffect(() => {
    dispatch(
      setFilter({
        searchQuery: inputsearch.toLowerCase().replace(/\s+/g, ""),
      })
    );
  });

  return (
    <section className="jobs">
      <div className="jobs-container">
        <h2>jobs</h2>
        <h3>6th June 2023</h3>
        <div className="content">
          <div className="content-top">
            <div className="content-top-left">
              <h2>Looking for a job?</h2>
              <p>
                Here you can find your best match between 1000s of updated and
                available positions.
              </p>
            </div>
            <div className="content-top-right">
              <i>
                <IoMdSearch color="#bf9b30" size={35} />
              </i>
              <input
                type="text"
                onChange={(e) => setInputsearch(e.target.value)}
                placeholder="Search for a job"
              />
              <button onClick={() => console.log(1)}>Search</button>
            </div>
            <div className="hide">
              <button onClick={() => console.log(1)}>Search</button>
              <button
                onClick={() =>
                  // setActive(!active)
                  console.log(1)
                }
              >
                <RiMenu5Fill size={40} />
              </button>
            </div>
          </div>
          <div className="content-bottom">
            <Filters />
            <Routes>
              <Route path="/" element={<JobList />} />

              <Route path="/:id" element={<JobDetail  />} />
              <Route path="/application/:id" element={<JobApplication />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
