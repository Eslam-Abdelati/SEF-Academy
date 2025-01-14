import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthModel } from "../../redux/slice/AuthSlice";

function NewCoursesSlider({ newCoursesData }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 557,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAuthModelOpen = useSelector((state) => state.auth.isAuthModelOpen);

  const checkAuth = () => {
    if (!isAuthenticated) {
      dispatch(toggleAuthModel());
    }
  };

  return (
    <div className="my-4">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="">New Courses</h3>
        <div className="d-flex justify-content-between text-light gap-5">
          <button
            className="btn btn-dark"
            onClick={() => sliderRef.current.slickPrev()}
          >
            {"<"}
          </button>
          <button
            className="btn btn-dark"
            onClick={() => sliderRef.current.slickNext()}
          >
            {">"}
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {newCoursesData.map(
          ({ id, title, instructor, image, startDate, lessons }) => (
            <div className="bg-black px-2" key={id}>
              <div className="card bg-dark text-white">
                <div className="position-relative">
                  <img src={image} className="card-img-top" alt={title} />
                  <div className="position-absolute bottom-0 start-0 end-0 new-course-image-text">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                      Instructor: <strong>{instructor}</strong>
                    </p>
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <p>{startDate}</p>
                    <p>{lessons?.length} lessons</p>
                  </div>
                  <div className="d-flex flex-column justify-content-between">
                    <div className="px-5">
                      <button
                        className="btn btn-warning w-100"
                        onClick={checkAuth}
                      >
                        Enroll
                      </button>
                    </div>
                    <Link
                      to={`/courses/${id}`}
                      className="btn btn-link text-white"
                      style={{ textDecoration: "none" }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
}

export default NewCoursesSlider;
