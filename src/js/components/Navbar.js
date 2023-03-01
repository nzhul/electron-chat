import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const message = useSelector((state) => {
    return state.message;
  });

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline-primary"
          >
            Back
          </button>
          <Link to={"/settings"} className="btn btn-outline-success ml-2">
            Settings
          </Link>
          {message}
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          <Link
            to={"/register"}
            onClick={() => {}}
            className="btn btn-outline-danger ml-2"
          >
            Register
          </Link>
          <Link
            to={"/login"}
            onClick={() => {}}
            className="btn btn-outline-success ml-2"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
