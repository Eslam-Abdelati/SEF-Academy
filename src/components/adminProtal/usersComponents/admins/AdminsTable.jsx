import React, { useEffect, useState } from "react";
import TableRow from "../TableRow";
import { FaSearch } from "react-icons/fa";
import TableCard from "../TableCard";
import Title from "../../articlesComponents/title";
import { useDispatch, useSelector } from "react-redux";
import usePagination from "../../../../hooks/usePagination";
import Loader from "../../../ui/loader/Loader";
import PaginationNav from "../../../PaginationNav";
import nextIcon from "../../../../assets/images/next.svg";
import prevIcon from "../../../../assets/images/prev.svg";
import { getUsers } from "../../../../redux/slice/UsersSlice";
import { Link } from "react-router-dom";

function AdminsTable() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error } = useSelector((state) => state.users);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (data.length) {
      // Filter to get only admin users
      const filtered = data.filter((user) => user.role === "admin");
      setAdmins(filtered);
      setFilteredUsers(filtered);
    }
  }, [data]);

  // Search functionality with delay
  useEffect(() => {
    const delayFn = setTimeout(() => {
      setFilteredUsers(
        admins.filter((user) =>
          user.username?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 300);
    return () => clearTimeout(delayFn);
  }, [searchTerm, admins]);

  const ITEMS_PER_PAGE = 5;
  const {
    currentPage,
    totalPages,
    onPageChange,
    getPageNumbers,
    setCurrentPage,
  } = usePagination(filteredUsers, ITEMS_PER_PAGE);

  useEffect(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setDisplayedData(filteredUsers.slice(start, end));
  }, [filteredUsers, currentPage]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-danger h3 text-center">
        <p>Something went wrong</p>
      </div>
    );
  }

  return (
    <div className="text-light d-flex flex-column gap-4 mt-lg-4">
      <div className="d-flex flex-column align-items-end gap-4">
        <Link
          to="/adminportal/users/add-new-user"
          className="btn btn-warning d-none d-lg-block"
        >
          CREATE NEW ADMIN
        </Link>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <Title title="Admin-Users" /> {/* Title updated for admins */}
        <div className="position-relative text-danger search-box">
          <input
            type="text"
            className="article-search-input"
            placeholder="search all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="article-search-icon">
            <FaSearch />
          </div>
        </div>
      </div>

      <div>
        <div className="students-table-header d-none d-lg-grid fs-5 py-4 px-2">
          <div>Name</div>
          <div>Status</div>
          <div>User ID</div>
          <div>Role</div>
          <div>Email</div>
          <div></div>
        </div>
        <div className="d-none d-lg-flex flex-column gap-2 mt-2">
          {displayedData.map((i) => (
            <TableRow
              key={i.userID}
              name={i.username}
              status={i.status ? "active" : "inactive"}
              userId={i.userID}
              role={i.role}
              mail={i.email}
              id={i.id}
            />
          ))}
        </div>
        <div className="d-flex d-lg-none flex-column gap-2">
          {displayedData.map((i) => (
            <TableCard
              key={i.userID}
              name={i.username}
              status={i.status ? "active" : "inactive"}
              userId={i.userID}
              role={i.role}
              mail={i.email}
              id={i.id}
            />
          ))}
        </div>
      </div>
      {displayedData.length > 0 && (
        <div className="text-white fw-bolder text-end p-3 mt-3">
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
      )}
    </div>
  );
}

export default AdminsTable;
