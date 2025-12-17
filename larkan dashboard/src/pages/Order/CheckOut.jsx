import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3">
                    <h4 className="card-title">Personal Details</h4>
                  </div>
                  <div className="col-lg-9">
                    <div className="row">
                      <div className="col-lg-6">
                        <form>
                          <div className="mb-3">
                            <label htmlFor="first-name" className="form-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              id="first-name"
                              className="form-control"
                              placeholder="First name"
                            />
                          </div>
                        </form>
                      </div>
                      <div className="col-lg-6">
                        <form>
                          <div className="mb-3">
                            <label htmlFor="last-name" className="form-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              id="last-name"
                              className="form-control"
                              placeholder="Last name"
                            />
                          </div>
                        </form>
                      </div>
                      <div className="col-lg-6">
                        <form>
                          <div className="mb-3">
                            <label htmlFor="your-email" className="form-label">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="your-email"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </form>
                      </div>
                      <div className="col-lg-6">
                        <form>
                          <div className="mb-3">
                            <label htmlFor="your-number" className="form-label">
                              Phone number
                            </label>
                            <input
                              type="number"
                              id="your-number"
                              name="your-number"
                              className="form-control"
                              placeholder="Number"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="row">
                    <div className="col-lg-3">
                      <h4 className="card-title">Shipping Details</h4>
                    </div>
                    <div className="col-lg-9">
                      <div className="row">
                        <div className="col-lg-12">
                          <h5 className="mb-4">Shipping Address :</h5>
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="your-address"
                                className="form-label"
                              >
                                Full Address
                              </label>
                              <textarea
                                className="form-control"
                                id="your-address"
                                rows="3"
                                placeholder="Enter address"
                              ></textarea>
                            </div>
                          </form>
                        </div>
                        <div className="col-lg-4">
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="your-zipcode"
                                className="form-label"
                              >
                                Zip-Code
                              </label>
                              <input
                                type="number"
                                id="your-zipcode"
                                className="form-control"
                                placeholder="zip-code"
                              />
                            </div>
                          </form>
                        </div>

                        <div className="col-lg-4">
                          <form>
                            <label
                              htmlFor="choices-city"
                              className="form-label"
                            >
                              City
                            </label>
                            <select
                              className="form-control"
                              id="choices-city"
                              data-choices
                              data-choices-groups
                              data-placeholder="Select City"
                              name="choices-city"
                            >
                              <option defaultValue="">Choose Link city</option>
                              <optgroup label="UK">
                                <option defaultValue="London">London</option>
                                <option defaultValue="Manchester">
                                  Manchester
                                </option>
                                <option defaultValue="Liverpool">
                                  Liverpool
                                </option>
                              </optgroup>
                              <optgroup label="FR">
                                <option defaultValue="Paris">Paris</option>
                                <option defaultValue="Lyon">Lyon</option>
                                <option defaultValue="Marseille">
                                  Marseille
                                </option>
                              </optgroup>
                              <optgroup label="DE" disabled>
                                <option defaultValue="Hamburg">Hamburg</option>
                                <option defaultValue="Munich">Munich</option>
                                <option defaultValue="Berlin">Berlin</option>
                              </optgroup>
                              <optgroup label="US">
                                <option defaultValue="New York">
                                  New York
                                </option>
                                <option defaultValue="Washington" disabled>
                                  Washington
                                </option>
                                <option defaultValue="Michigan">
                                  Michigan
                                </option>
                              </optgroup>
                              <optgroup label="SP">
                                <option defaultValue="Madrid">Madrid</option>
                                <option defaultValue="Barcelona">
                                  Barcelona
                                </option>
                                <option defaultValue="Malaga">Malaga</option>
                              </optgroup>
                              <optgroup label="CA">
                                <option defaultValue="Montreal">
                                  Montreal
                                </option>
                                <option defaultValue="Toronto">Toronto</option>
                                <option defaultValue="Vancouver">
                                  Vancouver
                                </option>
                              </optgroup>
                            </select>
                          </form>
                        </div>
                        <div className="col-lg-4">
                          <form>
                            <label
                              htmlFor="choices-country"
                              className="form-label"
                            >
                              Country
                            </label>
                            <select
                              className="form-control"
                              id="choices-country"
                              data-choices
                              data-choices-groups
                              data-placeholder="Select Country"
                              name="choices-country"
                            >
                              <option defaultValue="">
                                Choose Link country
                              </option>
                              <optgroup label="">
                                <option defaultValue="">United Kingdom</option>
                                <option defaultValue="Fran">France</option>
                                <option defaultValue="Netherlands">
                                  Netherlands
                                </option>
                                <option defaultValue="U.S.A">U.S.A</option>
                                <option defaultValue="Denmark">Denmark</option>
                                <option defaultValue="Canada">Canada</option>
                                <option defaultValue="Australia">
                                  Australia
                                </option>
                                <option defaultValue="India">India</option>
                                <option defaultValue="Germany">Germany</option>
                                <option defaultValue="Spain">Spain</option>
                                <option defaultValue="United Arab Emirates">
                                  United Arab Emirates
                                </option>
                              </optgroup>
                            </select>
                          </form>
                        </div>
                      </div>
                      <div className="mt-2">
                        <Link to="#!" className="link-primary fw-medium">
                          + Add New Billing Address
                        </Link>
                      </div>

                      <h5 className="my-4">Shipping Method :</h5>
                      <div className="row gy-2">
                        <div className="col-lg-6">
                          <div className="form-check form-checkbox-primary ps-0">
                            <label htmlFor="shipping-1" className="w-100 mb-2">
                              <div className="d-flex align-items-center p-2 rounded gap-2 border">
                                <div className="d-flex align-items-center gap-2">
                                  <div className="rounded-3 bg-light avatar-md d-flex align-items-center justify-content-center">
                                    <img
                                      src="/assets/images/brands/dhl.png"
                                      alt=""
                                      className="avatar rounded"
                                    />
                                  </div>
                                  <div>
                                    <h5 className="text-dark fw-medium">
                                      DHL Fast Services
                                    </h5>
                                    <p className="mb-0 text-dark">
                                      Delivery -
                                      <span className="text-muted fw-normal">
                                        Today
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="ms-auto">
                                  <p className="mb-2">$10.00</p>
                                  <input
                                    className="form-check-input float-end"
                                    type="radio"
                                    name="shipping"
                                    id="shipping-1"
                                  />
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-check form-checkbox-primary ps-0">
                            <label htmlFor="shipping-2" className="w-100">
                              <div className="d-flex align-items-center p-2 rounded gap-2 border">
                                <div className="d-flex align-items-center gap-2">
                                  <div className="rounded-3 bg-light avatar-md d-flex align-items-center justify-content-center">
                                    <img
                                      src="/assets/images/brands/fedex.png"
                                      alt=""
                                      className="avatar rounded"
                                    />
                                  </div>
                                  <div>
                                    <h5 className="text-dark fw-medium">
                                      FedEx Services
                                    </h5>
                                    <p className="mb-0 text-dark">
                                      Delivery -
                                      <span className="text-muted fw-normal">
                                        Today
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="ms-auto">
                                  <p className="mb-2">$10.00</p>
                                  <input
                                    className="form-check-input float-end"
                                    type="radio"
                                    name="shipping"
                                    id="shipping-2"
                                  />
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-check form-checkbox-primary ps-0">
                            <label htmlFor="shipping-3" className="w-100">
                              <div className="d-flex align-items-center p-2 rounded gap-2 border">
                                <div className="d-flex align-items-center gap-2">
                                  <div className="rounded-3 bg-light avatar-md d-flex align-items-center justify-content-center">
                                    <img
                                      src="/assets/images/brands/ups.png"
                                      alt=""
                                      className="avatar rounded"
                                    />
                                  </div>
                                  <div>
                                    <h5 className="text-dark fw-medium">
                                      UPS Services
                                    </h5>
                                    <p className="mb-0 text-dark">
                                      Delivery -
                                      <span className="text-muted fw-normal">
                                        Tomorrow
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="ms-auto">
                                  <p className="mb-2">$8.00</p>
                                  <input
                                    className="form-check-input float-end"
                                    type="radio"
                                    name="shipping"
                                    id="shipping-3"
                                  />
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-check form-checkbox-primary ps-0">
                            <label htmlFor="shipping-4" className="w-100">
                              <div className="d-flex align-items-center p-2 rounded gap-2 border">
                                <div className="d-flex align-items-center gap-2">
                                  <div className="rounded-3 bg-light avatar-md d-flex align-items-center justify-content-center">
                                    <iconify-icon
                                      icon="solar:box-bold-duotone"
                                      className="fs-36 text-warning"
                                    ></iconify-icon>
                                  </div>
                                  <div>
                                    <h5 className="text-dark fw-medium">
                                      Our Courier Services
                                    </h5>
                                    <p className="mb-0 text-dark">
                                      Delivery -
                                      <span className="text-muted fw-normal">
                                        25 Apr 2024
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="ms-auto">
                                  <p className="mb-2">$0.00</p>
                                  <input
                                    className="form-check-input float-end"
                                    type="radio"
                                    name="shipping"
                                    id="shipping-4"
                                    defaultChecked
                                  />
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="row">
                    <div className="col-lg-3">
                      <h4 className="card-title">Payment Method</h4>
                    </div>
                    <div className="col-lg-9">
                      <div className="card border-0">
                        <div className="accordion" id="accordionExample">
                          <div className="card">
                            <div className="card-header p-0" id="pay-pal">
                              <h2 className="mb-0">
                                <button
                                  className="btn btn-light w-100 collapsed rounded-0 border-bottom rounded-top-1"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  <div className="d-flex align-items-center justify-content-between">
                                    <span className="fs-5">Paypal</span>
                                    <img
                                      src="/assets/images/card/paypal.svg"
                                      alt=""
                                      className="avatar-sm"
                                    />
                                  </div>
                                </button>
                              </h2>
                              <p className="p-3 mb-0">
                                Safe Payment Online Credit card needed. PayPal
                                account is not necessary
                              </p>
                            </div>
                            <div
                              id="collapseTwo"
                              className="collapse"
                              aria-labelledby="pay-pal"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="card-body">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Paypal email"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="card mb-0">
                            <div className="card-header p-0">
                              <h2 className="mb-0">
                                <button
                                  className="btn btn-light w-100 collapsed rounded-0 border-bottom rounded-top-1"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  <div className="d-flex align-items-center justify-content-between">
                                    <span className="fs-5">Credit card</span>
                                    <div className="icons text-end">
                                      <img
                                        src="/assets/images/card/mastercard.svg"
                                        alt=""
                                        className="avatar-sm"
                                      />
                                      <img
                                        src="/assets/images/card/stripe.svg"
                                        alt=""
                                        className="avatar-sm"
                                      />
                                      <img
                                        src="/assets/images/card/visa.svg"
                                        alt=""
                                        className="avatar-sm"
                                      />
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <p className="p-3 mb-0">
                                Safe Money Transfer using your bank account.
                                Visa , Master Card ,Discover , American Express
                              </p>
                            </div>
                            <div
                              id="collapseOne"
                              className="collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="p-3">
                                <form>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="card-number"
                                      className="form-label"
                                    >
                                      Card Number
                                    </label>
                                    <input
                                      type="number"
                                      id="card-number"
                                      name="card-number"
                                      className="form-control"
                                      placeholder="0000 0000 0000 0000"
                                      max="16"
                                      maxLength="16"
                                      required
                                    />
                                  </div>
                                </form>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="ex-date"
                                        className="form-label"
                                      >
                                        Expiry Date
                                      </label>
                                      <input
                                        type="text"
                                        id="ex-date"
                                        className="form-control flatpickr-input"
                                        placeholder="dd-mm-yyyy"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="card-cvv"
                                        className="form-label"
                                      >
                                        CVC/CVV
                                      </label>
                                      <input
                                        type="number"
                                        id="card-cvv"
                                        name="card-cvv"
                                        className="form-control"
                                        placeholder="000"
                                        min="0"
                                        max="3"
                                        maxLength="3"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="alert alert-success mb-0 d-flex align-items-center gap-2"
                                  role="alert"
                                >
                                  <iconify-icon
                                    icon="solar:shield-check-bold"
                                    className="fs-28 align-middle"
                                  ></iconify-icon>
                                  We adhere entirely to the data security
                                  standards of the payment card industry.
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
                        defaultValue=""
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
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="rounded bg-light avatar d-flex align-items-center justify-content-center">
                      <img
                        src="/assets/images/product/p-1.png"
                        alt=""
                        className="avatar"
                      />
                    </div>
                    <div>
                      <Link to="#!" className="text-dark fw-medium fs-15">
                        Men Black Slim Fit T-shirt
                      </Link>
                      <p className="text-muted mb-0 mt-1 fs-13">
                        <span>Size : </span>M
                      </p>
                    </div>
                    <div className="ms-auto text-end">
                      <p className="text-dark fw-medium mb-1">$83.00</p>
                      <p className="mb-0">Q. 01</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="rounded bg-light avatar d-flex align-items-center justify-content-center">
                      <img
                        src="/assets/images/product/p-5.png"
                        alt=""
                        className="avatar"
                      />
                    </div>
                    <div>
                      <Link to="#!" className="text-dark fw-medium fs-15">
                        Dark Green Cargo Pent
                      </Link>
                      <p className="text-muted mb-0 mt-1 fs-13">
                        <span>Size : </span>M
                      </p>
                    </div>
                    <div className="ms-auto text-end">
                      <p className="text-dark fw-medium mb-1">$334.00</p>
                      <p className="mb-0">Q. 03</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="rounded bg-light avatar d-flex align-items-center justify-content-center">
                      <img
                        src="/assets/images/product/p-8.png"
                        alt=""
                        className="avatar"
                      />
                    </div>
                    <div>
                      <Link to="#!" className="text-dark fw-medium fs-15">
                        Men Dark Brown Wallet
                      </Link>
                      <p className="text-muted mb-0 mt-1 fs-13">
                        <span>Size : </span>S
                      </p>
                    </div>
                    <div className="ms-auto text-end">
                      <p className="text-dark fw-medium mb-1">$137.00</p>
                      <p className="mb-0">Q. 01</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="rounded bg-light avatar d-flex align-items-center justify-content-center">
                      <img
                        src="/assets/images/product/p-10.png"
                        alt=""
                        className="avatar"
                      />
                    </div>
                    <div>
                      <Link to="#!" className="text-dark fw-medium fs-15">
                        Kid's Yellow T-shirt
                      </Link>
                      <p className="text-muted mb-0 mt-1 fs-13">
                        <span>Size : </span>S
                      </p>
                    </div>
                    <div className="ms-auto text-end">
                      <p className="text-dark fw-medium mb-1">$223.00</p>
                      <p className="mb-0">Q. 02</p>
                    </div>
                  </div>
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
              <div className="card-footer bg-light-subtle">
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
              <Link to="/order-cart" className="btn btn-danger">
                Back To Cart
              </Link>
              <Link
                to="#!"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#checkoutModal"
              >
                Checkout Order
              </Link>
            </div>
            <div data-bs-theme="dark">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex gap-3">
                    <div className="rounded-3 bg-light flex-shrink-0 avatar d-flex align-items-center justify-content-center">
                      <iconify-icon
                        icon="solar:box-bold-duotone"
                        className="fs-36 text-warning"
                      ></iconify-icon>
                    </div>
                    <div>
                      <h5 className="text-white fw-medium mb-1">
                        Streaming box shipping information
                      </h5>
                      <p className="text-white-50 mb-0">
                        Below your selected items, enter your zip code to
                        calculate the shipping charge. We like to make shipping
                        simple and affordable!
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-4">
                    <div className="rounded-3 bg-light flex-shrink-0 avatar d-flex align-items-center justify-content-center">
                      <iconify-icon
                        icon="solar:wallet-money-bold-duotone"
                        className="fs-36 text-success"
                      ></iconify-icon>
                    </div>
                    <div>
                      <h5 className="text-white fw-medium mb-1">
                        30 Day money back guarantee
                      </h5>
                      <p className="text-white-50 mb-0">
                        Money Return In 30 day In Your Bank Account
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="checkoutModal"
          tabIndex="-1"
          aria-labelledby="checkoutModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="card border-0 mb-0">
                  <div className="card-body">
                    <form className="">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="check-icon text-center">
                            <img
                              src="/assets/images/party.png"
                              alt=""
                              className="img-fluid"
                            />
                            <h4 className="fw-semibold mt-3">Thank You !</h4>
                            <p className="mb-1">
                              Your Transaction Was Successful
                            </p>
                            <p>
                              <span className="text-dark fw-medium">
                                Order Id
                              </span>{" "}
                              : #0758267/90
                            </p>
                          </div>
                          <hr />
                          <div className="row justify-content-between">
                            <div className="col-lg-4 col-6">
                              <span className="fw-semibold text-muted fs-14">
                                Date
                              </span>
                              <p className="text-dark fw-medium mt-1">
                                23 April, 2024
                              </p>
                            </div>
                            <div className="col-lg-4 col-6 text-end">
                              <span className="fw-semibold text-muted fs-14">
                                Time
                              </span>
                              <p className="text-dark fw-medium">11:28 AM</p>
                            </div>
                          </div>
                          <div className="row justify-content-between mt-3 align-items-center">
                            <div className="col-lg-6 col-6">
                              <span className="fw-semibold text-muted fs-14">
                                To
                              </span>
                              <p className="text-dark fw-medium mb-0 mt-1">
                                Gaston Lapierre
                              </p>
                              <p className="mb-0">hello@dundermuffilin.com</p>
                            </div>
                            <div className="col-lg-4 col-6 text-end">
                              <img
                                src="/assets/images/users/avatar-1.jpg"
                                alt=""
                                className="avatar rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="row justify-content-between mt-3 align-items-center">
                            <div className="col-lg-6 col-6">
                              <span className="fw-semibold text-muted fs-14">
                                Amount
                              </span>
                              <h5 className="fw-medium mt-1">$737.00</h5>
                            </div>
                            <div className="col-lg-4 col-6 text-end">
                              <span className="text-success fw-semibold">
                                Completed{" "}
                                <i className="bx bx-check-circle align-middle"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div data-bs-theme="dark">
                    <div className="card-footer d-flex align-items-center border-0 bg-body gap-3 rounded">
                      <div className="rounded-3 avatar bg-light d-flex align-items-center justify-content-center">
                        <img
                          src="/assets/images/card/mastercard.svg"
                          alt=""
                          className="avatar-sm"
                        />
                      </div>
                      <div className="d-block">
                        <p className="text-white fw-semibold mb-0">
                          Credit/Debit Card
                        </p>
                        <p className="mb-0 text-white-50">
                          <span>Master Card ending **** 7812</span>
                        </p>
                      </div>
                      <div className="ms-auto">
                        <Link
                          to="#!"
                          className="text-primary fs-30"
                          data-bs-toggle="tooltip"
                          data-bs-title="Download Invoice"
                          data-bs-placement="bottom"
                        >
                          <iconify-icon
                            icon="solar:download-square-bold"
                            className="align-middle"
                          ></iconify-icon>
                        </Link>
                      </div>
                    </div>
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

export default CheckOut;
