import React from "react";
import courseImg from "../../assets/images/main_background.jpg";

function InstructorUpcomingCourses() {
  return (
    <div className="d-flex bg-black">
      <div
        className="position-relative ratio ratio-4x3"
        style={{
          width: "200px",
          background: `url(${courseImg}) no-repeat center center `,
        }}
      >
        {/* <img
          src={courseImg}
          alt=""
          style={{ height: "120px" }}
          className="w-100"
        /> */}
        <div className="position-absolute top-0 bottom-0 start-0 end-0 instructor-upcoming-courses-img-shade">
          <span className="position-absolute bottom-0 start-0 end-0 text-center p-3">
            Lev.1
          </span>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between">
        <div className="d-flex flex-column justify-content-between p-3">
          <p className="">Python For Beginners</p>
          <div className="d-flex justify-content-between align-items-end gap-2">
            <div>
              <div>
                <i className="fa-regular fa-clock" />
                <span> wednesday, June 7th</span>
              </div>
              <div>
                <i className="fa-regular fa-file-lines" />
                <span> 12 Lessons</span>
              </div>
            </div>
            <div>
              <button className="btn btn-warning"> View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorUpcomingCourses;
