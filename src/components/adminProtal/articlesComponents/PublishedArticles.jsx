import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../../redux/slice/ArticlesSlice";
import Loader from "../../ui/loader/Loader";
import ArticleItem from "./ArticleItem";
import ArticlesTableHeader from "./ArticlesTableHeader";
import usePagination from "../../../hooks/usePagination";
import PaginationNav from "../../PaginationNav";
import nextIcon from "../../../assets/images/next.svg";
import prevIcon from "../../../assets/images/prev.svg";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


function PublishedArticles() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.articles);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [publishedArticles, setPublishedArticles] = useState([]);

  
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  // Filter published articles
  useEffect(() => {
    if (data.length) {
      const published = data.filter(
        (article) => article.status === "published"
      );
      setPublishedArticles(published);
      setFilteredArticles(published);
    }
  }, [data]);

  // Handle search functionality with delay
  useEffect(() => {
    const delayFn = setTimeout(() => {
      setFilteredArticles(
        publishedArticles.filter((article) =>
          article.title?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 300);
    return () => clearTimeout(delayFn);
  }, [searchTerm, publishedArticles]);

  // Pagination 
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
    return (
      <div className="text-danger h3 text-center">
        <p>Something went wrong</p>
      </div>
    );
  }

  return (
    <div className="text-light d-flex flex-column gap-4 mt-lg-4">
      <div className="d-flex flex-column align-items-end gap-4">
        <Link
          className="btn btn-warning d-none d-lg-block"
          to="/adminportal/articles/add-new-article"
        >
          CREATE NEW ARTICLE
        </Link>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-center">Published Articles</h2>
        <div className="position-relative text-danger search-box">
          <input
            type="text"
            className="article-search-input"
            placeholder="Search articles"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="article-search-icon">
            <FaSearch />
          </div>
        </div>
      </div>

      <div>
        <ArticlesTableHeader />
        <div className="d-flex flex-column gap-2 mt-2">
          {displayedData.map((article) => (
            <ArticleItem
              key={article._id}
              title={article.title}
              category={article.category}
              date={article.date}
              time={article.publishedTime}
              status={article.status}
            />
          ))}
        </div>
      </div>

      {displayedData.length > 0 && (
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
      )}

      <div className="d-flex justify-content-center align-items-end mt-5 d-flex d-lg-none">
        <Link className="btn btn-warning" to="/adminportal/add-new-article">
          CREATE NEW ARTICLE
        </Link>
      </div>
    </div>
  );
}

export default PublishedArticles;
