import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slice/AuthSlice";
import userSlice from "./slice/UsersSlice";
import articlesSlice from "./slice/ArticlesSlice";
// import jobsSlice from './slice/JobsSlice';
import coursesSlice from "./slice/CoursesSlice";
import jobsReducer from "./slice/JobsSlice";
import jobsFilterReducer from "./slice/NewJobFilter";
import CvSlice from "./slice/CvSlice";
import ExamSlice from "./slice/ExamSlice";
import AdminJobsSlice from "./slice/AdminJobsSlice";

const rootreducer = combineReducers({
  auth: authSlice,
  users: userSlice,
  articles: articlesSlice,
  jobs: jobsReducer,
  adminJobs: AdminJobsSlice,
  courses: coursesSlice,
  jobFill: jobsFilterReducer,
  cv: CvSlice,
  exam: ExamSlice,
});
const store = configureStore({
  reducer: rootreducer,
});
export default store;
