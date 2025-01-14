import React from "react";
import CircularProgress from "./CircularProgress";

const CourseCard = ({
  percentage,
  title,
  level,
  hoursCompleted,
  totalHours,
}) => {
  return (
    <div className="bg-black text-white text-lg-center p-4 py-5 students-course-card-progress">
      <div className="d-flex flex-row flex-lg-column justify-content-lg-between align-items-center gap-4 ">
        <div className="d-flex justify-content-center ">
          <CircularProgress percentage={percentage} />
        </div>
        <div>
          <h4>{title}</h4>
          <p>LEV. {level}</p>
          <p>
            {hoursCompleted} / {totalHours} Hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
