/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../../components/Footer";

const PurchasesList = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="d-flex card-header justify-content-between align-items-center">
                <div>
                  <h4 className="card-title">All Purchase Items</h4>
                </div>
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle btn btn-sm btn-outline-light rounded"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    This Month
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="#!" className="dropdown-item">
                      Download
                    </a>
                    <a href="#!" className="dropdown-item">
                      Export
                    </a>
                    <a href="#!" className="dropdown-item">
                      Import
                    </a>
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
                        <th>Purchase Status</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Payment Method</th>
                        <th>Payment Status</th>
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
                          <a href="javascript: void(0);" className="text-body">
                            #INV2540
                          </a>
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
                        <td>
                          <span className="badge bg-success text-white py-1 px-2">
                            Items Received
                          </span>
                        </td>
                        <td>07 Jan, 2023</td>
                        <td>$621</td>
                        <td>Mastercard</td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <a href="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a
                              href="#!"
                              className="btn btn-soft-primary btn-sm"
                              // data-bs-toggle="modal"
                              // data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a href="#!" className="btn btn-soft-danger btn-sm">
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
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
                          <a href="javascript: void(0);" className="text-body">
                            #INV3924
                          </a>
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
                        <td>
                          <span className="badge bg-success text-white py-1 px-2">
                            Items Received
                          </span>
                        </td>
                        <td>03 Dec, 2023</td>
                        <td>$502</td>
                        <td>Visa</td>
                        <td>
                          <span className="badge bg-danger-subtle text-danger px-2 py-1">
                            Cancel
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <a href="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a
                              href="#!"
                              className="btn btn-soft-primary btn-sm"
                              // data-bs-toggle="modal"
                              // data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a href="#!" className="btn btn-soft-danger btn-sm">
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
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
                          <a href="javascript: void(0);" className="text-body">
                            #INV5032
                          </a>
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
                        <td>
                          <span className="badge bg-success text-white py-1 px-2">
                            Items Received
                          </span>
                        </td>
                        <td>28 Sep, 2023</td>
                        <td>$218</td>
                        <td>Paypal</td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <a href="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a
                              href="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a href="#!" className="btn btn-soft-danger btn-sm">
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
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
                          <a href="javascript: void(0);" className="text-body">
                            #INV1695
                          </a>
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
                        <td>
                          <span className="badge bg-success text-white py-1 px-2">
                            Items Received
                          </span>
                        </td>
                        <td>10 Aug, 2023</td>
                        <td>$428</td>
                        <td>Mastercard</td>
                        <td>
                          <span className="badge bg-primary-subtle text-primary py-1 px-2">
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <a href="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a
                              href="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a href="#!" className="btn btn-soft-danger btn-sm">
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
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
                          <a href="javascript: void(0);" className="text-body">
                            #INV8473
                          </a>
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
                        <td>
                          <span className="badge bg-success text-white py-1 px-2">
                            Items Received
                          </span>
                        </td>
                        <td>22 May, 2023</td>
                        <td>$314</td>
                        <td>Visa</td>
                        <td>
                          <span className="badge bg-danger-subtle text-danger px-2 py-1">
                            Cancel
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <a href="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a
                              href="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a href="#!" className="btn btn-soft-danger btn-sm">
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
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
                          <a href="javascript: void(0);" className="text-body">
                            #INV2150
                          </a>
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
                        <td>
                          <span className="badge bg-success text-white py-1 px-2">
                            Items Received
                          </span>
                        </td>
                        <td>15 Mar, 2023</td>
                        <td>$591</td>
                        <td>Paypal</td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <a href="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a
                              href="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a href="#!" className="btn btn-soft-danger btn-sm">
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
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
                          <a href="javascript: void(0);" className="text-body">
                            #INV5636
                          </a>
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
                        <td>
                          <span className="badge bg-success text-white py-1 px-2">
                            Items Received
                          </span>
                        </td>
                        <td>19 Dec, 2023</td>
                        <td>$815</td>
                        <td>Visa</td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <a href="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a
                              href="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a href="#!" className="btn btn-soft-danger btn-sm">
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
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
                          <a href="javascript: void(0);" className="text-body">
                            #INV2940
                          </a>
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
                        <td>
                          <span className="badge bg-success text-white py-1 px-2">
                            Items Received
                          </span>
                        </td>
                        <td>11 Jun, 2023</td>
                        <td>$715</td>
                        <td>Mastercard</td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <a href="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a
                              href="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a href="#!" className="btn btn-soft-danger btn-sm">
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
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
                          <a href="javascript: void(0);" className="text-body">
                            #INV9027
                          </a>
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
                        <td>
                          <span className="badge bg-success text-white py-1 px-2">
                            Items Received
                          </span>
                        </td>
                        <td>19 Mar, 2023</td>
                        <td>$351</td>
                        <td>Paypal</td>
                        <td>
                          <span className="badge bg-primary-subtle text-primary py-1 px-2">
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <a href="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a
                              href="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
                            <a href="#!" className="btn btn-soft-danger btn-sm">
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </a>
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
                      <a className="page-link" href="javascript:void(0);">
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="javascript:void(0);">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        Next
                      </a>
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

export default PurchasesList;
