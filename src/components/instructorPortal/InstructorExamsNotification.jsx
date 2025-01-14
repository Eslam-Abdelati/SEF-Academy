import { React, useState, useCallback, useEffect, UserContext } from "react";
import { FiCheckCircle } from "react-icons/fi";

const InstructorExamsNotification = () => {
  return (
    <div className="d-flex align-items-center gap-2 p-3 fs-4 bg-secondary text-white " style={{width:"max-content"}}>
      <span>
        <FiCheckCircle className="" />
      </span>
      <span className="">ALL CLEAR,YOU DON'T HAVE ANY EXAMS TODAY</span>
    </div>
  );
};
export default InstructorExamsNotification;
