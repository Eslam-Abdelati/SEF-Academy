import React from "react";

function PersonalInfo() {
  return (
    <div className="card mb-4 none">
      <div className="card-body">
        <h5 className="car2 ps-3">Personal Info</h5>
        <p className="ps-3">
          <span className="Noneditable-text">Student ID</span>
          <span className="Noneditable-text"> 1420572</span>
        </p>
        <div className="editable-container ps-3">
          <div className="d-flex align-items-center mb-2">
            <span className="editable-label">Age </span>
            <span contentEditable className="editable-text">
              26 yo
            </span>
          </div>

          <div className="d-flex align-items-center mb-2">
            <span className="editable-label">Nationality </span>
            <span contentEditable className="editable-text">
              Sudanese
            </span>
          </div>

          <div className="d-flex align-items-center mb-2">
            <span className="editable-label">Country </span>
            <span contentEditable className="editable-text">
              Egypt
            </span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <span className="editable-label">City</span>
            <span contentEditable className="editable-text">
              Cairo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
