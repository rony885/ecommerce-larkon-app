// import React, { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
// import Footer from "../../components/Footer";
// import { Link, useNavigate, useParams } from "react-router-dom";

// import JoditEditor from "jodit-react";
// import { Formik, Form as FormikForm, Field } from "formik";
// import Select from "react-select";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import * as yup from "yup";
// import axios from "axios";

// import { useApiContext } from "../../context/ApiContext";

// const schema = yup.object().shape({
//   status: yup.boolean(),
//   name: yup.string().required(" Name is a required field!"),
//   category: yup.string().required("Category is a required field!"),
//   brand: yup.string().required("Brand is a required field!"),
//   unit: yup.string().required("Unit is a required field!"),
//   price: yup.string(),
//   stock: yup.string(),
//   description: yup.string(),
//   image: yup.mixed(),
// });

// const validate = (values) => {
//   let errors = {};
//   return errors;
// };

// const ProductEdit = () => {
//   // data fetching
//   const { category, fetchCategory, brand, fetchBrand, unit, fetchUnit } =
//     useApiContext();

//   useEffect(() => {
//     fetchCategory();
//     fetchBrand();
//     fetchUnit();
//   }, [fetchBrand, fetchCategory, fetchUnit]);

//   const [message, setMessage] = useState();
//   const [item, setItem] = useState({});
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const editor = useRef(null);
//   const [content1, setContent1] = useState("");

//   const [showImage, setShowImage] = useState(null);
//   const onImageChange = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       setShowImage(URL.createObjectURL(event.target.files[0]));
//     }
//   };

//   const [categoryOptions, setCategoryOptions] = useState([]);
//   const [brandOptions, setBrandOptions] = useState([]);
//   const [unitOptions, setUnitOptions] = useState([]);

//   // useEffect(() => {
//   //   // category
//   //   const userCategoryOptions = category.map((user) => ({
//   //     value: user.id,
//   //     label: user.name,
//   //   }));
//   //   setCategoryOptions(userCategoryOptions);

//   //   // brand
//   //   const userBrandOptions = brand.map((user) => ({
//   //     value: user.id,
//   //     label: user.name,
//   //   }));
//   //   setBrandOptions(userBrandOptions);

//   //   // unit
//   //   const userUnitOptions = unit.map((user) => ({
//   //     value: user.id,
//   //     label: user.name,
//   //   }));
//   //   setUnitOptions(userUnitOptions);
//   // }, [brand, category, unit]);

//   // Populate options from context data

//   useEffect(() => {
//     setCategoryOptions(category.map((c) => ({ value: c.id, label: c.name })));
//     setBrandOptions(brand.map((b) => ({ value: b.id, label: b.name })));
//     setUnitOptions(unit.map((u) => ({ value: u.id, label: u.name })));
//   }, [brand, category, unit]);

//   const customStyles = {
//     option: (provided, state) => ({
//       ...provided,
//       borderBottom: "1px solid pink",
//       color: state.isSelected ? "white" : "black",
//       backgroundColor: state.isSelected ? "#FF6C2F" : "white",
//       "&:hover": {
//         backgroundColor: "#FF6C2F",
//         color: "white",
//       },
//       padding: 10,
//     }),
//   };

//   // update
//   // const updatedValues = {
//   //   status: item.status ? item.status : "",
//   //   name: item.name ? item.name : "",
//   //   category: item.category ? item.category : "",
//   //   brand: item.brand ? item.brand : "",
//   //   unit: item.unit ? item.unit : "",
//   //   price: item.price ? item.price : "",
//   //   stock: item.stock ? item.stock : "",
//   //   description: item.description ? item.description : "",
//   //   image: item.image ? item.image : "",
//   // };

//     const updatedValues = {
//     status: item.status ? `${item.status}` : "",
//     name: item.name || "",
//     category: item.category?.id ? `${item.category.id}` : "",
//     brand: item.brand?.id ? `${item.brand.id}` : "",
//     unit: item.unit?.id ? `${item.unit.id}` : "",
//     price: item.price || "",
//     stock: item.stock || "",
//     description: item.description || "",
//     image: item.image || "",
//   };

//   const UpdateProductFunc = async (values) => {
//     let formfield = new FormData();

//     formfield.append("status", values.status === "true" ? true : false);
//     formfield.append("name", values.name);
//     formfield.append("category", values.category);
//     formfield.append("brand", values.brand);
//     formfield.append("unit", values.unit);
//     formfield.append("price", values.price);
//     formfield.append("stock", values.stock);
//     formfield.append("description", values.content1);

//     if (values.image !== item.image) {
//       formfield.append("image", values.image);
//     }

//     await axios({
//       method: "PUT",
//       url: `${process.env.REACT_APP_BASE_URL}/product_api/product/${item.id}/`,
//       data: formfield,
//     })
//       .then((response) => {
//         setMessage(response.success, "Product is successfully updated...");
//         navigate("/product-list");
//         window.location.reload(false);
//       })
//       .catch((error) => {
//         setMessage(error.message, "Error");
//       });
//   };

//   const submitUpdateProductForm = async (
//     values,
//     { setErrors, setSubmitting, resetForm }
//   ) => {
//     try {
//       setSubmitting(true);
//       await UpdateProductFunc(values);
//       setSubmitting(false);
//       // resetForm();
//     } catch (error) {
//       setErrors({ error: error.message });
//       setSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     const updateProduct = async (id) => {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/product_api/product/${id}/`
//       );

//       setItem(data);
//       setShowImage(data.image);
//     };
//     updateProduct(id);
//   }, [id]);

//   return (
//     <Wrapper>
//       <div className="page-content">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-xl-12 col-lg-12">
//               <div className="card">
//                 <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
//                   <h4 className="card-title flex-grow-1 fs-4">
//                     <Link to="/" data-discover="true">
//                       Dashboard
//                     </Link>{" "}
//                     | Update Product
//                   </h4>
//                   <Link
//                     to="/product-list"
//                     className="btn btn-sm btn-primary fs-4"
//                   >
//                     Product List
//                   </Link>
//                 </div>

//                 <div className="card-body">
//                   <Formik
//                     enableReinitialize={true}
//                     initialValues={updatedValues}
//                     validationSchema={schema}
//                     onSubmit={submitUpdateProductForm}
//                     validate={validate}
//                   >
//                     {({
//                       handleSubmit,
//                       handleChange,
//                       values,
//                       touched,
//                       errors,
//                       isSubmitting,
//                       setFieldValue,
//                     }) => (
//                       <FormikForm noValidate onSubmit={(e) => handleSubmit(e)}>
//                         <div className="row">
//                           <div className="col-lg-4">
//                             <div className="mb-3">
//                               <label
//                                 htmlFor="product-brand"
//                                 className="form-label"
//                               >
//                                 Product Id
//                               </label>
//                               <input
//                                 type="text"
//                                 id="product-brand"
//                                 className="form-control"
//                               />
//                             </div>
//                           </div>

//                           <div className="col-lg-4">
//                             {/* <Form.Group className="form-outline mb-3">
//                               <Form.Label>
//                                 Product Name
//                                 <span className="text-danger">*</span>
//                               </Form.Label>
//                               <InputGroup hasValidation>
//                                 <Form.Control
//                                   type="text"
//                                   name="name"
//                                   id="name"
//                                   value={values.name}
//                                   onChange={handleChange}
//                                   isInvalid={!!touched.name && !!errors.name}
//                                   isValid={touched.name && !errors.name}
//                                   className="form-control mb-0"
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                   {errors.name}
//                                 </Form.Control.Feedback>
//                               </InputGroup>
//                             </Form.Group> */}
//                             <Form.Group className="form-outline mb-3">
//                           <Form.Label>
//                             Category<span className="text-danger">*</span>
//                           </Form.Label>
//                           <Field name="category">
//                             {({ field, form, meta }) => (
//                               <>
//                                 <Select
//                                   className="react-select w-100"
//                                   name="category"
//                                   value={categoryOptions.find(
//                                     (opt) => opt.value === field.value
//                                   )}
//                                   onChange={(option) =>
//                                     form.setFieldValue(
//                                       "category",
//                                       option ? option.value : ""
//                                     )
//                                   }
//                                   options={categoryOptions}
//                                   styles={customStyles}
//                                 />
//                                 {meta.touched && meta.error && (
//                                   <div className="invalid-feedback d-block">
//                                     {meta.error}
//                                   </div>
//                                 )}
//                               </>
//                             )}
//                           </Field>
//                         </Form.Group>
//                           </div>

//                           <div className="col-lg-4">
//                             <Form.Group className="form-outline mb-0 divv">
//                               <Form.Label>
//                                 Category<span className="text-danger">*</span>
//                               </Form.Label>
//                               <InputGroup hasValidation>
//                                 <Field name="category">
//                                   {({ field, form, meta }) => (
//                                     <>
//                                       <Select
//                                         className="react-select w-100"
//                                         id="category"
//                                         name="category"
//                                         value={categoryOptions.find(
//                                           (option) =>
//                                             option.value === field.value
//                                         )}
//                                         onChange={(selectedOption) => {
//                                           form.setFieldValue(
//                                             field.name,
//                                             selectedOption
//                                               ? selectedOption.value
//                                               : null
//                                           );
//                                         }}
//                                         options={categoryOptions}
//                                         isSearchable
//                                         styles={customStyles}
//                                         isInvalid={meta.touched && meta.error}
//                                         isValid={meta.touched && !meta.error}
//                                         onBlur={() =>
//                                           form.setFieldTouched(field.name, true)
//                                         }
//                                       />
//                                       {meta.touched && meta.error && (
//                                         <div className="invalid-feedback d-block">
//                                           {meta.error}
//                                         </div>
//                                       )}
//                                     </>
//                                   )}
//                                 </Field>
//                               </InputGroup>
//                             </Form.Group>
//                           </div>
//                         </div>

//                         <div className="row">
//                           <div className="col-lg-4">
//                             <div className="mb-3">
//                               <label htmlFor="gender" className="form-label">
//                                 Sub Category{" "}
//                                 <span className="text-danger">*</span>
//                               </label>
//                               <select
//                                 className="form-control"
//                                 id="gender"
//                                 data-choices
//                                 data-choices-groups
//                                 data-placeholder="Select Gender"
//                               >
//                                 <option value="">Select...</option>
//                                 <option value="Cat1">Cat 1</option>
//                                 <option value="Cat2">Cat 2</option>
//                                 <option value="Other">Other</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div className="col-lg-4">
//                             <Form.Group className="form-outline mb-0 divv">
//                               <Form.Label>
//                                 Brand<span className="text-danger">*</span>
//                               </Form.Label>
//                               <InputGroup hasValidation>
//                                 <Field name="brand">
//                                   {({ field, form, meta }) => (
//                                     <>
//                                       <Select
//                                         className="react-select w-100"
//                                         id="brand"
//                                         name="brand"
//                                         value={brandOptions.find(
//                                           (option) =>
//                                             option.value === field.value
//                                         )}
//                                         onChange={(selectedOption) => {
//                                           form.setFieldValue(
//                                             field.name,
//                                             selectedOption
//                                               ? selectedOption.value
//                                               : null
//                                           );
//                                         }}
//                                         options={brandOptions}
//                                         isSearchable
//                                         styles={customStyles}
//                                         isInvalid={meta.touched && meta.error}
//                                         isValid={meta.touched && !meta.error}
//                                         onBlur={() =>
//                                           form.setFieldTouched(field.name, true)
//                                         }
//                                       />
//                                       {meta.touched && meta.error && (
//                                         <div className="invalid-feedback d-block">
//                                           {meta.error}
//                                         </div>
//                                       )}
//                                     </>
//                                   )}
//                                 </Field>
//                               </InputGroup>
//                             </Form.Group>
//                           </div>

//                           <div className="col-lg-4">
//                             <Form.Group className="form-outline mb-0 divv">
//                               <Form.Label>
//                                 Unit <span className="text-danger">*</span>
//                               </Form.Label>
//                               <InputGroup hasValidation>
//                                 <Field name="unit">
//                                   {({ field, form, meta }) => (
//                                     <>
//                                       <Select
//                                         className="react-select w-100"
//                                         id="unit"
//                                         name="unit"
//                                         value={unitOptions.find(
//                                           (option) =>
//                                             option.value === field.value
//                                         )}
//                                         onChange={(selectedOption) => {
//                                           form.setFieldValue(
//                                             field.name,
//                                             selectedOption
//                                               ? selectedOption.value
//                                               : null
//                                           );
//                                         }}
//                                         options={unitOptions}
//                                         isSearchable
//                                         styles={customStyles}
//                                         isInvalid={meta.touched && meta.error}
//                                         isValid={meta.touched && !meta.error}
//                                         onBlur={() =>
//                                           form.setFieldTouched(field.name, true)
//                                         }
//                                       />
//                                       {meta.touched && meta.error && (
//                                         <div className="invalid-feedback d-block">
//                                           {meta.error}
//                                         </div>
//                                       )}
//                                     </>
//                                   )}
//                                 </Field>
//                               </InputGroup>
//                             </Form.Group>
//                           </div>
//                         </div>

//                         <div className="row">
//                           <div className="col-lg-4">
//                             <Form.Group className="form-outline mb-4">
//                               <div className="d-flex align-items-center"></div>
//                               <Form.Label>
//                                 Price<span>*</span>
//                               </Form.Label>
//                               <InputGroup hasValidation>
//                                 <Form.Control
//                                   type="text"
//                                   name="price"
//                                   id="price"
//                                   value={values.price}
//                                   onChange={handleChange}
//                                   isInvalid={!!touched.price && !!errors.price}
//                                   isValid={touched.price && !errors.price}
//                                   // readOnly
//                                   className="form-control mb-0"
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                   {errors.price}
//                                 </Form.Control.Feedback>
//                               </InputGroup>
//                             </Form.Group>
//                           </div>

//                           <div className="col-lg-4">
//                             <Form.Group className="form-outline mb-4">
//                               <div className="d-flex align-items-center"></div>
//                               <Form.Label>
//                                 Stock<span>*</span>
//                               </Form.Label>
//                               <InputGroup hasValidation>
//                                 <Form.Control
//                                   type="text"
//                                   name="stock"
//                                   id="stock"
//                                   value={values.stock}
//                                   onChange={handleChange}
//                                   isInvalid={!!touched.stock && !!errors.stock}
//                                   isValid={touched.stock && !errors.stock}
//                                   // readOnly
//                                   className="form-control mb-0"
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                   {errors.stock}
//                                 </Form.Control.Feedback>
//                               </InputGroup>
//                             </Form.Group>
//                           </div>

//                           <div className="col-lg-4">
//                             <Form.Group className="form-outline mb-3">
//                               <Form.Label>
//                                 Status<span></span>
//                               </Form.Label>
//                               <InputGroup hasValidation>
//                                 <Form.Select
//                                   name="status"
//                                   id="status"
//                                   value={values.status}
//                                   onChange={handleChange}
//                                   isInvalid={
//                                     !!touched.status && !!errors.status
//                                   }
//                                   isValid={touched.status && !errors.status}
//                                   className="form-control mb-0"
//                                 >
//                                   <option value="">Select</option>
//                                   <option value={`${true}`}>Active</option>
//                                   <option value={`${false}`}>Inactive</option>
//                                 </Form.Select>
//                                 <Form.Control.Feedback type="invalid">
//                                   {errors.status}
//                                 </Form.Control.Feedback>
//                               </InputGroup>
//                             </Form.Group>
//                           </div>
//                         </div>

//                         <div className="row">
//                           <div className="col-lg-6">
//                             <Form.Group className="form-outline mb-0">
//                               <Form.Label>
//                                 <span></span>
//                               </Form.Label>
//                               <InputGroup hasValidation>
//                                 <JoditEditor
//                                   name="description"
//                                   id="description"
//                                   ref={editor}
//                                   value={content1}
//                                   onChange={(newContent) =>
//                                     setContent1(newContent)
//                                   }
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                   {errors.description}
//                                 </Form.Control.Feedback>
//                               </InputGroup>
//                             </Form.Group>
//                           </div>

//                           <div className="col-lg-6">
//                             <Form.Group className="form-outline mb-4 imgDiv divv">
//                               <Form.Label>
//                                 Image<span className="text-danger">*</span>
//                               </Form.Label>
//                               <Form.Control
//                                 type="file"
//                                 name="image"
//                                 id="image"
//                                 onChange={(event) => {
//                                   setFieldValue(
//                                     "image",
//                                     event.currentTarget.files[0]
//                                   );
//                                   onImageChange(event);
//                                 }}
//                                 isInvalid={!!touched.image && !!errors.image}
//                                 isValid={touched.image && !errors.image}
//                               />
//                               <Form.Control.Feedback type="invalid">
//                                 {errors.image}
//                               </Form.Control.Feedback>

//                               {showImage && (
//                                 <div>
//                                   <img
//                                     alt="product preview img"
//                                     style={{
//                                       width: "150px",
//                                       height: "150px",
//                                       marginTop: "20px",
//                                       borderRadius: "50%",
//                                     }}
//                                     src={showImage}
//                                   />
//                                 </div>
//                               )}
//                             </Form.Group>
//                           </div>
//                         </div>

//                         <div className="p-3 mt-3 rounded">
//                           <div className="row justify-content-end g-2">
//                             <div className="col-lg-2">
//                               <button
//                                 className="btn btn-outline-secondary w-100"
//                                 type="submit"
//                                 disabled={isSubmitting}
//                               >
//                                 {isSubmitting
//                                   ? "Submitting..."
//                                   : "Update Product"}
//                               </button>
//                             </div>
//                             <div className="col-lg-2">
//                               <button
//                                 className="btn btn-primary w-100"
//                                 type="reset"
//                               >
//                                 Cancel
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                         {/* message  */}
//                         {message && (
//                           <h2 className="text-center m-5">{message}</h2>
//                         )}
//                       </FormikForm>
//                     )}
//                   </Formik>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .h4 {
//     line-height: 0px !important;
//   }
// `;

// export default ProductEdit;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";

import JoditEditor from "jodit-react";
import { Formik, Form as FormikForm, Field } from "formik";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

import { useApiContext } from "../../context/ApiContext";

const schema = yup.object().shape({
  status: yup.boolean(),
  name: yup.string().required("Name is a required field!"),
  category: yup
    .object()
    .shape({
      value: yup.string().required(),
      label: yup.string().required(),
    })
    .nullable()
    .required("Category is a required field!"),
  brand: yup
    .object()
    .shape({
      value: yup.string().required(),
      label: yup.string().required(),
    })
    .nullable()
    .required("Brand is a required field!"),
  unit: yup
    .object()
    .shape({
      value: yup.string().required(),
      label: yup.string().required(),
    })
    .nullable()
    .required("Unit is a required field!"),
  price: yup.string(),
  stock: yup.string(),
  description: yup.string(),
  image: yup.mixed(),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const ProductEdit = () => {
  const { category, fetchCategory, brand, fetchBrand, unit, fetchUnit } =
    useApiContext();

  useEffect(() => {
    fetchCategory();
    fetchBrand();
    fetchUnit();
  }, [fetchBrand, fetchCategory, fetchUnit]);

  const [message, setMessage] = useState("");
  const [item, setItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const editor = useRef(null);
  const [showImage, setShowImage] = useState(null);

  // options
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);
  const [unitOptions, setUnitOptions] = useState([]);

  // Populate options from context data
  useEffect(() => {
    setCategoryOptions(category.map((c) => ({ value: c.id, label: c.name })));
    setBrandOptions(brand.map((b) => ({ value: b.id, label: b.name })));
    setUnitOptions(unit.map((u) => ({ value: u.id, label: u.name })));
  }, [brand, category, unit]);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid pink",
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "#FF6C2F" : "white",
      "&:hover": {
        backgroundColor: "#FF6C2F",
        color: "white",
      },
      padding: 10,
    }),
  };

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/product_api/product/${id}/`
      );
      setItem(data);
      setShowImage(data.image);
    };
    fetchProduct();
  }, [id]);

  // Update values
  const updatedValues = {
    status: item.status ? item.status : "",
    name: item.name || "",
    category: item.category
      ? categoryOptions.find((opt) => opt.value === item.category.id) || null
      : null,
    brand: item.brand
      ? brandOptions.find((opt) => opt.value === item.brand.id) || null
      : null,
    unit: item.unit
      ? unitOptions.find((opt) => opt.value === item.unit.id) || null
      : null,
    price: item.price || "",
    stock: item.stock || "",
    description: item.description || "",
    image: item.image || "",
  };

  const UpdateProductFunc = async (values) => {
    let formfield = new FormData();
    formfield.append("status", values.status === "true" ? true : false);
    formfield.append("name", values.name);
    formfield.append("category", values.category?.value);
    formfield.append("brand", values.brand?.value);
    formfield.append("unit", values.unit?.value);
    formfield.append("price", values.price);
    formfield.append("stock", values.stock);
    formfield.append("description", values.description);

    if (values.image && values.image !== item.image) {
      formfield.append("image", values.image);
    }

    await axios
      .put(
        `${process.env.REACT_APP_BASE_URL}/product_api/product/${item.id}/`,
        formfield
      )
      .then((response) => {
        setMessage("✅ Product successfully updated!");
        navigate("/product-list");
      })
      .catch((error) => {
        setMessage(`❌ Error: ${error.message}`);
      });
  };

  const submitUpdateProductForm = async (
    values,
    { setErrors, setSubmitting }
  ) => {
    try {
      setSubmitting(true);
      await UpdateProductFunc(values);
      setSubmitting(false);
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-xxl">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
              <h4 className="card-title flex-grow-1 fs-4">
                <Link to="/">Dashboard</Link> | Update Product
              </h4>
              <Link to="/product-list" className="btn btn-sm btn-primary fs-4">
                Product List
              </Link>
            </div>

            <div className="card-body">
              <Formik
                enableReinitialize={true}
                initialValues={updatedValues}
                validationSchema={schema}
                onSubmit={submitUpdateProductForm}
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
                  <FormikForm noValidate onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-4">
                        <Form.Group className="form-outline mb-3">
                          <Form.Label>
                            Product Name<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            isInvalid={!!touched.name && !!errors.name}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>

                      <div className="col-lg-4">
                        <Form.Group className="form-outline mb-3">
                          <Form.Label>
                            Category<span className="text-danger">*</span>
                          </Form.Label>
                          <Field name="category">
                            {({ field, form, meta }) => (
                              <>
                                <Select
                                  name="category"
                                  value={values.category} // <-- directly the object
                                  onChange={(selectedOption) =>
                                    form.setFieldValue(
                                      "category",
                                      selectedOption
                                    )
                                  }
                                  options={categoryOptions}
                                  styles={customStyles}
                                />
                                {meta.touched && meta.error && (
                                  <div className="invalid-feedback d-block">
                                    {meta.error}
                                  </div>
                                )}
                              </>
                            )}
                          </Field>
                        </Form.Group>
                      </div>

                      <div className="col-lg-4">
                        <Form.Group className="form-outline mb-3">
                          <Form.Label>
                            Brand<span className="text-danger">*</span>
                          </Form.Label>
                          <Field name="brand">
                            {({ field, form, meta }) => (
                              <>
                                <Select
                                  name="brand"
                                  value={values.brand} // <-- object
                                  onChange={(selectedOption) =>
                                    form.setFieldValue("brand", selectedOption)
                                  }
                                  options={brandOptions}
                                  styles={customStyles}
                                />
                                {meta.touched && meta.error && (
                                  <div className="invalid-feedback d-block">
                                    {meta.error}
                                  </div>
                                )}
                              </>
                            )}
                          </Field>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4">
                        <Form.Group className="form-outline mb-3">
                          <Form.Label>
                            Unit<span className="text-danger">*</span>
                          </Form.Label>
                          <Field name="unit">
                            {({ field, form, meta }) => (
                              <>
                                <Select
                                  name="unit"
                                  value={values.unit} // <-- object
                                  onChange={(selectedOption) =>
                                    form.setFieldValue("unit", selectedOption)
                                  }
                                  options={unitOptions}
                                  styles={customStyles}
                                />
                                {meta.touched && meta.error && (
                                  <div className="invalid-feedback d-block">
                                    {meta.error}
                                  </div>
                                )}
                              </>
                            )}
                          </Field>
                        </Form.Group>
                      </div>

                      <div className="col-lg-4">
                        <Form.Group className="form-outline mb-3">
                          <Form.Label>Price</Form.Label>
                          <Form.Control
                            type="text"
                            name="price"
                            value={values.price}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </div>

                      <div className="col-lg-4">
                        <Form.Group className="form-outline mb-3">
                          <Form.Label>Stock</Form.Label>
                          <Form.Control
                            type="text"
                            name="stock"
                            value={values.stock}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <Form.Group className="form-outline mb-3">
                          <Form.Label>Description</Form.Label>
                          <JoditEditor
                            ref={editor}
                            value={values.description}
                            onChange={(content) =>
                              setFieldValue("description", content)
                            }
                          />
                        </Form.Group>
                      </div>

                      <div className="col-lg-6">
                        <Form.Group className="form-outline mb-3">
                          <Form.Label>Image</Form.Label>
                          <Form.Control
                            type="file"
                            name="image"
                            onChange={(event) => {
                              setFieldValue(
                                "image",
                                event.currentTarget.files[0]
                              );
                              if (event.target.files?.[0]) {
                                setShowImage(
                                  URL.createObjectURL(event.target.files[0])
                                );
                              }
                            }}
                          />
                          {showImage && (
                            <div>
                              <img
                                src={showImage}
                                alt="preview"
                                style={{
                                  width: "150px",
                                  height: "150px",
                                  marginTop: "15px",
                                  borderRadius: "8px",
                                }}
                              />
                            </div>
                          )}
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
                              isInvalid={!!touched.status && !!errors.status}
                              isValid={touched.status && !errors.status}
                              className="form-control mb-0"
                            >
                              <option value="">Select</option>
                              <option value={`${true}`}>Active</option>
                              <option value={`${false}`}>Inactive</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              {errors.status}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="p-3 mt-3 rounded">
                      <div className="row justify-content-end g-2">
                        <div className="col-lg-2">
                          <button
                            className="btn btn-outline-secondary w-100"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Update Product"}
                          </button>
                        </div>
                        <div className="col-lg-2">
                          <button
                            className="btn btn-primary w-100"
                            type="reset"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>

                    {message && (
                      <h5 className="text-center mt-4 text-success">
                        {message}
                      </h5>
                    )}
                  </FormikForm>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .card {
    border-radius: 10px;
  }
`;

export default ProductEdit;
