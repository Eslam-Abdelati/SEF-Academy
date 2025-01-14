import React from "react";
import { useSelector } from "react-redux";

const CvMainBody = () => {
  const cv = useSelector((state) => state.cv.cv);

  return (
    <div className="p-4">
      {/* About Section */}
      <div className="section-content mb-4">
        <h3>About</h3>
        <p>{cv.about}</p>
      </div>

      {/* Education Section */}
      <div className="section-content mb-4">
        <h3>Education</h3>
        {cv.educations.map((education, index) => (
          <div key={index} className="d-flex gap-4 mb-3">
            <div className=" main-body-category-start">
              <strong style={{ width: "60px", maxWidth: "60px" }}>
                {education.from} - {education.to}
              </strong>
            </div>
            <div className="flex-grow-1">
              <p>
                <strong>{education.organizationName}</strong>
              </p>
              <p>
                {education.degree}
                <br />
                {education.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="section-content mb-4">
        <h3>Experience</h3>
        {cv.experiences.map((experience, index) => (
          <div key={index} className="d-flex gap-3 mb-3">
            <div className="main-body-category-start text-center">
              <img
                src={experience.img} // Dynamic image source
                alt={`logo`}
                style={{ width: "60px", maxWidth: "60px" }}
              />
            </div>
            <div className="content d-flex flex-column gap-1 flex-grow-1">
              <p>
                <strong>{experience.company}</strong>
              </p>
              <p>
                {experience.position} | {experience.from} - {experience.to}
              </p>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CvMainBody;
