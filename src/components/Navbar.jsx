import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="items-center justify-between p-5 bg-blue-800 text-blue-300  flex ">
      <span className="font-medium text-2xl text-blue-300">LOGO </span>
      <div>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <span className={isActive ? "text-white" : ""}>Home</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              {({ isActive }) => (
                <span className={isActive ? "text-white" : ""}>Blog</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-new">
              {({ isActive }) => (
                <span className={isActive ? "text-white" : ""}>Add New</span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
