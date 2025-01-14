import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateExperiance } from "../../redux/slice/CvSlice";

function CvExperianceForm() {
  const dispatch = useDispatch();
  const experianceFromRedux = useSelector((state) => state.cv.cv.experiences);
  const [experience, setExperiences] = useState(experianceFromRedux);

  useEffect(() => {
    setExperiences(experianceFromRedux);
  }, [experianceFromRedux]);

  useEffect(() => {
    dispatch(updateExperiance(experience));
  }, [experience, dispatch]);

  const fileInputRef = useRef(null);
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (index, field, value) => {
    const newExp = [...experience];
    newExp[index] = {
      ...newExp[index],
      [field]: value,
    };
    setExperiences(newExp);
  };

  const handleAddExperiance = () => {
    setExperiences([
      ...experience,
      {
        company: "",
        position: "",
        from: "",
        to: "",
        description: "",
        img: "",
      },
    ]);
  };

  const handleRemoveExperiance = (index) => {
    const newExp = experience.filter((_, i) => i !== index);
    setExperiences(newExp);
  };
  return (
    <div className="cv-education-form ">
      <h3>EXPERIENCE</h3>
      {experience.map((exp, index) => (
        <div>
          <form className="d-flex mt-2">
            <div className="education-field w-100 ">
              <div className="orgainzation_name  w-100 ">
                <p>Compony Name</p>
                <input
                  className="form-control rounded-1 "
                  type="text"
                  name=""
                  id=""
                  value={exp.company}
                  onChange={(e) =>
                    handleInputChange(index, "company", e.target.value)
                  }
                />
              </div>
              <div className="degree w-100">
                <p> Position</p>
                <input
                  className="form-control  rounded-1"
                  type="text"
                  name=""
                  id=""
                  value={exp.position}
                  onChange={(e) =>
                    handleInputChange(index, "position", e.target.value)
                  }
                />
              </div>
              <div className="From_To w-100">
                <div className="d-flex gap-2 ">
                  <div className=" flex-grow-1">
                    <p className="d-flex">From</p>
                    <input
                      className=" rounded-1 "
                      type="text"
                      value={exp.from}
                      onChange={(e) =>
                        handleInputChange(index, "from", e.target.value)
                      }
                    />
                  </div>
                  <div className=" flex-grow-1">
                    <p className="d-flex">To</p>
                    <input
                      className="  rounded-1  ms-0"
                      type="text"
                      value={exp.to}
                      onChange={(e) =>
                        handleInputChange(index, "to", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2 justify-content-between w-100 align-items-stretch">
                <div className="description ">
                  <p className="">Compony Logo</p>
                  <div className="cv-upload-logo-container">
                    <div className="upload-container">
                      <div className="upload-box">
                        <div className="upload-icon">
                          <i className="fa-solid fa-cloud-arrow-up"></i>
                        </div>
                        <p className="upload-text">
                          Drag & drop files or
                          <span className="browse" onClick={handleBrowseClick}>
                            Browse
                          </span>
                        </p>
                        <p className="supported-formats">
                          Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI,
                          Word, PPT
                        </p>
                        <input
                          type="file"
                          ref={fileInputRef}
                          id="fileInput"
                          name="file"
                          accept=".jpg,.png,.gif,.mp4,.ppt, .pdf, .psd, .ai, .doc, .docx"
                          required
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description w-100 flex-grow-1">
                  <p className="">Description</p>
                  <textarea
                    className=" rounded-1 "
                    value={exp.description}
                    onChange={(e) =>
                      handleInputChange(index, "description", e.target.value)
                    }
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
          <div className=" text-end">
            {experience.length > 1 && (
              <i
                className="fas fa-trash-alt"
                onClick={() => handleRemoveExperiance(index)}
              ></i>
            )}
          </div>
        </div>
      ))}
      
      <div className="d-flex align-items-end  justify-content-end gap-3">
        {/* <div className="pb-2">
          <i className="fas fa-trash-alt"></i>
        </div> */}
        <div className="pb-2" onClick={handleAddExperiance}>
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
    </div>
  );
}

export default CvExperianceForm;

