import React, { useState } from "react";

function Education() {
  // State for dropdown selection
  const [major, setMajor] = useState("Computer Science");

  const handleMajorChange = (event) => {
    setMajor(event.target.value);
  };

  return (
    <div className="card mb-4 none">
      <div className="card-body">
        <h5 className="car2 ps-3">Education</h5>
        <div className="mt-3 ps-3">
          <span className="editable-label">University </span>
          <span className="editable-text w-100" contentEditable>
            International Islamic University
          </span>
        </div>
        <div className="ps-3 mt-2">
          <label htmlFor="major" className="editable-label">
            Major{" "}
          </label>
          <select
            id="major"
            className="editable-text text-white w-100"
            value={major}
            onChange={handleMajorChange}
          >
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>
        <div className="ps-3 mt-2">
          <span className="editable-label">Graduation Year </span>
          <span className="editable-text w-100" contentEditable>
            2019
          </span>
        </div>
      </div>
    </div>
  );
}

export default Education;
