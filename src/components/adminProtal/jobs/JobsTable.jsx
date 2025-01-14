import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { FaEdit, FaSearch, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import "./jobs.css";
import { BsPencilSquare } from "react-icons/bs";
import Title from "../articlesComponents/title";
import { useDispatch, useSelector } from "react-redux";
import { getJobs, setSearchQuery } from "../../../redux/slice/AdminJobsSlice";
import usePagination from "../../../hooks/usePagination";
import PaginationNav from "../../PaginationNav";
import nextIcon from "../../../assets/images/next.svg";
import prevIcon from "../../../assets/images/prev.svg";

const JobsTable = () => {
  const screenWidth = {
    screenType:"larg"
  };
  const [inputSearch, setInputSearch] = useState("");
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state.adminJobs.filteredJobs);
  const loading = useSelector((state) => state.adminJobs.loading); // Selector for loading
  const error = useSelector((state) => state.adminJobs.error); // Selector for error
 const [displayedData, setDisplayedData] = useState([]);
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setSearchQuery(inputSearch.toLowerCase().trim()));
    console.log(jobList);
  }, [inputSearch, dispatch]);


  const ITEMS_PER_PAGE = 5;
  const {
    currentPage,
    totalPages,
    onPageChange,
    getPageNumbers,
    setCurrentPage,
  } = usePagination(jobList, ITEMS_PER_PAGE);

    useEffect(() => {
      const start = (currentPage - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      setDisplayedData(jobList.slice(start, end));
    }, [jobList, currentPage]);


  return (
    <div>
      <div className="px-0">
        <div className="job d-none d-lg-block">
          <div className="btn-create-job d-flex justify-content-end ">
            <Link to="/adminportal/add-new-job" className="btn btn-warning">
              CREATE NEW JOB
            </Link>
          </div>

          <div className="job-title d-flex justify-content-between align-items-center mt-4">
            <div>
              <h3 className="text-white table-title">Jobs</h3>
            </div>
            <div className="search">
              <input
                className="search-input"
                type="text"
                placeholder="Search In Jobs"
                onChange={(e) => setInputSearch(e.target.value)}
              />
              <i className="bi bi-search search-icon"></i>
            </div>
          </div>

          {loading ? (
            <p className="text-white">Loading...</p>
          ) : error ? (
            <p className="text-danger">Error: {error}</p>
          ) : (
            <>
              <div className="jobs-table-header text-white mt-2">
                <div className="">Company</div>
                <div className="">Position</div>
                <div className="">Status</div>
                <div className="">Posted At</div>
                <div className="">#Applications</div>
                <div className=""></div>
              </div>
              <div className="d-flex flex-column gap-2 mt-3">
                {displayedData.map((item, index) => (
                  <div className="jobs-table-item text-white" key={index}>
                    <div>{item.companyName}</div>
                    <div>{item.jobName}</div>
                    <div>
                      <span
                        className={
                          item.status === "open"
                            ? "job-status-open"
                            : "job-status-closed"
                        }
                      >
                        {item.status}
                      </span>
                    </div>
                    <div>{item.time}</div>
                    <div>{item.applications?.length}</div>
                    <div>
                      <FaEdit className="table-icon" />
                      <MdOutlineDeleteOutline className="table-icon" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="d-block d-lg-none ">
          <div className="d-flex justify-content-between align-items-center mt-4">
            <Title title="All jobs" />
            <div className="position-relative text-danger search-box">
              <input
                type="text"
                className="article-search-input"
                placeholder="search all"
              />
              <div className="article-search-icon">
                <FaSearch />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4 flex-column gap-4">
            {displayedData.map((item, index) => (
              <div
                className="d-flex flex-column gap-3 bg-black p-4 rounded-3"
                key={index}
              >
                <div className="d-flex justify-content-between">
                  <h3>company</h3>
                  <p
                    className={
                      item.status === "open"
                        ? "status-btn-published rounded-4"
                        : "status-btn-draft rounded-4"
                    }
                  >
                    {item.status}
                  </p>
                </div>
                <div>
                  <h5 style={{marginTop :"-20px"}}>{item.companyName}</h5>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h3>position</h3>
                    <p className="admin-table-item-title">{item.jobName}</p>
                  </div>
                  <div>
                    <h3>Posted At</h3>
                    <div>
                      <p>{item.time}</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end fs-2 gap-3">
                  <Link className="text-warning">
                    <BsPencilSquare />
                  </Link>
                  <Link className="text-warning">
                    <FaTrashAlt />
                  </Link>
                </div>
              </div>
            ))}
            <div>
              <div className="d-flex justify-content-center">
                <Link
                  to="/adminportal/add-new-job"
                  className="btn btn-warning px-5"
                >
                  CREATE NEW JOB
                </Link>
              </div>
            </div>
          </div>
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
        />
      </div>
    </div>
  );
};

export default JobsTable;
