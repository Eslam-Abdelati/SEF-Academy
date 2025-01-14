import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StudentExamsPage() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the exams data from the JSON file
    axios
      .get("../DB/exams.json")
      .then((response) => {
        setExams(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching exams:", error);
        setLoading(false);
      });
  }, []);

  const currentDate = new Date();

  // Filter for upcoming exams
  const upcomingExams = exams.filter(
    (exam) => new Date(exam.startDate) > currentDate 
  );

  // Filter for previous exams
  const previousExams = exams.filter(
    (exam) => new Date(exam.startDate) < currentDate 
  );

  return (
    <div>
      <div className="EXAMSPAGE">
        <h1>Exams</h1>
        <p>{currentDate.toDateString()}</p>

        <h3>Upcoming Exams</h3>
        {loading ? (
          <p>Loading exams...</p>
        ) : upcomingExams.length > 0 ? (
          upcomingExams.map((exam) => (
            <div className="exam-card" key={exam.id}>
              <div className="row">
                <div className="col-md-2">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{new Date(exam.startDate).toDateString()}</span>
                </div>
                <div className="col-md-2">
                  <i className="fas fa-clock"></i>
                  <span>{new Date(exam.publishedOn).toLocaleTimeString()}</span>
                </div>
                <div className="col-md-4">
                  <strong>{exam.title}</strong>
                  <br />
                  <span>Instructor: {exam.instructor}</span>
                </div>
                <div className="col-md-2">
                  <strong>LEV. {exam.level}</strong>
                </div>
                <div className="col-md-1">
                  <strong>NA</strong>
                </div>
                <div className="col-md-1">
                  <Link className="btn-join btn" to= {`/exam/${exam.id}`}>JOIN EXAM</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No upcoming exams</p>
        )}

        <h3>Previous Exams</h3>
        {loading ? (
          <p>Loading exams...</p>
        ) : previousExams.length > 0 ? (
          previousExams.map((exam) => (
            <div className="exam-card" key={exam.id}>
              <div className="row">
                <div className="col-md-2">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{new Date(exam.startDate).toDateString()}</span>
                </div>
                <div className="col-md-2">
                  <i className="fas fa-clock"></i>
                  <span>{new Date(exam.publishedOn).toLocaleTimeString()}</span>
                </div>
                <div className="col-md-4">
                  <strong>{exam.title}</strong>
                  <br />
                  <span>Instructor: {exam.instructor}</span>
                </div>
                <div className="col-md-2">
                  <strong>LEV. {exam.level}</strong>
                </div>
                <div className="col-md-2">
                  <strong>{exam.totalMarks}/100</strong>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No previous exams</p>
        )}
      </div>
    </div>
  );
}

export default StudentExamsPage;
