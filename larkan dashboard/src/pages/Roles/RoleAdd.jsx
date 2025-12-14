import React from "react";
import Footer from "../../components/Footer";

const RoleAdd = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Roles Information</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="roles-name" className="form-label">
                          Roles Name
                        </label>
                        <input
                          type="text"
                          id="roles-name"
                          className="form-control"
                          placeholder="Role name"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="workspace" className="form-label">
                          Add Workspace
                        </label>
                        <select
                          className="form-control"
                          id="workspace"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Workspace"
                        >
                          <option value="Select Workspace"></option>
                          <option value="Facebook">Facebook</option>
                          <option value="Slack">Slack</option>
                          <option value="Zoom">Zoom</option>
                          <option value="Analytics">Analytics</option>
                          <option value="Meet">Meet</option>
                          <option value="Mail">Mail</option>
                          <option value="Strip">Strip</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="role-tag" className="form-label">
                        Tag
                      </label>
                      <select
                        className="form-control"
                        id="choices-multiple-remove-button"
                        data-choices
                        // data-choices-removeItem
                        name="choices-multiple-remove-button"
                        multiple
                      >
                        <option value="Manager">Manager</option>
                        <option value="Product">Product</option>
                        <option value="Data">Data</option>
                        <option value="Designer">Designer</option>
                        <option value="Supporter">Supporter</option>
                        <option value="System Design">System Design</option>
                        <option value="QA">QA</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="user-name" className="form-label">
                        User Name
                      </label>
                      <input
                        type="text"
                        id="user-name"
                        className="form-control"
                        placeholder="Enter name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <p>User Status</p>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Active
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          In Active
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top">
                <a href="#!" className="btn btn-primary">
                  Create Roles
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RoleAdd;
