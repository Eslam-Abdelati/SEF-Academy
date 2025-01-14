import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHonorAndAwards } from "../../redux/slice/CvSlice";

function CvHonorForm() {
  const dispatch = useDispatch();
  const honorsAndAwardsFromRedux = useSelector(
    (state) => state.cv.cv.honorsAndAwards
  );
  const [honorsAndAwards, setHonorsAndAwards] = useState(
    honorsAndAwardsFromRedux
  );

  useEffect(() => {
    setHonorsAndAwards(honorsAndAwardsFromRedux);
  }, [honorsAndAwardsFromRedux]);

  const handleInputChange = (index, field, value) => {
    const updatedHonors = [...honorsAndAwards];
    updatedHonors[index] = {
      ...updatedHonors[index],
      [field]: value,
    };
    setHonorsAndAwards(updatedHonors);
  };

  const handleAddHonor = () => {
    setHonorsAndAwards([
      ...honorsAndAwards,
      { awardName: "", year: "", description: "" },
    ]);
  };

  const handleRemoveHonor = (index) => {
    const updatedHonors = honorsAndAwards.filter((_, i) => i !== index);
    setHonorsAndAwards(updatedHonors);
  };


  useEffect(() => {
    dispatch(updateHonorAndAwards(honorsAndAwards));
  }, [honorsAndAwards, dispatch]);

  return (
    <div className="cv-education-form">
      <h3>Honors and Awards</h3>
      {honorsAndAwards.map((honor, index) => (
        <div key={index}>
          <form className="d-flex mt-2">
            <div className="education-field w-100">
              <div className="From_To w-100">
                <div className="d-flex gap-2">
                  <div className="flex-grow-1">
                    <p className="d-flex">Award Name</p>
                    <input
                      className="rounded-1"
                      type="text"
                      value={honor.awardName}
                      onChange={(e) =>
                        handleInputChange(index, "awardName", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <p className="d-flex">Year</p>
                    <input
                      className="rounded-1 ms-0"
                      type="text"
                      value={honor.year}
                      onChange={(e) =>
                        handleInputChange(index, "year", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="description w-100">
                <p className="w-50">Description</p>
                <textarea
                  className="rounded-1"
                  value={honor.description}
                  onChange={(e) =>
                    handleInputChange(index, "description", e.target.value)
                  }
                ></textarea>
              </div>
            </div>
          </form>
          <div className="pb-2 text-end">
            <i
              className="fas fa-trash-alt"
              onClick={() => handleRemoveHonor(index)}
            ></i>
          </div>
        </div>
      ))}
      <div className="d-flex align-items-end justify-content-end gap-3">
        <div className="pb-2" onClick={handleAddHonor}>
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
    </div>
  );
}

export default CvHonorForm;
