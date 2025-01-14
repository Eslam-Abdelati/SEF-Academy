import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminPanel from "./pages/AdminPortal";
import Header from "./components/Header";
import Footer from "./components/Footer";

import BusinessNewsPage from "./pages/BusinessNewsPage";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import JobsPage from "./pages/JobsPage";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

import { SpeedInsights } from "@vercel/speed-insights/react";
import SingleArticle from "./pages/SingleArticle";
import ContactUs from "./pages/ContactUs";
// import CoursesTable from "./components/courses/CoursesTable";
import Profile from "./pages/StudentProfile";
import EditStudentProfile from "./pages/EditStudentProfile";
import InstructorPortal from "./pages/InstructorPortal";
import StudentPortal from "./pages/StudentPortal";
import ExamPage from "./pages/ExamPage";
import CoursesPage from "./pages/CoursesPage";
import CreateCv from "./pages/CreateCv";
import AboutPage from "./pages/AboutPage";
import ProtectedRoute from "./components/ProtectedRoute";
import NoAccess from "./pages/NoAccess";
import StudentExamsPage from "./pages/StudentExamsPage";
import ExamResults from "./pages/ExamResults";
import SportsNews from "./pages/SportsNews";
import MedicalNews from "./pages/MedicalNews";
import StartupsNews from "./pages/StartupsNews";
import AppsNews from "./pages/AppsNews";
import TechNews from "./pages/TechNews";
import TechNewsTypePage from "./components/TechNews/TechNewsTypePage";

import "./assets/styles/pagination.css";
import SingleCoursePage from "./pages/SingleCoursePage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SpeedInsights />
        <Header />

        <div className="px-2 px-lg-5 text-light">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/business-news" element={<BusinessNewsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-edit" element={<EditStudentProfile />} />
            <Route path="/article" element={<SingleArticle />} />
            <Route path="/article/:id" element={<SingleArticle />} />
            {/* Protected Routes */}
            <Route
              path="/adminportal/*"
              element={
                <ProtectedRoute element={AdminPanel} allowedRoles={["admin"]} />
              }
            />
            {/* <Route path="/adminportal/*" element={<AdminPanel />} /> */}
            <Route
              path="/instructorportal"
              element={
                <ProtectedRoute
                  element={InstructorPortal}
                  allowedRoles={["instructor"]}
                />
              }
            />
            <Route
              path="/studentportal"
              element={
                <ProtectedRoute
                  allowedRoles={["student"]}
                  element={StudentPortal}
                />
              }
            />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/jobs/*" element={<JobsPage />} />
            {/* <Route path="/create-cv/*" element={<CreateCv />} /> */}
            <Route path="/create-cv/*" element={<CreateCv />} />
            {/* <Route path="/create-cv/:mainStep" element={<CreateCv />} /> */}

            {/* <Route path="/job/*" element={<JobDetail />} /> */}

            {/* ********************** */}
            <Route path="/student-exams" element={<StudentExamsPage />} />
            <Route
              path="/exam/:id"
              element={
                <ProtectedRoute
                  allowedRoles={["student"]}
                  element={ExamPage}
                ></ProtectedRoute>
              }
            />
            <Route
              path="/exam-result/:id"
              element={
                <ProtectedRoute
                  allowedRoles={["student"]}
                  element={ExamResults}
                ></ProtectedRoute>
              }
            />

            <Route path="/sports" element={<SportsNews />} />
            <Route path="/medical" element={<MedicalNews />} />
            <Route path="/startups" element={<StartupsNews />} />
            <Route path="/apps" element={<AppsNews />} />
            {/* Tech Submenu Routes */}
            <Route path="/tech" element={<TechNews />} />
            <Route path="/tech/:type" element={<TechNewsTypePage />} />

            {/* Courses Submenu Routes */}
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<SingleCoursePage />} />
            <Route path="/courses/:name" element={<div>PAGE</div>} />

            {/* NoAccess NoPage */}
            <Route path="/no-access" element={<NoAccess />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
