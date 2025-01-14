import React from "react";

const  ArticlesTableHeader = () => {
  return (
    <div className=" d-none d-lg-grid  article-table-header-container text-white pt-2 my-2">
      <h3 className=" ">Title</h3>
      <h3 className=" ">Category</h3>
      <h3 className=" ">Status</h3>
      <h3 className=" ">Date&Time</h3>
      <h3 className=" "> </h3>
    </div>
  );
};
export default ArticlesTableHeader;
