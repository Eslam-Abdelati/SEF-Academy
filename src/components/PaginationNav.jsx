import React from "react";

function PaginationNav({
  currentPage,
  totalPages,
  onPageChange,
  getPageNumbers,
  setCurrentPage,
  prevIcon,
  nextIcon,
}) {
  return (
    <nav className="pagination-nav mt-4">
      <ul className="d-flex justify-content-end gap-3">
        <li
          className={`pagination-item ${currentPage === 1 && "disabled"}`}
          style={{
            borderRadius: "50%",
            border: "1px solid #e2a703",
            padding: "5px",
          }}
        >
          <a
            href="#coursesTableID"
            className="page-link"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <img src={prevIcon} alt="Previous" />
          </a>
        </li>

        {getPageNumbers().map((pageNumber) => (
          <li
            className={`pagination-item  ${
              currentPage === pageNumber ? "active" : ""
            }`}
            key={pageNumber}
          >
            <a href="#coursesTableID"
              className="page-link"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}

        {currentPage < totalPages - 2 && (
          <li className="pagination-item ">
            <span href="#coursesTableID" className="page-link">...</span>
          </li>
        )}

        <li
          className={`pagination-item  ${
            currentPage === totalPages && "disabled"
          }`}
          style={{
            borderRadius: "50%",
            border: "1px solid #e2a703",
            padding: "5px",
          }}
        >
          <a href="#coursesTableID"
            className="page-link"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            <img src={nextIcon} alt="Next" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationNav;
