import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const SellersList = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="position-relative bg-light p-2 rounded text-center">
                  <img
                    src="assets/images/seller/zara.svg"
                    alt=""
                    className="avatar-xxl"
                  />
                  <div className="position-absolute top-0 end-0 m-1">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <iconify-icon
                          icon="iconamoon:menu-kebab-vertical-circle-duotone"
                          className="fs-20 align-middle text-muted"
                        ></iconify-icon>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Export
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Import
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  <div>
                    <h4 className="mb-1">
                      ZARA International
                      <span className="text-muted fs-13 ms-1">(Fashion)</span>
                    </h4>
                    <div>
                      <Link to="#!" className="link-primary fs-16 fw-medium">
                        www.zarafashion.co
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0">
                      <span className="badge bg-light text-dark fs-12 me-1">
                        <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                        4.5
                      </span>
                      3.5k
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:point-on-map-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    4604 , Philli Lane Kiowa IN 47404
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:letter-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    zarafashionworld@dayrep.com
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-0">
                    <iconify-icon
                      icon="solar:outgoing-call-rounded-bold-duotone"
                      className="fs-20 text-primary"
                    ></iconify-icon>
                    +243 812-801-9335
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                  <p className="mb-0 fs-15 fw-medium text-dark">Fashion</p>
                  <div>
                    <p className="mb-0 fs-15 fw-medium text-dark">
                      $200k
                      <span className="ms-1">
                        <iconify-icon
                          icon="solar:course-up-outline"
                          className="text-success"
                        ></iconify-icon>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="progress progress-soft progress-md">
                  <div
                    className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow=""
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="p-2 pb-0 mx-n3 mt-2">
                  <div className="row text-center g-2">
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">865</h5>
                      <p className="text-muted mb-0">Item Stock</p>
                    </div>
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">+4.5k</h5>
                      <p className="text-muted mb-0">Sells</p>
                    </div>
                    <div className="col-lg-4 col-4">
                      <h5 className="mb-1">+2k</h5>
                      <p className="text-muted mb-0">Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top gap-1 hstack">
                <Link to="#!" className="btn btn-primary w-100">
                  View Profile
                </Link>
                <Link to="#!" className="btn btn-light w-100">
                  Edit Profile
                </Link>
                <Link
                  to="#!"
                  className="btn btn-soft-danger d-inline-flex align-items-center justify-content-center rounded-circle avatar-sm"
                >
                  <i className="bx bx-heart fs-4 align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="position-relative bg-light p-2 rounded text-center">
                  <img
                    src="assets/images/seller/rolex.svg"
                    alt=""
                    className="avatar-xxl"
                  />
                  <div className="position-absolute top-0 end-0 m-1">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <iconify-icon
                          icon="iconamoon:menu-kebab-vertical-circle-duotone"
                          className="fs-20 align-middle text-muted"
                        ></iconify-icon>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Export
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Import
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  <div>
                    <h4 className="mb-1">
                      Rolex Watches
                      <span className="text-muted fs-13 ms-1">(Watch)</span>
                    </h4>
                    <div>
                      <Link to="#!" className="link-primary fs-16 fw-medium">
                        www.rolexwatch.co
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0">
                      <span className="badge bg-light text-dark fs-12 me-1">
                        <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                        4.5
                      </span>
                      1.2k
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:point-on-map-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    1678 Avenue Milwaukee, WI 53202
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:letter-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    rolexwatches@dayrep.com
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-0">
                    <iconify-icon
                      icon="solar:outgoing-call-rounded-bold-duotone"
                      className="fs-20 text-primary"
                    ></iconify-icon>
                    +243 262-223-1464
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                  <p className="mb-0 fs-15 fw-medium text-dark">Watches</p>
                  <div>
                    <p className="mb-0 fs-15 fw-medium text-dark">
                      $349k
                      <span className="ms-1">
                        <iconify-icon
                          icon="solar:course-up-outline"
                          className="text-success"
                        ></iconify-icon>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="progress progress-soft progress-md">
                  <div
                    className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow=""
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="p-2 pb-0 mx-n3 mt-2">
                  <div className="row text-center g-2">
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">261</h5>
                      <p className="text-muted mb-0">Item Stock</p>
                    </div>
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">+2.9k</h5>
                      <p className="text-muted mb-0">Sells</p>
                    </div>
                    <div className="col-lg-4 col-4">
                      <h5 className="mb-1">+1.4k</h5>
                      <p className="text-muted mb-0">Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top gap-1 hstack">
                <Link to="#!" className="btn btn-primary w-100">
                  View Profile
                </Link>
                <Link to="#!" className="btn btn-light w-100">
                  Edit Profile
                </Link>
                <Link
                  to="#!"
                  className="btn btn-soft-danger d-inline-flex align-items-center justify-content-center rounded-circle avatar-sm"
                >
                  <i className="bx bx-heart fs-4 align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="position-relative bg-light p-2 rounded text-center">
                  <img
                    src="assets/images/seller/dyson.svg"
                    alt=""
                    className="avatar-xxl"
                  />
                  <div className="position-absolute top-0 end-0 m-1">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <iconify-icon
                          icon="iconamoon:menu-kebab-vertical-circle-duotone"
                          className="fs-20 align-middle text-muted"
                        ></iconify-icon>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Export
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Import
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  <div>
                    <h4 className="mb-1">
                      Dyson Machinery
                      <span className="text-muted fs-13 ms-1">
                        (Electronics)
                      </span>
                    </h4>
                    <div>
                      <Link to="#!" className="link-primary fs-16 fw-medium">
                        www.dysonmachine.co
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0">
                      <span className="badge bg-light text-dark fs-12 me-1">
                        <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                        4.1
                      </span>
                      3.7k
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:point-on-map-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    23 Cubbine Road GHOOLI WA 6426
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:letter-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    dysonmachine@dayrep.com
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-0">
                    <iconify-icon
                      icon="solar:outgoing-call-rounded-bold-duotone"
                      className="fs-20 text-primary"
                    ></iconify-icon>
                    +81(08) 9059 8047
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                  <p className="mb-0 fs-15 fw-medium text-dark">Electronics</p>
                  <div>
                    <p className="mb-0 fs-15 fw-medium text-dark">
                      $545k
                      <span className="ms-1">
                        <iconify-icon
                          icon="solar:course-up-outline"
                          className="text-success"
                        ></iconify-icon>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="progress progress-soft progress-md">
                  <div
                    className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow=""
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="p-2 pb-0 mx-n3 mt-2">
                  <div className="row text-center g-2">
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">781</h5>
                      <p className="text-muted mb-0">Item Stock</p>
                    </div>
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">+5.3k</h5>
                      <p className="text-muted mb-0">Sells</p>
                    </div>
                    <div className="col-lg-4 col-4">
                      <h5 className="mb-1">+3.1k</h5>
                      <p className="text-muted mb-0">Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top gap-1 hstack">
                <Link to="#!" className="btn btn-primary w-100">
                  View Profile
                </Link>
                <Link to="#!" className="btn btn-light w-100">
                  Edit Profile
                </Link>
                <Link
                  to="#!"
                  className="btn btn-soft-danger d-inline-flex align-items-center justify-content-center rounded-circle avatar-sm"
                >
                  <i className="bx bx-heart fs-4 align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="position-relative bg-light p-2 rounded text-center">
                  <img
                    src="assets/images/seller/gopro.svg"
                    alt=""
                    className="avatar-xxl"
                  />
                  <div className="position-absolute top-0 end-0 m-1">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <iconify-icon
                          icon="iconamoon:menu-kebab-vertical-circle-duotone"
                          className="fs-20 align-middle text-muted"
                        ></iconify-icon>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Export
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Import
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  <div>
                    <h4 className="mb-1">
                      GoPro Camera
                      <span className="text-muted fs-13 ms-1">
                        (Electronics)
                      </span>
                    </h4>
                    <div>
                      <Link to="#!" className="link-primary fs-16 fw-medium">
                        www.goprocamera.co
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0">
                      <span className="badge bg-light text-dark fs-12 me-1">
                        <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                        4.3
                      </span>
                      7.2k
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:point-on-map-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    5 Gaffney Street MIDDLE PARK VIC 3206
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:letter-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    goprocamera@dayrep.com
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-0">
                    <iconify-icon
                      icon="solar:outgoing-call-rounded-bold-duotone"
                      className="fs-20 text-primary"
                    ></iconify-icon>
                    +81(08) 6727 4227
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                  <p className="mb-0 fs-15 fw-medium text-dark">Camera</p>
                  <div>
                    <p className="mb-0 fs-15 fw-medium text-dark">
                      $465k
                      <span className="ms-1">
                        <iconify-icon
                          icon="solar:course-up-outline"
                          className="text-success"
                        ></iconify-icon>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="progress progress-soft progress-md">
                  <div
                    className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow=""
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="p-2 pb-0 mx-n3 mt-2">
                  <div className="row text-center g-2">
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">890</h5>
                      <p className="text-muted mb-0">Item Stock</p>
                    </div>
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">+10.6k</h5>
                      <p className="text-muted mb-0">Sells</p>
                    </div>
                    <div className="col-lg-4 col-4">
                      <h5 className="mb-1">+6.3k</h5>
                      <p className="text-muted mb-0">Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top gap-1 hstack">
                <Link to="#!" className="btn btn-primary w-100">
                  View Profile
                </Link>
                <Link to="#!" className="btn btn-light w-100">
                  Edit Profile
                </Link>
                <Link
                  to="#!"
                  className="btn btn-soft-danger d-inline-flex align-items-center justify-content-center rounded-circle avatar-sm"
                >
                  <i className="bx bx-heart fs-4 align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="position-relative bg-light p-2 rounded text-center">
                  <img
                    src="assets/images/seller/h%26m.svg"
                    alt=""
                    className="avatar-xxl"
                  />
                  <div className="position-absolute top-0 end-0 m-1">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <iconify-icon
                          icon="iconamoon:menu-kebab-vertical-circle-duotone"
                          className="fs-20 align-middle text-muted"
                        ></iconify-icon>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Export
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Import
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  <div>
                    <h4 className="mb-1">
                      H&M
                      <span className="text-muted fs-13 ms-1">(Fashion) </span>
                    </h4>
                    <div>
                      <Link to="#!" className="link-primary fs-16 fw-medium">
                        www.h&mfashion.co
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0">
                      <span className="badge bg-light text-dark fs-12 me-1">
                        <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                        4.3
                      </span>
                      15.3k
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:point-on-map-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    1697 Bay Street Toronto, ON M5J 2R8
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:letter-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    h&mfashion@dayrep.com
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-0">
                    <iconify-icon
                      icon="solar:outgoing-call-rounded-bold-duotone"
                      className="fs-20 text-primary"
                    ></iconify-icon>
                    +81(07) 4049 2261
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                  <p className="mb-0 fs-15 fw-medium text-dark">Fashion</p>
                  <div>
                    <p className="mb-0 fs-15 fw-medium text-dark">
                      $800k
                      <span className="ms-1">
                        <iconify-icon
                          icon="solar:course-up-outline"
                          className="text-success"
                        ></iconify-icon>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="progress progress-soft progress-md">
                  <div
                    className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow=""
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="p-2 pb-0 mx-n3 mt-2">
                  <div className="row text-center g-2">
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">1309</h5>
                      <p className="text-muted mb-0">Item Stock</p>
                    </div>
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">+21.6k</h5>
                      <p className="text-muted mb-0">Sells</p>
                    </div>
                    <div className="col-lg-4 col-4">
                      <h5 className="mb-1">+8.1k</h5>
                      <p className="text-muted mb-0">Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top gap-1 hstack">
                <Link to="#!" className="btn btn-primary w-100">
                  View Profile
                </Link>
                <Link to="#!" className="btn btn-light w-100">
                  Edit Profile
                </Link>
                <Link
                  to="#!"
                  className="btn btn-soft-danger d-inline-flex align-items-center justify-content-center rounded-circle avatar-sm"
                >
                  <i className="bx bx-heart fs-4 align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="position-relative bg-light p-2 rounded text-center">
                  <img
                    src="assets/images/seller/huawei.svg"
                    alt=""
                    className="avatar-xxl"
                  />
                  <div className="position-absolute top-0 end-0 m-1">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <iconify-icon
                          icon="iconamoon:menu-kebab-vertical-circle-duotone"
                          className="fs-20 align-middle text-muted"
                        ></iconify-icon>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Export
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Import
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  <div>
                    <h4 className="mb-1">
                      Huawei Phone
                      <span className="text-muted fs-13 ms-1">
                        (Electronics)
                      </span>
                    </h4>
                    <div>
                      <Link to="#!" className="link-primary fs-16 fw-medium">
                        www.huaweiphone.co
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0">
                      <span className="badge bg-light text-dark fs-12 me-1">
                        <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                        4.1
                      </span>
                      8.2k
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:point-on-map-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    2182 Blanshard Victoria, BC V8W 2H9
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:letter-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    huaweiphone@dayrep.com
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-0">
                    <iconify-icon
                      icon="solar:outgoing-call-rounded-bold-duotone"
                      className="fs-20 text-primary"
                    ></iconify-icon>
                    +81(07) 250-356-8142
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                  <p className="mb-0 fs-15 fw-medium text-dark">Phone</p>
                  <div>
                    <p className="mb-0 fs-15 fw-medium text-dark">
                      $379k
                      <span className="ms-1">
                        <iconify-icon
                          icon="solar:course-up-outline"
                          className="text-success"
                        ></iconify-icon>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="progress progress-soft progress-md">
                  <div
                    className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow=""
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="p-2 pb-0 mx-n3 mt-2">
                  <div className="row text-center g-2">
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">356</h5>
                      <p className="text-muted mb-0">Item Stock</p>
                    </div>
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">+4.0k</h5>
                      <p className="text-muted mb-0">Sells</p>
                    </div>
                    <div className="col-lg-4 col-4">
                      <h5 className="mb-1">+6.3k</h5>
                      <p className="text-muted mb-0">Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top gap-1 hstack">
                <Link to="#!" className="btn btn-primary w-100">
                  View Profile
                </Link>
                <Link to="#!" className="btn btn-light w-100">
                  Edit Profile
                </Link>
                <Link
                  to="#!"
                  className="btn btn-soft-danger d-inline-flex align-items-center justify-content-center rounded-circle avatar-sm"
                >
                  <i className="bx bx-heart fs-4 align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="position-relative bg-light p-2 rounded text-center">
                  <img
                    src="assets/images/seller/nike.svg"
                    alt=""
                    className="avatar-xxl"
                  />
                  <div className="position-absolute top-0 end-0 m-1">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <iconify-icon
                          icon="iconamoon:menu-kebab-vertical-circle-duotone"
                          className="fs-20 align-middle text-muted"
                        ></iconify-icon>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Export
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Import
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  <div>
                    <h4 className="mb-1">
                      Nike Clothings
                      <span className="text-muted fs-13 ms-1">(Fashion)</span>
                    </h4>
                    <div>
                      <Link to="#!" className="link-primary fs-16 fw-medium">
                        www.nikebrand.co
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0">
                      <span className="badge bg-light text-dark fs-12 me-1">
                        <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                        4.5
                      </span>
                      18.9k
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:point-on-map-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    2113 Eglinton Avenue Toronto 1A6
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:letter-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    nikefashion@dayrep.com
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-0">
                    <iconify-icon
                      icon="solar:outgoing-call-rounded-bold-duotone"
                      className="fs-20 text-primary"
                    ></iconify-icon>
                    +81(07) 647-405-3676
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                  <p className="mb-0 fs-15 fw-medium text-dark">Clothings</p>
                  <div>
                    <p className="mb-0 fs-15 fw-medium text-dark">
                      $890k
                      <span className="ms-1">
                        <iconify-icon
                          icon="solar:course-up-outline"
                          className="text-success"
                        ></iconify-icon>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="progress progress-soft progress-md">
                  <div
                    className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow=""
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="p-2 pb-0 mx-n3 mt-2">
                  <div className="row text-center g-2">
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">12k</h5>
                      <p className="text-muted mb-0">Item Stock</p>
                    </div>
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">+19.0k</h5>
                      <p className="text-muted mb-0">Sells</p>
                    </div>
                    <div className="col-lg-4 col-4">
                      <h5 className="mb-1">+16.0k</h5>
                      <p className="text-muted mb-0">Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top gap-1 hstack">
                <Link to="#!" className="btn btn-primary w-100">
                  View Profile
                </Link>
                <Link to="#!" className="btn btn-light w-100">
                  Edit Profile
                </Link>
                <Link
                  to="#!"
                  className="btn btn-soft-danger d-inline-flex align-items-center justify-content-center rounded-circle avatar-sm"
                >
                  <i className="bx bx-heart fs-4 align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="position-relative bg-light p-2 rounded text-center">
                  <img
                    src="assets/images/seller/thenorthface.svg"
                    alt=""
                    className="avatar-xxl"
                  />
                  <div className="position-absolute top-0 end-0 m-1">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <iconify-icon
                          icon="iconamoon:menu-kebab-vertical-circle-duotone"
                          className="fs-20 align-middle text-muted"
                        ></iconify-icon>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Export
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Import
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  <div>
                    <h4 className="mb-1">
                      The North Face
                      <span className="text-muted fs-13 ms-1">(Fashion)</span>
                    </h4>
                    <div>
                      <Link to="#!" className="link-primary fs-16 fw-medium">
                        www.northface.co
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0">
                      <span className="badge bg-light text-dark fs-12 me-1">
                        <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                        4.4
                      </span>
                      12.7k
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:point-on-map-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    1377 49th Avenue Clyde River,0E0
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:letter-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    thenorthface@dayrep.com
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-0">
                    <iconify-icon
                      icon="solar:outgoing-call-rounded-bold-duotone"
                      className="fs-20 text-primary"
                    ></iconify-icon>
                    +81(07) 867-924-6639
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                  <p className="mb-0 fs-15 fw-medium text-dark">Clothings</p>
                  <div>
                    <p className="mb-0 fs-15 fw-medium text-dark">
                      $457k
                      <span className="ms-1">
                        <iconify-icon
                          icon="solar:course-up-outline"
                          className="text-success"
                        ></iconify-icon>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="progress progress-soft progress-md">
                  <div
                    className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow=""
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="p-2 pb-0 mx-n3 mt-2">
                  <div className="row text-center g-2">
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">1.6k</h5>
                      <p className="text-muted mb-0">Item Stock</p>
                    </div>
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">+13.9k</h5>
                      <p className="text-muted mb-0">Sells</p>
                    </div>
                    <div className="col-lg-4 col-4">
                      <h5 className="mb-1">+2.1k</h5>
                      <p className="text-muted mb-0">Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top gap-1 hstack">
                <Link to="#!" className="btn btn-primary w-100">
                  View Profile
                </Link>
                <Link to="#!" className="btn btn-light w-100">
                  Edit Profile
                </Link>
                <Link
                  to="#!"
                  className="btn btn-soft-danger d-inline-flex align-items-center justify-content-center rounded-circle avatar-sm"
                >
                  <i className="bx bx-heart fs-4 align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SellersList;
