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
            <i className="fa fa-users text-success me-4"></i>
            <span>ELMS</span>
          </div>
          <div className="sidebar-menu">
            <ul className="menu">
              <li className="sidebar-item active">
                <Link to="/" className="sidebar-link">
                  <i className="fa fa-home text-success"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="sidebar-item has-sub">
                <a href="#" className="sidebar-link">
                  <i className="fa fa-table text-success"></i>
                  <span>Account</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="Accountstatus.html">Account Status</a>
                  </li>
                  <li>
                    <a href="profile.html">Profile</a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item has-sub">
                <a href="#" className="sidebar-link">
                  <i className="fa fa-users text-success"></i>
                  <span>Employees</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="add_employee.html">Add Employee</a>
                  </li>
                  <li>
                    <a href="manage_employee.html">Manage Employee</a>
                  </li>
                  <li>
                    <a href="showemplyee.html">Employee</a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item has-sub">
                <a href="#" className="sidebar-link">
                  <i className="fa fa-table text-success"></i>
                  <span>Leave Management</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="apply_leave.html">Apply Leaves</a>
                  </li>
                  <li>
                    <a href="all_leave.html">All Leaves</a>
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
