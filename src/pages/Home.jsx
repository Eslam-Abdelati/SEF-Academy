import React from 'react'
import FeaturedNews from "../components/Home/FeaturedNews";
import ArticleList from "../components/Home/ArticleList";
import "../assets/styles/FeaturedNews.css";
import { useSelector } from 'react-redux';
// import LoginModel from '../components/ui/LoginModel';

function Home() {
    const studentUser = useSelector((state) => state.exam.user);
    const reduxExam = useSelector((state) => state.exam.exam);
    console.log("Student User:", studentUser);
    console.log("reduxExam:", reduxExam);
  return (
    <div className="home-page site-page w-100">
      <div className='home-title-container'>
        <h1>Software engineering for future</h1>
      </div>
      <FeaturedNews />
      <ArticleList />

    </div>
  );
}

export default Home


