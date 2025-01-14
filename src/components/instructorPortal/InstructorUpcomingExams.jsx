import React from "react";
// import Title2 from "./title2";
// import { GoPerson } from "react-icons/go";
import { PiNotePencilLight } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
const InstructorUpcomingExams = (props) => {
  return (
    <>
      <div className="text-white">
        <div className="d-flex justify-content-between mt-5">
          <h3 className="page-title">Upcoming Exams</h3>
          <div className=" d-flex justify-content-end ">
            <button className="btn btn-warning  h6 ">CREATE NEW</button>
          </div>
        </div>

        <div className="d-flex justify-content-between gap-5">
          <div className="d-flex ">
            <div className="bg-dark text-light rounded-2 d-flex flex-column text-center max-content gap-1">
              <span className="px-3 pt-2"> {props.date} </span>

              <span className="px-3"> {props.mon} </span>

              <div className="bg-warning rounded-bottom-2 py-1 px-4">
                <span className=""> {props.day} </span>
              </div>
            </div>
          </div>
          <div className=" flex-grow-1 flex justify-content-between">
            <div className="d-flex justify-content-between">
              <p className="h4">{props.title} &nbsp; &nbsp; &nbsp; &nbsp; </p>
              <PiNotePencilLight className="text-warning" />
            </div>
            <span className="text-warning">
              Instructor <span className="text-light">: TARIQ AF</span>
            </span>
            <div className="d-flex justify-content-between">
              <span className="">Lev.{props.level} Exem</span>
              <span className="d-flex gap-1 justify-content-center align-items-center">
                <FaRegClock className=" text-secondary" />
                {props.hour}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InstructorUpcomingExams;
