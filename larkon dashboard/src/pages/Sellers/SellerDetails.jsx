import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const SellerDetails = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-lg-2 text-lg-center">
                    <div className="bg-body d-flex align-items-center justify-content-center rounded py-4">
                      <img
                        src="assets/images/seller/zara.svg"
                        alt=""
                        className="avatar-xxl flex-shrink-0"
                      />
                    </div>
                    <div className="mt-3">
                      <Link to="#!" className="btn btn-primary w-100">
                        View Stock Detail
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 border-end">
                    <div className="">
                      <h4 className="mb-1">ZARA International</h4>
                      <p className="mb-1">(Most Selling Fashion Brand)</p>
                      <Link to="#!" className="link-primary fs-16 fw-medium">
                        www.larkon.co
                      </Link>
                      <div className="d-flex align-items-center justify-content-satrt gap-2 mt-2 mb-1">
                        <ul className="d-flex text-warning m-0 fs-20 list-unstyled">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                        <p className="fw-medium mb-0 text-dark fs-15">
                          4.5/5 <span className="fs-13">(+23.3K Review)</span>
                        </p>
                      </div>
                      <div className="mt-2">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                            <iconify-icon
                              icon="solar:point-on-map-bold-duotone"
                              className="fs-20 text-primary"
                            ></iconify-icon>
                          </div>
                          <p className="mb-0 fs-15">
                            4604 , Philli Lane Kiowa IN 47404
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                            <iconify-icon
                              icon="solar:letter-bold-duotone"
                              className="fs-20 text-primary"
                            ></iconify-icon>
                          </div>
                          <p className="mb-0 fs-15">
                            zarafashionworld@dayrep.com
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                            <iconify-icon
                              icon="solar:outgoing-call-rounded-bold-duotone"
                              className="fs-20 text-primary"
                            ></iconify-icon>
                          </div>
                          <p className="mb-0 fs-15">+243 812-801-9335</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="ps-lg-4">
                      <h4 className="card-title">Profit by Product Category</h4>
                      <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                        <p className="mb-0 fs-15 fw-medium text-dark">
                          Man's Wares
                        </p>
                        <div>
                          <p className="mb-0 fs-15 fw-medium text-dark">
                            $123k
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
                          className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow=""
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                        <p className="mb-0 fs-15 fw-medium text-dark">
                          Woman's Wares
                        </p>
                        <div>
                          <p className="mb-0 fs-15 fw-medium text-dark">
                            $233k
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
                          className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow=""
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                        <p className="mb-0 fs-15 fw-medium text-dark">
                          Kid's Wares
                        </p>
                        <div>
                          <p className="mb-0 fs-15 fw-medium text-dark">
                            $110k
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
                          className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow=""
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                        <p className="mb-0 fs-15 fw-medium text-dark">
                          Foot Wares
                        </p>
                        <div>
                          <p className="mb-0 fs-15 fw-medium text-dark">
                            $51k
                            <span className="ms-1">
                              <iconify-icon
                                icon="solar:course-down-outline"
                                className="text-danger"
                              ></iconify-icon>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="progress progress-soft progress-md">
                        <div
                          className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow=""
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <h4 className="card-title mb-2">Social Media :</h4>
                <ul className="list-inline d-flex gap-1 mb-0 mt-3 align-items-center">
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-primary avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bxl-facebook"></i>
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-danger avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bxl-instagram"></i>
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-info avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-success avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bxl-whatsapp"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-warning avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bx-envelope"></i>
                    </Link>
                  </li>
                </ul>
                <h4 className="card-title mt-3 mb-2">Our Story :</h4>
                <p>
                  At ZARA, we believe that fashion is more than just
                  clothing—it's an expression of individuality and Link
                  celebration of diversity. Founded in 2003, our journey began
                  with Link simple yet powerful vision: to create high-quality,
                  stylish, and comfortable apparel that resonates with people
                  from all walks of life.
                </p>

                <h4 className="card-title my-2">Our Mission :</h4>
                <p>
                  Our mission is to redefine fashion by merging timeless
                  elegance with contemporary design. We strive to offer clothing
                  that not only looks good but also feels good, making everyday
                  wear an enjoyable experience. At the heart of our brand is
                  Link commitment to quality, sustainability, and customer
                  satisfaction.
                </p>

                <div className="row text-center g-2 mt-2">
                  <div className="col-lg-3 col-4">
                    <div className="bg-body p-2 rounded">
                      <h5 className="mb-1">865</h5>
                      <p className="text-muted mb-0">Item Stock</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="bg-body p-2 rounded">
                      <h5 className="mb-1">+4.5k</h5>
                      <p className="text-muted mb-0">Sells</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="bg-body p-2 rounded">
                      <h5 className="mb-1">+2k</h5>
                      <p className="text-muted mb-0">Happy Client</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="bg-body p-2 rounded">
                      <h5 className="mb-1">+36k</h5>
                      <p className="text-muted mb-0">Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-9">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <h3 className="d-flex align-items-center gap-2">
                      $5,563.786
                      <span className="badge text-success bg-success-subtle px-2 py-1 fs-12">
                        <i className="bx bx-up-arrow-alt"></i>4.53%
                      </span>
                    </h3>
                    <p className="mb-0 text-muted">
                      Gained <span className="text-success">$378.56</span> This
                      Month !
                    </p>
                  </div>
                  <div className="avatar-md bg-light bg-opacity-50 rounded">
                    <iconify-icon
                      icon="solar:chart-2-bold-duotone"
                      className="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                </div>
                <div className="apex-charts" id="sales_analytic_seller"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card text-center">
              <div className="card-body">
                <h4 className="mb-0 text-dark fw-medium">Company Reviews</h4>
                <div className="p-2 d-flex gap-3 bg-light align-items-center justify-content-center mt-3 rounded">
                  <ul className="d-flex text-warning m-0 fs-24 list-unstyled">
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star-half"></i>
                    </li>
                  </ul>
                  <p className="mb-0 text-dark fw-medium fs-16">4.5 Out of 5</p>
                </div>
                <p className="text-primary mt-2 fw-medium">
                  Based on +23.5k Review
                </p>

                <div className="my-4">
                  <div className="d-flex align-items-center gap-3">
                    <h5 className="mb-0 flex-shrink-0">5 star :</h5>
                    <div
                      className="progress flex-grow-1"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: "10px" }}
                    >
                      <div
                        className="progress-bar bg-warning rounded"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 my-3">
                    <h5 className="mb-0 flex-shrink-0">4 star :</h5>
                    <div
                      className="progress flex-grow-1"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: "10px" }}
                    >
                      <div
                        className="progress-bar bg-warning rounded"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 my-3">
                    <h5 className="mb-0 flex-shrink-0">3 star :</h5>
                    <div
                      className="progress flex-grow-1"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: "10px" }}
                    >
                      <div
                        className="progress-bar bg-warning rounded"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 my-3">
                    <h5 className="mb-0 flex-shrink-0">2 star :</h5>
                    <div
                      className="progress flex-grow-1"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: "10px" }}
                    >
                      <div
                        className="progress-bar bg-warning rounded"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-3">
                    <h5 className="mb-0 flex-shrink-0">1 star :</h5>
                    <div
                      className="progress flex-grow-1"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: "10px" }}
                    >
                      <div
                        className="progress-bar bg-warning rounded"
                        style={{ width: "10%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <Link to="#!" className="text-primary mt-2 fw-medium">
                  How do we calculate ratings ?
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="d-flex card-header justify-content-between align-items-center border-0 pb-1">
                <div>
                  <h4 className="card-title">Latest Added Product</h4>
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
              <div className="card-body pt-1 pb-2">
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
                        <th>Product Name & Size</th>
                        <th>Tag ID</th>
                        <th>Category</th>
                        <th>Add Date</th>
                        <th>Items Published</th>
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
                            ></label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-1.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Black T-shirt
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Variants : </span> 4
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>ID46765</td>
                        <td>Fashion</td>
                        <td>08/05/2023</td>
                        <td>
                          <span className="badge p-1 bg-success-subtle text-success fs-12 me-1">
                            <i className="bx bx-check-double align-text-top fs-14 me-1"></i>
                            Published
                          </span>
                        </td>
                      </tr>

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
                            ></label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-2.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Olive Green Leather Bag
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Variants : </span> 2
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>ID36192</td>
                        <td>Hand Bag</td>
                        <td>10/05/2023</td>

                        <td>
                          <span className="badge p-1 bg-light text-dark fs-12 me-1">
                            <i className="bx bxs-circle align-middle fs-10 me-1"></i>
                            Pending
                          </span>
                        </td>
                      </tr>
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
                            ></label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-3.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Women Golden Dress
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Variants : </span> 5
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>ID37729</td>
                        <td>Fashion</td>
                        <td>20/05/2023</td>
                        <td>
                          <span className="badge p-1 bg-success-subtle text-success fs-12 me-1">
                            <i className="bx bx-check-double align-text-top fs-14 me-1"></i>
                            Published
                          </span>
                        </td>
                      </tr>

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
                            ></label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-4.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Gray Cap For Men
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Variants : </span> 3
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>ID09260</td>
                        <td>Cap</td>
                        <td>21/05/2023</td>
                        <td>
                          <span className="badge p-1 bg-success-subtle text-success fs-12 me-1">
                            <i className="bx bx-check-double align-text-top fs-14 me-1"></i>
                            Published
                          </span>
                        </td>
                      </tr>
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
                            ></label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-5.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Dark Green Cargo Pent
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Variants : </span> 6
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>ID24109</td>
                        <td>Fashion</td>
                        <td>23/05/2023</td>
                        <td>
                          <span className="badge p-1 bg-danger-subtle text-danger fs-12 me-1">
                            <i className="bx bx-time-five align-text-top fs-14 me-1"></i>
                            Draft
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div data-bs-theme="dark">
              <div className="card overflow-hidden z-1">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-2">
                    <div className="avatar flex-shrink-0">
                      <span className="avatar-title bg-dark-subtle text-white fw-bold rounded fs-4">
                        1
                      </span>
                    </div>
                    <div className="d-block">
                      <h4 className="text-white fw-medium mb-0">
                        Accounting Revenue
                      </h4>
                    </div>
                    <div className="ms-auto">
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="dropdown-toggle arrow-none card-drop p-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-vertical-rounded text-white"></i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link to="#" className="dropdown-item">
                            Download
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Share
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-4 text-warning fw-semibold">$5,324,000</h3>
                  <p className="mb-0 text-white-50">
                    Accounting revenue refers to the income earned by Link
                    company
                  </p>
                  <h5 className="text-white-50 mb-0 mt-2">
                    <span className="text-white">+870</span> Customers
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <h5 className="card-title mb-0 text-dark fw-medium">
                        Orders
                      </h5>
                      <div className="avatar-md bg-light bg-opacity-50 rounded mx-auto my-3">
                        <iconify-icon
                          icon="solar:cart-4-broken"
                          className="fs-32 text-primary avatar-title"
                        ></iconify-icon>
                      </div>
                      <h4 className="text-dark fw-medium">458</h4>

                      <p className="text-muted">60% Target</p>

                      <div className="progress mt-2" style={{ height: "10px" }}>
                        <div
                          className="progress-bar progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="70"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer border-top">
                    <Link to="#!" className="link-dark fw-medium">
                      View More <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <h5 className="card-title mb-0 text-dark fw-medium">
                        Users
                      </h5>
                      <div className="avatar-md bg-light bg-opacity-50 rounded mx-auto my-3">
                        <iconify-icon
                          icon="solar:user-plus-broken"
                          className="fs-32 text-success avatar-title"
                        ></iconify-icon>
                      </div>
                      <h4 className="text-dark fw-medium">870</h4>

                      <p className="text-muted">80% Target</p>

                      <div className="progress mt-2" style={{ height: "10px" }}>
                        <div
                          className="progress-bar progress-bar progress-bar-striped progress-bar-animated bg-success"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="80"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer border-top">
                    <Link to="#!" className="link-dark fw-medium">
                      View More <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerDetails;
