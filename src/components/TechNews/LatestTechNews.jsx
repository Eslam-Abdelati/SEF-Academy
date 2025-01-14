import React from "react";
// import "../../assets/styles/Tech.css"; // Make sure this path is correct.
import { CgTimer } from "react-icons/cg";
import "bootstrap/dist/css/bootstrap.min.css";

const LatestTechNews = () => {
  const articles = [
    {
      title: "Here's the first article",
      timeAgo: "2 h ago",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Here's the second article",
      timeAgo: "3 h ago",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Here's the third article",
      timeAgo: "3 h ago",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
  ];

  return (
    <section className="latest-business">
      <div className="business-container">
        <h2>Latest Tech News</h2>
        <div className="content">
          {/* Left Column */}
          <div className="left">
            <div className="card-body">
              <h4 className="title">Tech</h4>
              <div className="details">
                <h2>{articles[0].title}</h2>
                <p>
                  <CgTimer
                    color="#474646"
                    size={35}
                    className="inline-block mr-2"
                  />{" "}
                  {articles[0].timeAgo}
                </p>
              </div>
              <p className="desc">{articles[0].description}</p>
            </div>
          </div>
          {/* Right Column */}
          <div className="right">
            {articles.slice(1).map((article, index) => (
              <div className="card-body" key={index}>
                <h4 className="title">Tech</h4>
                <div className="details">
                  <h2>{article.title}</h2>
                  <p>
                    <CgTimer
                      color="#474646"
                      size={35}
                      className="inline-block mr-2"
                    />{" "}
                    {article.timeAgo}
                  </p>
                </div>
                <p className="desc">{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestTechNews;
