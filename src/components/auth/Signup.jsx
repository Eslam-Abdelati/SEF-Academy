import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../assets/images/seff_logo_black.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BsFileLock } from "react-icons/bs";
import { LuUserSquare2 } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const Signup = () => {
  const [activepassword, setActivepassword] = useState(false);
  const [activeConfpassword, setActiveConfpassword] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {/* <div className=" signUp login-form register-form">
                <div className="form-box text-light rounded ">
                    <div className="form-image">
                        <img src={Logo} className='logo' alt="Profile Picture" />
                    </div>
                    <form>
                        <div className="row">
                            <div className="col-md-5 mb-3 input-box">
                                <label htmlFor='firstname'><LuUserSquare2 /></label>
                                <input type="text" className="form-control" id="firstname" placeholder="FIRST NAME" />
                            </div>
                            <div className="col-md-5 mb-3 input-box">
                                <label htmlFor='lastname'><LuUserSquare2 /></label>
                                <input type="text" className="form-control" id="lastname" placeholder="LAST NAME" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-3 input-box">
                                <label htmlFor='email'><LuUserSquare2 /></label>
                                <input type="email" className="form-control" id="email" placeholder="Email Address" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3 input-box ">
                                <label htmlFor='password'><BsFileLock /></label>
                                <input type="password" className="form-control" id="password" placeholder="Password" required />
                            </div>
                            <div className="col-md-6 mb-3 input-box">
                                <label htmlFor='confpassword'><BsFileLock /></label>
                                <input type="password" className="form-control" id="confPassword" placeholder="Confirm Password"
                                    required />
                            </div>
                        </div>
                        <button onClick={() => navigate('/')} type="submit" className="register-btn">
                            sign up
                        </button>
                    </form>
                    <p className='account'>already have an acoount ?
                        <Link to="/login"> Login</Link>
                    </p>
                </div>
            </div> */}
      <section className="login-form register-form">
        <div className="form-box">
          <form>
            <img className="logo" src={Logo} alt="logo" />
            <div className="input-box">
              <label htmlFor="firstname">
                <LuUserSquare2 />
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="first name"
              />
            </div>
            <div className="input-box">
              <label htmlFor="lastname">
                <LuUserSquare2 />
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="last name"
              />
            </div>
            <div className="input-box">
              <label htmlFor="emailaddress">
                <MdOutlineMailOutline />
              </label>
              <input
                type="email"
                id="emailaddress"
                name="emailaddress"
                placeholder="email address"
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">
                <BsFileLock />
              </label>
              <input
                type={`${activepassword ? "text" : "password"}`}
                id="password"
                name="password"
                placeholder="password"
              />
              <p onClick={() => setActivepassword(!activepassword)}>
                {activepassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
              </p>
            </div>
            <div className="input-box">
              <label htmlFor="confpassword">
                <BsFileLock />
              </label>
              <input
                type={`${activeConfpassword ? "text" : "password"}`}
                id="confpassword"
                name="confpassword"
                placeholder="password confirmation"
              />
              <p onClick={() => setActiveConfpassword(!activeConfpassword)}>
                {activeConfpassword ? (
                  <MdOutlineRemoveRedEye />
                ) : (
                  <FaRegEyeSlash />
                )}
              </p>
            </div>
            <button
              onClick={() => navigate("/login")}
              type="submit"
              className="register-btn"
            >
              sign up
            </button>
          </form>
          <p className="account">
            already have an acoount ?<Link to="/login"> Login</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Signup;
