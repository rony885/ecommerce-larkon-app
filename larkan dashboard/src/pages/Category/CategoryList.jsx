import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

import axios from "axios";
import { useApiContext } from "../../context/ApiContext";

const CategoryList = () => {
  // data fetching
  const { category, fetchCategory } = useApiContext();

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);

  const [receivedId, setReceivedId] = useState(null);

  // delete
  const getId = (id) => {
    setReceivedId(id);
  };

  const deleteService = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/product_api/category/${id}/`
    );
    window.location.reload(false);
  };

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                <h4 className="card-title flex-grow-1 fs-4">
                  <Link to="/" data-discover="true">
                    Dashboard
                  </Link>{" "}
                  | Category List
                </h4>

                <Link
                  to="/category-add"
                  className="btn btn-sm btn-primary fs-4"
                  data-discover="true"
                >
                  Category Add
                </Link>
              </div>
              <div>
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
                        <th>Id</th>
                        <th>Image</th>
                        <th>Category Name</th>
                        <th>Status</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {category &&
                        category.map((item, index) => {
                          return (
                            <tr key={index}>
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
                              <td>{index + 1}</td>
                              <td>
                                <div className="d-flex align-items-center gap-2">
                                  <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                                    <img
                                      src={item.image}
                                      alt="ImageNotFound"
                                      className="avatar-md"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td>{item.name}</td>
                              {/* <td>
                                {item.status === true ? "Active" : "Inactive"}
                              </td> */}
                              <td>
                                {item.status ? (
                                  <span className="badge bg-success">
                                    Active
                                  </span>
                                ) : (
                                  <span className="badge bg-danger">
                                    Inactive
                                  </span>
                                )}
                              </td>

                              <td className="text-center">
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                  <Tooltip title="View" arrow>
                                    <Link
                                      to="#!"
                                      className="btn btn-light btn-sm d-flex align-items-center justify-content-center"
                                    >
                                      <iconify-icon
                                        icon="solar:eye-broken"
                                        className="align-middle fs-18"
                                      ></iconify-icon>
                                    </Link>
                                  </Tooltip>

                                  <Tooltip title="Edit" arrow>
                                    <Link
                                      to={`/category-edit/${item.id}`}
                                      className="btn btn-soft-primary btn-sm d-flex align-items-center justify-content-center"
                                    >
                                      <iconify-icon
                                        icon="solar:pen-2-broken"
                                        className="align-middle fs-18"
                                      ></iconify-icon>
                                    </Link>
                                  </Tooltip>

                                  <Tooltip title="Delete" arrow>
                                    <button
                                      className="btn btn-soft-danger btn-sm d-flex align-items-center justify-content-center"
                                      type="button"
                                      data-bs-toggle="modal"
                                      data-bs-target="#deleteModal"
                                      onClick={() => getId(item.id)}
                                    >
                                      <iconify-icon
                                        icon="solar:trash-bin-minimalistic-2-broken"
                                        className="align-middle fs-18"
                                      ></iconify-icon>
                                    </button>
                                  </Tooltip>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer border-top">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end mb-0">
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        Previous
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* ========= Delete Modal ========= */}
            <div
              className="modal fade"
              id="deleteModal"
              tabIndex="-1"
              aria-labelledby="deleteModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="deleteModalLabel">
                      Delete Modal
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="modal-body d-flex flex-column justify-content-center align-items-center text-center">
                    <iconify-icon
                      icon="solar:trash-bin-minimalistic-bold-duotone"
                      className="fs-1 text-danger mb-3"
                    ></iconify-icon>
                    <p className="mb-0">
                      Are you sure you want to delete this item?
                    </p>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-light"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteService(receivedId)}
                    >
                      Delete
                    </button>
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

export default CategoryList;
