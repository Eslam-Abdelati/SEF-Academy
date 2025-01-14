import React from "react";
import CourseCard from "./CourseCard";

const StudentCoursesProgress = () => {
  const courses = [
    {
      percentage: 91,
      title: "Introduction to React js",
      level: 1,
      hoursCompleted: 27,
      totalHours: 30,
    },
    {
      percentage: 75,
      title: "Introduction to React js",
      level: 1,
      hoursCompleted: 27,
      totalHours: 30,
    },
    {
      percentage: 100,
      title: "Introduction to Data Analysis",
      level: 1,
      hoursCompleted: 27,
      totalHours: 30,
    },
    {
      percentage: 85,
      title: "System analysis and design",
      level: 1,
      hoursCompleted: 27,
      totalHours: 30,
    },
  ];



  return (
    <div className="d-flex justify-content-between flex-column flex-lg-row gap-3 ">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          percentage={course.percentage}
          title={course.title}
          level={course.level}
          hoursCompleted={course.hoursCompleted}
          totalHours={course.totalHours}
        />
      ))}
    </div>
  );
};

export default StudentCoursesProgress;
