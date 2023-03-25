import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Container/Dropdown";
// import "../assets/css/navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
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
            <ul className="menu">
              <li className="sidebar-item active">
                <Link to="/" className="sidebar-link">
                  <i class="fa fa-home text-success"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li class="sidebar-item has-sub">
                <a href="#" class="sidebar-link">
                  <i class="fa fa-table text-success"></i>
                  <span>Account</span>
                </a>
                <ul class="submenu">
                  <li>
                    <Link to="/accountstatus">Account Status</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item has-sub">
                <a href="#" class="sidebar-link">
                  <i class="fa fa-users text-success"></i>
                  <span>Employees</span>
                </a>
                <ul class="submenu">
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
              <li class="sidebar-item has-sub">
                <a href="#" class="sidebar-link">
                  <i class="fa fa-table text-success"></i>
                  <span>Leave Management</span>
                </a>
                <ul class="submenu">
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
          <button class="sidebar-toggler btn x">
            <i data-feather="x"></i>
          </button>

          <Dropdown
            label="Account"
            options={[
              {
                label: "Account Status",
                url: "/accountstatus",
              },
              { label: "Profile", url: "/profile" },
            ]}
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
