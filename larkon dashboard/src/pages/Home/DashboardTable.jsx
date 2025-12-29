import React from "react";
import { Link } from "react-router-dom";

const DashboardTable = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="card-title">Recent Orders</h4>

              <Link to="#!" className="btn btn-sm btn-soft-primary">
                <i className="bx bx-plus me-1"></i>Create Order
              </Link>
            </div>
          </div>
          {/* <!-- end card body --> */}
          <div className="table-responsive table-centered">
            <table className="table mb-0">
              <thead className="bg-light bg-opacity-50">
                <tr>
                  <th className="ps-3">Order ID.</th>
                  <th>Date</th>
                  <th>Product</th>
                  <th>Customer Name</th>
                  <th>Email ID</th>
                  <th>Phone No.</th>
                  <th>Address</th>
                  <th>Payment Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              {/* <!-- end thead--> */}
              <tbody>
                <tr>
                  <td className="ps-3">
                    <Link to="/order-detail">#RB5625</Link>
                  </td>
                  <td>29 April 2024</td>
                  <td>
                    <img
                      src="/assets/images/products/product-1(1).png"
                      alt="product-1(1)"
                      className="img-fluid avatar-sm"
                    />
                  </td>
                  <td>
                    <Link to="#!">Anna M. Hines</Link>
                  </td>
                  <td>anna.hines@mail.com</td>
                  <td>(+1)-555-1564-261</td>
                  <td>Burr Ridge/Illinois</td>
                  <td>Credit Card</td>
                  <td>
                    <i className="bx bxs-circle text-success me-1"></i>
                    Completed
                  </td>
                </tr>
                <tr>
                  <td className="ps-3">
                    <Link to="/order-detail">#RB9652</Link>
                  </td>
                  <td>25 April 2024</td>
                  <td>
                    <img
                      src="/assets/images/products/product-4.png"
                      alt="product-4"
                      className="img-fluid avatar-sm"
                    />
                  </td>
                  <td>
                    <Link to="#!">Judith H. Fritsche</Link>
                  </td>
                  <td>judith.fritsche.com</td>
                  <td>(+57)-305-5579-759</td>
                  <td>SULLIVAN/Kentucky</td>
                  <td>Credit Card</td>
                  <td>
                    <i className="bx bxs-circle text-success me-1"></i>
                    Completed
                  </td>
                </tr>
                <tr>
                  <td className="ps-3">
                    <Link to="/order-detail">#RB5984</Link>
                  </td>
                  <td>25 April 2024</td>
                  <td>
                    <img
                      src="/assets/images/products/product-5.png"
                      alt="product-5"
                      className="img-fluid avatar-sm"
                    />
                  </td>
                  <td>
                    <Link to="#!">Peter T. Smith</Link>
                  </td>
                  <td>peter.smith@mail.com</td>
                  <td>(+33)-655-5187-93</td>
                  <td>Yreka/California</td>
                  <td>Pay Pal</td>
                  <td>
                    <i className="bx bxs-circle text-success me-1"></i>
                    Completed
                  </td>
                </tr>
                <tr>
                  <td className="ps-3">
                    <Link to="/order-detail">#RB3625</Link>
                  </td>
                  <td>21 April 2024</td>
                  <td>
                    <img
                      src="/assets/images/products/product-6.png"
                      alt="product-6"
                      className="img-fluid avatar-sm"
                    />
                  </td>
                  <td>
                    <Link to="#!">Emmanuel J. Delcid</Link>
                  </td>
                  <td>emmanuel.delicid@mail.com</td>
                  <td>(+30)-693-5553-637</td>
                  <td>Atlanta/Georgia</td>
                  <td>Pay Pal</td>
                  <td>
                    <i className="bx bxs-circle text-primary me-1"></i>
                    Processing
                  </td>
                </tr>
                <tr>
                  <td className="ps-3">
                    <Link to="/order-detail">#RB8652</Link>
                  </td>
                  <td>18 April 2024</td>
                  <td>
                    <img
                      src="/assets/images/products/product-1(2).png"
                      alt="product-1(2)"
                      className="img-fluid avatar-sm"
                    />
                  </td>
                  <td>
                    <Link to="#!">William J. Cook</Link>
                  </td>
                  <td>william.cook@mail.com</td>
                  <td>(+91)-855-5446-150</td>
                  <td>Rosenberg/Texas</td>
                  <td>Credit Card</td>
                  <td>
                    <i className="bx bxs-circle text-primary me-1"></i>
                    Processing
                  </td>
                </tr>
              </tbody>
              {/* <!-- end tbody --> */}
            </table>
            {/* <!-- end table --> */}
          </div>
          {/* <!-- table responsive --> */}

          <div className="card-footer border-top">
            <div className="row g-3">
              <div className="col-sm">
                <div className="text-muted">
                  Showing
                  <span className="fw-semibold">5</span>
                  of
                  <span className="fw-semibold">90,521</span>
                  orders
                </div>
              </div>

              <div className="col-sm-auto">
                <ul className="pagination m-0">
                  <li className="page-item">
                    <Link to="#" className="page-link">
                      <i className="bx bx-left-arrow-alt"></i>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link to="#" className="page-link">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="#" className="page-link">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="#" className="page-link">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="#" className="page-link">
                      <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end card --> */}
      </div>
      {/* <!-- end col --> */}
    </div>
  );
};

export default DashboardTable;
