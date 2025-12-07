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
  status: "",
  name: "",
  phone: "",
  email: "",
  address: "",
  company_name: "",
  logo: "",
};

const schema = yup.object().shape({
  status: yup.boolean(),
  name: yup.string().required("Supplier name is a required field!"),
  phone: yup.string().required("Phone is a required field!"),
  email: yup.string(),
  address: yup.string().required("Address is a required field!"),
  company_name: yup.string(),
  logo: yup.string(),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const Supplier = () => {
  // data fetching
  const { supplier, fetchSupplier } = useApiContext();

  useEffect(() => {
    fetchSupplier();
  }, [fetchSupplier]);

  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [receivedId, setReceivedId] = useState(null);

  const [showLogo, setShowLogo] = useState(null);
  const onLogoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowLogo(URL.createObjectURL(event.target.files[0]));
    }
  };

  // ====== add ======
  const AddSupplierFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status);
    formfield.append("name", values.name);
    formfield.append("phone", values.phone);
    formfield.append("email", values.email);
    formfield.append("address", values.address);
    formfield.append("company_name", values.company_name);

    if (values.logo) {
      formfield.append("logo", values.logo);
    }

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/settings_api/supplier/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Supplier is successfuly created...");
        navigate("/supplier");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitAddSupplierForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      setSubmitting(true);
      await AddSupplierFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  // ====== update ======
  const updatedValues = {
    status: item.status ? item.status : "",
    name: item.name ? item.name : "",
    phone: item.phone ? item.phone : "",
    email: item.email ? item.email : "",
    address: item.address ? item.address : "",
    company_name: item.company_name ? item.company_name : "",
    logo: item.logo ? item.logo : "",
  };

  const UpdateSupplierFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status);
    formfield.append("name", values.name);
    formfield.append("phone", values.phone);
    formfield.append("email", values.email);
    formfield.append("address", values.address);
    formfield.append("company_name", values.company_name);

    if (values.logo !== item.logo) {
      formfield.append("logo", values.logo);
    }

    await axios({
      method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/settings_api/supplier/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Supplier is successfully updated...");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateSupplierForm = async (
    values,
    { setErrors, setSubmitting }
  ) => {
    try {
      UpdateSupplierFunc(values);
      setSubmitting(false);
    } catch (error) {
      setErrors({ err: error.message });
    }
  };

  // === Update Supplier Function ===
  const updateSupplier = async (id) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/settings_api/supplier/${id}/`
    );
    setItem(data);
    setShowLogo(data.logo);
  };

  // === useEffect just for logo preview update ===
  useEffect(() => {
    if (item.logo) {
      setShowLogo(
        item.logo.startsWith("http")
          ? item.logo
          : `${process.env.REACT_APP_BASE_URL}${item.logo}`
      );
    }
  }, [item]);

  // ====== delete ======
  const getId = (id) => {
    setReceivedId(id);
  };

  const deleteSupplier = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/settings_api/supplier/${id}/`
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
                    | Supplier
                  </h4>

                  <Link
                    // to="/supplier-add"
                    className="btn btn-sm btn-primary fs-4"
                    data-discover="true"
                    data-bs-toggle="modal"
                    data-bs-target="#eexampleModalCenteredScrollable"
                  >
                    Supplier Add
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
                          <th>Logo</th>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Company Name</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {supplier &&
                          supplier.map((item, index) => {
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
                                        src={item.logo}
                                        alt="ImageNotFound"
                                        className="avatar-md"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>{item.company_name}</td>
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
                                        onClick={() => updateSupplier(item.id)}
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
                        Supplier Add
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
                          onSubmit={submitAddSupplierForm}
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
                                      Supplier Name
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
                                <div className="col-lg-6">
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
                                <div className="col-lg-6">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Phone
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.phone && !!errors.phone
                                        }
                                        isValid={touched.phone && !errors.phone}
                                        className="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.phone}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                              </div>
                              {/* <div className="row">
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Phone
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.phone && !!errors.phone
                                        }
                                        isValid={touched.phone && !errors.phone}
                                        className="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.phone}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                              </div> */}
                              <div className="row">
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Email
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.email && !!errors.email
                                        }
                                        isValid={touched.email && !errors.email}
                                        className="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Address
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        type="text"
                                        name="address"
                                        id="address"
                                        value={values.address}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.address && !!errors.address
                                        }
                                        isValid={
                                          touched.address && !errors.address
                                        }
                                        className="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.address}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Company Name
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        type="text"
                                        name="company_name"
                                        id="company_name"
                                        value={values.company_name}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.company_name &&
                                          !!errors.company_name
                                        }
                                        isValid={
                                          touched.company_name &&
                                          !errors.company_name
                                        }
                                        className="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.company_name}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Logo<span></span>
                                    </Form.Label>
                                    <Form.Control
                                      type="file"
                                      name="logo"
                                      id="logo"
                                      onChange={(event) => {
                                        setFieldValue(
                                          "logo",
                                          event.currentTarget.files[0]
                                        );
                                        onLogoChange(event);
                                      }}
                                      isInvalid={
                                        !!touched.logo && !!errors.logo
                                      }
                                      isValid={touched.logo && !errors.logo}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.logo}
                                    </Form.Control.Feedback>

                                    {showLogo && (
                                      <div>
                                        <img
                                          alt="product preview img"
                                          style={{
                                            width: "150px",
                                            height: "150px",
                                            marginTop: "20px",
                                            borderRadius: "50%",
                                          }}
                                          src={showLogo}
                                        />
                                      </div>
                                    )}
                                  </Form.Group>
                                </div>
                              </div>

                              <div className="modal-footer">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                  disabled={isSubmitting}
                                >
                                  {isSubmitting
                                    ? "Submitting..."
                                    : "Supplier Add"}
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
                        Supplier Edit
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
                          onSubmit={submitUpdateSupplierForm}
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
                                      Supplier Name
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
                                <div className="col-lg-6">
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

                                <div className="col-lg-6">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Phone
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.phone && !!errors.phone
                                        }
                                        isValid={touched.phone && !errors.phone}
                                        className="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.phone}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                              </div>
                              {/* <div className="row">
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Phone
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.phone && !!errors.phone
                                        }
                                        isValid={touched.phone && !errors.phone}
                                        className="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.phone}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                              </div> */}
                              <div className="row">
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Email
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.email && !!errors.email
                                        }
                                        isValid={touched.email && !errors.email}
                                        className="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Address
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        type="text"
                                        name="address"
                                        id="address"
                                        value={values.address}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.address && !!errors.address
                                        }
                                        isValid={
                                          touched.address && !errors.address
                                        }
                                        className="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.address}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Company Name
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        type="text"
                                        name="company_name"
                                        id="company_name"
                                        value={values.company_name}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.company_name &&
                                          !!errors.company_name
                                        }
                                        isValid={
                                          touched.company_name &&
                                          !errors.company_name
                                        }
                                        className="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.company_name}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      Logo<span></span>
                                    </Form.Label>
                                    <Form.Control
                                      type="file"
                                      name="logo"
                                      id="logo"
                                      onChange={(event) => {
                                        setFieldValue(
                                          "logo",
                                          event.currentTarget.files[0]
                                        );
                                        onLogoChange(event);
                                      }}
                                      isInvalid={
                                        !!touched.logo && !!errors.logo
                                      }
                                      isValid={touched.logo && !errors.logo}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.logo}
                                    </Form.Control.Feedback>

                                    {showLogo && (
                                      <div>
                                        <img
                                          alt="product preview img"
                                          style={{
                                            width: "150px",
                                            height: "150px",
                                            marginTop: "20px",
                                            borderRadius: "50%",
                                          }}
                                          src={showLogo}
                                        />
                                      </div>
                                    )}
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
                                    : "Update Supplier"}
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
                        onClick={() => deleteSupplier(receivedId)}
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

export default Supplier;
