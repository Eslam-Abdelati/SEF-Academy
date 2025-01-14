import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginModel from "../ui/loginModel/LoginModel";
import { toggleAuthModel } from "../../redux/slice/AuthSlice";
import nextIcon from "../../assets/images/next.svg";
import prevIcon from "../../assets/images/prev.svg";
import { BsSearch } from "react-icons/bs";
import usePagination from "../../hooks/usePagination";
import PaginationNav from "../PaginationNav";

function AllCoursesTable({ data }) {
  const [filteredData, setFilteredData] = useState(data);
  const ITEMS_PER_PAGE = 6;
  const {
    currentPage,
    totalPages,
    onPageChange,
    getPageNumbers,
    setCurrentPage,
  } = usePagination(filteredData, ITEMS_PER_PAGE);

  const [searchQuery, setSearchQuery] = useState("");
  const [displayedData, setDisplayedData] = useState([]);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAuthModelOpen = useSelector((state) => state.auth.isAuthModelOpen);
  const checkAuth = () => {
    if (!isAuthenticated) {
      dispatch(toggleAuthModel());
    }
  };
// ----------------------------------------------------------------
  useEffect(() => {
    const searchData = data.filter((item) => {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredData(searchData);
    setCurrentPage(1);
  }, [searchQuery, data, setCurrentPage]);

  useEffect(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setDisplayedData(filteredData.slice(start, end));
  }, [filteredData, currentPage]);

  return (
    <div id="coursesTableID">
      {isAuthModelOpen && <LoginModel />}
      <div className="mt-5">
        <div className="d-flex justify-content-between mb-3">
          <h3>Other Courses</h3>
          <div className=" position-relative">
            <input
              type="text"
              className=" rounded-5 pe-5"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="position-absolute top-0 end-0 h-75 px-4 d-flex justify-content-center align-items-center  text-warning">
              <BsSearch />
            </span>
          </div>
        </div>
        <div
          className="d-none d-xl-grid bg-black"
          style={{ gridTemplateColumns: "2fr 10fr" }}
        >
          <div></div>
          <div
            className="px-3 py-2 p-xl-0 d-xl-grid"
            style={{ gridTemplateColumns: "9fr 1fr 1fr 1fr" }}
          >
            <div></div>
            <div className="pe-3 text-nowrap">Start Date</div>
            <div className=" ps-xxl-4">Level</div>
            <div></div>
          </div>
        </div>
        <div className="courses-list-table d-grid d-xl-flex flex-column gap-2">
          {displayedData.map(
            (
              { id, title, instructor, image, startDate, lessons, level },
              index
            ) => (
              <div
                className="d-xl-grid  bg-black p-3 courses-list-table-item border"
                style={{ gridTemplateColumns: "2fr 10fr" }}
                key={index}
              >
                <div className="d-flex justify-content-center p-3">
                  <img
                    src={image}
                    className="card-img-top rounded-3"
                    alt={title}
                  />
                </div>
                <div
                  className="px-3 py-2 py-xl-5 d-xl-grid"
                  style={{ gridTemplateColumns: "9fr 1fr 1fr 1fr" }}
                >
                  <div>
                    <div className="d-flex justify-content-between gap-3">
                      <h5 className="mb-1">{title}</h5>
                      <span className="d-xl-none">LV.{level}</span>
                    </div>
                    <div className="mb-1 d-flex flex-column-reverse flex-xxl-column">
                      <div className=" d-flex gap-2">
                        <span className="text-light instructor-title">
                          Instructor:
                        </span>
                        <span className="fw-semibold">{instructor}</span>
                      </div>
                      <div>{lessons?.length} lessons</div>
                    </div>
                  </div>
                  <div className="text-center d-flex gap-2">
                    <span className="d-xl-none text-warning">Start Date:</span>
                    <span>{startDate}</span>
                  </div>

                  <div className="text-center d-none d-xl-block"> {level}</div>
                  <div className="d-flex align-items-start gap-4 justify-content-center mt-3">
                    <div className="d-flex flex-column w-100 justify-content-end gap-2">
                      <button
                        className="btn btn-warning text-light flex-grow-1"
                        onClick={checkAuth}
                      >
                        Enroll
                      </button>
                      <div className="d-flex justify-content-end justify-content-lg-center ">
                        <Link
                          to={`/courses/${id}`}
                          className="text-light flex-shrink-1 text-nowrap"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <PaginationNav
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        getPageNumbers={getPageNumbers}
        setCurrentPage={setCurrentPage}
        prevIcon={prevIcon}
        nextIcon={nextIcon}
      />
    </div>
  );
}

export default AllCoursesTable;
