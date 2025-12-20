import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const PurchaseReturns = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4 className="card-title mb-2 d-flex align-items-center gap-2">
                      Return Order
                      <span className="badge text-danger bg-danger-subtle fs-12">
                        <i className="bx bx-down-arrow-alt"></i>6.9%
                      </span>
                    </h4>
                    <p className="text-muted fw-medium fs-22 mb-0">
                      367 <span className="fs-14">Items</span>
                    </p>
                  </div>
                  <div>
                    <div className="avatar-md bg-primary bg-opacity-10 rounded">
                      <iconify-icon
                        icon="solar:check-circle-broken"
                        className="fs-32 text-primary avatar-title"
                      ></iconify-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4 className="card-title mb-2 d-flex align-items-center gap-2">
                      Pending Return Order
                    </h4>
                    <p className="text-muted fw-medium fs-22 mb-0">
                      201 <span className="fs-14">Items</span>
                    </p>
                  </div>
                  <div>
                    <div className="avatar-md bg-primary bg-opacity-10 rounded">
                      <iconify-icon
                        icon="solar:close-circle-broken"
                        className="fs-32 text-primary avatar-title"
                      ></iconify-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4 className="card-title mb-2 d-flex align-items-center gap-2">
                      Total Customer
                      <span className="badge text-success bg-success-subtle fs-12">
                        <i className="bx bx-up-arrow-alt"></i>8.9%
                      </span>
                    </h4>
                    <p className="text-muted fw-medium fs-22 mb-0">5,634</p>
                  </div>
                  <div>
                    <div className="avatar-md bg-primary bg-opacity-10 rounded">
                      <iconify-icon
                        icon="solar:user-plus-broken"
                        className="fs-32 text-primary avatar-title"
                      ></iconify-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4 className="card-title mb-2 d-flex align-items-center gap-2">
                      Return Order Received
                      <span className="badge text-danger bg-danger-subtle fs-12">
                        <i className="bx bx-down-arrow-alt"></i>9.1%
                      </span>
                    </h4>
                    <p className="text-muted fw-medium fs-22 mb-0">
                      864 <span className="fs-14">Items</span>
                    </p>
                  </div>
                  <div>
                    <div className="avatar-md bg-primary bg-opacity-10 rounded">
                      <iconify-icon
                        icon="solar:bag-smile-broken"
                        className="fs-32 text-primary avatar-title"
                      ></iconify-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="d-flex card-header justify-content-between align-items-center">
                <div>
                  <h4 className="card-title">All Return Items</h4>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-sm btn-outline-light rounded"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    This Month
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link to="#!" className="dropdown-item">
                      Download
                    </Link>

                    <Link to="#!" className="dropdown-item">
                      Export
                    </Link>

                    <Link to="#!" className="dropdown-item">
                      Import
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table align-middle mb-0 table-hover table-centered">
                    <thead className="bg-light-subtle">
                      <tr>
                        <th style={{ width: "20px" }}>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck1"
                            ></label>
                          </div>
                        </th>
                        <th>ID</th>
                        <th>Order By</th>
                        <th>Items</th>
                        <th>Return Date</th>
                        <th>Total</th>
                        <th>Return Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <Link to="#" className="text-body">
                            #INV2540
                          </Link>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-2.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Michael A. Miner
                        </td>
                        <td>T-shirt , Wallet</td>
                        <td>07 Jan, 2023</td>
                        <td>$289.00</td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck3"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <Link to="#" className="text-body">
                            #INV3924
                          </Link>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-3.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Theresa T. Brose
                        </td>
                        <td>Golden Dress , Sunglass</td>
                        <td>03 Dec, 2023</td>
                        <td>$213.00</td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck4"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <Link to="#" className="text-body">
                            #INV5032
                          </Link>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-4.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          James L. Erickson
                        </td>
                        <td>Shoes , Cargo Pent</td>
                        <td>28 Sep, 2023</td>
                        <td>$735.00</td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck5"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck5"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <Link to="#" className="text-body">
                            #INV1695
                          </Link>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-5.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Lily W. Wilson
                        </td>
                        <td>Watch , T-shirt</td>
                        <td>10 Aug, 2023</td>
                        <td>$324.00</td>
                        <td>
                          <span className="badge bg-warning-subtle text-warning py-1 px-2">
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck6"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck6"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <Link to="#" className="text-body">
                            #INV8473
                          </Link>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-6.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Sarah M. Brooks
                        </td>
                        <td>Hand Bag , Watch</td>
                        <td>22 May, 2023</td>
                        <td>$153.00</td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck7"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck7"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <Link to="#" className="text-body">
                            #INV2150
                          </Link>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-7.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Joe K. Hall
                        </td>
                        <td>Headphone , Dress</td>
                        <td>15 Mar, 2023</td>
                        <td>$424.00</td>
                        <td>
                          <span className="badge bg-warning-subtle text-warning py-1 px-2">
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck7"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck7"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <Link to="#" className="text-body">
                            #INV5636
                          </Link>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-8.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Ralph Hueber
                        </td>
                        <td>Headphone</td>
                        <td>19 Dec, 2023</td>
                        <td>$521.00</td>
                        <td>
                          <span className="badge bg-warning-subtle text-warning py-1 px-2">
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck7"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck7"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <Link to="#" className="text-body">
                            #INV2940
                          </Link>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-9.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Sarah Drescher
                        </td>
                        <td>Cap , Sunglass , Hand Bag</td>
                        <td>11 Jun, 2023</td>
                        <td>$313.00</td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck7"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck7"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <Link to="#" className="text-body">
                            #INV9027
                          </Link>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-10.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Leonie Meister
                        </td>
                        <td>Headphone , T-shirt</td>
                        <td>19 Mar, 2023</td>
                        <td>$219.00</td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <!-- end table-responsive --> */}
              </div>
              <div className="card-footer border-top">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end mb-0">
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        Previous
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PurchaseReturns;
