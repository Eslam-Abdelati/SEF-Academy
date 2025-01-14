import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CoursesTable.css";
import Title from "../articlesComponents/title";
import CourseCard from "./CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../../redux/slice/CoursesSlice";
import Loader from "../../ui/loader/Loader";
import { FaSearch } from "react-icons/fa";
import CourseRow from "./CourseRow";
import PaginationNav from "../../PaginationNav";
import usePagination from "../../../hooks/usePagination";
import nextIcon from "../../../assets/images/next.svg";
import prevIcon from "../../../assets/images/prev.svg";

function CoursesTable() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading } = useSelector((state) => state.courses);
  const [filteredCourses, setFilteredCourses] = useState(data);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  useEffect(() => {
    const delayFn = setTimeout(() => {
      setFilteredCourses(
        data?.filter((course) =>
          course.title?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 300);

    return () => clearTimeout(delayFn);
  }, [searchTerm, data]);

  const ITEMS_PER_PAGE = 5;
  const {
    currentPage,
    totalPages,
    onPageChange,
    getPageNumbers,
    setCurrentPage,
  } = usePagination(filteredCourses, ITEMS_PER_PAGE);

  useEffect(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setDisplayedData(filteredCourses.slice(start, end));
  }, [filteredCourses, currentPage]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <Loader />
      </div>
    );
  }

  const hasCourses = filteredCourses.length > 0;

  return (
    <div>
      <div className="col-lg-12 bg-opacity-25 text-white fw-bolder text-end d-none d-lg-block mt-3">
        <Link
          className="btn btn-warning text-light"
          to="/adminportal/courses/add-course"
        >
          Create New Courses
        </Link>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <Title title="All Courses" />
        <div className="position-relative text-danger search-box">
          <input
            type="text"
            className="article-search-input"
            placeholder="Search all"
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search courses"
          />
          <div className="article-search-icon">
            <FaSearch />
          </div>
        </div>
      </div>

      <div className="w-100 row col-lg-9 ww d-lg-none d-flex m-auto d-flex-column justify-content-center align-items-center">
        {hasCourses ? (
          displayedData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))
        ) : (
          <div className="text-white">No courses found</div>
        )}
        <div className="d-flex justify-content-center align-items-center d-lg-none mt-5">
          <Link className="btn btn-warning text-light">Create New Courses</Link>
        </div>
      </div>

      <div className="w-100 row col-lg-9 ww d-none d-lg-flex">
        {/* Table Headers */}
        <div className="col-lg-2 text-white fw-bolder p-3 mt-3">Title</div>
        <div className="col-lg-2 text-white fw-bolder p-3 mt-3">Status</div>
        <div className="col-lg-2 text-white fw-bolder p-3 mt-3">Instructor</div>
        <div className="col-lg-1 text-white fw-bolder p-3 mt-3">Level</div>
        <div className="col-lg-2 text-white fw-bolder p-3 mt-3">Start Date</div>
        <div className="col-lg-3 text-white fw-bolder p-3 mt-3">
          Published On
        </div>

        {/* Table Content */}
        <div className="d-flex flex-column gap-4">
          {hasCourses ? (
            displayedData.map((course) => (
              <CourseRow key={course.id} {...course} />
            ))
          ) : (
            <div className="text-white">No courses found</div>
          )}
        </div>
      </div>

      <div className=" text-white fw-bolder text-end p-3 mt-3">
        <PaginationNav
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          getPageNumbers={getPageNumbers}
          setCurrentPage={setCurrentPage}
          prevIcon={prevIcon}
          nextIcon={nextIcon}
          // disabled={!hasCourses}
        />
      </div>
    </div>
  );
}

export default CoursesTable;
