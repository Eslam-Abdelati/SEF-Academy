import React from "react";
import useFormattedDate from "../hooks/useFormattedDate";
import { Link } from "react-router-dom";
const ExamCard = ({
  date,
  time,
  title,
  instructor,
  level,
  score,
  isUpcoming,
}) => (
  <div className="card w-100 cardExam text-white py-2 mb-3">
    <div className="card-body d-flex flex-column justify-content-around align-items-start align-items-md-center flex-md-row">
      <div className="scheduleContent col-12 col-md-3 mb-3 mb-md-0">
        <p className="m-0">
          <i className="fas fa-calendar-alt color-primary me-2"></i>
          {date}
        </p>
        <p className="m-0">
          <i className="fas fa-clock color-primary me-2"></i>
          {time}
        </p>
      </div>
      <div className="col-12 col-md-3 mb-3 mb-md-0 text-start text-md-center">
        <h5 className="head-responsive">{title}</h5>
        <p className="para-responsive">
          <span className="color-primary">Instructor</span>: {instructor}
        </p>
      </div>
      <div className="col-12 col-md-2 mb-3 mb-md-0 d-flex align-items-center justify-content-between">
        <h5 className="fs-5">{level}</h5>
        <h5 className="fs-5">{score ? score : "NA"}</h5>
      </div>
      <div className="col-12 col-md-2">
        {isUpcoming ? (
          <button type="button" className="btn btn-secondary w-100 join-button">
            Join Exam
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-secondary w-100 finished-button"
            disabled
          >
            Finished
          </button>
        )}
      </div>
    </div>
  </div>
);

const StudentExams = () => {
    const date = useFormattedDate()
  return (
    <div className="exam-background text-white">
      <div className="container py-5">
        <div className="text-white mb-4">
          <h6 className="head-responsive page-title">Exams</h6>
          <p>{date}</p>
        </div>

        <div className="section mb-5">
          <h4 className="text-white mb-4">Upcoming Exams</h4>
          <ExamCard
            date="Wednesday, June 7th"
            time="12:30 PM"
            title="Introduction to Data Analysis"
            instructor="Mohammed Nour"
            level="LEV. 1"
            isUpcoming={true}
          />
        </div>

        <div className="section">
          <h4 className="text-white mb-4">Previous Exams</h4>
          <ExamCard
            date="Monday, June 5th"
            time="12:30 PM"
            title="System analysis and design"
            instructor="Sarah Ahmed"
            level="LEV. 1"
            score="90/100"
          />
          <ExamCard
            date="Saturday, June 3rd"
            time="12:30 PM"
            title="Introduction to Web Development"
            instructor="Alaa Sameer"
            level="LEV. 1"
            score="99/100"
          />
          <ExamCard
            date="Saturday, June 3rd"
            time="12:30 PM"
            title="Introduction to Web Development"
            instructor="Alaa Sameer"
            level="LEV. 1"
            score="99/100"
          />
        </div>

        <div className="pagination-container mt-4">
          <nav aria-label="Exam pagination">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <Link
                  className="page-link text-white bg-dark border-secondary"
                  href="#"
                >
                  &lt;
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link text-white bg-dark border-secondary"
                  href="#"
                >
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link text-white bg-dark border-secondary"
                  href="#"
                >
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link text-white bg-dark border-secondary"
                  href="#"
                >
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link text-white bg-dark border-secondary"
                  href="#"
                >
                  &gt;
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default StudentExams;
