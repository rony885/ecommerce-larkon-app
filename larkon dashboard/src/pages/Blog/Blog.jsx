import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import axios from "axios";
import { useApiContext } from "../../context/ApiContext";

const Blog = () => {
  // data fetching
  const { blog, fetchBlog } = useApiContext();

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  const [receivedId, setReceivedId] = useState(null);

  // delete
  const getId = (id) => {
    setReceivedId(id);
  };

  const deleteService = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/blog_api/blog/${id}/`
    );
    window.location.reload(false);
  };

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="rounded bg-secondary-subtle d-flex align-items-center justify-content-center mx-auto">
                  <img
                    src="/assets/images/product/p-1.png"
                    alt=""
                    className="avatar-xl"
                  />
                </div>
                <h4 className="mt-3 mb-0">Fashion Categories</h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="rounded bg-primary-subtle d-flex align-items-center justify-content-center mx-auto">
                  <img
                    src="/assets/images/product/p-6.png"
                    alt=""
                    className="avatar-xl"
                  />
                </div>
                <h4 className="mt-3 mb-0">Electronics Headphone</h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="rounded bg-warning-subtle d-flex align-items-center justify-content-center mx-auto">
                  <img
                    src="/assets/images/product/p-7.png"
                    alt=""
                    className="avatar-xl"
                  />
                </div>
                <h4 className="mt-3 mb-0">Foot Wares</h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="rounded bg-info-subtle d-flex align-items-center justify-content-center mx-auto">
                  <img
                    src="/assets/images/product/p-9.png"
                    alt=""
                    className="avatar-xl"
                  />
                </div>
                <h4 className="mt-3 mb-0">Eye Ware & Sunglass</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                <h4 className="card-title flex-grow-1 fs-4">
                  <Link to="/" data-discover="true">
                    Dashboard
                  </Link>{" "}
                  | Blog
                </h4>
                <Link to="/add-blog" className="btn btn-sm btn-primary fs-4">
                  Blog Add
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
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {/* {blog?.results?.map((item, index) => ( */}
                      {blog.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id={`customCheck${index}`}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`customCheck${index}`}
                              ></label>
                            </div>
                          </td>

                          <td>{item.id}</td>

                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="avatar-md"
                                />
                              </div>
                            </div>
                          </td>

                          <td> {item.title}</td>
                          <td>
                            {item.status === true ? "Active" : "InaAtive"}
                          </td>
                          {/* <td>{item.description.slice(0, 50)...}</td> */}
                          <td>
                            {item.description
                              ? item.description.length > 50
                                ? `${item.description.slice(0, 50)}...`
                                : item.description
                              : "No Description"}
                          </td>

                          <td>
                            <div className="d-flex gap-2">
                              <Link to="#!" className="btn btn-light btn-sm">
                                <iconify-icon
                                  icon="solar:eye-broken"
                                  className="align-middle fs-18"
                                ></iconify-icon>
                              </Link>
                              <Link
                                to={`/blog-edit/${item.id}`}
                                className="btn btn-soft-primary btn-sm"
                              >
                                <iconify-icon
                                  icon="solar:pen-2-broken"
                                  className="align-middle fs-18"
                                ></iconify-icon>
                              </Link>
                              <button
                                className="btn btn-soft-danger btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteModal"
                                type="button"
                                onClick={() => getId(item.id)}
                              >
                                <iconify-icon
                                  icon="solar:trash-bin-minimalistic-2-broken"
                                  className="align-middle fs-18"
                                ></iconify-icon>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* <!-- end table-responsive --> */}
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

              {/* ========== Modal ==========*/}
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
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
