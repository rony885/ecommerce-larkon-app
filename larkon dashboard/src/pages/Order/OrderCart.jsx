import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const OrderCart = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex mb-4 bg-primary p-3 rounded">
              <p className="fw-medium fs-15 text-white m-0">
                There are 4 product in your cart
              </p>
              <Link
                to="#!"
                className="ms-auto text-white fs-14 text-decoration-underline"
              >
                Clear cart
              </Link>
            </div>
            <div className="card cart-detail">
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-sm-auto">
                    <div className="rounded bg-light avatar-lg d-flex align-items-center justify-content-center">
                      <img
                        src="assets/images/product/p-1.png"
                        alt=""
                        className="avatar-lg"
                      />
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="ms-lg-3">
                      <Link to="#!" className="fw-medium text-dark fs-18">
                        Men Black Slim Fit T-shirt
                      </Link>
                      <div className="d-flex align-items-center gap-3 mt-2">
                        <p className="text-dark fw-medium">
                          Color : <span className="text-muted"> Dark </span>
                        </p>
                        <p className="text-dark fw-medium">
                          Size : <span className="text-muted"> M </span>
                        </p>
                      </div>
                      <div className="quantity mt-2">
                        <div className="input-step border bg-body-secondary p-1 rounded d-inline-flex overflow-visible">
                          <button
                            type="button"
                            className="minus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="text-dark text-center border-0 bg-body-secondary rounded h-100"
                            defaultValue="1"
                            min="0"
                            max="100"
                            readOnly=""
                          />
                          <button
                            type="button"
                            className="plus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <div className="text-lg-end">
                      <p className="fw-medium mb-0">Items Price</p>
                      <p className="mt-2 mb-0 fw-semibold fs-17">
                        $80.00{" "}
                        <span className="fw-normal fs-14">/ $3.00 Tex</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-light-subtle">
                <div className="row g-3">
                  <div className="col-sm">
                    <div className="d-flex gap-3">
                      <Link
                        to="#!"
                        className="text-dark fs-14 d-flex align-items-center gap-1"
                      >
                        <iconify-icon
                          icon="solar:trash-bin-minimalistic-bold-duotone"
                          className="fs-18"
                        ></iconify-icon>{" "}
                        Remove
                      </Link>
                      <Link
                        to="#!"
                        className="text-dark fs-14 d-flex align-items-center gap-1 ms-3"
                      >
                        <iconify-icon
                          icon="solar:heart-bold-duotone"
                          className="fs-18"
                        ></iconify-icon>
                        Add Wishlist
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <p className="text-dark fw-medium mb-0">
                      Total : <span className="text-muted">$83.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card cart-detail">
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-sm-auto">
                    <div className="rounded bg-light avatar-lg d-flex align-items-center justify-content-center">
                      <img
                        src="assets/images/product/p-5.png"
                        alt=""
                        className="avatar-lg"
                      />
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="ms-lg-3">
                      <Link to="#!" className="fw-medium text-dark fs-18">
                        Dark Green Cargo Pent
                      </Link>
                      <div className="d-flex align-items-center gap-3 mt-2">
                        <p className="text-dark fw-medium">
                          Color :{" "}
                          <span className="text-muted"> Dark Green</span>
                        </p>
                        <p className="text-dark fw-medium">
                          Size : <span className="text-muted"> M </span>
                        </p>
                      </div>
                      <div className="quantity mt-2">
                        <div className="input-step border bg-body-secondary p-1 rounded d-inline-flex overflow-visible">
                          <button
                            type="button"
                            className="minus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="text-dark text-center border-0 bg-body-secondary rounded h-100"
                            defaultValue="3"
                            min="0"
                            max="100"
                            readOnly=""
                          />
                          <button
                            type="button"
                            className="plus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <div className="text-lg-end">
                      <p className="fw-medium mb-0">Items Price</p>
                      <p className="mt-2 mb-0 fw-semibold fs-17">
                        $330.00{" "}
                        <span className="fw-normal fs-14">/ $4.00 Tex</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-light-subtle">
                <div className="row g-3">
                  <div className="col-sm">
                    <div className="d-flex gap-3">
                      <Link
                        to="#!"
                        className="text-dark fs-14 d-flex align-items-center gap-1"
                      >
                        <iconify-icon
                          icon="solar:trash-bin-minimalistic-bold-duotone"
                          className="fs-18"
                        ></iconify-icon>{" "}
                        Remove
                      </Link>
                      <Link
                        to="#!"
                        className="text-dark fs-14 d-flex align-items-center gap-1 ms-3"
                      >
                        <iconify-icon
                          icon="solar:heart-bold-duotone"
                          className="fs-18"
                        ></iconify-icon>
                        Add Wishlist
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <p className="text-dark fw-medium mb-0">
                      Total : <span className="text-muted">$334.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card cart-detail">
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-sm-auto">
                    <div className="rounded bg-light avatar-lg d-flex align-items-center justify-content-center">
                      <img
                        src="assets/images/product/p-8.png"
                        alt=""
                        className="avatar-lg"
                      />
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="ms-lg-3">
                      <Link to="#!" className="fw-medium text-dark fs-18">
                        Men Dark Brown Wallet
                      </Link>
                      <div className="d-flex align-items-center gap-3 mt-2">
                        <p className="text-dark fw-medium">
                          Color : <span className="text-muted"> Brown</span>
                        </p>
                        <p className="text-dark fw-medium">
                          Size : <span className="text-muted"> S </span>
                        </p>
                      </div>
                      <div className="quantity mt-2">
                        <div className="input-step border bg-body-secondary p-1 rounded d-inline-flex overflow-visible">
                          <button
                            type="button"
                            className="minus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="text-dark text-center border-0 bg-body-secondary rounded h-100"
                            defaultValue="1"
                            min="0"
                            max="100"
                            readOnly=""
                          />
                          <button
                            type="button"
                            className="plus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <div className="text-lg-end">
                      <p className="fw-medium mb-0">Items Price</p>
                      <p className="mt-2 mb-0 fw-semibold fs-17">
                        $132.00{" "}
                        <span className="fw-normal fs-14">/ $5.00 Tex</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-light-subtle">
                <div className="row g-3">
                  <div className="col-sm">
                    <div className="d-flex gap-3">
                      <Link
                        to="#!"
                        className="text-dark fs-14 d-flex align-items-center gap-1"
                      >
                        <iconify-icon
                          icon="solar:trash-bin-minimalistic-bold-duotone"
                          className="fs-18"
                        ></iconify-icon>{" "}
                        Remove
                      </Link>
                      <Link
                        to="#!"
                        className="text-dark fs-14 d-flex align-items-center gap-1 ms-3"
                      >
                        <iconify-icon
                          icon="solar:heart-bold-duotone"
                          className="fs-18"
                        ></iconify-icon>
                        Add Wishlist
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <p className="text-dark fw-medium mb-0">
                      Total : <span className="text-muted">$137.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card cart-detail">
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-sm-auto">
                    <div className="rounded bg-light avatar-lg d-flex align-items-center justify-content-center">
                      <img
                        src="assets/images/product/p-10.png"
                        alt=""
                        className="avatar-lg"
                      />
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="ms-lg-3">
                      <Link to="#!" className="fw-medium text-dark fs-18">
                        Kid's Yellow T-shirt
                      </Link>
                      <div className="d-flex align-items-center gap-3 mt-2">
                        <p className="text-dark fw-medium">
                          Color : <span className="text-muted"> Yellow </span>
                        </p>
                        <p className="text-dark fw-medium">
                          Size : <span className="text-muted"> S </span>
                        </p>
                      </div>
                      <div className="quantity mt-2">
                        <div className="input-step border bg-body-secondary p-1 rounded d-inline-flex overflow-visible">
                          <button
                            type="button"
                            className="minus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="text-dark text-center border-0 bg-body-secondary rounded h-100"
                            defaultValue="2"
                            min="0"
                            max="100"
                            readOnly=""
                          />
                          <button
                            type="button"
                            className="plus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <div className="text-lg-end">
                      <p className="fw-medium mb-0">Items Price</p>
                      <p className="mt-2 mb-0 fw-semibold fs-17">
                        $220.00{" "}
                        <span className="fw-normal fs-14">/ $3.00 Tex</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-light-subtle">
                <div className="row g-3">
                  <div className="col-sm">
                    <div className="d-flex gap-3">
                      <Link
                        to="#!"
                        className="text-dark fs-14 d-flex align-items-center gap-1"
                      >
                        <iconify-icon
                          icon="solar:trash-bin-minimalistic-bold-duotone"
                          className="fs-18"
                        ></iconify-icon>{" "}
                        Remove
                      </Link>
                      <Link
                        to="#!"
                        className="text-dark fs-14 d-flex align-items-center gap-1 ms-3"
                      >
                        <iconify-icon
                          icon="solar:heart-bold-duotone"
                          className="fs-18"
                        ></iconify-icon>
                        Add Wishlist
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <p className="text-dark fw-medium mb-0">
                      Total : <span className="text-muted">$223.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card text-center bg-primary overflow-hidden z-1">
              <div className="card-body p-4">
                <h4 className="card-title text-white">
                  Have Link Promo Code ?
                </h4>
                <div className="position-relative mt-3">
                  <div className="form-button">
                    <form className="d-flex align-items-center justify-content-center">
                      <input
                        type="text"
                        className="form-control w-50 border-0 rounded bg-light text-white bg-opacity-25"
                        placeholder="code"
                        required=""
                        defaultValue="CODE123"
                      />
                      <button
                        type="button"
                        data-toast
                        data-toast-text="Your Promo Code Apply Successfully"
                        data-toast-gravity="top"
                        data-toast-position="center"
                        // data-toast-className="success"
                        data-toast-duration="3000"
                        className="btn btn-light ms-2 rounded-2"
                      >
                        Apply
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Order Summary</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <tbody>
                      <tr>
                        <td className="px-0">
                          <p className="d-flex mb-0 align-items-center gap-1">
                            <iconify-icon icon="solar:clipboard-text-broken"></iconify-icon>{" "}
                            Sub Total :{" "}
                          </p>
                        </td>
                        <td className="text-end text-dark fw-medium px-0">
                          $777.00
                        </td>
                      </tr>
                      <tr>
                        <td className="px-0">
                          <p className="d-flex mb-0 align-items-center gap-1">
                            <iconify-icon
                              icon="solar:ticket-broken"
                              className="align-middle"
                            ></iconify-icon>{" "}
                            Discount :{" "}
                          </p>
                        </td>
                        <td className="text-end text-dark fw-medium px-0">
                          -$60.00
                        </td>
                      </tr>
                      <tr>
                        <td className="px-0">
                          <p className="d-flex mb-0 align-items-center gap-1">
                            <iconify-icon
                              icon="solar:kick-scooter-broken"
                              className="align-middle"
                            ></iconify-icon>{" "}
                            Delivery Charge :{" "}
                          </p>
                        </td>
                        <td className="text-end text-dark fw-medium px-0">
                          $00.00
                        </td>
                      </tr>
                      <tr>
                        <td className="px-0">
                          <p className="d-flex mb-0 align-items-center gap-1">
                            <iconify-icon
                              icon="solar:calculator-minimalistic-broken"
                              className="align-middle"
                            ></iconify-icon>{" "}
                            Estimated Tax (15.5%) :{" "}
                          </p>
                        </td>
                        <td className="text-end text-dark fw-medium px-0">
                          $20.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer bg-light-subtle border-top">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="fw-medium text-dark mb-0">Total Amount</p>
                  </div>
                  <div>
                    <p className="fw-medium text-dark mb-0">$737.00</p>
                  </div>
                </div>
                <div
                  className="alert alert-warning alert-icon mt-3 mb-0"
                  role="alert"
                >
                  <div className="d-flex align-items-center">
                    <div className="avatar-sm rounded bg-warning d-flex justify-content-center align-items-center fs-22 me-2 flex-shrink-0">
                      <iconify-icon
                        icon="solar:kick-scooter-broken"
                        className="align-middle text-white"
                      ></iconify-icon>
                    </div>
                    <div className="flex-grow-1">
                      Estimated Delivery by 25 April, 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-btn my-4 text-end">
              <Link to="/product" className="btn btn-primary">
                Continue Shopping
              </Link>
              <Link to="/order-checkout" className="btn btn-success">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderCart;
