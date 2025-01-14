import { FaRegPenToSquare, FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function CourseCard({
  title,
  level,
  lessons,
  language,
  startDate,
  duration,
  publishedOn,
  status,
  id,
}) {
  return (
    <div className="mobile mx-auto row mt-5 bg-black rounded-3" key={id}>
      <div className=" mt-3 row">
        <div className="col-9 text-light fw-bolder fs-5">Course Name</div>
        <div className="col-3 d-flex justify-content-end align-items-center">
          <span
            className={`rounded-5 p-2 px-4 text-nowrap ${
              status?.toLowerCase() === "ended" ? "bg-secondary" : "bg-warning"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
      <div className="col-12 text-light fw-bolder fs-4 mt-3">{title}</div>
      <div className="row">
        <div className="col-6 text-light fw-bolder fs-5 mt-3">Level</div>
        <div className="col-6 text-light fw-bolder fs-5 mt-3">
          Number of Lessons
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-light fw-bolder fs-6 mt-3">{level}</div>
        <div className="col-6 text-light fw-bolder fs-6 mt-3">
          {lessons?.length}
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-light fw-bolder fs-5 mt-3">Language</div>
        <div className="col-6 text-light fw-bolder fs-5 mt-3">Start Date</div>
      </div>
      <div className="row">
        <div className="col-6 text-light fw-bolder fs-6 mt-3">{language}</div>
        <div className="col-6 text-light fw-bolder fs-6 mt-3">{startDate}</div>
      </div>
      <div className="row">
        <div className="col-6 text-light fw-bolder fs-5 mt-3">Duration</div>
        <div className="col-6 text-light fw-bolder fs-5 mt-3">Published On</div>
      </div>
      <div className="row">
        <div className="col-6 text-light fw-bolder fs-6 mt-3">{duration}</div>
        <div className="col-6 text-light fw-bolder fs-6 mt-3">
          {publishedOn}
        </div>
      </div>
      <div className="col-8 text-light fw-bolder fs-5 mt-3"></div>
      <div className="d-flex justify-content-end gap-3 p-3 fs-2 ">
        <Link className="text-warning">
          <FaRegPenToSquare />
        </Link>
        <Link className="text-warning ml-3">
          <FaTrashCan />
        </Link>
      </div>
    </div>
  );
}
