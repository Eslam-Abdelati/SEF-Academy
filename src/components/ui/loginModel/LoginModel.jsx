import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginModel.css";
import { useDispatch } from "react-redux";
import { toggleAuthModel } from "../../../redux/slice/AuthSlice";
const LoginModel = () => {
  const dispatch = useDispatch();
  return (
    <section className={`login-model`}>
      <div className="wrapper">
        <button
          onClick={() => {
            dispatch(toggleAuthModel());
          }}
        >
          X
        </button>
        <div>
          <p>Please login to view this page</p>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </section>
  );
};

export default LoginModel;
