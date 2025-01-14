import React from "react";
import useFormattedDate from "../../hooks/useFormattedDate";

function CreateCVHeader() {
  const date = useFormattedDate();
  return (
    <div>
      <div>
        <h2 className="page-title">Create CV</h2>
        <p>{date}</p>
      </div>
      <div>
        <h2>Customize your cv</h2>
        <p>
          Here you can create your CV by answering questions and getting it
          ready for download or applying to jobs through the platform.
        </p>
      </div>
    </div>
  );
}

export default CreateCVHeader;
