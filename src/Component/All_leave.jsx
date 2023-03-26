import React from "react";
import { Link } from "react-router-dom";

const All_leave = () => {
  return (
    <>
      <div className="main-content container-fluid">
        <div className="page-title">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-last">
              <h3>Leave Application</h3>
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
                    Leave Application
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
                    <th>Full Name</th>
                    <th>Leave Type</th>
                    <th>Posting Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>Sick Leave</td>
                    <td>2021-11-01</td>
                    <td>
                      <span className="badge bg-success">Approved</span>
                    </td>
                    <td>
                      <span data-bs-toggle="modal" data-bs-target="#edit">
                        <i className="fa fa-pen text-success"></i>
                      </span>
                      <span data-bs-toggle="modal" data-bs-target="#view">
                        <i className="fa fa-eye text-success"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Juan Dela Cruz</td>
                    <td>Sick Leave</td>
                    <td>2021-11-01</td>
                    <td>
                      <span className="badge bg-info">Pending</span>
                    </td>
                    <td>
                      <span data-bs-toggle="modal" data-bs-target="#edit">
                        <i className="fa fa-pen text-success"></i>
                      </span>
                      <span data-bs-toggle="modal" data-bs-target="#view">
                        <i className="fa fa-eye text-success"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Cardo Dalisay</td>
                    <td>Medical Leave</td>
                    <td>2021-11-01</td>
                    <td>
                      <span className="badge bg-danger">Not Approved</span>
                    </td>
                    <td>
                      <span data-bs-toggle="modal" data-bs-target="#edit">
                        <i className="fa fa-pen text-success"></i>
                      </span>
                      <span data-bs-toggle="modal" data-bs-target="#view">
                        <i className="fa fa-eye text-success"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>John Doe</td>
                    <td>Sick Leave</td>
                    <td>2021-11-01</td>
                    <td>
                      <span className="badge bg-success">Approved</span>
                    </td>
                    <td>
                      <span data-bs-toggle="modal" data-bs-target="#edit">
                        <i className="fa fa-pen text-success"></i>
                      </span>
                      <span data-bs-toggle="modal" data-bs-target="#view">
                        <i className="fa fa-eye text-success"></i>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                className="modal fade"
                id="edit"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Edit Leave
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form className="form">
                        <div className="col-md-12 col-12">
                          <div className="form-group">
                            <label for="company-column">status</label>
                            <fieldset className="form-group">
                              <select className="form-select" id="basicSelect">
                                <option>Approved</option>
                                <option>Not Approved</option>
                              </select>
                            </fieldset>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                          <button
                            type="submit"
                            className="btn btn-primary me-1 mb-1"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="view"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Leave
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="justify-content-between p-md-1">
                        <div className="flex-row">
                          <div className="row">
                            <div className="col-3 mt-2">Name</div>
                            <div className="col-9 mt-2">
                              <p className="h5">Demo</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6 mt-2">
                              <label className="text-center">ID Number</label>
                              <p className="h5">563214</p>
                            </div>
                            <div className="col-6 mt-2">
                              <label className="text-center">Leave Type</label>
                              <p className="h5">xyz</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6 mt-2">
                              <label className="text-center">From</label>
                              <p className="h5">12-2-2022</p>
                            </div>
                            <div className="col-6 mt-2">
                              <label className="text-center">To</label>
                              <p className="h5">12-2-2022</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-2 mt-2">Reasion</div>
                            <div className="col-10 mt-2">
                              <p className="h5">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quos voluptates porro nemo
                                dolorum saepe cupiditate, laborum ut earum?
                                Quisquam a laboriosam adipisci dolores enim
                                doloremque doloribus ratione eligendi,
                                aspernatur voluptatum?
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6 mt-2">
                              <label className="text-center">Status</label>
                              <p className="h5">Approved</p>
                            </div>
                            <div className="col-6 mt-2">
                              <label className="text-center">
                                Posting Date
                              </label>
                              <p className="h5">12-2-2022</p>
                            </div>
                          </div>
                        </div>
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
export default All_leave;
