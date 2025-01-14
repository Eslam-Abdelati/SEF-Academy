import { React, useState } from "react";
import InstructorActivitySummary from "../components/instructorPortal/InstructorActivitySummary";
// import Title2 from "./title2";
import InstructorPortalHeader from "../components/instructorPortal/InstructorPortalHeader";
import InstructorExamsNotification from "../components/instructorPortal/InstructorExamsNotification";
import InstructorOngoingCourses from "../components/instructorPortal/InstructorOngoingCourses";
import InstructorUpcomingExams from "../components/instructorPortal/InstructorUpcomingExams";
import InstructorUpcomingCourses from "../components/instructorPortal/InstructorUpcomingCourses";

const Result3 = () => {
  const [student, setstudent] = useState([
    { title: "Introduction to React js", level: 1, number: 20 },
    { title: "Introduction to React js", level: 2, number: 10 },
  ]);

  const [student2, setstudent2] = useState([
    {
      title: "Introduction to React js",
      level: 1,
      date: "7th",
      mon: "jun",
      day: "wed",
      hour: "20:30pm",
    },
  ]);
  return (
    <div className="">
      <InstructorPortalHeader />
      <InstructorActivitySummary frist="1" sec="4" third="2" />
      <InstructorExamsNotification />
      <div className=" d-flex text-white  justify-content-between gap-5 gap-lg-5 flex-column-reverse flex-lg-row">
        <div className="flex-grow-1">
          <p className="page-title h2">Ongoing Courses</p>
          <div className="mt-3 d-flex flex-column gap-2">
            {student.map((art) => (
              <InstructorOngoingCourses
                titleOfC={art.title}
                numOfLev={art.level}
                numOfStu={art.number}
              />
            ))}
          </div>
        </div>

        <div className="flex-grow-1">
          {student2.map((art) => (
            <InstructorUpcomingExams
              title={art.title}
              level={art.level}
              date={art.date}
              mon={art.mon}
              day={art.day}
              hour={art.hour}
            />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="page-title">Upcoming Courses</h3>
        <div className="instructor-upcoming-courses-outer-container">
          <InstructorUpcomingCourses />
          <InstructorUpcomingCourses />
          <InstructorUpcomingCourses />
        </div>
      </div>
    </div>
  );
};
export default Result3;
