import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-header navbar-expand navbar-light">
        <a className="sidebar-toggler" href="">
          <span className="navbar-toggler-icon"></span>
        </a>
        <button
          className="btn navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex align-items-center navbar-light ms-auto">
            <li className="dropdown">
              <a
                to="#"
                data-bs-toggle="dropdown"
                className="nav-link dropdown-toggle nav-link-lg nav-link-user"
              >
                <div className="avatar me-1">
                  <img src="assets/images/admin.png" alt="" srcset="" />
                </div>
                <div className="d-none d-md-block d-lg-inline-block">
                  Hi,<span> Admin</span>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <Link className="dropdown-item" to="/login">
                  <i data-feather="settings"></i> Login
                </Link>
                <Link className="dropdown-item" to="">
                  <i data-feather="log-out"></i> Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
