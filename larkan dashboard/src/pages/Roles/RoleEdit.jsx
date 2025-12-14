import React from "react";
import Footer from "../../components/Footer";

const RoleEdit = () => {
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
                          defaultValue="Workspace Manager"
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
                          <option defaultValue="">Facebook</option>
                          <option defaultValue="Slack">Slack</option>
                          <option defaultValue="Zoom">Zoom</option>
                          <option defaultValue="Analytics">Analytics</option>
                          <option defaultValue="Meet">Meet</option>
                          <option defaultValue="Mail">Mail</option>
                          <option defaultValue="Strip">Strip</option>
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
                        <option defaultValue="Manager" select="true">
                          Manager
                        </option>
                        <option defaultValue="Product">Product</option>
                        <option defaultValue="Data" select="true"
                        >
                          Data
                        </option>
                        <option defaultValue="Designer">Designer</option>
                        <option defaultValue="Supporter">Supporter</option>
                        <option defaultValue="System Design">System Design</option>
                        <option defaultValue="QA">QA</option>
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
                        defaultValue="Gaston Lapierre "
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
                  Save Change
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

export default RoleEdit;
