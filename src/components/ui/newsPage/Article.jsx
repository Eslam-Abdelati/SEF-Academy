import React from "react";
import { CgTimer } from "react-icons/cg";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useTimeAgo from "../../../hooks/useTimeAgo";


function Article({ data }) {
  const { _id, title, content, image, publishedTime, category } = data;

  const timeAgo = useTimeAgo(publishedTime);

  return (
    <div className="article-container">
      <Link to={`/article/${_id}`} className="article-link">
        <div className="article-item d-flex d-lg-grid flex-column">
          <div className="article-image p-4" style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

          }}>
            {/* <img src={image} className="img-fluid" alt={title} /> */}
          </div>
          <div className="article-details p-4 flex-grow-1">
            <div className="text-white d-flex flex-column gap-3">
              <span className="category">{category}</span>

              <div className="article-header d-flex justify-content-between">
                <h2 className="article-title">{title}</h2>
                <p className="article-time">
                  <CgTimer /> <span>{timeAgo}</span>
                </p>
              </div>

              <div className="article-content d-flex justify-content-between mt-3">
                <p className="content-text">{content}</p>
                <p className="read-more">
                  <FaAnglesRight size={35} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Article;
