import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div className="main-content container-fluid">
        <div className="page-title">
          <h3>Dashboard</h3>
        </div>
        <section className="section">
          <div className="row mb-2">
            <div className="col-xl-6 col-md-12 mb-6">
              <Link to="/showemplyee">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="d-flex flex-row">
                        <div className="align-self-center">
                          <i className="fa fa-users text-warning fa-3x me-4"></i>
                        </div>
                        <div>
                          <h4>Employees</h4>
                          <h2 className="h1 mb-0">55</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xl-6 col-md-12 mb-6">
              <Link to="/all_leave">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="d-flex flex-row">
                        <div className="align-self-center">
                          <i className="fa fa-plane text-success fa-3x me-4"></i>
                        </div>
                        <div>
                          <h4>Leave</h4>
                          <h2 className="h1 mb-0">25</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Index;
