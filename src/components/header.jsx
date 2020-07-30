import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <div className="header-container">
          <div className="left-section">Dashboard</div>
          <div className="right-section">
            <Link to="/login">
              <button className="logout">Log Out</button>
            </Link>
          </div>
        </div>
    </>
  );
}

export default Header;
