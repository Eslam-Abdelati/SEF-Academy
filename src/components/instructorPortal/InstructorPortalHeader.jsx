import React from "react";
import useFormattedDate from "../../hooks/useFormattedDate";

const InstructorPortalHeader = () => {
  const date = useFormattedDate();
  return (
    <div className="  text-white  ">
      <div>
        <p className="page-title">Instructor Portal</p>

        <p className="">{date}</p>
      </div>
      <div className="  text-white   row ">
        <h2 className="col-sm-8 ">
          WELCOME BACK<h2 className="text-warning d-inline">TARIQ ALI</h2>
        </h2>
        <div className="col-sm-4 d-flex justify-content-end">
          <button className="btn btn-warning btn3 h4 text-white ">
            VIEW PROFILE
          </button>
        </div>
      </div>
    </div>
  );
};
export default InstructorPortalHeader;
