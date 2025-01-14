import React from "react";

function ContactInfo() {
  return (
    <div className=" mb-4 none">
      <div className="card-body">
        <h5 className="car2 ps-3">Contact Info</h5>
        <div className="ps-3 mt-2">
          <span className="icon-email">
            <i className="fa-regular fa-envelope"></i>
          </span>
          <span className="editable-label">Email</span>
          <span contentEditable className="editable-text i">
            balqeessabir@gmail.com
          </span>
        </div>
        <div className="ps-3 mt-2">
          <span className="icon-phone">
            <i className="fa-solid fa-phone"></i>
          </span>
          <span className="editable-label">Mobile Number</span>
          <span contentEditable className="editable-text i">
            0020 1064569047
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
