import React from "react";
import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav class="navbar">
          <div class="container-fluid">
            <h1>
              <strong>My Bank</strong>
              <FaWallet />
            </h1>
            <div className="d-flex">
              <Link
                to="/account"
                className="btn btn-outline-secondary p-2 mr-4"
              >
                Account
              </Link>
              <Link to="/profile" className="btn btn-outline-success p-2 mr-4">
                Profile
              </Link>
              <Link to="/logout" className="btn btn-outline-danger p-2 mr-5">
                Logout
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
