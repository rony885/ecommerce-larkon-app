// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     first_name: "",
//     last_name: "",
//     phone: "",
//     address: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch(
//         `${process.env.REACT_APP_BASE_URL}/custom_user/register/`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await res.json();
//       console.log("REGISTER RESPONSE:", data);

//       if (!res.ok) {
//         setError("Registration Failed!");
//         return;
//       }

//       // ❌ DO NOT SET TOKENS HERE
//       // Registration should NOT auto-login user

//       // ✅ Redirect to Sign In page
//       window.location.href = "/sign-in";
//     } catch (err) {
//       setError("Something went wrong");
//     }
//   };

//   return (
//     <div className="d-flex flex-column h-100 p-3">
//       <div className="d-flex flex-column flex-grow-1">
//         <div className="row h-100">
//           <div className="col-xxl-7">
//             <div className="row justify-content-center h-100">
//               <div className="col-lg-6 py-lg-5">
//                 <div className="d-flex flex-column h-100 justify-content-center">
//                   <div className="auth-logo mb-4">
//                     <Link to="/" className="logo-dark">
//                       <img
//                         src="/assets/images/logo-dark.png"
//                         height="24"
//                         alt="logo dark"
//                       />
//                     </Link>

//                     <Link to="/" className="logo-light">
//                       <img
//                         src="/assets/images/logo-light.png"
//                         height="24"
//                         alt="logo light"
//                       />
//                     </Link>
//                   </div>

//                   <h2 className="fw-bold fs-24">Sign Up</h2>

//                   <p className="text-muted mt-1 mb-4">
//                     New to our platform? Sign up now! It only takes a minute.
//                   </p>

//                   <div>
//                     <form
//                       onSubmit={handleSubmit}
//                       className="authentication-form"
//                     >
//                       {error && <p className="text-danger">{error}</p>}

//                       <input
//                         className="form-control mb-2"
//                         name="username"
//                         placeholder="Username"
//                         onChange={handleChange}
//                       />

//                       <input
//                         className="form-control mb-2"
//                         name="email"
//                         placeholder="Email"
//                         onChange={handleChange}
//                       />

//                       <input
//                         className="form-control mb-2"
//                         name="first_name"
//                         placeholder="First Name"
//                         onChange={handleChange}
//                       />

//                       <input
//                         className="form-control mb-2"
//                         name="last_name"
//                         placeholder="Last Name"
//                         onChange={handleChange}
//                       />

//                       <input
//                         className="form-control mb-2"
//                         name="phone"
//                         placeholder="Phone"
//                         onChange={handleChange}
//                       />

//                       <textarea
//                         className="form-control mb-2"
//                         name="address"
//                         placeholder="Address"
//                         onChange={handleChange}
//                       />

//                       <input
//                         className="form-control mb-2"
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         onChange={handleChange}
//                       />

//                       <div className="mb-1 text-center d-grid">
//                         <button className="btn btn-soft-primary" type="submit">
//                           Sign Up
//                         </button>
//                       </div>
//                     </form>

//                     <p className="mt-3 fw-semibold no-span">OR sign with</p>

//                     <div className="d-grid gap-2">
//                       <Link to="#" className="btn btn-soft-dark">
//                         <i className="bx bxl-google fs-20 me-1"></i> Sign Up
//                         with Google
//                       </Link>
//                       <Link to="#" className="btn btn-soft-primary">
//                         <i className="bx bxl-facebook fs-20 me-1"></i> Sign Up
//                         with Facebook
//                       </Link>
//                     </div>
//                   </div>

//                   <p className="mt-auto text-danger text-center">
//                     I already have an account
//                     <Link to="/sign-in" className="text-dark fw-bold ms-1">
//                       Sign In
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-xxl-5 d-none d-xxl-flex">
//             <div className="card h-100 mb-0 overflow-hidden">
//               <div className="d-flex flex-column h-100">
//                 <img
//                   src="/assets/images/small/img-10.jpg"
//                   alt=""
//                   className="w-100 h-100"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Form as FormikForm } from "formik";
import * as yup from "yup";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const initialValues = {
  username: "",
  email: "",
  first_name: "",
  last_name: "",
  phone: "",
  address: "",
  password: "",
};

const schema = yup.object().shape({
  username: yup.string().required("Customer User Name is a required field!"),
  email: yup.string().required("Customer Email is a required field!"),
  first_name: yup.string().required("Customer First Name is a required field!"),
  last_name: yup.string().required("Customer Last Name is a required field!"),
  phone: yup.string().required("Customer Phone is a required field!"),
  address: yup.string().required("Customer Address is a required field!"),
  password: yup.string().required("Password is a required field!"),
});

const validate = (values) => {
  let errors = {};

  if (!values.phone) {
    errors.phone = "Phone is required!";
  } else if (/^[0-9\b]+$/.test(values.phone) === false) {
    errors.phone = "Only number!";
  } else if (values.phone.length !== 11) {
    errors.phone = "Mobile Number contains 11 digit!";
  }

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) === false) {
    errors.email = "Invalid Email!";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 4) {
    errors.password = "Password is too short!";
  }

  // if (!values.confirm_password) {
  //   errors.confirm_password = "Confirm password is required!";
  // } else if (values.confirm_password.length < 4) {
  //   errors.confirm_password = "Confirm password is too short!";
  // }

  return errors;
};

const SignUp = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();

  const AddRegFunc = async (values) => {
    let formfield = new FormData();

    // Append individual fields
    formfield.append("username", values.username);
    formfield.append("email", values.email);
    formfield.append("first_name", values.first_name);
    formfield.append("last_name", values.last_name);
    formfield.append("phone", values.phone);
    formfield.append("address", values.address);
    formfield.append("password", values.password);

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/custom_user/register/`,
      headers: {
        "Content-Type": "application/json; charset=UTF-8; text/plain",
      },
      data: formfield,
    })
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data.email);
      });
  };

  const submitRegisterForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      AddRegFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
    }
  };

  return (
    <div className="d-flex flex-column h-100 p-3">
      <div className="d-flex flex-column flex-grow-1">
        <div className="row h-100">
          <div className="col-xxl-7">
            <div className="row justify-content-center h-100">
              <div className="col-lg-6 py-lg-5">
                <div className="d-flex flex-column h-100 justify-content-center">
                  <div className="auth-logo mb-4">
                    <Link to="/" className="logo-dark">
                      <img
                        src="/assets/images/logo-dark.png"
                        height="24"
                        alt="logo dark"
                      />
                    </Link>

                    <Link to="/" className="logo-light">
                      <img
                        src="/assets/images/logo-light.png"
                        height="24"
                        alt="logo light"
                      />
                    </Link>
                  </div>

                  <h2 className="fw-bold fs-24">Sign Up</h2>

                  <p className="text-muted mt-1 mb-4">
                    New to our platform? Sign up now! It only takes a minute.
                  </p>

                  <div>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={schema}
                      onSubmit={submitRegisterForm}
                      validate={validate}
                    >
                      {({
                        handleSubmit,
                        handleChange,
                        isSubmitting,
                        values,
                        errors,
                        touched,
                      }) => (
                        <FormikForm
                          noValidate
                          onSubmit={(e) => handleSubmit(e)}
                        >
                          <Form.Group className="form-outline mb-2">
                            <Form.Label>
                              User Name<span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="username"
                                id="username"
                                value={values.username}
                                onChange={handleChange}
                                isInvalid={
                                  !!touched.username && !!errors.username
                                }
                                isValid={touched.username && !errors.username}
                                className="form-control my-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.username}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>

                          <Form.Group className="form-outline mb-2">
                            <Form.Label>
                              Email <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="email"
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!touched.email && !!errors.email}
                                isValid={touched.email && !errors.email}
                                className="form-control my-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.email}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>

                          <Form.Group className="form-outline mb-2">
                            <Form.Label>
                              First Name <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="first_name"
                                id="first_name"
                                value={values.first_name}
                                onChange={handleChange}
                                isInvalid={
                                  !!touched.first_name && !!errors.first_name
                                }
                                isValid={
                                  touched.first_name && !errors.first_name
                                }
                                className="form-control my-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.first_name}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>

                          <Form.Group className="form-outline mb-2">
                            <Form.Label>
                              Last Name <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="last_name"
                                id="last_name"
                                value={values.last_name}
                                onChange={handleChange}
                                isInvalid={
                                  !!touched.last_name && !!errors.last_name
                                }
                                isValid={touched.last_name && !errors.last_name}
                                className="form-control my-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.last_name}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>

                          <Form.Group className="form-outline mb-2">
                            <Form.Label>
                              Phone <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="phone"
                                id="phone"
                                value={values.phone}
                                onChange={handleChange}
                                isInvalid={!!touched.phone && !!errors.phone}
                                isValid={touched.phone && !errors.phone}
                                className="form-control my-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.phone}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>

                          <Form.Group className="form-outline mb-2">
                            <Form.Label>
                              Address <span className="text-danger">*</span>
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
                                isValid={touched.address && !errors.address}
                                className="form-control my-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.address}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>

                          <Form.Group className="form-outline mb-2">
                            <Form.Label>
                              Password <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="password"
                                name="password"
                                id="password"
                                value={values.password}
                                onChange={handleChange}
                                isInvalid={
                                  !!touched.password && !!errors.password
                                }
                                isValid={touched.password && !errors.password}
                                className="form-control my-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.password}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>

                          <div className="mb-1 text-center d-grid">
                            <button
                              className="btn btn-soft-primary"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Sign Up
                            </button>
                          </div>

                          <p
                            style={{
                              textAlign: "center",
                              color: "red",
                              fontSize: "15px",
                              textTransform: "capitalize",
                            }}
                          >
                            {message}
                          </p>
                        </FormikForm>
                      )}
                    </Formik>

                    <p className="mt-3 fw-semibold no-span">OR sign with</p>

                    <div className="d-grid gap-2">
                      <Link to="#" className="btn btn-soft-dark">
                        <i className="bx bxl-google fs-20 me-1"></i> Sign Up
                        with Google
                      </Link>
                      <Link to="#" className="btn btn-soft-primary">
                        <i className="bx bxl-facebook fs-20 me-1"></i> Sign Up
                        with Facebook
                      </Link>
                    </div>
                  </div>

                  <p className="mt-auto text-danger text-center">
                    I already have an account
                    <Link to="/sign-in" className="text-dark fw-bold ms-1">
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-5 d-none d-xxl-flex">
            <div className="card h-100 mb-0 overflow-hidden">
              <div className="d-flex flex-column h-100">
                <img
                  src="/assets/images/small/img-10.jpg"
                  alt=""
                  className="w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
