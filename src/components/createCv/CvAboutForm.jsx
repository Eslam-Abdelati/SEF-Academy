import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../../redux/slice/CvSlice";

function CvAboutForm() {
  const [about, setAbout] = useState("");
  const cv = useSelector((state) => state.cv.cv); // Adjusted selector to access the correct part of the state
  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    dispatch(updateField({ field, value }));
    console.log(cv);
  };

  return (
    <div className="">
      <div className="row">
        <div className="col">
          <label className="form-label">About</label>
          <textarea
            className="form-control" // Added Bootstrap class for styling
            id="about"
            style={{
              minHeight: "200px",
              maxHeight: "400px",
            }}
            value={about} // Bind textarea value to state
            onChange={(e) => {
              setAbout(e.target.value);
              handleInputChange("about", e.target.value); // Correct field name
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CvAboutForm;
