import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";
import { useApiContext } from "../../context/ApiContext";

const initialValues = {
  name: "",
  status: "",
};

const schema = yup.object().shape({
  name: yup.string().required("Brand name is a required field!"),
  status: yup.boolean(),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const Brand = () => {
  // data fetching
  const { brand, fetchBrand } = useApiContext();
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [receivedId, setReceivedId] = useState(null);

  useEffect(() => {
    fetchBrand();
  }, [fetchBrand]);

  // ====== add ======
  const AddBrandFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status);
    formfield.append("name", values.name);

    if (values.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/product_api/brand/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Brand is successfuly created...");
        navigate("/brand");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitAddBrandForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      setSubmitting(true);
      await AddBrandFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  // ====== update ======
  const updatedValues = {
    name: item.name ? item.name : "",
    status: item.status ? item.status : "",
  };

  const UpdateBrandFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("name", values.name);
    formfield.append("status", values.status);

    await axios({
      method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/product_api/brand/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(
          response.success,
          "Product brand is successfully updated..."
        );
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateBrandForm = async (
    values,
    { setErrors, setSubmitting }
  ) => {
    try {
      UpdateBrandFunc(values);
      setSubmitting(false);
    } catch (error) {
      setErrors({ err: error.message });
    }
  };

  const updateBrand = async (id) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product_api/brand/${id}/`
    );
    setItem(data);
  };

  // ====== delete ======
  const getId = (id) => {
    setReceivedId(id);
  };

  const deleteBrand = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/product_api/brand/${id}/`
    );
    window.location.reload(false);
  };

  return (
    <Wrapper>
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
                    | Brand
                  </h4>

                  <Link
                    // to="/brand-add"
                    className="btn btn-sm btn-primary fs-4"
                    data-discover="true"
                    data-bs-toggle="modal"
                    data-bs-target="#eexampleModalCenteredScrollable"
                  >
                    Brand Add
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
                          <th>Name</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {brand &&
                          brand.map((item, index) => {
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
                                <td>{item.name}</td>
                                <td>
                                  {item.status === true ? "Active" : "Inactive"}
                                </td>
                                <td>
                                  <div className="d-flex gap-2">
                                    <Tooltip title="view" arrow>
                                      <Link
                                        to="#!"
                                        className="btn btn-light btn-sm"
                                      >
                                        <iconify-icon
                                          icon="solar:eye-broken"
                                          className="align-middle fs-18"
                                        ></iconify-icon>
                                      </Link>
                                    </Tooltip>

                                    <Tooltip title="Edit" arrow>
                                      <button
                                        className="btn btn-soft-primary btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModalCenteredScrollable"
                                        onClick={() => updateBrand(item.id)}
                                      >
                                        <iconify-icon
                                          icon="solar:pen-2-broken"
                                          className="align-middle fs-18"
                                        ></iconify-icon>
                                      </button>
                                    </Tooltip>

                                    <Tooltip title="Delete" arrow>
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

              {/* ========= Add Modal ========= */}
              <div
                className="modal fade"
                id="eexampleModalCenteredScrollable"
                readOnly="-1"
                aria-labelledby="exampleModalCenteredScrollableTitle"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title"
                        id="exampleModalCenteredScrollableTitle"
                      >
                        Brand Add
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="card-body">
                        <Formik
                          initialValues={initialValues}
                          validationSchema={schema}
                          onSubmit={submitAddBrandForm}
                          validate={validate}
                        >
                          {({
                            handleSubmit,
                            handleChange,
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            setFieldValue,
                          }) => (
                            <FormikForm
                              noValidate
                              onSubmit={(e) => handleSubmit(e)}
                            >
                              <div className="row">
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Brand Name
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.name && !!errors.name
                                        }
                                        isValid={touched.name && !errors.name}
                                        className="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Status<span></span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Select
                                        name="status"
                                        id="status"
                                        value={values.status}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.status && !!errors.status
                                        }
                                        isValid={
                                          touched.status && !errors.status
                                        }
                                        className="form-control mb-0"
                                      >
                                        <option value="">Select</option>
                                        <option value={`${true}`}>
                                          Active
                                        </option>
                                        <option value={`${false}`}>
                                          Inactive
                                        </option>
                                      </Form.Select>
                                      <Form.Control.Feedback type="invalid">
                                        {errors.status}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                  disabled={isSubmitting}
                                >
                                  {isSubmitting ? "Submitting..." : "Brand Add"}
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                              </div>
                              {/* message  */}
                              {message && (
                                <h2 className="text-center m-5">{message}</h2>
                              )}
                            </FormikForm>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========= Edit Modal ========= */}
              <div
                className="modal fade"
                id="exampleModalCenteredScrollable"
                readOnly="-1"
                aria-labelledby="exampleModalCenteredScrollableTitle"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title"
                        id="exampleModalCenteredScrollableTitle"
                      >
                        Brand Edit
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="card-body">
                        <Formik
                          enableReinitialize={true}
                          initialValues={updatedValues}
                          validationSchema={schema}
                          onSubmit={submitUpdateBrandForm}
                          validate={validate}
                        >
                          {({
                            handleSubmit,
                            handleChange,
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            setFieldValue,
                          }) => (
                            <FormikForm
                              noValidate
                              onSubmit={(e) => handleSubmit(e)}
                            >
                              <div className="row">
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Brand Name
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.name && !!errors.name
                                        }
                                        isValid={touched.name && !errors.name}
                                        className="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Status<span></span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Select
                                        name="status"
                                        id="status"
                                        value={values.status}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.status && !!errors.status
                                        }
                                        isValid={
                                          touched.status && !errors.status
                                        }
                                        className="form-control mb-0"
                                      >
                                        <option value="">Select</option>
                                        <option value={`${true}`}>
                                          Active
                                        </option>
                                        <option value={`${false}`}>
                                          Inactive
                                        </option>
                                      </Form.Select>
                                      <Form.Control.Feedback type="invalid">
                                        {errors.status}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                              </div>

                              <div className="modal-footer">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                  disabled={isSubmitting}
                                >
                                  {isSubmitting
                                    ? "Submitting..."
                                    : "Update Brand"}
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                              </div>
                              {/* message  */}
                              {message && (
                                <h2 className="text-center m-5">{message}</h2>
                              )}
                            </FormikForm>
                          )}
                        </Formik>
                      </div>
                    </div>

                    {/* <div className="modal-footer">
                      <button type="button" className="btn btn-primary">
                        Brand Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div> */}
                  </div>
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
                        onClick={() => deleteBrand(receivedId)}
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .modal {
    --bs-modal-footer-border-color: transparent;
  }
`;

export default Brand;
