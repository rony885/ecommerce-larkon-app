import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  status: yup.boolean(),
  name: yup.string().required("Category name is a required field!"),
  image: yup.mixed(),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const CategoryEdit = () => {
  const [message, setMessage] = useState();
  const [item, setItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const [showImage, setShowImage] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  // update
  const updatedValues = {
    status: item.status ? item.status : "",
    name: item.name ? item.name : "",
    image: item.image ? item.image : "",
  };

  const UpdateCategoryFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status);
    formfield.append("name", values.name);

    if (values.image !== item.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BASE_URL}/product_api/category/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Category is successfully updated...");
        navigate("/category-list");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateCategoryForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      setSubmitting(true);
      await UpdateCategoryFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const updateCategory = async (id) => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/product_api/category/${id}/`
      );

      setItem(data);
      setShowImage(data.image);
    };
    updateCategory(id);
  }, [id]);

  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-xxl">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                  <h4 className="card-title flex-grow-1 fs-4">
                    <Link to="/" data-discover="true">
                      Dashboard
                    </Link>{" "}
                    | Category Edit
                  </h4>
                  <Link
                    to="/category-list"
                    className="btn btn-sm btn-primary fs-4"
                  >
                    Category List
                  </Link>
                </div>

                <div className="card-body">
                  <Formik
                    enableReinitialize={true}
                    initialValues={updatedValues}
                    validationSchema={schema}
                    onSubmit={submitUpdateCategoryForm}
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
                            <Form.Group className="form-outline mb-3">
                              <Form.Label>
                                Category Name
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="name"
                                  id="name"
                                  value={values.name}
                                  onChange={handleChange}
                                  isInvalid={!!touched.name && !!errors.name}
                                  isValid={touched.name && !errors.name}
                                  className="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.name}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

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

                        <div className="row">
                          <div className="col-lg-12">
                            <Form.Group className="form-outline mb-4 imgDiv divv">
                              <Form.Label>
                                Image<span></span>
                              </Form.Label>
                              <Form.Control
                                type="file"
                                name="image"
                                id="image"
                                onChange={(event) => {
                                  setFieldValue(
                                    "image",
                                    event.currentTarget.files[0]
                                  );
                                  onImageChange(event);
                                }}
                                isInvalid={!!touched.image && !!errors.image}
                                isValid={touched.image && !errors.image}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.image}
                              </Form.Control.Feedback>

                              {showImage && (
                                <div>
                                  <img
                                    alt="product preview img"
                                    style={{
                                      width: "150px",
                                      height: "150px",
                                      marginTop: "20px",
                                      borderRadius: "50%",
                                    }}
                                    src={showImage}
                                  />
                                </div>
                              )}
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
                                {isSubmitting
                                  ? "Submitting..."
                                  : "Category Edit"}
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
        <Footer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default CategoryEdit;
