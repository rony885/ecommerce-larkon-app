import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const PurchasesOrder = () => {
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
                      Total Orders
                    </h4>
                    <p className="text-muted fw-medium fs-22 mb-0">
                      472
                      <span className="badge text-danger bg-danger-subtle fs-12">
                        <i className="bx bx-down-arrow-alt"></i>6.9%
                      </span>
                      <span className="fs-12">(Last Week)</span>
                    </p>
                  </div>
                  <div>
                    <div className="avatar-md bg-primary bg-opacity-10 rounded">
                      <iconify-icon
                        icon="solar:box-broken"
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
                      Order Items Over Time
                    </h4>
                    <p className="text-muted fw-medium fs-22 mb-0">
                      231
                      <span className="badge text-success bg-success-subtle fs-12">
                        <i className="bx bx-up-arrow-alt"></i>13.2%
                      </span>
                      <span className="fs-12">(Last Week)</span>
                    </p>
                  </div>
                  <div>
                    <div className="avatar-md bg-primary bg-opacity-10 rounded">
                      <iconify-icon
                        icon="solar:sort-by-time-broken"
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
                      Return Order
                    </h4>
                    <p className="text-muted fw-medium fs-22 mb-0">
                      367
                      <span className="badge text-success bg-success-subtle fs-12">
                        <i className="bx bx-up-arrow-alt"></i>2.1%
                      </span>
                      <span className="fs-12">(Last Week)</span>
                    </p>
                  </div>
                  <div>
                    <div className="avatar-md bg-primary bg-opacity-10 rounded">
                      <iconify-icon
                        icon="solar:bag-cross-broken"
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
                      Fulfilled Orders Over Time
                    </h4>
                    <p className="text-muted fw-medium fs-22 mb-0">
                      123
                      <span className="badge text-danger bg-danger-subtle fs-12">
                        <i className="bx bx-down-arrow-alt"></i>3.1%
                      </span>
                      <span className="fs-12">(Last Week)</span>
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
                  <h4 className="card-title">All Order Items</h4>
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
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Order Date</th>
                        <th>Total</th>
                        <th>Order Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Michael A. Miner</td>
                        <td>michaelminer@dayrep.com</td>
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
                        <td>Theresa T. Brose</td>
                        <td>theresbrosea@dayrep.com</td>
                        <td>03 Dec, 2023</td>
                        <td>$213.00</td>
                        <td>
                          <span className="badge bg-danger-subtle text-danger py-1 px-2">
                            Cancel
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
                        <td>James L. Erickson</td>
                        <td>walterlcalabre@jourrapide.com</td>
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
                        <td>Lily W. Wilson</td>
                        <td>olivehmize@rhyta.com</td>
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
                        <td>Sarah M. Brooks</td>
                        <td>christasardina@dayrep.com</td>
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
                        <td>Joe K. Hall</td>
                        <td>darrenwrivera@dayrep.com</td>
                        <td>15 Mar, 2023</td>
                        <td>$424.00</td>
                        <td>
                          <span className="badge bg-danger-subtle text-danger py-1 px-2">
                            Cancel
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
                        <td>Ralph Hueber</td>
                        <td>robertvleavitt@dayrep.com</td>
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
                        <td>Sarah Drescher</td>
                        <td>lydiajanderson@dayrep.com</td>
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
                        <td>Leonie Meister</td>
                        <td>leonie@dayrep.com</td>
                        <td>19 Mar, 2023</td>
                        <td>$219.00</td>
                        <td>
                          <span className="badge bg-danger-subtle text-danger py-1 px-2">
                            Cancel
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

export default PurchasesOrder;
