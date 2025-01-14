import React from "react";
import ArticleItem from "./ArticleItem";
import articleImg from "../../assets/images/main_background.jpg";
function ArticleList() {
  // Array of articles data
  const articles = [
    {
      id: "5",
      category: "EDUCATION",
      title: "HERE’S THE TITLE OF THE ARTICLE",
      time: "3h ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: articleImg,
    },
    {
      id: "7",
      category: "TECH",
      title: "ARTICLE",
      time: "3h ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: articleImg,
    },
    {
      id: "7",
      category: "SPORTS",
      title: "HERE’S THE TITLE OF THE ARTICLE",
      time: "3h ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: articleImg,
    },
    {
      id: "8",
      category: "EDUCATION",
      title: "HERE’S THE TITLE OF THE ARTICLE",
      time: "3h ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: articleImg,
    },
  ];

  return (
    <div className="main-news text-light mt-4">
      {articles.map((article, index) => (
        <ArticleItem
          key={index}
          id={article.id}
          category={article.category}
          title={article.title}
          time={article.time}
          content={article.content}
          image={article.image}
        />
      ))}
    </div>
  );
}

export default ArticleList;
