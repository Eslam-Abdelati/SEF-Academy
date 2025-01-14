import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSkills } from "../../redux/slice/CvSlice"; // Ensure the path is correct

function CvSkillsForm() {
  const dispatch = useDispatch();
  const skillsFromRedux = useSelector((state) => state.cv.cv.skills);
  const [skills, setSkills] = useState(skillsFromRedux);

  useEffect(() => {
    setSkills(skillsFromRedux);
  }, [skillsFromRedux]);
  useEffect(() => {
    dispatch(updateSkills(skills));
  }, [skills, dispatch]);

  const handleInputChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleRemoveSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };


  return (
    <div>
      <h4>Skills</h4>
      <div className="d-flex cv-skill-item-container">
        <div className="flex-grow-1">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="cv-skill-item d-flex align-items-center mb-2"
            >
              <input
                type="text"
                value={skill}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Enter a skill"
                className="form-control me-2"
              />
              {skills.length > 1 && (
                <i
                  className="fas fa-trash-alt text-warning cursor-pointer"
                  onClick={() => handleRemoveSkill(index)}
                  aria-label="Remove skill"
                ></i>
              )}
            </div>
          ))}
        </div>
        <div className="d-flex align-items-end">
          <div onClick={handleAddSkill} className="pb-2 cursor-pointer">
            <i className="fas fa-plus-circle text-warming"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvSkillsForm;
