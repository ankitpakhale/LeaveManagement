import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div id="sidebar" className="active">
        <div className="sidebar-wrapper active">
          <div
            className="sidebar-header"
            style={{ height: "50px", marginTop: "-30px" }}
          >
            <i className="fa fa-users text-success me-4 fa-1x"></i>
            <span>ELMS</span>
          </div>

          <div className="sidebar-menu">
            <ul id="basic-navbar-nav">
              <li className="sidebar-item active">
                <Link to="/" className="sidebar-link">
                  <i className="fa fa-home text-success"></i>
                  <span>Dashboard</span>
                </Link>
              </li>

              <li className="sidebar-item has-sub">
                <a className="sidebar-link">
                  <i className="fa fa-table text-success"></i>
                  <span>Account</span>
                </a>
                <ul className="submenu">
                  <li>
                    <Link to="/accountstatus">Account Status</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item has-sub">
                <a className="sidebar-link">
                  <i className="fa fa-users text-success"></i>
                  <span>Employees</span>
                </a>
                <ul className="submenu">
                  <li>
                    <Link to="/add_employee">Add Employee</Link>
                  </li>
                  <li>
                    <Link to="/manage_employee">Manage Employee</Link>
                  </li>
                  <li>
                    <Link to="/showemplyee">Employee</Link>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item has-sub">
                <a className="sidebar-link">
                  <i className="fa fa-table text-success"></i>
                  <span>Leave Management</span>
                </a>
                <ul className="submenu">
                  <li>
                    <Link to="/apply_leave">Apply Leaves</Link>
                  </li>
                  <li>
                    <Link to="/all_leave">All Leaves</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <button className="sidebar-toggler btn x">
            <i data-feather="x"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default Login;
