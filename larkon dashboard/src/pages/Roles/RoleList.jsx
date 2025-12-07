/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../../components/Footer";

const RoleList = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="card overflow-hiddenCoupons">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table align-middle mb-0 table-hover table-centered">
                <thead className="bg-light-subtle">
                  <tr>
                    <th>Role</th>
                    <th>Workspace</th>
                    <th>Tags</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Workspace Manager</td>
                    <td>
                      <img
                        src="assets/images/app-calendar/facebook.png"
                        className="avatar-xs rounded-circle me-1"
                        alt="..."
                      />
                      Facebook
                    </td>
                    <td>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        Manager
                      </span>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        Product
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <div className="avatar">
                          <img
                            src="assets/images/users/avatar-4.jpg"
                            alt=""
                            className="rounded-circle avatar-sm"
                          />
                        </div>
                        <div className="avatar">
                          <span className="avatar-sm d-flex align-items-center justify-content-center bg-danger-subtle text-danger rounded-circle fw-bold shadow">
                            P
                          </span>
                        </div>
                        <div className="avatar">
                          <img
                            src="assets/images/users/avatar-3.jpg"
                            alt=""
                            className="rounded-circle avatar-sm"
                          />
                        </div>
                        <div className="avatar">
                          <img
                            src="assets/images/users/avatar-6.jpg"
                            alt=""
                            className="rounded-circle avatar-sm"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked1"
                          defaultChecked
                        />
                      </div>
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
                          href="role-edit.html"
                          className="btn btn-soft-primary btn-sm"
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
                    <td>Product Owner</td>
                    <td>
                      <img
                        src="assets/images/app-calendar/slack.png"
                        className="avatar-xs rounded-circle me-1"
                        alt="..."
                      />
                      Slack
                    </td>
                    <td>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        Manager
                      </span>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        Product
                      </span>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        Data
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <div className="avatar">
                          <img
                            src="assets/images/users/avatar-6.jpg"
                            alt=""
                            className="rounded-circle avatar-sm"
                          />
                        </div>
                        <div className="avatar">
                          <img
                            src="assets/images/users/avatar-7.jpg"
                            alt=""
                            className="rounded-circle avatar-sm"
                          />
                        </div>
                        <div className="avatar">
                          <span className="avatar-sm d-flex align-items-center justify-content-center bg-info-subtle text-info rounded-circle fw-bold shadow">
                            +12
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked4"
                        />
                      </div>
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
                          href="role-edit.html"
                          className="btn btn-soft-primary btn-sm"
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
                    <td>Product Designer</td>
                    <td>
                      <img
                        src="assets/images/app-calendar/zoom.png"
                        className="avatar-xs rounded-circle me-1"
                        alt="..."
                      />
                      Zoom
                    </td>
                    <td>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        Designer
                      </span>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        Data
                      </span>
                    </td>
                    <td>
                      <div className="avatar">
                        <img
                          src="assets/images/users/avatar-10.jpg"
                          alt=""
                          className="rounded-circle avatar-sm"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked2"
                          defaultChecked
                        />
                      </div>
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
                          href="role-edit.html"
                          className="btn btn-soft-primary btn-sm"
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
                    <td>Data Analyst</td>
                    <td>
                      <img
                        src="assets/images/app-calendar/google-analytics.png"
                        className="avatar-xs rounded-circle me-1"
                        alt="..."
                      />
                      Analytics
                    </td>
                    <td>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        Data
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <div className="avatar">
                          <img
                            src="assets/images/users/avatar-10.jpg"
                            alt=""
                            className="rounded-circle avatar-sm"
                          />
                        </div>
                        <div className="avatar">
                          <img
                            src="assets/images/users/avatar-11.jpg"
                            alt=""
                            className="rounded-circle avatar-sm"
                          />
                        </div>
                        <div className="avatar">
                          <img
                            src="assets/images/users/avatar-12.jpg"
                            alt=""
                            className="rounded-circle avatar-sm"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked4"
                        />
                      </div>
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
                          href="role-edit.html"
                          className="btn btn-soft-primary btn-sm"
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
                    <td>Tech Lead</td>
                    <td>
                      <a href="#!" className="link-primary">
                        + Add Workspace
                      </a>
                    </td>
                    <td>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        Product
                      </span>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        Data
                      </span>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        Supporter
                      </span>
                    </td>
                    <td>
                      <a href="#!" className="link-primary">
                        + Add User
                      </a>
                    </td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked4"
                        />
                      </div>
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
                          href="role-edit.html"
                          className="btn btn-soft-primary btn-sm"
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
                    <td>Product Manager</td>
                    <td>
                      <img
                        src="assets/images/app-calendar/google-meet.png"
                        className="avatar-xs rounded-circle me-1"
                        alt="..."
                      />
                      Meet
                    </td>
                    <td>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        System Design
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <div className="avatar">
                          <span className="avatar-sm d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-circle fw-bold shadow">
                            A
                          </span>
                        </div>
                        <div className="avatar">
                          <span className="avatar-sm d-flex align-items-center justify-content-center bg-info-subtle text-info rounded-circle fw-bold shadow">
                            J
                          </span>
                        </div>
                        <div className="avatar">
                          <span className="avatar-sm d-flex align-items-center justify-content-center bg-warning-subtle text-warning rounded-circle fw-bold shadow">
                            K
                          </span>
                        </div>
                        <div className="avatar">
                          <span className="avatar-sm d-flex align-items-center justify-content-center bg-dark text-white rounded-circle fw-bold shadow">
                            +17
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked3"
                          defaultChecked
                        />
                      </div>
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
                          href="role-edit.html"
                          className="btn btn-soft-primary btn-sm"
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
                    <td>Chief Product Owner</td>
                    <td>
                      <img
                        src="assets/images/app-calendar/google-mail.png"
                        className="avatar-xs rounded-circle me-1"
                        alt="..."
                      />
                      Mail
                    </td>
                    <td>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        Manager
                      </span>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        Product
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <div className="avatar">
                          <img
                            src="assets/images/users/avatar-2.jpg"
                            alt=""
                            className="rounded-circle avatar-sm"
                          />
                        </div>
                        <div className="avatar">
                          <img
                            src="assets/images/users/avatar-12.jpg"
                            alt=""
                            className="rounded-circle avatar-sm"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked4"
                          defaultChecked
                        />
                      </div>
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
                          href="role-edit.html"
                          className="btn btn-soft-primary btn-sm"
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
                    <td>Support Team Head</td>
                    <td>
                      <img
                        src="assets/images/app-calendar/stripe.png"
                        className="avatar-xs rounded-circle me-1"
                        alt="..."
                      />
                      Strip
                    </td>
                    <td>
                      <span className="badge bg-light-subtle text-muted border py-1 px-2">
                        QA
                      </span>
                    </td>
                    <td>
                      <div className="avatar">
                        <span className="avatar-sm d-flex align-items-center justify-content-center bg-warning-subtle text-warning rounded-circle fw-bold shadow">
                          K
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked5"
                        />
                      </div>
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
                          href="role-edit.html"
                          className="btn btn-soft-primary btn-sm"
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
          <div className="row g-0 align-items-center justify-content-between text-center text-sm-start p-3 border-top">
            <div className="col-sm">
              <div className="text-muted">
                Showing <span className="fw-semibold">10</span> of
                <span className="fw-semibold">59</span> Results
              </div>
            </div>
            <div className="col-sm-auto mt-3 mt-sm-0">
              <ul className="pagination m-0">
                <li className="page-item">
                  <a href="#" className="page-link">
                    <i className="bx bx-left-arrow-alt"></i>
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RoleList;
