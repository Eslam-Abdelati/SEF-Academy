import React from "react";
import { Button } from "react-bootstrap";
import "../assets/styles/StudentPortal.css";
import StudentCoursesProgress from "../components/studentPortal/StudentCoursesProgress";

const StudentPortal = () => {
  const registeredCourses = [
    {
      title: "Introduction to React js",
      instructor: "Tariq Ali",
      level: "lev.1",
    },
    {
      title: "Introduction to Data Analysis",
      instructor: "Sarah Ahmed",
      level: "lev.1",
    },
  ];

  const upcomingExams = [
    {
      date: "7th Jun",
      day: "wed",
      title: "Introduction to React js",
      instructor: "Tariq Ali",
      time: "12:30 PM",
      level: "Lev.1 Exam",
    },
  ];

  

  const earnedCertificates = [
    {
      title: "Introduction to React js",
      instructor: "Tariq Ali",
      dateAcquired: "Monday, June 5th",
    },
  ];

  return (
    <div className="px-lg-5">
      <div>
        <div className="Student-Portal">
          <div className="Student-title">
            <div>
              <h6 className="my-1 pt-5 page-title">Student Portal</h6>
              <h6 className="mb-3">6th June 2023</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <p className="h1 text-white">
              WELCOME BACK <span className=" text-warning">BALQEES SABIR</span>
            </p>
            <Button className="btn btn-text btn-warning">VIEW PROFILE</Button>
          </div>

          <div className="exam-info mt-5">
            <div className="student-progress-info-container d-flex flex-column flex-lg-row justify-content-between gap-5">
              {[
                { count: 1, label: "upcoming exams" },
                { count: 4, label: "registered courses" },
                { count: 2, label: "completed courses" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center gap-5"
                >
                  <span className="text-center py-4 text-white student-progress-count h3">
                    {item.count}
                  </span>
                  <p className=" text-start h5 text-uppercase flex-grow-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="progress-item mb-5">
              <div className="d-flex align-items-center justify-content-between">
                <h2 className="text-uppercase text-white">level : 1</h2>
                <span className="text-white py-1">97 %</span>
              </div>
              <div className="progress m-0" style={{ height: "8px" }}>
                <div
                  data-aos-duration="3200"
                  data-aos="fade-right"
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "97%", height: "10px" }}
                ></div>
              </div>
            </div>

            <div className=" bg-secondary p-4 d-flex align-items-center gap-2 max-content">
              <p>O</p>
              <p className=" text-uppercase text-white fs-4">
                all clear, you don't have any exam today.
              </p>
            </div>
          </div>

          <div className="d-flex flex-column-reverse flex-lg-row justify-content-between gap-5 mt-5">
            <div className="flex-grow-1">
              <h2 className="text-white fw-bold">Registered Courses</h2>
              <div className="d-flex flex-column gap-5">
                {registeredCourses.map((course, index) => (
                  <div key={index} className="bg-black p-3">
                    <p className="h4 text-white">{course.title}</p>
                    <p className="name">
                      <span className="ins">Instructor</span> :{" "}
                      {course.instructor}
                    </p>
                    <div className="d-flex justify-content-between ">
                      <p className="h4 text-white text-uppercase">
                        {course.level}
                      </p>
                      <Button className="btn btn-warning text-uppercase ">
                        view details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-grow-1"></div>
            <div className="flex-grow-1">
              <h2 className="text-white fw-bold">Upcoming Exams</h2>
              <div className="d-flex flex-column gap-5">
                {upcomingExams.map((exam, index) => (
                  <div key={index} className="d-flex bg-black p-3">
                    <div className="">
                      <p className=" text-uppercase text-center my-2">
                        <p>{exam.date}</p>
                        <p>{exam.date}</p>
                        <p className=" rounded-bottom bg-warning w-100 mt-2 py-1 px-4 py-0">
                          {exam.day}
                        </p>
                      </p>
                    </div>
                    <div className="p-1 rounded-1 mt-1">
                      <div className="certificante-info p-3">
                        <h5>{exam.title}</h5>
                        <div className="fs-6">
                          <p className="name1">
                            <span>Instructor: </span> {exam.instructor}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="text-white">{exam.level}</p>
                          <i className="bi bi-clock text-secondary"></i>
                          {exam.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 py-lg-5 py-3" >
            <div className=" text-white mt-5 d-flex flex-column gap-3">
              <h2>
                Here’s how you’ve been doing for the
                <span className="text-warning ms-3"> last month</span>
              </h2>

              <StudentCoursesProgress />
            </div>
          </div>

          <div className="mt-5">
            <div className="certificantes">
              <div className="certificantes-title text-white">
                <h2 className="fw-bold">Earned Certificates</h2>
              </div>
              {earnedCertificates.map((certificate, index) => (
                <div key={index} className="certificant-desc mx-1">
                  <div className="certificante-info p-3">
                    <h4>{certificate.title}</h4>
                    <div className="d-flex justify-content-between gap-4 fs-6">
                      <p className="name1">
                        <span>Instructor: </span> {certificate.instructor}
                      </p>
                      <p className="name1">
                        <span>Date Acquired:</span> {certificate.dateAcquired}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-warning m-4">Download</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;
