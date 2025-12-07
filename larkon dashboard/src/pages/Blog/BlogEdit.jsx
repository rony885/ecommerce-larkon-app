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
  title: yup.string().required("Title is a required field!"),
  author: yup.string().required("Author is a required field!"),
  description: yup.string(),
  image: yup.mixed().required("Image is a required field!"),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const BlogEdit = () => {
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
    title: item.title ? item.title : "",
    author: item.author ? item.author : "",
    description: item.description ? item.description : "",
    image: item.image ? item.image : "",
  };

  const UpdateBlogFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("title", values.title);
    formfield.append("author", values.author);
    formfield.append("description", values.description);

    if (values.image !== item.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BASE_URL}/blog_api/blog/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Blog is successfully updated...");
        navigate("/blogs");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateServiceForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      setSubmitting(true);
      await UpdateBlogFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const updateBlog = async (id) => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/blog_api/blog/${id}/`
      );
      setItem(data);
      setShowImage(data.image);
    };
    updateBlog(id);
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
                    | Product Add
                  </h4>
                  <Link to="/blogs" className="btn btn-sm btn-primary fs-4">
                    Blog
                  </Link>
                </div>

                <div className="card-body">
                  <Formik
                    enableReinitialize={true}
                    initialValues={updatedValues}
                    validationSchema={schema}
                    onSubmit={submitUpdateServiceForm}
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
                                Title
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="title"
                                  id="title"
                                  value={values.title}
                                  onChange={handleChange}
                                  isInvalid={!!touched.title && !!errors.title}
                                  isValid={touched.title && !errors.title}
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.title}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-6">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label>
                                Author
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="author"
                                  id="author"
                                  value={values.author}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.author && !!errors.author
                                  }
                                  isValid={touched.author && !errors.author}
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.author}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-12">
                            <Form.Group className="form-outline mb-3 imgDiv divv">
                              <Form.Label>
                                Image
                                <span className="text-danger">*</span>
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
                                    alt="img"
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

                          <div className="col-lg-12">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label>
                                description
                                <span className=""></span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  as="textarea"
                                  name="description"
                                  id="description"
                                  rows="7"
                                  value={values.description}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.description &&
                                    !!errors.description
                                  }
                                  isValid={
                                    touched.description && !errors.description
                                  }
                                  className="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.description}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>
                        </div>

                        <div className="p-3 mb-3 rounded mt-4">
                          <div className="row justify-content-end g-2">
                            <div className="col-lg-2">
                              <button
                                className="btn btn-outline-secondary w-100"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? "Submitting..." : "Update Blog"}
                              </button>
                            </div>
                            <div className="col-lg-2">
                              <button
                                type="reset"
                                className="btn btn-primary w-100"
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

export default BlogEdit;
