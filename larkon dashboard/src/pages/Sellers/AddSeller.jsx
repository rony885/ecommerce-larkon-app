import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const AddSeller = () => {
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
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add Brand Logo</h4>
              </div>
              <div className="card-body">
                {/* <!-- File Upload --> */}
                <form
                  action="https://techzaa.in/"
                  method="post"
                  className="dropzone"
                  id="myAwesomeDropzone"
                  data-plugin="dropzone"
                  data-previews-container="#file-previews"
                  data-upload-preview-template="#uploadPreviewTemplate"
                >
                  <div className="fallback">
                    <input name="file" type="file" multiple />
                  </div>
                  <div className="dz-message needsclick">
                    <i className="bx bx-cloud-upload fs-48 text-primary"></i>
                    <h3 className="mt-4">
                      Drop your images here, or
                      <span className="text-primary">click to browse</span>
                    </h3>
                    <span className="text-muted fs-13">
                      1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are
                      allowed
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Seller Information</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="brand-title" className="form-label">
                          Brand Title
                        </label>
                        <input
                          type="text"
                          id="brand-title"
                          className="form-control"
                          placeholder="Enter Title"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="col-lg-6">
                    <form>
                      <label
                        htmlFor="product-categories"
                        className="form-label"
                      >
                        Product Categories
                      </label>
                      <select
                        className="form-control"
                        id="product-categories"
                        data-choices
                        data-choices-groups
                        data-placeholder="Select Categories"
                        name="choices-single-groups"
                      >
                        <option defaultValue="">Choose Link categories</option>
                        <option defaultValue="Fashion">Fashion</option>
                        <option defaultValue="Electronics">Electronics</option>
                        <option defaultValue="Footwear">Footwear</option>
                        <option defaultValue="Sportswear">Sportswear</option>
                        <option defaultValue="Watches">Watches</option>
                        <option defaultValue="Furniture">Furniture</option>
                        <option defaultValue="Appliances">Appliances</option>
                        <option defaultValue="Headphones">Headphones</option>
                        <option defaultValue="Other Accessories">
                          Other Accessories
                        </option>
                      </select>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="brand-link" className="form-label">
                          Brand Link
                        </label>
                        <input
                          type="text"
                          id="brand-link"
                          className="form-control"
                          placeholder="www.****"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <label htmlFor="seller-location" className="form-label">
                        Location
                      </label>
                      <div className="input-group mb-3">
                        <span className="input-group-text fs-20">
                          <iconify-icon
                            icon="solar:point-on-map-bold-duotone"
                            className="fs-18"
                          ></iconify-icon>
                        </span>
                        <input
                          type="text"
                          id="seller-location"
                          className="form-control"
                          placeholder="Add Address"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <label htmlFor="seller-email" className="form-label">
                        Email
                      </label>
                      <div className="input-group mb-3">
                        <span className="input-group-text fs-20">
                          <iconify-icon
                            icon="solar:letter-bold-duotone"
                            className="fs-18"
                          ></iconify-icon>
                        </span>
                        <input
                          type="email"
                          id="seller-email"
                          className="form-control"
                          placeholder="Add Email"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <label htmlFor="seller-number" className="form-label">
                        Phone Number
                      </label>
                      <div className="input-group mb-3">
                        <span className="input-group-text fs-20">
                          <iconify-icon
                            icon="solar:outgoing-call-rounded-bold-duotone"
                            className="fs-20"
                          ></iconify-icon>
                        </span>
                        <input
                          type="number"
                          id="seller-number"
                          className="form-control"
                          placeholder="Phone number"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="customRange1" className="form-label">
                      Yearly Revenue
                    </label>
                    <div
                      id="product-price-range"
                      // [data-slider-size="md"
                      // ]
                      className=""
                    ></div>
                    <div className="formCost row mt-2">
                      <div className="col-lg-6">
                        <input
                          className="form-control form-control-sm text-center"
                          type="text"
                          id="minCost"
                          defaultValue="0"
                        />
                      </div>

                      <div className="col-lg-6">
                        <input
                          className="form-control form-control-sm text-center"
                          type="text"
                          id="maxCost"
                          defaultValue="1000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Seller Product Information</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="items-stock" className="form-label">
                          Items Stock
                        </label>
                        <input
                          type="number"
                          id="items-stock"
                          className="form-control"
                          placeholder="000"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="items-sells" className="form-label">
                          Product Sells
                        </label>
                        <input
                          type="number"
                          id="items-sells"
                          className="form-control"
                          placeholder="000"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="happy-client" className="form-label">
                          Happy Client
                        </label>
                        <input
                          type="number"
                          id="happy-client"
                          className="form-control"
                          placeholder="000"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-light mb-3 rounded">
              <div className="row justify-content-end g-2">
                <div className="col-lg-2">
                  <Link to="#!" className="btn btn-outline-secondary w-100">
                    Save Change
                  </Link>
                </div>
                <div className="col-lg-2">
                  <Link to="#!" className="btn btn-primary w-100">
                    Cancel
                  </Link>
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

export default AddSeller;
