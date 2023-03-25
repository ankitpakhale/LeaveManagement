import React from "react";
import Nav from "../Layout/Nav";
const Profile = () => {
  return (
    <>
      <div id="main">
        <Nav />
        <div class="main-content container-fluid">
          <div class="page-title text-center">
            <h3>Profile</h3>
          </div>
          <section class="section">
            <div class="col-xl-6 col-md-12 mt-6 ms-auto me-auto">
              <div class="card">
                <div class="card-body">
                  <div class="justify-content-between p-md-1">
                    <div class="flex-row">
                      <div class="align-self-center">
                        <img
                          src={require("../assets/images/employeeimg.jpg")}
                          height="250px"
                          width="100%"
                        />
                      </div>
                      <div class="row mt-3">
                        <div class="col-4 mt-2">
                          <h4>First Name</h4>
                        </div>
                        <div class="col-4 mt-2">
                          <h4>Middle Name</h4>
                        </div>
                        <div class="col-4 mt-2">
                          <h4>Last Name</h4>
                        </div>
                        <div class="col-6 mt-2">
                          <h5>Employee Id</h5>
                        </div>
                        <div class="col-6 mt- 2">
                          <h5>User Name</h5>
                        </div>
                        <div class="col-6 mt-2">
                          <h5>Email</h5>
                        </div>
                        <div class="col-6 mt-2">
                          <h5>Contact Number</h5>
                        </div>
                        <div class="col-3 mt-2">
                          <h6>Deapartment</h6>
                        </div>
                        <div class="col-3 mt-2">
                          <h6>Designation</h6>
                        </div>
                        <div class="col-3 mt-2">
                          <h6>Gender</h6>
                        </div>
                        <div class="col-3 mt-2">
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
      </div>
    </>
  );
};
export default Profile;
