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

//       // save tokens
//       localStorage.setItem(
//         "ecommerceSuperuserandstaffAccessToken",
//         data.access
//       );
//       localStorage.setItem(
//         "ecommerceSuperuserandstaffRefreshToken",
//         data.refresh
//       );

//       window.location.href = "/sign-in"; // redirect dashboard
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
//                         src="assets/images/logo-dark.png"
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
//                     New to our platform? Sign up now! It only takes Link minute
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
//             {/* <!-- end card --> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/custom_user/register/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      console.log("REGISTER RESPONSE:", data);

      if (!res.ok) {
        setError("Registration Failed!");
        return;
      }

      // ❌ DO NOT SET TOKENS HERE
      // Registration should NOT auto-login user

      // ✅ Redirect to Sign In page
      window.location.href = "/sign-in";
    } catch (err) {
      setError("Something went wrong");
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
                        src="assets/images/logo-dark.png"
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
                    <form
                      onSubmit={handleSubmit}
                      className="authentication-form"
                    >
                      {error && <p className="text-danger">{error}</p>}

                      <input
                        className="form-control mb-2"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                      />

                      <input
                        className="form-control mb-2"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                      />

                      <input
                        className="form-control mb-2"
                        name="first_name"
                        placeholder="First Name"
                        onChange={handleChange}
                      />

                      <input
                        className="form-control mb-2"
                        name="last_name"
                        placeholder="Last Name"
                        onChange={handleChange}
                      />

                      <input
                        className="form-control mb-2"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                      />

                      <textarea
                        className="form-control mb-2"
                        name="address"
                        placeholder="Address"
                        onChange={handleChange}
                      />

                      <input
                        className="form-control mb-2"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                      />

                      <div className="mb-1 text-center d-grid">
                        <button className="btn btn-soft-primary" type="submit">
                          Sign Up
                        </button>
                      </div>
                    </form>

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
