import { React, useState, useCallback, useEffect, UserContext } from "react";
// import Title2 from "./title2";
import { GoPerson } from "react-icons/go";
const InstructorOngoingCourses = (props) => {
  return (
    <>
      <div className=" bg-black text-white d-flex justify-content-between  flex-column gap-5">
        <h3>{props.titleOfC}</h3>
        <div className="  text-white d-flex justify-content-between align-items-end ">
          <span className="h3">LEV.{props.numOfLev}</span>
          <div className=" d-flex justify-content-end align-items-end gap-2">
            <span className="">
              <GoPerson className="text-warning h4" /> {props.numOfStu}students{" "}
            </span>
            <button className="btn btn-warning text-white">
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default InstructorOngoingCourses;
