import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <div className="header-container">
          <Link to="/dashboard" className="left-section">Dashboard</Link>
          <div className="right-section">
            <Link to="/login" className="Link">
              Log Out
            </Link>
            <Link to="/selectOutput" className="Link">
              <b>VIEW</b>
            </Link>
          </div>
        </div>
    </>
  );
}

export default Header;
