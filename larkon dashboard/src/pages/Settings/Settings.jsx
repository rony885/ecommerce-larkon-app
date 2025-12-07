import React, { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import JoditEditor from "jodit-react";
import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string(),
  phone: yup.string(),
  email: yup.string(),
  address: yup.string(),
  map_url: yup.string(),
  facebook_url: yup.string(),
  instagram_url: yup.string(),
  twitter_url: yup.string(),
  linkedin_url: yup.string(),
  description: yup.string(),
  logo: yup.mixed(),
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

  return errors;
};

const Settings = () => {
  const [message, setMessage] = useState();
  const [item, setItem] = useState({});

  // for image
  const [showLogo, setShowLogo] = useState(null);

  const onLogoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowLogo(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [content, setContent] = useState("");
  const editor = useRef(null);

  // update
  const updatedValues = {
    name: item.name ? item.name : "",
    phone: item.phone ? item.phone : "",
    email: item.email ? item.email : "",
    address: item.address ? item.address : "",
    map_url: item.map_url ? item.map_url : "",
    facebook_url: item.facebook_url ? item.facebook_url : "",
    instagram_url: item.instagram_url ? item.instagram_url : "",
    twitter_url: item.twitter_url ? item.twitter_url : "",
    linkedin_url: item.linkedin_url ? item.linkedin_url : "",
    description: item.description ? item.description : "",
    logo: item.logo ? item.logo : "",
  };

  const UpdateGeneralSettingsFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("name", values.name);
    formfield.append("phone", values.phone);
    formfield.append("email", values.email);
    formfield.append("address", values.address);
    formfield.append("map_url", values.map_url);
    formfield.append("facebook_url", values.facebook_url);
    formfield.append("instagram_url", values.instagram_url);
    formfield.append("twitter_url", values.twitter_url);
    formfield.append("linkedin_url", values.linkedin_url);
    formfield.append("description", content); // from editor content

    if (values.image !== item.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/settings_api/generalSettings/1/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(
          response.success,
          "General Settings is successfully updated..."
        );
        // navigate("/category-list");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateGeneralSettings = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      setSubmitting(true);
      await UpdateGeneralSettingsFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const updateGeneralSettings = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/settings_api/generalSettings/1/`
      );

      setItem(data);
      setShowLogo(data.logo);
      setContent(data.description);
    };
    updateGeneralSettings();
  }, []);

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                <h4 className="card-title flex-grow-1 fs-4">
                  <Link to="/" data-discover="true">
                    Dashboard
                  </Link>{" "}
                  | Client
                </h4>
              </div>

              <div className="card-body">
                <Formik
                  enableReinitialize={true}
                  initialValues={updatedValues}
                  validationSchema={schema}
                  onSubmit={submitUpdateGeneralSettings}
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
                              Name<span className="text-danger">*</span>
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
                        <div className="col-lg-6">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Phone<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="phone"
                              value={values.phone}
                              onChange={handleChange}
                              isInvalid={!!touched.phone && !!errors.phone}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.phone}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Email<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              isInvalid={!!touched.email && !!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-lg-6">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Address<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="address"
                              value={values.address}
                              onChange={handleChange}
                              isInvalid={!!touched.address && !!errors.address}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.address}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Map Url<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="map_url"
                              value={values.map_url}
                              onChange={handleChange}
                              isInvalid={!!touched.map_url && !!errors.map_url}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.map_url}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-lg-6">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Facebook Url<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="facebook_url"
                              value={values.facebook_url}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.facebook_url && !!errors.facebook_url
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.facebook_url}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-4">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Instagram Url
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="instagram_url"
                              value={values.instagram_url}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.instagram_url &&
                                !!errors.instagram_url
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.instagram_url}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-lg-4">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Twitter Url
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="twitter_url"
                              value={values.twitter_url}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.twitter_url && !!errors.twitter_url
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.twitter_url}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-lg-4">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Linkedin Url
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="linkedin_url"
                              value={values.linkedin_url}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.linkedin_url && !!errors.linkedin_url
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.linkedin_url}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <Form.Group className="form-outline mb-2">
                            <Form.Label className="labelText">
                              Description<span></span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <JoditEditor
                                name="description"
                                id="description"
                                ref={editor}
                                value={content}
                                onChange={(newContent) =>
                                  setContent(newContent)
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.description}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <Form.Group className="form-outline mb-3 imgDiv divv">
                            <Form.Label>
                              Logo <span></span>
                            </Form.Label>
                            <Form.Control
                              type="file"
                              name="homeBannerImage1"
                              id="homeBannerImage1"
                              onChange={(event) => {
                                setFieldValue(
                                  "homeBannerImage1",
                                  event.currentTarget.files[0]
                                );
                                onLogoChange(event);
                              }}
                              isInvalid={
                                !!touched.homeBannerImage1 &&
                                !!errors.homeBannerImage1
                              }
                              isValid={
                                touched.homeBannerImage1 &&
                                !errors.homeBannerImage1
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.homeBannerImage1}
                            </Form.Control.Feedback>

                            {showLogo && (
                              <div>
                                <img
                                  alt="Preview img"
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

                      <div className="p-3 mt-3 rounded">
                        <div className="row justify-content-end g-2">
                          <div className="col-lg-2">
                            <button
                              className="btn btn-outline-secondary w-100"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Submitting..." : "Save"}
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
  );
};

export default Settings;
