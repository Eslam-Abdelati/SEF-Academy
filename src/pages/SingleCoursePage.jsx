import React, { useEffect, useState } from "react";
import { BsFileText } from "react-icons/bs";
import { FaChartSimple } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/ui/loader/Loader";
import { fetchCourses } from "../redux/slice/CoursesSlice";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toggleAuthModel } from "../redux/slice/AuthSlice";
import LoginModel from "../components/ui/loginModel/LoginModel";

function SingleCoursePage() {
  const { id } = useParams();
  const [activeLessonTab, setActiveLessonTab] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.courses);
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAuthModelOpen = useSelector((state) => state.auth.isAuthModelOpen);

  useEffect(() => {
    if (data?.length === 0) {
      dispatch(fetchCourses());
    }
  }, [dispatch, data]);

  const toggleLesson = (lessonTabIndex) => {
    setActiveLessonTab(
      activeLessonTab === lessonTabIndex ? null : lessonTabIndex
    );
  };

  const checkAuth = () => {
    if (!isAuthenticated) {
      dispatch(toggleAuthModel());
    } else {
      // Logic to enroll the user in the course
      console.log("User enrolled in the course");
      // You can redirect or update UI here
    }
    console.log(isAuthModelOpen)
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <p className="text-danger">Error fetching data</p>
      </div>
    );
  }

  const courseData = data?.find((course) => course.id === id);
  if (!courseData) {
    return <p>Course not found</p>;
  }

  const {
    title,
    instructor,
    image,
    language,
    duration,
    startDate,
    lessons = [],
    assessment,
    requirements = [],
    materials = [],
    students = [],
    level,
    certificate,
  } = courseData;

  // Check if user is already enrolled
  const isEnrolled = user?.courses?.some((course) => course.id === id);

  return (
    <>
      <div className="p-5">
        {
          isAuthModelOpen && <LoginModel />
        }
        <div className="single-course-header">
          <p className="page-title">Course</p>
          <p className="course-name">{title}</p>
          <p className="course-instructor">
            <span className="text-warning">Instructor: </span>
            <span>{instructor}</span>
          </p>
        </div>
        {/* IMG */}
        <div className="single-course-img-body d-flex flex-column d-xl-grid">
          <div className="single-course-page-img ">
            <img src={image} alt="course-img" />
          </div>
          <div className="single-course-page-quick-info d-flex justify-content-end">
            <div className="flex-grow-1 flex-xl-grow-0">
              <div className="course-quick-info d-flex flex-column ">
                <div className="d-flex gap-2">
                  <p className="d-flex gap-2 bg-black bg-opacity-50 p-2 justify-content-start align-items-center rounded-3 flex-grow-1">
                    <p className="text-warning fs-1">
                      <BsFileText />
                    </p>
                    <p className="d-flex flex-column">
                      <span>Lessons</span>
                      <span>{lessons.length}</span>
                    </p>
                  </p>
                  <p className="d-flex gap-2 bg-black bg-opacity-50 p-2 justify-content-start align-items-center rounded-3 flex-grow-1">
                    <p className="text-warning fs-1">
                      <FaChartSimple />
                    </p>
                    <p className="d-flex flex-column">
                      <span>Level</span>
                      <span>{level}</span>
                    </p>
                  </p>
                </div>
                <p>Students: {students.length}</p>
                <p>Language: {language}</p>
                <p>Duration: {duration}</p>
                <p>Start Date: {startDate}</p>
                <p>Certificate: {certificate}</p>
                <div>
                  {!isEnrolled ? (
                    <button
                      onClick={checkAuth}
                      className="btn btn-warning w-100"
                    >
                      Enroll Now
                    </button>
                  ) : (
                    <p className="text-success">Already Enrolled</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* INFO */}
        <div className="single-course-info-body d-flex flex-column d-xl-grid">
          <div className="single-course-introduction-box">
            <h3>Introduction</h3>
            <p>Course introduction details go here...</p>
          </div>
          <div className="single-course-additional-info-box">
            <div className="wrapper d-flex flex-column p-2 gap-3">
              <div>
                <h3>Assessment</h3>
                <p>{assessment}</p>
              </div>
              <div>
                <h3>Requirements</h3>
                {requirements.map((req, index) => (
                  <p key={index}>{req}</p>
                ))}
              </div>
              <div>
                <h3>Materials</h3>
                {materials.map((mat, index) => (
                  <p key={index}>{mat}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="single-course-lessons-box">
            <h3 className="lessons-title">Lessons</h3>
            <div className="lessons-list user-select-none">
              {lessons.map((lesson, index) => (
                <div
                  key={index}
                  className="lesson-item"
                  onClick={() => toggleLesson(index)}
                >
                  <div className="d-flex justify-content-between">
                    <span className="lesson-tab-title">{lesson.title}</span>
                    <span className="text-warning">
                      {activeLessonTab === index ? <FiMinus /> : <FiPlus />}
                    </span>
                  </div>
                  <div
                    className={`lesson-tab-description ${
                      activeLessonTab === index ? "show" : "hide"
                    }`}
                  >
                    <div>
                      <p className="mt-2">{lesson.summary}</p>
                      {user && (
                        <div className="d-flex justify-content-end">
                          <Link
                            to={`${lesson.url}`}
                            className="btn btn-warning"
                          >
                            Watch Lecture
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default SingleCoursePage;
