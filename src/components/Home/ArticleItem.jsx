import React from "react";
import { useNavigate } from "react-router-dom";

function ArticleItem({ category, title, time, content, image ,id}) {
  const navigate = useNavigate()
  return (
    <div className="home-articles-post d-flex p-2 gap-5 flex-column flex-xl-row" onClick={() => navigate(`/article/${id}`)} style={{ cursor: "pointer" }}>
      <img src={image} alt="" className="home-article-post-img" />
      <div className="article-content ">
        <div className="d-flex justify-content-between d-flex justify-content-between py-3">
          <p className="category article-category fs-5">{category}</p>
          <div>
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

export default ArticleItem;
