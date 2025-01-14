import { React } from "react";
import Title from "./title";
import AddAricleForm from "./AddAricleForm";
import "./ArticleTable.css";

const AddNewArticle = () => {
  return (
    <div className="">
      <div className="d-flex justify-content-between mb-5">
        <Title title="Add Article Details " />
        <button className="btn btn-warning">publish</button>
      </div>
      <AddAricleForm />
    </div>
  );
};
export default AddNewArticle;
