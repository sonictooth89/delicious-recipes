import React from "react";
import "./MyHeader.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"
            >
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/recipes">Recipes</Link>
              </li>
              <li>
                <Link to="/about">About me</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Delicious Recipes
          </Link>
        </div>

        <div className="navbar-end">
          <div className="avatar">
            <div className="w-10 mask mask-squircle">
              <img src="../../logo192.png" alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
