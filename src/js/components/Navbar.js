import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/auth";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

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
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          <Link
            to={"/"}
            onClick={() => {}}
            className="btn btn-outline-success ml-2"
          >
            Login
          </Link>
          {user && (
            <button
              onClick={() => dispatch(logout())}
              className="btn btn-outline-danger ml-2"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
