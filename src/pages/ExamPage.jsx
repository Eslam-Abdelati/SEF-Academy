import React, { useState, useEffect } from "react";
import useFormattedDate from "../hooks/useFormattedDate";
import { useDispatch, useSelector } from "react-redux";
import { setAnswers, resetExam, fetchExam } from "../redux/slice/ExamSlice"; // Adjust the path if needed
import "../assets/styles/exam.css";
import { Link, useNavigate, useParams } from "react-router-dom";

const ExamPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isStudentDoneExam, setIsStudentDoneExam] = useState(false);

  const [testTime, setTestTime] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [essayAnswers, setEssayAnswers] = useState({});
  const todayDate = useFormattedDate();
  const navigate = useNavigate();
  const studentUser = useSelector((state) => state.auth.user);
  const exam = useSelector((state) =>
    state.exam.questions.length > 0 ? state.exam : null
  );
  const loading = useSelector((state) => state.exam.status === "loading");

  useEffect(() => {
    if (id) {
      dispatch(fetchExam({ id }));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (!exam) return;
    setTestTime(exam.duration);
    const intervalId = setInterval(() => {
      setTestTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [exam]);
  useEffect(() => {
    if (exam && exam.students) {
      const studentAlreadyDone = exam.students.some(
        (student) => student.userID === studentUser.userID
      );
      setIsStudentDoneExam(studentAlreadyDone);
    }
  }, [exam, studentUser.userID]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const period = now.getHours() >= 12 ? "PM" : "AM";
    return `${hours}:${minutes} ${period}`;
  };
  const currentTime = getCurrentTime();

  const handleOptionChange = (questionId, selectedOption) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const handleEssayChange = (questionId, essayAnswer) => {
    setEssayAnswers((prev) => ({
      ...prev,
      [questionId]: essayAnswer,
    }));
  };

  const handleCancel = () => {
    dispatch(resetExam());
    setSelectedOptions({});
    setEssayAnswers({});
    console.log("Exam cancelled");
  };

  const calculateStudentMarks = () => {
    let totalMarks = 0;
    let correctAnswerQuestions = 0;
    Object.entries(selectedOptions).forEach(([questionId, selectedOption]) => {
      const question = exam.questions.find((q) => q.id === questionId);
      if (selectedOption === question.correctAnswer) {
        totalMarks += question.mark;
        correctAnswerQuestions++;
      }
    });

    Object.entries(essayAnswers).forEach(([questionId, essayAnswer]) => {
      const question = exam.questions.find((q) => q.id === questionId);
      if (question.correctAnswer === essayAnswer) {
        totalMarks += question.mark;
        correctAnswerQuestions++;
      }
    });

    return { totalMarks, correctAnswerQuestions };
  };

  const handleSubmit = () => {
    const timeTakenFormatted = formatTime(exam.duration - testTime);
    const totalStudentMarks = calculateStudentMarks();

    const collectedAnswers = [
      ...Object.entries(selectedOptions).map(
        ([questionId, selectedOption]) => ({
          QID: questionId,
          answer: selectedOption,
          marks: exam.questions.find((q) => q.id === questionId)?.mark || 0,
          correctAnswer:
            exam.questions.find((q) => q.id === questionId)?.correctAnswer ||
            null,
        })
      ),
      ...Object.entries(essayAnswers).map(([questionId, essayAnswer]) => ({
        QID: questionId,
        answer: essayAnswer,
        marks: exam.questions.find((q) => q.id === questionId)?.mark || 0,
        correctAnswer:
          exam.questions.find((q) => q.id === questionId)?.correctAnswer ||
          null,
      })),
    ];

    const payload = {
      userID: studentUser.userID,
      answers: collectedAnswers,
      timeTaken: timeTakenFormatted,
      totalMarks: exam.totalMarks,
      studentMarks: totalStudentMarks.totalMarks,
      totalQuestions: exam.questions.length,
      correctAnswerQuestions: totalStudentMarks.correctAnswerQuestions,
      wrongAnswerQuestions:
        exam.questions.length - totalStudentMarks.correctAnswerQuestions,
      unansweredQuestions: exam.questions.length - collectedAnswers.length,
    };

    dispatch(setAnswers(payload));
    console.log("Exam submitted", payload);

    setTimeout(() => {
      navigate(`/exam-result/${id}`);
    }, 300);
  };

  if (loading) {
    return <p>Loading exam...</p>;
  }

  if (!exam) {
    return <p>No exam data available</p>;
  }
  if (isStudentDoneExam) {
    return (
      <div>
        <p>You have already done this exam</p>
        <div>
          <Link to={`/exam-result/${id}`} className="btn btn-outline-warning">
            See Exam Results
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="exam-page">
      <div className="div1">
        <h2 className="page-title">Online Exam</h2>
        <span id="date">{todayDate}</span>
      </div>

      <div className="d-flex justify-content-between flex-column flex-lg-row">
        <div className="left flex-grow-1">
          <h3>{exam.title}</h3>
          <span>
            Level {exam.level}, {exam.totalMarks} marks
          </span>
          <h6 style={{ color: "#BF9B30" }}>
            Instructor:
            <span style={{ color: "white" }} id="instructor_onlineExam">
              {exam.instructor}
            </span>
          </h6>
        </div>
        <div className="right d-flex flex-column flex-lg-row flex-grow-1 gap-2 p-0 mt-5 mt-lg-0">
          <div className="div_date bg-secondary flex-grow-1 p-3 bg-opacity-50">
            <i className="fa-solid fa-calendar-days"></i>
            <span>Date</span>
            <p>{todayDate}</p>
          </div>
          <div className="d-flex flex-row justify-content-between gap-2 flex-grow-1">
            <div className="div_Time flex-grow-1 bg-secondary p-3 bg-opacity-50">
              <i className="fa-regular fa-clock"></i>
              <span>Time</span>
              <p id="current_time">{currentTime}</p>
            </div>
            <div className="div_Duratio flex-grow-1 bg-secondary p-3 bg-opacity-50">
              <i className="fa-solid fa-stopwatch"></i>
              <span>Duration</span>
              <p>{exam.duration / 60 / 60} Hours</p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------ */}
      <div>
        <div className="exam-timer-container">
          <h3 id="test_time" className="text-end">
            {formatTime(testTime)}
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
              width: `${(testTime / exam.duration) * 100}%`,
              background: "#ffae00",
              height: "100%",
            }}
          ></div>
        </div>
        <div className="d-flex flex-column">
          {exam.questions.map((question, index) => (
            <div key={index} className="question-container">
              <h3>Question {index + 1}</h3>
              <h1>{question.question}</h1>

              {question.type === "choose" && (
                <div className="div_chose">
                  {question.answers?.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      className={`choice-container ${
                        selectedOptions[question.id] === option ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={option}
                        checked={selectedOptions[question.id] === option}
                        onChange={() => handleOptionChange(question.id, option)}
                      />
                      <span className="choice-text">{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {question.type === "essay" && (
                <textarea
                  value={essayAnswers[question.id] || ""}
                  onChange={(e) =>
                    handleEssayChange(question.id, e.target.value)
                  }
                />
              )}

              <div className="marks">
                <span>{question.mark} Marks</span>
              </div>
            </div>
          ))}
          <div className="inputs">
            <input
              className="cancel"
              type="button"
              value="CANCEL"
              onClick={handleCancel}
            />
            <input
              className="submit"
              type="button"
              value="SUBMIT"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
