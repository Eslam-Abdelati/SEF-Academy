import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import useFormattedDate from "../hooks/useFormattedDate";
import Loader from "../components/ui/loader/Loader";
import NewCoursesSlider from "../components/coursesPage/NewCoursesSlider";
import AllCoursesTable from "../components/coursesPage/AllCoursesTable";
import { fetchCourses } from "../redux/slice/CoursesSlice";

const CoursesPage = () => {
  const date = useFormattedDate();
  const dispatch = useDispatch();

  // Access state data using useSelector
  const { data, error, loading } = useSelector((state) => state.courses);

  useEffect(() => {
    // Dispatch fetchCourses action
    dispatch(fetchCourses());
  }, [dispatch]);

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

  const newCoursesData = data?.filter((course) => course.isNew === true);

  return (
    <div>
      <div>
        <h2 className="page-title">Courses</h2>
        <p>{date}</p>
      </div>
      <NewCoursesSlider newCoursesData={newCoursesData} />
      <AllCoursesTable data={data} />
    </div>
  );
};

export default CoursesPage;
