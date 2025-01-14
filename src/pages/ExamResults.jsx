import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useFormattedDate from "../hooks/useFormattedDate";
import axios from "axios";
import ResultsCircularProgress from "../components/ExamResults/ResultsCircularProgress";

function ExamResults() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);

  const todayDate = useFormattedDate();
  //   const navigate = useNavigate();
  const loginUser = useSelector((state) => state.auth.user);

  const examResult = useSelector((state) => state.exam);
  const getTheStudent = examResult.students.filter(
    (stu) => loginUser.userID === stu.userID
  );

  console.log(getTheStudent);
  const {
    userID,
    studentMarks,
    timeTaken,
    correctAnswerQuestions,
    wrongAnswerQuestions,
    unansweredQuestions,
    studentAnswers,
  } = getTheStudent[0];

  console.log(
    studentMarks,
    timeTaken,
    correctAnswerQuestions,
    wrongAnswerQuestions,
    unansweredQuestions,
    studentAnswers
  );

  useEffect(() => {
    const fetchExamData = async () => {
      try {
        const response = await axios.get("/DB/exams.json");
        const exams = response.data;
        const examData = exams.find((exam) => exam.id === id);
        if (examData) {
          setExam(examData);
        } else {
          console.error(`No exam found with id: ${id}`);
        }
      } catch (error) {
        console.error("Error fetching exams:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExamData();
  }, [id]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  console.log("1LOG", exam);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!exam) {
    return <div>No exam data available.</div>;
  }

  const { duration, instructor, level, title, totalMarks, totalQuestions } =
    exam;

  return (
    <div>
      <div>
        <div className="exam-header">
          <h2 className="page-title">Online Exam Results</h2>
          <span id="date">{todayDate}</span>
        </div>

        <div className="d-flex justify-content-between flex-column flex-lg-row">
          <div className="left flex-grow-1">
            <h3>{title}</h3>
            <span>
              Level {level}, {totalMarks} marks
            </span>
            <h6 style={{ color: "#BF9B30" }}>
              Instructor:
              <span style={{ color: "white" }} id="instructor_onlineExam">
                {instructor}
              </span>
            </h6>
          </div>
        </div>

        <div className="exam-timer-container">
          <h3 id="test_time" className="text-end">
            {duration/60/60}:00
          </h3>
        </div>

        <div
          className="exam-progress-timer-container"
          style={{
            height: "10px",
            width: "100%",
            background: "#eee",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <div
            className="exam-progress-timer"
            style={{
              width: `100%`,
              background: "#ffae00",
              height: "100%",
            }}
          ></div>
        </div>
      </div>

      <div className="RESULTS-CONTAINER mt-5 p-5">
        <div className="d-flex flex-column gap-5">
          <div className="d-flex justify-content-between align-items-center ">
            <div>
              <ResultsCircularProgress
                studentMarks={studentMarks}
                examMarks={totalMarks}
              />
            </div>
            <button className="btn btn-warning">VIEW ANSWERS</button>
          </div>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex justify-content-between fw-bold">
              <div className="label">Number of questions answered :</div>
              <div className="value text-start">
                <span className="text-warning me-2">{totalQuestions - unansweredQuestions}</span>
                Questions
              </div>
            </div>
            <div className="d-flex justify-content-between fw-bold">
              <div className="label">
                Number of questions not answered :
              </div>
              <div className="value text-start">
                <span className="text-warning me-2">{unansweredQuestions}</span>
                Questions
              </div>
            </div>
            <div className="d-flex justify-content-between fw-bold">
              <div className="label">
                Number of questions answered correctly :
              </div>
              <div className="value text-start">
                <span className="text-warning me-2">{correctAnswerQuestions}</span>
                Questions
              </div>
            </div>
            <div className="d-flex justify-content-between fw-bold">
              <div className="label">Number of wrong answers :</div>
              <div className="value text-start">
                <span className="text-warning me-2">{wrongAnswerQuestions}</span>
                Answer(s)
              </div>
            </div>
            <div className="d-flex justify-content-between fw-bold">
              <div className="label">Time Taken:</div>
              <div className="value text-start">
                <span className="text-warning me-2">{timeTaken}</span> Minutes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamResults;
