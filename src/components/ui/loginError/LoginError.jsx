import React from "react";
import { useDispatch } from "react-redux";
import { clearError } from "../../../redux/slice/AuthSlice";
import "./login-error.css";

function LoginError({ error }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearError());
  };

  return (
    <div className="login-error">
      <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
        <div className="error-box">
          <button onClick={handleClose} className="btn close-btn">
            Close
          </button>
          <div>Invalid username or Password</div>
        </div>
      </div>
    </div>
  );
}

export default LoginError;
