import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AsideLinks from "./AsideLinks";
import "./sidebar.css";
import useFormattedDate from "../../../hooks/useFormattedDate";
import { IoMenuOutline } from "react-icons/io5";
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const { "*": activeTable } = useParams();
  const [activeLink, setActiveLink] = useState("");
  const dropDownRef = useRef(null);
  useEffect(() => {
    if (
      activeTable === "students" ||
      activeTable === "instructors" ||
      activeTable === "admins" ||
      activeTable === "editors"
    ) {
      setActiveLink("Users");
    }
    if (
      activeTable === "articles" ||
      activeTable === "published-articles" ||
      activeTable === "saved-drafts" ||
      activeTable === "scheduled-articles"
    ) {
      setActiveLink("Articles");
    }
    if (
      activeTable === "jobs" ||
      activeTable === "jobs-saved-drafts" ||
      activeTable === "jobs-scheduled" ||
      activeTable === "published-jobs"
    ) {
      setActiveLink("Jobs");
    }
    if (
      activeTable === "courses" ||
      activeTable === "published-courses" ||
      activeTable === "scheduled-courses" ||
      activeTable === "courses-saved-drafts"
    ) {
      setActiveLink("Courses");
    }
  }, [activeTable]);

  const navigate = useNavigate();
  const handleItemNavigation = (path) => {
    navigate(path);
  };

  const handleLinkClick = (item) => {
    setActiveLink(item);
  };

  const UsersLinks = [
    { id: 1, title: "Editors", path: "/adminportal/users/editors" },
    { id: 2, title: "Admins", path: "/adminportal/users/admins" },
    { id: 3, title: "Students", path: "/adminportal/users/students" },
    { id: 4, title: "Instructors", path: "/adminportal/users/instructors" },
  ];

  const ArticlesLinks = [
    {
      id: 5,
      title: "Published Articles",
      path: "/adminportal/articles/published-articles",
    },
    {
      id: 6,
      title: "Scheduled Articles",
      path: "/adminportal/scheduled-articles",
    },
    {
      id: 7,
      title: "Saved Drafts",
      path: "/adminportal/articles/drafted-articles",
    },
  ];

  const JobsLinks = [
    { id: 8, title: "Published Jobs", path: "jobs" },
    { id: 9, title: "Saved Drafts", path: "/adminportal/jobs-saved-drafts" },
  ];

  const CoursesLinks = [
    {
      id: 10,
      title: "Published Courses",
      path: "/adminportal/courses/published-courses",
    },
    {
      id: 11,
      title: "Scheduled Courses",
      path: "/adminportal/courses/scheduled-courses",
    },
    // {
    //   id: 12,
    //   title: "Saved Drafts",
    //   path: "/adminportal/courses-saved-drafts",
    // },
  ];
  const date = useFormattedDate();

  return (
    <div className="">
      <div className="h6 text-light d-flex flex-column gap-2 mb-">
        <span className="page-title">Admin Portal</span>
        <span>{date}</span>
      </div>
      <nav className="d-none d-lg-block mt-4 bg-black bg-opacity-25 p-0">
        <ul className="p-0">
          <li>
            <Link to="/adminportal/users">
              <p className="w-100 fw-bold d-block p-2 bg-black">Users</p>
            </Link>
            <ul className="pt-2 pb-4">
              {UsersLinks.map((link) => (
                <AsideLinks
                  key={link.id}
                  id={link.id}
                  title={link.title}
                  path={link.path}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              ))}
            </ul>
          </li>
          <li>
            <Link to="/adminportal/articles">
              <p className="w-100 fw-bold d-block p-2 bg-black">Articles</p>
            </Link>
            <ul className="pt-2 pb-4">
              {ArticlesLinks.map((link) => (
                <AsideLinks
                  key={link.id}
                  id={link.id}
                  title={link.title}
                  path={link.path}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              ))}
            </ul>
          </li>
          <li>
            <Link to="/adminportal/jobs">
              <p className="w-100 fw-bold d-block p-2 bg-black">Jobs</p>
            </Link>
            <ul className="pt-2 pb-4">
              {JobsLinks.map((link) => (
                <AsideLinks
                  key={link.id}
                  id={link.id}
                  title={link.title}
                  path={link.path}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              ))}
            </ul>
          </li>
          <li>
            <Link to="/adminportal/courses">
              <p className="w-100 fw-bold d-block p-2 bg-black">Courses</p>
            </Link>
            <ul className="pb-4">
              {CoursesLinks.map((link) => (
                <AsideLinks
                  key={link.id}
                  id={link.id}
                  title={link.title}
                  path={link.path}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              ))}
            </ul>
          </li>
        </ul>
      </nav>

      {/* Mobile navigation */}
      <nav className="d-flex d-lg-none bg-transparent ">
        <ul className="ul-mobile">
          <li>
            <Link
              onClick={() => handleLinkClick("Users")}
              className={activeLink === "Users" ? "activeA" : ""}
              to="/adminportal/users"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleLinkClick("Articles")}
              className={activeLink === "Articles" ? "activeA" : ""}
              to="/adminportal/published-articles"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleLinkClick("Jobs")}
              className={activeLink === "Jobs" ? "activeA" : ""}
              to="/adminportal/published-jobs"
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleLinkClick("Courses")}
              className={activeLink === "Courses" ? "activeA" : ""}
              to="/adminportal/published-courses"
            >
              Courses
            </Link>
          </li>
        </ul>
      </nav>

      <div className="d-block d-lg-none position-relative">
        <span
          className="position-absolute top-0 fs-1 d-flex text-warning"
          style={{ right: "10px" }}
          onClick={() => {
            if (dropDownRef.current) {
              dropDownRef.current.focus();
            }
          }}
        >
          <IoMenuOutline />
        </span>
        {activeLink !== "" && (
          <select
            className="form-select select-mob"
            ref={dropDownRef}
            onChange={(e) => handleItemNavigation(e.target.value)}
          >
            {activeLink === "Users" &&
              UsersLinks.map((link) => (
                <option key={link.id} value={link.path}>
                  {link.title}
                </option>
              ))}
            {activeLink === "Articles" &&
              ArticlesLinks.map((link) => (
                <option key={link.id} value={link.path}>
                  {link.title}
                </option>
              ))}
            {activeLink === "Jobs" &&
              JobsLinks.map((link) => (
                <option key={link.id} value={link.path}>
                  {link.title}
                </option>
              ))}
            {activeLink === "Courses" &&
              CoursesLinks.map((link) => (
                <option key={link.id} value={link.path}>
                  {link.title}
                </option>
              ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
