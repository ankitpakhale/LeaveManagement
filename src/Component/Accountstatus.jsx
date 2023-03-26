import React from "react";

const Accountstatus = () => {
  return (
    <>
      <div className="main-content container-fluid">
        <div className="page-title">
          <h3>Account Status</h3>
        </div>
        <section className="section">
          <div className="row mb-2">
            <div className="col-xl-4 col-md-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between p-md-1">
                    <div className="d-flex flex-row">
                      <div className="align-self-center">
                        <i className="fa fa-plane text-success fa-3x me-4"></i>
                      </div>
                      <div>
                        <h4>Casual Leave</h4>
                        <h2 className="h1 mb-0">12</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2 ms-5">
                    <div className="col-8">
                      <h5 className="mb-0">Left Leave</h5>
                    </div>
                    <div className="col-4">
                      <h5 className="mb-0">12</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between p-md-1">
                    <div className="d-flex flex-row">
                      <div className="align-self-center">
                        <i className="fa fa-plane text-success fa-3x me-4"></i>
                      </div>
                      <div>
                        <h4>Sick Leave</h4>
                        <h2 className="h1 mb-0">12</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2 ms-5">
                    <div className="col-8">
                      <h5 className="mb-0">Left Leave</h5>
                    </div>
                    <div className="col-4">
                      <h5 className="mb-0">12</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between p-md-1">
                    <div className="d-flex flex-row">
                      <div className="align-self-center">
                        <i className="fa fa-plane text-success fa-3x me-4"></i>
                      </div>
                      <div>
                        <h4>Total Leave</h4>
                        <h2 className="h1 mb-0">24</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2 ms-5">
                    <div className="col-8">
                      <h5 className="mb-0">Left Leave</h5>
                    </div>
                    <div className="col-4">
                      <h5 className="mb-0">24</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Accountstatus;
