import React from "react";

function Course({ title, instructor, level }) {
  return (
    <div className="card my-3 py-2 ">
      <div className="card-body d-flex justify-content-between align-items-start">
        <div>
          <h6 className="mb-1">{title}</h6>
          <p className="mb-0 small">
            <span style={{ color: "#ffc107" }}>Instructor: </span>
            <span className="text-whiite">{instructor}</span>
          </p>
        </div>
        <div className="ml-auto">
          <span className="badge badge-primary">Level {level}</span>
        </div>
      </div>
    </div>
  );
}

export default Course;
