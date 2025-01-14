import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHobbies } from "../../redux/slice/CvSlice";

function CvHobbiesForm() {
  const dispatch = useDispatch();
  const hobbiesFromRedux = useSelector((state) => state.cv.cv.hobbies);
  const [hobbies, setHobbies] = useState(hobbiesFromRedux);

  useEffect(() => {
    setHobbies(hobbiesFromRedux);
  }, [hobbiesFromRedux]);
  useEffect(() => {
    dispatch(updateHobbies(hobbies));
  }, [hobbies, dispatch]);
  const handleInputChange = (index, event) => {
    const newHobbies = [...hobbies];
    newHobbies[index] = event.target.value;
    setHobbies(newHobbies);
  };

  const handleAddHobby = () => {
    setHobbies([...hobbies, ""]);
  };

  const handleRemoveHobby = (index) => {
    const newHobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(newHobbies);
  };

  return (
    <div>
      <h4>Hobbies and Interests</h4>
      <div className="d-flex cv-skill-item-container mt-3">
        <div className="flex-grow-1">
          {hobbies.map((hobby, index) => (
            <div key={index} className="cv-skill-item flex-grow-1">
              <input
                type="text"
                value={hobby}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Enter your hobby"
              />
              <div className="cv-skill-item-icon-box">
                {hobbies.length > 1 && (
                  <i
                    className="fas fa-trash-alt"
                    onClick={() => handleRemoveHobby(index)}
                    style={{ cursor: "pointer", marginLeft: "10px" }}
                  ></i>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex align-items-end">
          <div onClick={handleAddHobby} className="pb-2">
            <i className="fas fa-plus-circle" style={{ cursor: "pointer" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvHobbiesForm;
