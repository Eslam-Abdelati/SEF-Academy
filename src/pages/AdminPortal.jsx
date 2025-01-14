import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
// import ArticlesTable from "../components/adminProtal/ArteclesTable";
// import Final from "../src/Final";
import CertificateForm from "../components/adminProtal/usersComponents/students/CertificateForm";
import AddNewArticle from "../components/adminProtal/articlesComponents/AddNewArticle";
import AllArticlesTable from "../components/adminProtal/articlesComponents/AllArticlesTable";
import Sidebar from "../components/adminProtal/sideMenu/Sidebar";
import useWindowWidth from "../hooks/useWindowWidth ";
import AddJobForm from "../components/adminProtal/jobs/AddJobForm";
import UserStudentTable from "../components/adminProtal/usersComponents/students/UserStudentTable";
import CoursesTable from "../components/adminProtal/courses/CoursesTable";
import AddUserForm from "../components/adminProtal/usersComponents/AddUserForm";
import AllUsers from "../components/adminProtal/usersComponents/AllUsers";
import InstructorsTable from "../components/adminProtal/usersComponents/instructors/InstructorsTable";
import EditorsTable from "../components/adminProtal/usersComponents/editors/EditorsTable";
import AdminsTable from "../components/adminProtal/usersComponents/admins/AdminsTable";
import JobsTable from "../components/adminProtal/jobs/JobsTable";
import PublishedArticles from "../components/adminProtal/articlesComponents/PublishedArticles";
import DratArticles from "../components/adminProtal/articlesComponents/DratArticles";
import ScheduledCourses from "../components/adminProtal/courses/ScheduledCourses";
import AddCourseForm from "../components/adminProtal/courses/AddCourseForm";

function AdminPanel() {
  const { width } = useWindowWidth();
  // console.log(width, screenType);
  const containerStyle =
    width > 992
      ? {
          display: "grid",
          gridTemplateColumns: "3fr 9fr",
          margin: "auto",
          width: "100%",
          gap: "50px",
        }
      : {
          display: "grid",
          gridTemplateColumns: "1fr",
          margin: "auto",
          width: "100%",
          backGround: "red",
        };

  return (
    <div className="">
      <div className=" d-flex flex-column gap-5 justify-content-center align-items-between ">
        <div className="d-flex flex-column gap-5 justify-content-center align-items-center">
          <div style={containerStyle}>
            <div style={{}}>
              <Sidebar />
            </div>
            <div xs={12} md={9} className="vaiable-container">
              <Routes>
                <Route path="/" element={<AllArticlesTable />} />
                <Route path="/users" element={<AllUsers />} />
                <Route path="/users/students" element={<UserStudentTable />} />
                <Route path="/users/admins" element={<AdminsTable />} />
                <Route path="/users/editors" element={<EditorsTable />} />
                <Route
                  path="/users/instructors"
                  element={<InstructorsTable />}
                />
                <Route path="/users/add-new-user" element={<AddUserForm />} />
                {/* ******************************* */}
                <Route path="/articles" element={<AllArticlesTable />} />
                <Route
                  path="/articles/published-articles"
                  element={<PublishedArticles />}
                />
                <Route
                  path="/articles/drafted-articles"
                  element={<DratArticles />}
                />
                <Route
                  path="/articles/add-new-article"
                  element={<AddNewArticle />}
                />
                {/* ******************************* */}
                <Route path="/jobs" element={<JobsTable />} />
                <Route path="/published-jobs" element={<JobsTable />} />
                <Route path="/add-new-job" element={<AddJobForm />} />
                <Route path="/add-new-job" element={<AddJobForm />} />
                <Route
                  path="/upload-certificate"
                  element={<CertificateForm />}
                />
                {/* ******************************* */}
                <Route path="/courses" element={<CoursesTable />} />
                <Route
                  path="/courses/published-courses"
                  element={<CoursesTable />}
                />
                <Route
                  path="/courses/scheduled-course"
                  element={<ScheduledCourses />}
                />
                <Route
                  path="/courses/add-course"
                  element={<AddCourseForm />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
