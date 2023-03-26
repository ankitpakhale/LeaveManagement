import React from "react";

const Profile = () => {
  return (
    <>
      <div className="main-content container-fluid">
        <div className="page-title text-center">
          <h3>Profile</h3>
        </div>
        <section className="section">
          <div className="col-xl-6 col-md-12 mt-6 ms-auto me-auto">
            <div className="card">
              <div className="card-body">
                <div className="justify-content-between p-md-1">
                  <div className="flex-row">
                    <div className="align-self-center">
                      <img
                        src={require("../assets/images/employeeimg.jpg")}
                        height="250px"
                        width="100%"
                      />
                    </div>
                    <div className="row mt-3">
                      <div className="col-4 mt-2">
                        <h4>First Name</h4>
                      </div>
                      <div className="col-4 mt-2">
                        <h4>Middle Name</h4>
                      </div>
                      <div className="col-4 mt-2">
                        <h4>Last Name</h4>
                      </div>
                      <div className="col-6 mt-2">
                        <h5>Employee Id</h5>
                      </div>
                      <div className="col-6 mt- 2">
                        <h5>User Name</h5>
                      </div>
                      <div className="col-6 mt-2">
                        <h5>Email</h5>
                      </div>
                      <div className="col-6 mt-2">
                        <h5>Contact Number</h5>
                      </div>
                      <div className="col-3 mt-2">
                        <h6>Deapartment</h6>
                      </div>
                      <div className="col-3 mt-2">
                        <h6>Designation</h6>
                      </div>
                      <div className="col-3 mt-2">
                        <h6>Gender</h6>
                      </div>
                      <div className="col-3 mt-2">
                        <h6>Age</h6>
                      </div>
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
export default Profile;
