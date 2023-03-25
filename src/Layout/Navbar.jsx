import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Container/Dropdown";
import "../assets/css/navbar.css";

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
              <li className="sidebar-item">
                <Link to="/" className="sidebar-link">
                  <i class="fa fa-home text-success"></i>
                  <span className="text-secondary">Dashboard</span>
                </Link>
              </li>

              <Dropdown
                type="receipt"
                label="Account"
                options={[
                  {
                    label: "Account Status",
                    url: "/accountstatus",
                  },
                  { label: "Profile", url: "/profile" },
                ]}
              />
              <Dropdown
                type="users"
                label="Employees"
                options={[
                  {
                    label: "Add Employee",
                    url: "/add_employee",
                  },
                  { label: "Manage Employee", url: "/manage_employee" },
                  { label: "Employee", url: "/showemplyee" },
                ]}
              />
              <Dropdown
                type="table"
                label="Leave Management"
                options={[
                  {
                    label: "Apply Leaves",
                    url: "/apply_leave",
                  },
                  { label: "All Leaves", url: "/all_leave" },
                ]}
              />
            </ul>
          </div>
          <button class="sidebar-toggler btn x">
            <i data-feather="x"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
