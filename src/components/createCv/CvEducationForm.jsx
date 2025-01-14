import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEducation } from "../../redux/slice/CvSlice";

function CvEducationForm() {
  const dispatch = useDispatch();
  const educationFromRedux = useSelector((state) => state.cv.cv.educations);
  const [education, setEducation] = useState(educationFromRedux);

  useEffect(() => {
    setEducation(educationFromRedux);
  }, [educationFromRedux]);

  useEffect(() => {
    dispatch(updateEducation(education));
  }, [education, dispatch]);

  const handleInputChange = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index] = {
      ...newEducation[index],
      [field]: value,
    };
    setEducation(newEducation);
  };

  const handleAddEdu = () => {
    setEducation([
      ...education,
      {
        organizationName: "",
        degree: "",
        from: "",
        to: "",
        description: "",
      },
    ]);
  };

  const handleRemoveEdu = (index) => {
    const newEducation = education.filter((_, i) => i !== index);
    setEducation(newEducation);
  };

  console.log(education)
  console.log(educationFromRedux)
  return (
    <div className="cv-education-form">
      <h3>Education</h3>
      {education.map((edu, index) => (
        <div key={index} className="mt-3">
          <form className="d-flex mt-2">
            <div className="education-field w-100">
              <div className="organization_name w-100">
                <p>Organization Name</p>
                <input
                  className="form-control rounded-1"
                  type="text"
                  value={edu.organizationName}
                  onChange={(e) =>
                    handleInputChange(index, "organizationName", e.target.value)
                  }
                />
              </div>
              <div className="degree w-100">
                <p>Degree</p>
                <input
                  className="form-control rounded-1"
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    handleInputChange(index, "degree", e.target.value)
                  }
                />
              </div>
              <div className="From_To w-100">
                <div className="d-flex gap-2">
                  <div className="flex-grow-1">
                    <p className="d-flex">From</p>
                    <input
                      className="rounded-1"
                      type="text"
                      value={edu.from}
                      onChange={(e) =>
                        handleInputChange(index, "from", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex-grow-1">
                    <p className="d-flex">To</p>
                    <input
                      className="rounded-1 ms-0"
                      type="text"
                      value={edu.to}
                      onChange={(e) =>
                        handleInputChange(index, "to", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="description w-100">
                <p className="w-50">Description</p>
                <textarea
                  className="rounded-1"
                  value={edu.description}
                  onChange={(e) =>
                    handleInputChange(index, "description", e.target.value)
                  }
                ></textarea>
              </div>
            </div>
          </form>
          <div>
            <div
              className="pb-2 d-flex justify-content-end"
              onClick={() => handleRemoveEdu(index)}
            >
              <i className="fas fa-trash-alt"></i>
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex align-items-end justify-content-end gap-3">
        <div className="pb-2" onClick={handleAddEdu}>
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
    </div>
  );
}

export default CvEducationForm;
