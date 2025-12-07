import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import ImageFiled1 from "../../components/Image/ImageFiled1";
import ImageFiled2 from "../../components/Image/ImageFiled2";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import SelectwithSearch from "../../components/SelectwithSearch/SelectwithSearch";

import Choices from "choices.js";
import "choices.js/public/assets/styles/choices.min.css";

import JoditEditor from "jodit-react";
import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

const initialValues = {
  // Basic Information
  employeeId: "",
  employeeNameEnglish: "",
  employeeNameBangla: "",
  number: "",
  birth: "",
  gender: "",
  identificationType: "",
  identificationNum: "",
  // Professional Information
  business: "",
  designation: "",
  wardNo: "",
  accountType: "",
  supervisorName: "",
  salaryType: "",
  joiningDate: "",
  resignDate: "",
  drivingLicense: "",
  // Personal Information
  fatherName: "",
  motherName: "",
  nationality: "",
  religion: "",
  maritalStatus: "",
  bloodGroup: "",
  // Present Address
  PreAddVillage: "",
  PreAddDivision: "",
  PreAddDistrict: "",
  PreAddUpazila: "",
  PreAddPostCode: "",
  // Permanent Address
  PerAddVillage: "",
  PerAddDivision: "",
  PerAddDistrict: "",
  PerAddUpazila: "",
  PerAddPostCode: "",
  profileImage: "",
  scanImage: "",
};

const schema = yup.object().shape({
  // Basic Information
  employeeId: yup.string().required("Employee Id is a required field!"),
  employeeNameEnglish: yup
    .string()
    .required("Employee Name English is a required field!"),
  employeeNameBangla: yup.string(),
  number: yup.string(),
  birth: yup.string(),
  gender: yup.string(),
  identificationType: yup.string(),
  identificationNum: yup.string(),
  // Professional Information
  business: yup.string(),
  designation: yup.string(),
  wardNo: yup.string(),
  accountType: yup.string(),
  supervisorName: yup.string(),
  salaryType: yup.string(),
  joiningDate: yup.string(),
  resignDate: yup.string(),
  drivingLicense: yup.string(),
  // Personal Information
  fatherName: yup.string(),
  motherName: yup.string(),
  nationality: yup.string(),
  religion: yup.string(),
  maritalStatus: yup.string(),
  bloodGroup: yup.string(),
  // Present Address
  PreAddVillage: yup.string(),
  PreAddrDivision: yup.string(),
  PreAddDistrict: yup.string(),
  PreAddUpazila: yup.string(),
  PreAddrPostCode: yup.string(),
  // Permanent Address
  PerAddVillage: yup.string(),
  PerAddDivision: yup.string(),
  PerAddDistrict: yup.string(),
  PerAddUpazila: yup.string(),
  PerAddPostCode: yup.string(),
  profileImage: yup.mixed().required("Profile Image is a required field!"),
  scanImage: yup.mixed().required("Scan Image is a required field!"),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const SellerEdit = () => {
  const [date, setDate] = useState(null);
  const [idType, setIdType] = useState("");
  const fileInputRef = useRef(null);
  const selectRef = useRef(null);
  const selectRef1 = useRef(null);
  const selectRef2 = useRef(null);

  // Search Select
  useEffect(() => {
    const choices = new Choices(selectRef.current, {
      removeItemButton: true,
      itemSelectText: "",
      searchEnabled: true,
      shouldSort: false, // disables sorting
    });

    return () => {
      choices.destroy();
    };
  }, []);

  useEffect(() => {
    const choices = new Choices(selectRef1.current, {
      removeItemButton: true,
      itemSelectText: "",
      searchEnabled: true,
      shouldSort: false, // disables sorting
    });

    return () => {
      choices.destroy();
    };
  }, []);

  useEffect(() => {
    const choices = new Choices(selectRef2.current, {
      removeItemButton: true,
      itemSelectText: "",
      searchEnabled: true,
      shouldSort: false, // disables sorting
    });

    return () => {
      choices.destroy();
    };
  }, []);

  // Single Image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setShowImage1({
      id: `${file.name}-${Date.now()}`,
      name: file.name,
      url: URL.createObjectURL(file),
    });

    e.target.value = ""; // reset to allow re-selection of same file
  };

  const handleDelete = () => {
    setShowImage1(null);
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const [showImage1, setShowImage1] = useState(null);
  const onImageChange1 = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage1(URL.createObjectURL(event.target.files[0]));
    }
  };

  // add
  const AddTeamFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("employeeId", values.employeeId);
    formfield.append("employeeNameEnglish", values.employeeNameBangla);
    formfield.append("employeeNameBangla", values.employeeNameBangla);
    formfield.append("birth", values.birth);
    formfield.append("gender", values.birth);

    if (values.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/about_api/unpaginate_teamm/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Team is successfuly created...");
        navigate("/about-team");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitAddTeamForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      setSubmitting(true);
      await AddTeamFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-xxl">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="position-relative bg-light p-2 rounded text-center">
                    <img
                      src="assets/images/seller/zara.svg"
                      alt=""
                      className="avatar-xxl"
                    />
                    <div className="position-absolute top-0 end-0 m-1">
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="dropdown-toggle arrow-none card-drop"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <iconify-icon
                            icon="iconamoon:menu-kebab-vertical-circle-duotone"
                            className="fs-20 align-middle text-muted"
                          ></iconify-icon>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link to="#" className="dropdown-item">
                            Download
                          </Link>

                          <Link to="#" className="dropdown-item">
                            Export
                          </Link>

                          <Link to="#" className="dropdown-item">
                            Import
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap justify-content-between my-3">
                    <div>
                      <h4 className="mb-1">ZARA International</h4>
                    </div>
                  </div>

                  <div className="">
                    <p className="d-flex align-items-center gap-2 mb-1">
                      <iconify-icon
                        icon="solar:point-on-map-bold-duotone"
                        className="fs-18 text-primary"
                      ></iconify-icon>
                      4604 , Philli Lane Kiowa IN 47404
                    </p>

                    <p className="d-flex align-items-center gap-2 mb-0">
                      <iconify-icon
                        icon="solar:outgoing-call-rounded-bold-duotone"
                        className="fs-20 text-primary"
                      ></iconify-icon>
                      +243 812-801-9335
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-8">
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={submitAddTeamForm}
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
                  <FormikForm noValidate onSubmit={(e) => handleSubmit(e)}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-header">
                            <h4 className="card-title">
                              Profile Image
                              <span className="text-danger">*</span>
                            </h4>{" "}
                          </div>
                          <div className="card-body">
                            <Form.Group
                              className="dropzone"
                              encType="multipart/form-data"
                            >
                              {/* Hidden file input */}
                              <Form.Control
                                type="file"
                                accept="image/png, image/jpeg, image/gif"
                                name="profileImage"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                                isInvalid={
                                  !!touched.profileImage &&
                                  !!errors.profileImage
                                }
                                isValid={
                                  touched.profileImage && !errors.profileImage
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.profileImage}
                              </Form.Control.Feedback>

                              {/* Upload Area (only if no preview) */}
                              {!showImage1 && (
                                <div
                                  className="dz-message needsclick"
                                  onClick={triggerFileSelect}
                                  style={{
                                    margin: 0,
                                    padding: 0,
                                    height: "170px",
                                    cursor: "pointer",
                                  }}
                                >
                                  <i className="bx bx-cloud-upload fs-48 text-primary"></i>
                                  <h3>
                                    Drop your image here, or{" "}
                                    <span className="text-primary">
                                      click to browse
                                    </span>
                                  </h3>
                                  <span className="text-muted fs-13">
                                    1600 x 1200 (4:3) recommended. PNG, JPG and
                                    GIF allowed.
                                  </span>
                                </div>
                              )}

                              {/* Preview */}
                              {showImage1 && (
                                <div
                                  id="file-previews"
                                  style={{
                                    margin: 0,
                                    padding: 0,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <div
                                    className="mb-4"
                                    style={{
                                      width: "132px",
                                      height: "132px",
                                    }}
                                  >
                                    <div
                                      className="border rounded p-1 position-relative"
                                      style={{ margin: 0 }}
                                    >
                                      <img
                                        src={showImage1.url}
                                        alt={showImage1.name}
                                        className="img-fluid d-block mx-auto"
                                        style={{
                                          objectFit: "cover",
                                          width: "100%",
                                          height: "100%",
                                          borderRadius: "5px",
                                        }}
                                      />
                                      <button
                                        type="button"
                                        onClick={handleDelete}
                                        className="position-absolute"
                                        style={{
                                          top: "45%",
                                          left: "50%",
                                          transform: "translate(-50%, -50%)",
                                          fontSize: "30px",
                                          width: "40px",
                                          height: "40px",
                                          borderRadius: "50%",
                                          backgroundColor: "#5d71869b",
                                          color: "#fff",
                                          border: "none",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          padding: 0,
                                          cursor: "pointer",
                                        }}
                                        title="Remove image"
                                      >
                                        &times;
                                      </button>
                                      <p className="mt-2 mb-0 text-center small">
                                        {showImage1.name}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Form.Group>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-header">
                            <h4 className="card-title">Scan Image</h4>
                          </div>
                          <div className="card-body">
                            <ImageFiled2 />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Basic Information</h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label className="labelText">
                                Employee Id
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="employeeId"
                                  id="employeeId"
                                  value={values.employeeId}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.employeeId && !!errors.employeeId
                                  }
                                  isValid={
                                    touched.employeeId && !errors.employeeId
                                  }
                                  className="form-control mb-0"
                                  disabled
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.employeeId}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label className="labelText">
                                Emplyee Name (English)
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="employeeNameEnglish"
                                  id="employeeNameEnglish"
                                  value={values.employeeNameEnglish}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.employeeNameEnglish &&
                                    !!errors.employeeNameEnglish
                                  }
                                  isValid={
                                    touched.employeeNameEnglish &&
                                    !errors.employeeNameEnglish
                                  }
                                  className="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.employeeNameEnglish}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label className="labelText">
                                Emplyee Name (Bangla)
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="employeeNameBangla"
                                  id="employeeNameBangla"
                                  value={values.employeeNameBangla}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.employeeNameBangla &&
                                    !!errors.employeeNameBangla
                                  }
                                  isValid={
                                    touched.employeeNameBangla &&
                                    !errors.employeeNameBangla
                                  }
                                  className="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.employeeNameBangla}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label className="form-label">
                                Phone Number{" "}
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <span className="input-group-text fs-20">
                                  <iconify-icon
                                    icon="solar:outgoing-call-rounded-bold-duotone"
                                    className="fs-20"
                                  ></iconify-icon>
                                </span>
                                <Form.Control
                                  type="text"
                                  name="number"
                                  id="number"
                                  value={values.number}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.number && !!errors.number
                                  }
                                  isValid={touched.number && !errors.number}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.number}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-4 mb-3">
                            <form>
                              <div className="">
                                <label
                                  htmlFor="product-brand"
                                  className="form-label"
                                >
                                  Date of Birth{" "}
                                  <span className="text-danger">*</span>
                                </label>

                                {/* <input
                                  type="text"
                                  id="schedule-date"
                                  className="form-control flatpickr-input active"
                                  placeholder="dd-mm-yyyy"
                                  readonly="readonly"
                                /> */}

                                <Flatpickr
                                  id="schedule-date"
                                  className="form-control flatpickr-input active"
                                  placeholder="dd-mm-yyyy"
                                  value={date}
                                  onChange={([selectedDate]) =>
                                    setDate(selectedDate)
                                  }
                                  options={{
                                    dateFormat: "d-m-Y",
                                  }}
                                />
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-4">
                            <Form.Group className="form-outline w-100">
                              <Form.Label className="form-label">
                                Gender <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation className="w-100">
                                <Form.Select
                                  ref={selectRef}
                                  name="gender"
                                  id="gender"
                                  value={values.gender}
                                  onChange={handleChange}
                                  isInvalid={touched.gender && !!errors.gender}
                                  isValid={touched.gender && !errors.gender}
                                  className="form-control"
                                  data-choices
                                  data-choices-groups
                                  data-placeholder="Select Gender"
                                >
                                  <option value="">Select Gender</option>
                                  <option value="Men">Men</option>
                                  <option value="Women">Women</option>
                                  <option value="Third Gender">
                                    Third Gender
                                  </option>
                                  <option value="Other">Other</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  {errors.gender}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6 mb-3">
                            <label htmlFor="idType" className="form-label">
                              Identification Type{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-control"
                              id="idType"
                              value={idType}
                              onChange={(e) => setIdType(e.target.value)}
                            >
                              <option value="">Select Identification</option>
                              <option value="National ID">National ID</option>
                              <option value="Passport">Passport</option>
                              <option value="Birth Certificate">
                                Birth Certificate
                              </option>
                              <option value="Driving License">
                                Driving License
                              </option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="idNumber" className="form-label">
                                {idType === "National ID" ||
                                idType === "Passport" ||
                                idType === "Birth Certificate" ||
                                idType === "Driving License"
                                  ? "Identification Number"
                                  : "---"}{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                id="idNumber"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Professional Information</h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-4">
                            <Form.Group className="form-outline w-100">
                              <Form.Label className="form-label">
                                Business <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation className="w-100">
                                <Form.Select
                                  ref={selectRef1}
                                  name="business"
                                  id="business"
                                  value={values.business}
                                  onChange={handleChange}
                                  isInvalid={
                                    touched.business && !!errors.business
                                  }
                                  isValid={touched.business && !errors.business}
                                  className="form-control"
                                  data-choices
                                  data-choices-groups
                                  data-placeholder="Select Business"
                                >
                                  <option value="">Select Business</option>
                                  <option value="Wholesale">Wholesale</option>
                                  <option value="Manufacturing">
                                    Manufacturing
                                  </option>
                                  <option value="Service">Service</option>
                                  <option value="Other">Other</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  {errors.business}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-4">
                            <Form.Group className="form-outline w-100">
                              <Form.Label className="form-label">
                                Designation{" "}
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation className="w-100">
                                <Form.Select
                                  ref={selectRef2}
                                  name="designation"
                                  id="designation"
                                  value={values.designation}
                                  onChange={handleChange}
                                  isInvalid={
                                    touched.designation && !!errors.designation
                                  }
                                  isValid={
                                    touched.designation && !errors.designation
                                  }
                                  className="form-control"
                                  data-choices
                                  data-choices-groups
                                  data-placeholder="Select Designation"
                                >
                                  <option value="">Select Designation</option>
                                  <option value="Manager">Manager</option>
                                  <option value="Team Lead">Team Lead</option>
                                  <option value="Developer">Developer</option>
                                  <option value="Driving License">
                                    Driving License
                                  </option>
                                  <option value="Other">Other</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  {errors.designation}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-4">
                            <form>
                              <label htmlFor="gender" className="form-label">
                                Ward No <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-control"
                                id="gender"
                                data-choices
                                data-choices-groups
                                data-placeholder="Select Gender"
                              >
                                <option value="">Select Ward No</option>
                                <option value="1">Ward 1</option>
                                <option value="2">Ward 2</option>
                                <option value="3">Ward 3</option>
                                <option value="3">Other Ward</option>
                              </select>
                            </form>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4 mb-3">
                            <form>
                              <label htmlFor="gender" className="form-label">
                                Account Type{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-control"
                                id="gender"
                                data-choices
                                data-choices-groups
                                data-placeholder="Select Gender"
                              >
                                <option value="">Select Account Type</option>
                                <option value="Savings">Savings</option>
                                <option value="Current">Current</option>
                                <option value="Fixed Deposit">
                                  Fixed Deposit
                                </option>
                                <option value="Recurring Deposit">
                                  Recurring Deposit
                                </option>
                                <option value="Other">Other</option>
                              </select>
                            </form>
                          </div>

                          <div className="col-lg-4">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="product-brand"
                                  className="form-label"
                                >
                                  ---
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  id="product-brand"
                                  className="form-control"
                                />
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-4">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="product-brand"
                                  className="form-label"
                                >
                                  ---
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  id="product-brand"
                                  className="form-control"
                                />
                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4 mb-3">
                            <form>
                              <label htmlFor="gender" className="form-label">
                                Supervisor Name{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-control"
                                id="gender"
                                data-choices
                                data-choices-groups
                                data-placeholder="Select Gender"
                              >
                                <option value="">Select Supervisor</option>
                                <option value="John Doe">John Doe</option>
                                <option value="Jane Smith">Jane Smith</option>
                                <option value="Michael Johnson">
                                  Michael Johnson
                                </option>
                                <option value="Other">Other</option>
                              </select>
                            </form>
                          </div>

                          <div className="col-lg-4 mb-3">
                            <form>
                              <label htmlFor="gender" className="form-label">
                                Salary Type
                                <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-control"
                                id="gender"
                                data-choices
                                data-choices-groups
                                data-placeholder="Select Gender"
                              >
                                <option value="">Select Salary Type</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                              </select>
                            </form>
                          </div>

                          <div className="col-lg-4">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="product-brand"
                                  className="form-label"
                                >
                                  ---
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  id="product-brand"
                                  className="form-control"
                                />
                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="product-brand"
                                  className="form-label"
                                >
                                  Joining Date
                                  <span className="text-danger">*</span>
                                </label>

                                <Flatpickr
                                  id="schedule-date"
                                  className="form-control flatpickr-input active"
                                  placeholder="dd-mm-yyyy"
                                  value={date}
                                  onChange={([selectedDate]) =>
                                    setDate(selectedDate)
                                  }
                                  options={{
                                    dateFormat: "d-m-Y",
                                  }}
                                />
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-4">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="product-brand"
                                  className="form-label"
                                >
                                  Resign Date
                                  <span className="text-danger">*</span>
                                </label>

                                <Flatpickr
                                  id="schedule-date"
                                  className="form-control flatpickr-input active"
                                  placeholder="dd-mm-yyyy"
                                  value={date}
                                  onChange={([selectedDate]) =>
                                    setDate(selectedDate)
                                  }
                                  options={{
                                    dateFormat: "d-m-Y",
                                  }}
                                />
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label className="form-label">
                                Driving License{" "}
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="drivingLicense"
                                  id="drivingLicense"
                                  value={values.drivingLicense}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.drivingLicense &&
                                    !!errors.drivingLicense
                                  }
                                  isValid={
                                    touched.drivingLicense &&
                                    !errors.drivingLicense
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.drivingLicense}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Personal Information</h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="row mb-3">
                              <div className="col-lg-12">
                                <Form.Group className="form-outline">
                                  <Form.Label className="form-label">
                                    Father Name{" "}
                                    <span className="text-danger">*</span>
                                  </Form.Label>
                                  <InputGroup hasValidation>
                                    <Form.Control
                                      type="text"
                                      name="fatherName"
                                      id="fatherName"
                                      value={values.fatherName}
                                      onChange={handleChange}
                                      isInvalid={
                                        !!touched.fatherName &&
                                        !!errors.fatherName
                                      }
                                      isValid={
                                        touched.fatherName && !errors.fatherName
                                      }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.fatherName}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12 mb-3">
                                <form>
                                  <label
                                    htmlFor="gender"
                                    className="form-label"
                                  >
                                    Nationality{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <select
                                    className="form-control"
                                    id="gender"
                                    data-choices
                                    data-choices-groups
                                    data-placeholder="Select Gender"
                                  >
                                    <option value="">Select Nationality</option>
                                    <option value="Bangladeshi">
                                      Bangladeshi
                                    </option>
                                    <option value="Indian">Indian</option>
                                    <option value="Pakistani">USA</option>
                                    <option value="Nepali">UK</option>
                                    <option value="Other">Other</option>
                                  </select>
                                </form>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12 mb-3">
                                <form>
                                  <label
                                    htmlFor="gender"
                                    className="form-label"
                                  >
                                    Marital Status{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <select
                                    className="form-control"
                                    id="gender"
                                    data-choices
                                    data-choices-groups
                                    data-placeholder="Select Gender"
                                  >
                                    <option value="">
                                      Select Marital Status
                                    </option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Widowed">Widowed</option>
                                    <option value="Separated">Separated</option>
                                  </select>
                                </form>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="row mb-3">
                              <div className="col-lg-12">
                                <Form.Group className="form-outline">
                                  <Form.Label className="form-label">
                                    Mother Name{" "}
                                    <span className="text-danger">*</span>
                                  </Form.Label>
                                  <InputGroup hasValidation>
                                    <Form.Control
                                      type="text"
                                      name="motherName"
                                      id="motherName"
                                      value={values.motherName}
                                      onChange={handleChange}
                                      isInvalid={
                                        !!touched.motherName &&
                                        !!errors.motherName
                                      }
                                      isValid={
                                        touched.motherName && !errors.motherName
                                      }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.motherName}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </div>
                            </div>

                            <div className="row mb-3">
                              <div className="col-lg-12">
                                <Form.Group className="form-outline">
                                  <Form.Label className="form-label">
                                    Religion{" "}
                                    <span className="text-danger">*</span>
                                  </Form.Label>
                                  <InputGroup hasValidation>
                                    <Form.Control
                                      type="text"
                                      name="religion"
                                      id="religion"
                                      value={values.religion}
                                      onChange={handleChange}
                                      isInvalid={
                                        !!touched.religion && !!errors.religion
                                      }
                                      isValid={
                                        touched.religion && !errors.religion
                                      }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.religion}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12">
                                <form>
                                  <label
                                    htmlFor="gender"
                                    className="form-label"
                                  >
                                    Blood Group
                                    <span className="text-danger">*</span>
                                  </label>
                                  <select
                                    className="form-control"
                                    id="gender"
                                    data-choices
                                    data-choices-groups
                                    data-placeholder="Select Gender"
                                  >
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                  </select>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card">
                          <div
                            className="card-header"
                            style={{ marginTop: "24px" }}
                          >
                            <h4 className="card-title">Present Address</h4>
                          </div>

                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-lg-12">
                                <Form.Group className="form-outline">
                                  <Form.Label className="form-label">
                                    Village / Road / House / Flat{" "}
                                    <span className="text-danger">*</span>
                                  </Form.Label>
                                  <InputGroup hasValidation>
                                    <Form.Control
                                      type="text"
                                      name="PreAddVillage"
                                      id="PreAddVillage"
                                      value={values.PreAddVillage}
                                      onChange={handleChange}
                                      isInvalid={
                                        !!touched.PreAddVillage &&
                                        !!errors.PreAddVillage
                                      }
                                      isValid={
                                        touched.PreAddVillage &&
                                        !errors.PreAddVillage
                                      }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.PreAddVillage}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12 mb-3">
                                <form>
                                  <label
                                    htmlFor="division"
                                    className="form-label"
                                  >
                                    Division{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <select
                                    className="form-control"
                                    id="division"
                                    data-choices
                                    data-choices-groups
                                    data-placeholder="Select Division"
                                  >
                                    <option value="">Select Division</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Chattogram">
                                      Chattogram
                                    </option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Sylhet">Sylhet</option>
                                    <option value="Barishal">Barishal</option>
                                    <option value="Rangpur">Rangpur</option>
                                    <option value="Mymensingh">
                                      Mymensingh
                                    </option>
                                  </select>
                                </form>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12">
                                <div className="row">
                                  <div className="col-lg-6 mb-3">
                                    <form>
                                      <label
                                        htmlFor="district"
                                        className="form-label"
                                      >
                                        District{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <select
                                        className="form-control"
                                        id="district"
                                        data-choices
                                        data-choices-groups
                                        data-placeholder="Select District"
                                      >
                                        <option value="">
                                          Select District
                                        </option>
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Mymensingh">
                                          Mymensingh
                                        </option>
                                        <option value="Jamalpur">
                                          Jamalpur
                                        </option>
                                        <option value="Gazipur">Gazipur</option>
                                        <option value="Narsingdi">
                                          Narsingdi
                                        </option>
                                      </select>
                                    </form>
                                  </div>

                                  <div className="col-lg-6 mb-3">
                                    <form>
                                      <label
                                        htmlFor="gender"
                                        className="form-label"
                                      >
                                        Upazila / P.S{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <select
                                        className="form-control"
                                        id="gender"
                                        data-choices
                                        data-choices-groups
                                        data-placeholder="Select Gender"
                                      >
                                        <option value="">Select Upazila</option>
                                        <option value="Dhanmondi">
                                          Dhanmondi
                                        </option>
                                        <option value="Gulshan">Gulshan</option>
                                        <option value="Motijheel">
                                          Motijheel
                                        </option>
                                        <option value="Mirpur">Mirpur</option>
                                        <option value="Uttara">Uttara</option>
                                      </select>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12">
                                <Form.Group className="form-outline">
                                  <Form.Label className="form-label">
                                    Post Code{" "}
                                    <span className="text-danger">*</span>
                                  </Form.Label>
                                  <InputGroup hasValidation>
                                    <Form.Control
                                      type="text"
                                      name="PreAddrPostCode"
                                      id="PreAddrPostCode"
                                      value={values.PreAddrPostCode}
                                      onChange={handleChange}
                                      isInvalid={
                                        !!touched.PreAddrPostCode &&
                                        !!errors.PreAddrPostCode
                                      }
                                      isValid={
                                        touched.PreAddrPostCode &&
                                        !errors.PreAddrPostCode
                                      }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.PreAddrPostCode}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-header">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheck1"
                              />
                              <label
                                className="form-check-label"
                                for="customCheck1"
                              >
                                Same as Present Address
                              </label>
                            </div>
                            <h4 className="card-title">Permanent Address</h4>
                          </div>

                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-lg-12">
                                <Form.Group className="form-outline">
                                  <Form.Label className="form-label">
                                    Village / Road / House / Flat{" "}
                                    <span className="text-danger">*</span>
                                  </Form.Label>
                                  <InputGroup hasValidation>
                                    <Form.Control
                                      type="text"
                                      name="PerAddVillage"
                                      id="PerAddVillage"
                                      value={values.PerAddVillage}
                                      onChange={handleChange}
                                      isInvalid={
                                        !!touched.PerAddVillage &&
                                        !!errors.PerAddVillage
                                      }
                                      isValid={
                                        touched.PerAddVillage &&
                                        !errors.PerAddVillage
                                      }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.PerAddVillage}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </div>
                            </div>

                            <div className="row mb-3">
                              <div className="col-lg-12">
                                <form>
                                  <label
                                    htmlFor="division"
                                    className="form-label"
                                  >
                                    Division{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <select
                                    className="form-control"
                                    id="division"
                                    data-choices
                                    data-choices-groups
                                    data-placeholder="Select Division"
                                  >
                                    <option value="">Select Division</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Chattogram">
                                      Chattogram
                                    </option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Sylhet">Sylhet</option>
                                    <option value="Barishal">Barishal</option>
                                    <option value="Rangpur">Rangpur</option>
                                    <option value="Mymensingh">
                                      Mymensingh
                                    </option>
                                  </select>
                                </form>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12">
                                <div className="row">
                                  <div className="col-lg-6 mb-3">
                                    <form>
                                      <label
                                        htmlFor="district"
                                        className="form-label"
                                      >
                                        District{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <select
                                        className="form-control"
                                        id="district"
                                        data-choices
                                        data-choices-groups
                                        data-placeholder="Select District"
                                      >
                                        <option value="">
                                          Select District
                                        </option>
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Mymensingh">
                                          Mymensingh
                                        </option>
                                        <option value="Jamalpur">
                                          Jamalpur
                                        </option>
                                        <option value="Gazipur">Gazipur</option>
                                        <option value="Narsingdi">
                                          Narsingdi
                                        </option>
                                      </select>
                                    </form>
                                  </div>

                                  <div className="col-lg-6 mb-3">
                                    <form>
                                      <label
                                        htmlFor="gender"
                                        className="form-label"
                                      >
                                        Upazila / P.S{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <select
                                        className="form-control"
                                        id="gender"
                                        data-choices
                                        data-choices-groups
                                        data-placeholder="Select Gender"
                                      >
                                        <option value="">Select Upazila</option>
                                        <option value="Dhanmondi">
                                          Dhanmondi
                                        </option>
                                        <option value="Gulshan">Gulshan</option>
                                        <option value="Motijheel">
                                          Motijheel
                                        </option>
                                        <option value="Mirpur">Mirpur</option>
                                        <option value="Uttara">Uttara</option>
                                      </select>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row mb-3">
                              <div className="col-lg-12">
                                <Form.Group className="form-outline">
                                  <Form.Label className="form-label">
                                    Post Code{" "}
                                    <span className="text-danger">*</span>
                                  </Form.Label>
                                  <InputGroup hasValidation>
                                    <Form.Control
                                      type="text"
                                      name="PerAddPostCode"
                                      id="PerAddPostCode"
                                      value={values.PerAddPostCode}
                                      onChange={handleChange}
                                      isInvalid={
                                        !!touched.PerAddPostCode &&
                                        !!errors.PerAddPostCode
                                      }
                                      isValid={
                                        touched.PerAddPostCode &&
                                        !errors.PerAddPostCode
                                      }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.PerAddPostCode}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-light mb-3 rounded">
                      <div className="row justify-content-end g-2">
                        <div className="col-lg-2">
                          <button
                            type="reset"
                            className="btn btn-primary w-100"
                          >
                            Cancel
                          </button>
                        </div>

                        <div className="col-lg-2">
                          <button
                            type="submit"
                            className="btn btn-outline-secondary w-100"
                          >
                            Submit & Add Another
                          </button>
                        </div>
                        <div className="col-lg-2">
                          <button
                            type="submit"
                            className="btn btn-outline-secondary w-100"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* message  */}
                    {message && <h2 className="text-center m-5">{message}</h2>}
                  </FormikForm>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .choices,
  .choices__inner,
  .choices__list,
  .choices__input,
  .choices__list--single {
    width: 100% !important;
  }

  .choices__inner {
    display: flex;
    align-items: center;
    min-height: 38px;
    padding: 0.375rem 0.75rem;
    background-color: transparent !important;
    border: 1px solid #aab8c5 !important;
    border-radius: 0.375rem;
    font-size: 14px !important;
    line-height: 1.5;
  }
  .choices[data-type*="select-one"] .choices__input {
    display: block;
    width: 100%;
    border-bottom: 1px solid #aab8c5;
    background-color: transparent !important;
    margin: 0;
  }

  .choices__list--single {
    padding: 0 !important;
    margin: 0 !important;
  }

  /* Inline cloned input (multiselect / when searching in the control) */
  .choices[data-type*="select"] .choices__input.choices__input--cloned {
    margin-left: 5px !important;
  }
  .choices__list--dropdown .choices__list {
    /* margin: 0 0px 0px !important; */
    margin-left: 5px !important;
  }
`;

export default SellerEdit;
