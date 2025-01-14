import React from "react";
import Course from "./Course";

const CoursesSection = ({ title, courses }) => {
  return (
    <div className="text-white">
      <h5>{title}</h5>
      {courses.map((course, index) => (
        <Course key={index} {...course} />
      ))}
    </div>
  );
};

export default CoursesSection;
