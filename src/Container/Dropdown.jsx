import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="dropdown mx-4">
        <i className="fa fa-table text-success"></i>
        <button
          style={{ all: "unset" }}
          className="dropdown-toggle p-3 pb-0"
          onClick={toggleDropdown}
        >
          {props.label}
        </button>
        <ul
          className={`dropdown-menu border-0 ${isDropdownOpen ? "show" : ""}`}
        >
          {props.options.map((option, index) => (
            <li key={index}>
              <Link className="text-secondary" to={option.url}>
                {option.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
