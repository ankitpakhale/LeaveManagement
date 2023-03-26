import React from "react";
import { Link } from "react-router-dom";

const Manage_employee = () => {
  return (
    <>
      <div className="main-content container-fluid">
        <div className="page-title">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-last">
              <h3>Manage Employee</h3>
            </div>
            <div className="col-12 col-md-6 order-md-2 order-first">
              <nav aria-label="breadcrumb" className="breadcrumb-header">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-success">
                      Dashboard
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Manage Employee
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="card">
            <div className="card-body">
              <table className="table" id="table1">
                <thead>
                  <tr>
                    <th>Emp ID</th>
                    <th>Full Name</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Reg Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>123456</td>
                    <td>John Doe</td>
                    <td>IT</td>
                    <td>
                      <span className="badge bg-success">Active</span>
                    </td>
                    <td>2021-11-01</td>
                    <td>
                      <a href="#">
                        <i className="fa fa-pen text-success"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-trash text-danger"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>153424</td>
                    <td>Jane Doe</td>
                    <td>HR</td>
                    <td>
                      <span className="badge bg-danger">Deactivated</span>
                    </td>
                    <td>2021-11-01</td>
                    <td>
                      <a href="#">
                        <i className="fa fa-pen text-success"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-trash text-danger"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>564355</td>
                    <td>Juan Dela Cruz</td>
                    <td>Marketing</td>
                    <td>
                      <span className="badge bg-success">Active</span>
                    </td>
                    <td>2021-11-01</td>
                    <td>
                      <a href="#">
                        <i className="fa fa-pen text-success"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-trash text-danger"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Manage_employee;
