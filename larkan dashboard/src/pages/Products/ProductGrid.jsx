/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Footer from "../../components/Footer";

const ProductGrid = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-3">
            <div className="card bg-light-subtle">
              <div className="card-header border-0">
                <div className="search-bar me-3 mb-1">
                  <span>
                    <i className="bx bx-search-alt"></i>
                  </span>
                  <input
                    type="search"
                    className="form-control"
                    id="search"
                    placeholder="Search ..."
                  />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body border-light">
                <a
                  href="#"
                  className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#categories"
                  aria-expanded="false"
                  aria-controls="other"
                >
                  Categories
                  <i className="bx bx-chevron-down ms-auto fs-20"></i>
                </a>
                <div id="categories" className="collapse show">
                  <div className="categories-list d-flex flex-column gap-2 mt-2">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="all-categories"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="all-categories"
                      >
                        All Categories
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="fashion-categories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="fashion-categories"
                      >
                        Fashion Men , Women & Kid's
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="sunglass-categories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="sunglass-categories"
                      >
                        Eye Ware & Sunglass
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="watches-categories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="watches-categories"
                      >
                        Watches
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="electronics-categories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="electronics-categories"
                      >
                        Electronics Items
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="furniture-categories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="furniture-categories"
                      >
                        Furniture
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="headphones-categories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="headphones-categories"
                      >
                        Headphones
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="beauty-categories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="beauty-categories"
                      >
                        Beauty & Health
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="shoes-categories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="shoes-categories"
                      >
                        Foot Ware
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    href="#"
                    className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#price"
                    aria-expanded="false"
                    aria-controls="other"
                  >
                    Product Price
                    <i className="bx bx-chevron-down ms-auto fs-20"></i>
                  </a>
                  <div id="price" className="collapse show">
                    <div className="categories-list d-flex flex-column gap-2 mt-2">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="all-price"
                        />
                        <label className="form-check-label" htmlFor="all-price">
                          All Price
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="price-1"
                        />
                        <label className="form-check-label" htmlFor="price-1">
                          Below $200 (145)
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="price-2"
                        />
                        <label className="form-check-label" htmlFor="price-2">
                          $200 - $500 (1,885)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="price-3"
                        />
                        <label className="form-check-label" htmlFor="price-3">
                          $500 - $800 (2,276)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="price-4"
                        />
                        <label className="form-check-label" htmlFor="price-4">
                          $800 - $1000 (12,676)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="price-5"
                        />
                        <label className="form-check-label" htmlFor="price-5">
                          $1000 - $1100 (13,123)
                        </label>
                      </div>
                      <h5 className="text-dark fw-medium mt-3">
                        Custom Price Range :
                      </h5>
                      <div
                        id="product-price-range"
                        // [data-slider-size="md"
                        // ]
                        className=""
                      ></div>
                      <div className="formCost d-flex gap-2 align-items-center mt-2">
                        <input
                          className="form-control form-control-sm text-center"
                          type="text"
                          id="minCost"
                          defaultValue="0"
                        />
                        <span className="fw-semibold text-muted">to</span>
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
                <div className="mt-4">
                  <a
                    href="#"
                    className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#gender"
                    aria-expanded="false"
                    aria-controls="other"
                  >
                    Gender
                    <i className="bx bx-chevron-down ms-auto fs-20"></i>
                  </a>
                  <div id="gender" className="collapse show">
                    <div className="categories-list d-flex flex-column gap-2 mt-2">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="men"
                        />
                        <label className="form-check-label" htmlFor="men">
                          Men (1,834)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="women"
                        />
                        <label className="form-check-label" htmlFor="women">
                          Women (2,890)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="kids"
                        />
                        <label className="form-check-label" htmlFor="kids">
                          Kid's (1,231)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#size"
                    aria-expanded="false"
                    aria-controls="other"
                  >
                    Size & Fit
                    <i className="bx bx-chevron-down ms-auto fs-20"></i>
                  </a>
                  <div id="size" className="collapse show">
                    <p className="text-muted mt-1">
                      "For better results, select gender and category"
                    </p>
                    <div className="categories-list d-flex flex-column gap-2 mt-2">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="size-s"
                        />
                        <label className="form-check-label" htmlFor="size-s">
                          S (1,437)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="size-m"
                        />
                        <label className="form-check-label" htmlFor="size-m">
                          M (2,675)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="size-l"
                        />
                        <label className="form-check-label" htmlFor="size-l">
                          L (4,870)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="size-xl"
                        />
                        <label className="form-check-label" htmlFor="size-xl">
                          XL (7,543)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="size-xxl"
                        />
                        <label className="form-check-label" htmlFor="size-xxl">
                          XXL (1,099)
                        </label>
                      </div>
                      <a href="#!" className="text-dark fw-medium">
                        More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <a
                    href="#"
                    className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#rating"
                    aria-expanded="false"
                    aria-controls="other"
                  >
                    Rating
                    <i className="bx bx-chevron-down ms-auto fs-20"></i>
                  </a>
                  <div id="rating" className="collapse show">
                    <div className="categories-list d-flex flex-column gap-2 mt-2">
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="rating-number"
                          id="rate-1"
                        />
                        <label className="form-check-label" htmlFor="rate-1">
                          1 <i className="bx bxs-star text-warning"></i> & Above
                          (437)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="rating-number"
                          id="rate-2"
                        />
                        <label className="form-check-label" htmlFor="rate-2">
                          2 <i className="bx bxs-star text-warning"></i> & Above
                          (657)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="rating-number"
                          id="rate-3"
                        />
                        <label className="form-check-label" htmlFor="rate-3">
                          3 <i className="bx bxs-star text-warning"></i> & Above
                          (1,897)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="rating-number"
                          id="rate-4"
                        />
                        <label className="form-check-label" htmlFor="rate-4">
                          4 <i className="bx bxs-star text-warning"></i> & Above
                          (3,571)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <a href="#!" className="btn btn-primary w-100">
                  Apply
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="card bg-light-subtle">
              <div className="card-header border-0">
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-6">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item fw-medium">
                        <a href="javascript: void(0);" className="text-dark">
                          Categories
                        </a>
                      </li>
                      <li className="breadcrumb-item active">All Product</li>
                    </ol>
                    <p className="mb-0 text-muted">
                      Showing all
                      <span className="text-dark fw-semibold">5,786</span> items
                      results
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="text-md-end mt-3 mt-md-0">
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-1"
                      >
                        <i className="bx bx-cog me-1"></i>More Setting
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-1"
                      >
                        <i className="bx bx-filter-alt me-1"></i> Filters
                      </button>
                      <a
                        href="product-add.html"
                        className="btn btn-success me-1"
                      >
                        <i className="bx bx-plus"></i> New Product
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <img
                    src="assets/images/product/p-1.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body bg-light-subtle rounded-bottom">
                    <a
                      href="product-details.html"
                      className="text-dark fw-medium fs-16"
                    >
                      Men Black Slim Fit T-shirt
                    </a>
                    <div className="my-1">
                      <div className="d-flex gap-2 align-items-center">
                        <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
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
                        <p className="mb-0 fw-medium fs-15 text-dark">
                          4.5
                          <span className="text-muted fs-13">(55 Review)</span>
                        </p>
                      </div>
                    </div>
                    <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                      <span className="text-muted text-decoration-line-through">
                        $100
                      </span>
                      $80 <small className="text-muted"> (30% Off)</small>
                    </h4>
                    <div className="mt-3">
                      <div className="d-flex gap-2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-soft-primary border border-primary-subtle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#!" className="dropdown-item">
                              Edit
                            </a>

                            <a href="#!" className="dropdown-item">
                              Overview
                            </a>

                            <a href="#!" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                        <a
                          href="order-cart.html"
                          className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                        >
                          <i className="bx bx-cart align-middle"></i> Add To
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="position-absolute top-0 end-0 p-3">
                    <button
                      type="button"
                      className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                    >
                      <iconify-icon icon="solar:heart-broken"></iconify-icon>
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <img
                    src="assets/images/product/p-2.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body bg-light-subtle rounded-bottom">
                    <a
                      href="product-details.html"
                      className="text-dark fw-medium fs-16"
                    >
                      Olive Green Leather Bag
                    </a>
                    <div className="my-1">
                      <div className="d-flex gap-2 align-items-center">
                        <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
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
                        <p className="mb-0 fw-medium fs-15 text-dark">
                          4.1
                          <span className="text-muted fs-13">(143 Review)</span>
                        </p>
                      </div>
                    </div>
                    <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                      <span className="text-muted text-decoration-line-through">
                        $150
                      </span>
                      $136 <small className="text-muted"> (30% Off)</small>
                    </h4>
                    <div className="mt-3">
                      <div className="d-flex gap-2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-soft-primary border border-primary-subtle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#!" className="dropdown-item">
                              Edit
                            </a>

                            <a href="#!" className="dropdown-item">
                              Overview
                            </a>

                            <a href="#!" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                        <a
                          href="order-cart.html"
                          className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                        >
                          <i className="bx bx-cart align-middle"></i> Add To
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>

                  <span className="position-absolute top-0 end-0 p-3">
                    <button
                      type="button"
                      className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                    >
                      <iconify-icon icon="solar:heart-angle-bold-duotone"></iconify-icon>
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <img
                    src="assets/images/product/p-3.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body bg-light-subtle rounded-bottom">
                    <a
                      href="product-details.html"
                      className="text-dark fw-medium fs-16"
                    >
                      Women Golden Dress
                    </a>
                    <div className="my-1">
                      <div className="d-flex gap-2 align-items-center">
                        <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
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
                        <p className="mb-0 fw-medium fs-15 text-dark">
                          4.4
                          <span className="text-muted fs-13">(174 Review)</span>
                        </p>
                      </div>
                    </div>
                    <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                      <span className="text-muted text-decoration-line-through">
                        $250
                      </span>
                      $219 <small className="text-muted"> (30% Off)</small>
                    </h4>
                    <div className="mt-3">
                      <div className="d-flex gap-2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-soft-primary border border-primary-subtle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#!" className="dropdown-item">
                              Edit
                            </a>

                            <a href="#!" className="dropdown-item">
                              Overview
                            </a>

                            <a href="#!" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                        <a
                          href="order-cart.html"
                          className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                        >
                          <i className="bx bx-cart align-middle"></i> Add To
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="position-absolute top-0 end-0 p-3">
                    <button
                      type="button"
                      className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                    >
                      <iconify-icon icon="solar:heart-broken"></iconify-icon>
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <img
                    src="assets/images/product/p-4.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body bg-light-subtle rounded-bottom">
                    <a
                      href="product-details.html"
                      className="text-dark fw-medium fs-16"
                    >
                      Gray Cap For Men
                    </a>
                    <div className="my-1">
                      <div className="d-flex gap-2 align-items-center">
                        <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
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
                        <p className="mb-0 fw-medium fs-15 text-dark">
                          4.2
                          <span className="text-muted fs-13">(23 Review)</span>
                        </p>
                      </div>
                    </div>
                    <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                      <span className="text-muted text-decoration-line-through">
                        $100
                      </span>
                      $76 <small className="text-muted"> (30% Off)</small>
                    </h4>
                    <div className="mt-3">
                      <div className="d-flex gap-2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-soft-primary border border-primary-subtle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#!" className="dropdown-item">
                              Edit
                            </a>

                            <a href="#!" className="dropdown-item">
                              Overview
                            </a>

                            <a href="#!" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                        <a
                          href="order-cart.html"
                          className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                        >
                          <i className="bx bx-cart align-middle"></i> Add To
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="position-absolute top-0 end-0 p-3">
                    <button
                      type="button"
                      className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                    >
                      <iconify-icon icon="solar:heart-broken"></iconify-icon>
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <img
                    src="assets/images/product/p-5.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body bg-light-subtle rounded-bottom">
                    <a
                      href="product-details.html"
                      className="text-dark fw-medium fs-16"
                    >
                      Dark Green Cargo Pent
                    </a>
                    <div className="my-1">
                      <div className="d-flex gap-2 align-items-center">
                        <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
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
                        <p className="mb-0 fw-medium fs-15 text-dark">
                          4.4
                          <span className="text-muted fs-13">(109 Review)</span>
                        </p>
                      </div>
                    </div>
                    <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                      <span className="text-muted text-decoration-line-through">
                        $130
                      </span>
                      $110 <small className="text-muted"> (30% Off)</small>
                    </h4>
                    <div className="mt-3">
                      <div className="d-flex gap-2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-soft-primary border border-primary-subtle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#!" className="dropdown-item">
                              Edit
                            </a>

                            <a href="#!" className="dropdown-item">
                              Overview
                            </a>

                            <a href="#!" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                        <a
                          href="order-cart.html"
                          className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                        >
                          <i className="bx bx-cart align-middle"></i> Add To
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="position-absolute top-0 end-0 p-3">
                    <button
                      type="button"
                      className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                    >
                      <iconify-icon icon="solar:heart-broken"></iconify-icon>
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <img
                    src="assets/images/product/p-6.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body bg-light-subtle rounded-bottom">
                    <a
                      href="product-details.html"
                      className="text-dark fw-medium fs-16"
                    >
                      Orange Headphone
                    </a>
                    <div className="my-1">
                      <div className="d-flex gap-2 align-items-center">
                        <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
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
                        <p className="mb-0 fw-medium fs-15 text-dark">
                          4.2
                          <span className="text-muted fs-13">(200 Review)</span>
                        </p>
                      </div>
                    </div>
                    <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                      <span className="text-muted text-decoration-line-through">
                        $250
                      </span>
                      $231 <small className="text-muted"> (30% Off)</small>
                    </h4>
                    <div className="mt-3">
                      <div className="d-flex gap-2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-soft-primary border border-primary-subtle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#!" className="dropdown-item">
                              Edit
                            </a>

                            <a href="#!" className="dropdown-item">
                              Overview
                            </a>

                            <a href="#!" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                        <a
                          href="order-cart.html"
                          className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                        >
                          <i className="bx bx-cart align-middle"></i> Add To
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="position-absolute top-0 end-0 p-3">
                    <button
                      type="button"
                      className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                    >
                      <iconify-icon icon="solar:heart-broken"></iconify-icon>
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <img
                    src="assets/images/product/p-7.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body bg-light-subtle rounded-bottom">
                    <a
                      href="product-details.html"
                      className="text-dark fw-medium fs-16"
                    >
                      Kid's Yellow Shoes
                    </a>
                    <div className="my-1">
                      <div className="d-flex gap-2 align-items-center">
                        <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
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
                        <p className="mb-0 fw-medium fs-15 text-dark">
                          4.5
                          <span className="text-muted fs-13">(321 Review)</span>
                        </p>
                      </div>
                    </div>
                    <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                      <span className="text-muted text-decoration-line-through">
                        $100
                      </span>
                      $89 <small className="text-muted"> (30% Off)</small>
                    </h4>
                    <div className="mt-3">
                      <div className="d-flex gap-2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-soft-primary border border-primary-subtle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#!" className="dropdown-item">
                              Edit
                            </a>

                            <a href="#!" className="dropdown-item">
                              Overview
                            </a>

                            <a href="#!" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                        <a
                          href="order-cart.html"
                          className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                        >
                          <i className="bx bx-cart align-middle"></i> Add To
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="position-absolute top-0 end-0 p-3">
                    <button
                      type="button"
                      className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                    >
                      <iconify-icon icon="solar:heart-angle-bold-duotone"></iconify-icon>
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <img
                    src="assets/images/product/p-8.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body bg-light-subtle rounded-bottom">
                    <a
                      href="product-details.html"
                      className="text-dark fw-medium fs-16"
                    >
                      Men Dark Brown Wallet
                    </a>
                    <div className="my-1">
                      <div className="d-flex gap-2 align-items-center">
                        <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
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
                        <p className="mb-0 fw-medium fs-15 text-dark">
                          4.1
                          <span className="text-muted fs-13">(190 Review)</span>
                        </p>
                      </div>
                    </div>
                    <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                      <span className="text-muted text-decoration-line-through">
                        $150
                      </span>
                      $132 <small className="text-muted"> (30% Off)</small>
                    </h4>
                    <div className="mt-3">
                      <div className="d-flex gap-2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-soft-primary border border-primary-subtle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#!" className="dropdown-item">
                              Edit
                            </a>

                            <a href="#!" className="dropdown-item">
                              Overview
                            </a>

                            <a href="#!" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                        <a
                          href="order-cart.html"
                          className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                        >
                          <i className="bx bx-cart align-middle"></i> Add To
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="position-absolute top-0 end-0 p-3">
                    <button
                      type="button"
                      className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                    >
                      <iconify-icon icon="solar:heart-broken"></iconify-icon>
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <img
                    src="assets/images/product/p-9.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body bg-light-subtle rounded-bottom">
                    <a
                      href="product-details.html"
                      className="text-dark fw-medium fs-16"
                    >
                      Sky Blue Mat Sunglass
                    </a>
                    <div className="my-1">
                      <div className="d-flex gap-2 align-items-center">
                        <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
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
                        <p className="mb-0 fw-medium fs-15 text-dark">
                          3.5
                          <span className="text-muted fs-13">(298 Review)</span>
                        </p>
                      </div>
                    </div>
                    <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                      <span className="text-muted text-decoration-line-through">
                        $100
                      </span>
                      $77 <small className="text-muted"> (30% Off)</small>
                    </h4>
                    <div className="mt-3">
                      <div className="d-flex gap-2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-soft-primary border border-primary-subtle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#!" className="dropdown-item">
                              Edit
                            </a>

                            <a href="#!" className="dropdown-item">
                              Overview
                            </a>

                            <a href="#!" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                        <a
                          href="order-cart.html"
                          className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                        >
                          <i className="bx bx-cart align-middle"></i> Add To
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="position-absolute top-0 end-0 p-3">
                    <button
                      type="button"
                      className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                    >
                      <iconify-icon icon="solar:heart-angle-bold-duotone"></iconify-icon>
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <img
                    src="assets/images/product/p-10.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body bg-light-subtle rounded-bottom">
                    <a
                      href="product-details.html"
                      className="text-dark fw-medium fs-16"
                    >
                      Kid's Yellow T-shirt
                    </a>
                    <div className="my-1">
                      <div className="d-flex gap-2 align-items-center">
                        <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
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
                        <p className="mb-0 fw-medium fs-15 text-dark">
                          4.1
                          <span className="text-muted fs-13">(156 Review)</span>
                        </p>
                      </div>
                    </div>
                    <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                      <span className="text-muted text-decoration-line-through">
                        $140
                      </span>
                      $110 <small className="text-muted"> (30% Off)</small>
                    </h4>
                    <div className="mt-3">
                      <div className="d-flex gap-2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-soft-primary border border-primary-subtle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#!" className="dropdown-item">
                              Edit
                            </a>

                            <a href="#!" className="dropdown-item">
                              Overview
                            </a>

                            <a href="#!" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                        <a
                          href="order-cart.html"
                          className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                        >
                          <i className="bx bx-cart align-middle"></i> Add To
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="position-absolute top-0 end-0 p-3">
                    <button
                      type="button"
                      className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                    >
                      <iconify-icon icon="solar:heart-broken"></iconify-icon>
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <img
                    src="assets/images/product/p-11.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body bg-light-subtle rounded-bottom">
                    <a
                      href="product-details.html"
                      className="text-dark fw-medium fs-16"
                    >
                      White Rubber Smart Watch
                    </a>
                    <div className="my-1">
                      <div className="d-flex gap-2 align-items-center">
                        <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
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
                        <p className="mb-0 fw-medium fs-15 text-dark">
                          3.4
                          <span className="text-muted fs-13">(201 Review)</span>
                        </p>
                      </div>
                    </div>
                    <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                      <span className="text-muted text-decoration-line-through">
                        $110
                      </span>
                      $77 <small className="text-muted"> (30% Off)</small>
                    </h4>
                    <div className="mt-3">
                      <div className="d-flex gap-2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-soft-primary border border-primary-subtle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#!" className="dropdown-item">
                              Edit
                            </a>

                            <a href="#!" className="dropdown-item">
                              Overview
                            </a>

                            <a href="#!" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                        <a
                          href="order-cart.html"
                          className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                        >
                          <i className="bx bx-cart align-middle"></i> Add To
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="position-absolute top-0 end-0 p-3">
                    <button
                      type="button"
                      className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                    >
                      <iconify-icon icon="solar:heart-broken"></iconify-icon>
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <img
                    src="assets/images/product/p-12.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body bg-light-subtle rounded-bottom">
                    <a
                      href="product-details.html"
                      className="text-dark fw-medium fs-16"
                    >
                      Men Brown Leather Shoes
                    </a>
                    <div className="my-1">
                      <div className="d-flex gap-2 align-items-center">
                        <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
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
                        <p className="mb-0 fw-medium fs-15 text-dark">
                          4.1
                          <span className="text-muted fs-13">(370 Review)</span>
                        </p>
                      </div>
                    </div>
                    <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                      <span className="text-muted text-decoration-line-through">
                        $250
                      </span>
                      $222 <small className="text-muted"> (30% Off)</small>
                    </h4>
                    <div className="mt-3">
                      <div className="d-flex gap-2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-soft-primary border border-primary-subtle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#!" className="dropdown-item">
                              Edit
                            </a>

                            <a href="#!" className="dropdown-item">
                              Overview
                            </a>

                            <a href="#!" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                        <a
                          href="order-cart.html"
                          className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                        >
                          <i className="bx bx-cart align-middle"></i> Add To
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="position-absolute top-0 end-0 p-3">
                    <button
                      type="button"
                      className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                    >
                      <iconify-icon icon="solar:heart-angle-bold-duotone"></iconify-icon>
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <div className="py-3 border-top">
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

      <Footer />
    </div>
  );
};

export default ProductGrid;
