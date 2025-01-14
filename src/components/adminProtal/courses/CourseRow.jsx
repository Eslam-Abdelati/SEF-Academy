import React from "react";
import { FaRegPenToSquare, FaTrashCan } from "react-icons/fa6";

function CourseRow({
  id,
  title,
  status,
  duration,
  level,
  startDate,
  publishedOn,
}) {
  const handleEdit = () => {
    // logic for editing the course
    window.location.href = `/admin/courses/edit/${id}`;
  };

  const handleDelete = () => {
    // logic for deleting the course
    window.location.href = "/admin/courses";
  };

  return (
    <div className="row bg-black bg-opacity-25 py-1 pb-2 rounded">
      <div className="col-lg-2 text-white p-3 mt-3">{title}</div>
      <div className="col-lg-2 text-white p-3 mt-3">
        <button className="btn btn-warning fw-bolder btt">{status}</button>
      </div>
      <div className="col-lg-2 text-white p-3 mt-3">{duration}</div>
      <div className="col-lg-1 text-white p-3 mt-3 text-center">{level}</div>
      <div className="col-lg-2 text-white p-3 mt-3">{startDate}</div>
      <div className="col-lg-2 text-white p-3 mt-3">{publishedOn}</div>
      <div className="col-lg-1 p-3 mt-2 d-flex justify-content-end gap-3">
        <button
          className="text-warning bg-transparent fs-4"
          onClick={handleEdit}
        >
          <FaRegPenToSquare />
        </button>
        <button
          className="text-warning bg-transparent fs-4"
          onClick={handleDelete}
        >
          <FaTrashCan />
        </button>
      </div>
    </div>
  );
}

export default CourseRow;
