import React from "react";
import { useNavigate } from "react-router-dom";

function FeturedArticleItem({id, category, title, time, content }) {
 const navigate = useNavigate()
  return (
    <div className="home-featured-articles-post border-bottom border-dark " onClick={() => {
      navigate(`/article/${id}`)
    }} style={{ cursor: "pointer" }}>
      <div className="article-content">
        <div className="d-flex justify-content-between py-3 ">
          <span className="article-category">{category}</span>
          <div className="">
            <p className="time-1">🕒{time}</p>
          </div>
        </div>
        <h3>{title}</h3>
        <p className="home-article-content">{content}</p>
        <div className="home-articles-post-arrow arrow"></div>
      </div>
    </div>
  );
}

export default FeturedArticleItem;
