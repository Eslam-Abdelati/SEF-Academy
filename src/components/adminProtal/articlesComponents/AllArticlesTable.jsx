import React, { useEffect, useState } from "react";
import Title from "./title";
import ArticleItem from "./ArticleItem";
import ArticlesTableHeader from "./ArticlesTableHeader";
import "./ArticleTable.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../ui/loader/Loader";
import usePagination from "../../../hooks/usePagination";
import PaginationNav from "../../PaginationNav";
import nextIcon from "../../../assets/images/next.svg";
import prevIcon from "../../../assets/images/prev.svg";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../../redux/slice/ArticlesSlice";

const Result = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error } = useSelector((state) => state.articles);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  useEffect(() => {
    if (data.length) {
      setFilteredArticles(data);
    }
  }, [data]);

  // Search functionality with delay
  useEffect(() => {
    const delayFn = setTimeout(() => {
      setFilteredArticles(
        data.filter((article) =>
          article.title?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 300);
    return () => clearTimeout(delayFn);
  }, [searchTerm, data]);

  const ITEMS_PER_PAGE = 5;
  const {
    currentPage,
    totalPages,
    onPageChange,
    getPageNumbers,
    setCurrentPage,
  } = usePagination(filteredArticles, ITEMS_PER_PAGE);

  useEffect(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setDisplayedData(filteredArticles.slice(start, end));
  }, [filteredArticles, currentPage]);
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div className="d-flex justify-content-end align-items-end ">
      <div className="w-100 article-table-top-container mt-3 mt-md-0">
        <div className="d-flex justify-content-end align-items-end mb-5 d-none d-lg-flex">
          <Link
            className="btn btn-warning"
            to="/adminportal/articles/add-new-article"
          >
            Create New Article
          </Link>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Title title="All Articles" />
          <div className="position-relative text-danger search-box">
            <input
              type="text"
              className="article-search-input"
              placeholder="search all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="article-search-icon">
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="article-table-container">
          <ArticlesTableHeader />
          <div className="d-flex flex-column gap-4">
            {displayedData.map((art) => (
              <ArticleItem
                title={art.title}
                category={art.category}
                date={art.date}
                time={art.publishedTime}
                key={art._id}
                status={art.status}
              />
            ))}
          </div>

          <div className="text-white fw-bolder text-end p-3 mt-3">
            <PaginationNav
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
              getPageNumbers={getPageNumbers}
              setCurrentPage={setCurrentPage}
              prevIcon={prevIcon}
              nextIcon={nextIcon}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-end mt-5 d-flex d-lg-none">
          <Link className="btn btn-warning" to="/adminportal/add-new-article">
            Create New Article
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
