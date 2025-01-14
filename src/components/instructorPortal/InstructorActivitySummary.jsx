import { React, useState, useCallback, useEffect, UserContext } from "react";

const InstructorActivitySummary = (props) => {
  return (
    <div className="d-flex  pt-2  text-white justify-content-between">
      <div className="d-flex ">
        <span className="border border-warning border-2 px-4 py-3 h1 span1">
          {props.frist}
        </span>

        <div className="d-inline-block pt-3 ps-2">
          <p className="">UPCOMING</p>
          <p className="">EXAMS</p>
        </div>
      </div>
      <div className="d-flex ">
        <span className="border border-warning border-2 h1 px-4 py-3 span1">
          {props.sec}
        </span>
        <div className="d-inline-block pt-3 ps-2">
          <p className="">ONGOING</p>
          <p className="">COURSES</p>
        </div>
      </div>
      <div className="d-flex ">
        <span className="border border-warning border-2 h1 px-4 py-3 span1">
          {props.third}
        </span>
        <div className="d-inline-block pt-3 ps-2">
          <p className="">COMPLETED</p>
          <p className="">COURSES</p>
        </div>
      </div>
    </div>
  );
};
export default InstructorActivitySummary;
