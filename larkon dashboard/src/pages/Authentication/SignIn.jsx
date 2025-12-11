// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     email: "",
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
//         `${process.env.REACT_APP_BASE_URL}/custom_user/login/`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         setError("Invalid Email or Password");
//         return;
//       }

//       // Save tokens
//       localStorage.setItem(
//         "ecommerceSuperuserandstaffAccessToken",
//         data.access
//       );
//       localStorage.setItem(
//         "ecommerceSuperuserandstaffRefreshToken",
//         data.refresh
//       );

//       // ✅ Save logged-in user
//       localStorage.setItem("user", JSON.stringify(data.user));

//       window.location.href = "/";
//     } catch (err) {
//       setError("Something went wrong!");
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

//                   <h2 className="fw-bold fs-24">Sign In</h2>

//                   <p className="text-muted mt-1 mb-4">
//                     Enter your email address and password to access admin panel.
//                   </p>

//                   <div className="mb-5">
//                     <form
//                       onSubmit={handleSubmit}
//                       className="authentication-form"
//                     >
//                       {error && <p className="text-danger">{error}</p>}

//                       <input
//                         className="form-control mb-2"
//                         name="email"
//                         placeholder="Email"
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
//                           Sign In
//                         </button>
//                       </div>
//                     </form>

//                     <p className="mt-3 fw-semibold no-span">OR sign with</p>

//                     <div className="d-grid gap-2">
//                       <Link to="#" className="btn btn-soft-dark">
//                         <i className="bx bxl-google fs-20 me-1"></i> Sign in
//                         with Google
//                       </Link>
//                       <Link to="#" className="btn btn-soft-primary">
//                         <i className="bx bxl-facebook fs-20 me-1"></i> Sign in
//                         with Facebook
//                       </Link>
//                     </div>
//                   </div>

//                   <p className="text-danger text-center">
//                     Don't have an account?
//                     <Link to="/sign-up" className="text-dark fw-bold ms-1">
//                       Sign Up
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

// export default SignIn;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Form as FormikForm } from "formik";
import * as yup from "yup";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const initialValues = {
  email: "",
  password: "",
};

const schema = yup.object().shape({
  email: yup.string().required("Login Phone is a required field!"),
  password: yup.string().required("Password is a required field!"),
});

const validate = (values) => {
  let errors = {};

  // if (!values.phone) {
  //   errors.phone = "Phone is required!";
  // } else if (/^[0-9\b]+$/.test(values.phone) === false) {
  //   errors.phone = "Only number!";
  // } else if (values.phone.length !== 11) {
  //   errors.phone = "Mobile Number contains 11 digit!";
  // }

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) === false) {
    errors.eemmaaiill = "Invalid Email!";
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

const SignIn = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();

  const AddLoginFunc = async (values) => {
    let formfield = new FormData();

    // Append individual fields

    formfield.append("email", values.email);
    formfield.append("password", values.password);

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/custom_user/login/`,
      headers: {
        "Content-Type": "application/json; charset=UTF-8; text/plain",
      },
      data: formfield,
    })
      .then((response) => {
        // localStorage.setItem("ecommerceAccessToken", response.data.access);
        // localStorage.setItem("ecommerceRefreshToken", response.data.refresh);
        localStorage.setItem(
          "ecommerceSuperuserandstaffAccessToken",
          response.data.access
        );
        localStorage.setItem(
          "ecommerceSuperuserandstaffRefreshToken",
          response.data.refresh
        );

        navigate("/");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data.non_field_errors);
      });
  };

  const submitLoginForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      AddLoginFunc(values);
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

                  <h2 className="fw-bold fs-24">Sign In</h2>

                  <p className="text-muted mt-1 mb-4">
                    Enter your email address and password to access admin panel.
                  </p>

                  <div className="mb-5">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={schema}
                      onSubmit={submitLoginForm}
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
                          <Form.Group className="form-outline mb-3 ">
                            <Form.Label>
                              email<span className="text-danger">*</span>
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

                          <Form.Group className="form-outline mb-3 ">
                            <Form.Label>
                              Password<span className="text-danger">*</span>
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
                              Sign In
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
                        <i className="bx bxl-google fs-20 me-1"></i> Sign in
                        with Google
                      </Link>
                      <Link to="#" className="btn btn-soft-primary">
                        <i className="bx bxl-facebook fs-20 me-1"></i> Sign in
                        with Facebook
                      </Link>
                    </div>
                  </div>

                  <p className="text-danger text-center">
                    Don't have an account?
                    <Link to="/sign-up" className="text-dark fw-bold ms-1">
                      Sign Up
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

export default SignIn;
