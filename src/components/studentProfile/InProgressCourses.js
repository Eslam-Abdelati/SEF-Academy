import React from "react";
import Course from "./Course";

function InProgressCourses() {
  return (
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
  );
}

export default InProgressCourses;
