import React from "react";
import EmployeeBox from "../Container/EmployeeBox";

const Showemplyee = () => {
  return (
    <>
      <div className="main-content container-fluid">
        <div className="page-title">
          <h3>Employee</h3>
        </div>
        <section className="section">
          <div className="row mb-2">
            <div className="col-xl-4 col-md-12 mb-4">
              <EmployeeBox
                img={require("../assets/images/employeeimg.jpg")}
                name={"ABC"}
                designation={"Data Scientist"}
              />
            </div>

            <div className="col-xl-4 col-md-12 mb-4">
              <EmployeeBox
                img={require("../assets/images/employeeimg.jpg")}
                name={"ABC"}
                designation={"Data Scientist"}
              />
            </div>

            <div className="col-xl-4 col-md-12 mb-4">
              <EmployeeBox
                img={require("../assets/images/employeeimg.jpg")}
                name={"ABC"}
                designation={"Data Scientist"}
              />
            </div>

            <div className="col-xl-4 col-md-12 mb-4">
              <EmployeeBox
                img={require("../assets/images/employeeimg.jpg")}
                name={"ABC"}
                designation={"Data Scientist"}
              />
            </div>

            <div className="col-xl-4 col-md-12 mb-4">
              <EmployeeBox
                img={require("../assets/images/employeeimg.jpg")}
                name={"ABC"}
                designation={"Data Scientist"}
              />
            </div>

            <div className="col-xl-4 col-md-12 mb-4">
              <EmployeeBox
                img={require("../assets/images/employeeimg.jpg")}
                name={"ABC"}
                designation={"Data Scientist"}
              />
            </div>

            <div className="col-xl-4 col-md-12 mb-4">
              <EmployeeBox
                img={require("../assets/images/employeeimg.jpg")}
                name={"ABC"}
                designation={"Data Scientist"}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Showemplyee;
