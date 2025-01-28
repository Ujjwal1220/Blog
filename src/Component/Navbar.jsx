import React from "react";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold">SketchMyHome.AI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Username</summary>
                <ul className="bg-base-100 rounded-t-none p-2 shadow-md">
                  <li>
                    <Link to="/feed">Get Profile</Link>
                  </li>
                  <li>
                    <Link to="/profile">Edit Profile</Link>
                  </li>
                  <li>
                    <Link to="/post">Make a Post</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
