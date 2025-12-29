import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Form as FormikForm, Field } from "formik";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

import { useApiContext } from "../../context/ApiContext";

const initialValues = {
  purchase_date: "",
  supplier_name: "",
  product_name: "",
  // quantity: "",
  // unit_price: "",
  // total_price: "",
  quantity: 0,
  unit_price: "",
  total_price: "",
};

const schema = yup.object().shape({
  purchase_date: yup.string().required("Purchase Date is a required field!"),
  supplier_name: yup.string().required("Supplier is a required field!"),
  product_name: yup.string(),
  quantity: yup.string(),
  unit_price: yup.string(),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const AddPurchase = () => {
  // data fetching
  const { product, supplier, fetchSupplier, fetchProduct } = useApiContext();

  useEffect(() => {
    fetchSupplier();
    fetchProduct();
  }, [fetchProduct, fetchSupplier]);

  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const [supplierOptions, setSupplierOptions] = useState([]);
  const [productOptions, setProductOptions] = useState([]);

  useEffect(() => {
    //supplier
    const userSupplierOptions = supplier.map((user) => ({
      value: user.id,
      label: user.name,
    }));
    setSupplierOptions(userSupplierOptions);

    //product
    const userProductOptions = product.map((user) => ({
      value: user.id,
      // label: `${user.product_name}------${user.unit_price}`,
      label: user.name,
    }));
    setProductOptions(userProductOptions);
  }, [product, supplier]);

  const calculateTotal = (qty, price, setFieldValue) => {
    const q = Number(qty) || 0;
    const p = Number(price) || 0;
    setFieldValue("total_price", q * p);
  };

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

  // add
  const AddProductFunc = async (values) => {
    let formfield = new FormData();
    formfield.append("purchase_date", values.purchase_date);
    formfield.append("supplier_name", values.supplier_name);
    formfield.append("product_name", values.product_name);
    formfield.append("product_name", values.product_name);
    formfield.append("quantity", values.quantity);
    formfield.append("unit_price", values.unit_price);
    formfield.append("total_price", values.total_price);

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/purchase_api/purchase/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(
          response.success,
          " Purchase Product is successfuly created..."
        );
        navigate("/purchase-list");
        window.location.reload(false);
        console.log(response);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
        console.log(error);
      });
  };

  const submitAddProductForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      setSubmitting(true);
      await AddProductFunc(values);
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
            <div className="col-xl-12 col-lg-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                  <h4 className="card-title flex-grow-1 fs-4">
                    <Link to="/" data-discover="true">
                      Dashboard
                    </Link>{" "}
                    | Purchase Add
                  </h4>
                  <Link
                    to="/purchase-list"
                    className="btn btn-sm btn-primary fs-4"
                  >
                    Purchase List
                  </Link>
                </div>

                <div className="card-body">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={submitAddProductForm}
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
                          <div className="col-lg-4">
                            <Form.Group className="form-outline col-lg-6 mb-2 w-100 divvv">
                              <Form.Label>
                                Purchase Date
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="date"
                                  name="purchase_date"
                                  id="purchase_date"
                                  value={values.purchase_date}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.purchase_date &&
                                    !!errors.purchase_date
                                  }
                                  isValid={
                                    touched.purchase_date &&
                                    !errors.purchase_date
                                  }
                                  className="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.purchase_date}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-4">
                            <Form.Group className="form-outline col-lg-6 mb-2 w-100 divvv">
                              <Form.Label>
                                Supplier<span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation className="w-100">
                                <Field name="supplier_name">
                                  {({ field, form, meta }) => (
                                    <>
                                      <Select
                                        className="w-100"
                                        id="supplier_name"
                                        name="supplier_name"
                                        value={supplierOptions.find(
                                          (option) =>
                                            option.value === field.value
                                        )}
                                        onChange={(selectedOption) => {
                                          form.setFieldValue(
                                            field.name,
                                            selectedOption
                                              ? selectedOption.value
                                              : null
                                          );
                                        }}
                                        options={supplierOptions}
                                        isSearchable
                                        styles={customStyles}
                                        isInvalid={meta.touched && meta.error}
                                        isValid={meta.touched && !meta.error}
                                        onBlur={() =>
                                          form.setFieldTouched(field.name, true)
                                        }
                                      />
                                      {meta.touched && meta.error && (
                                        <div className="invalid-feedback d-block">
                                          {meta.error}
                                        </div>
                                      )}
                                    </>
                                  )}
                                </Field>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-4">
                            <Form.Group className="form-outline col-lg-6 mb-2 w-100 divvv">
                              <Form.Label>
                                Product <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation className="w-100">
                                <Field name="product_name">
                                  {({ field, form, meta }) => (
                                    <>
                                      <Select
                                        className="w-100"
                                        id="product_name"
                                        name="product_name"
                                        value={productOptions.find(
                                          (option) =>
                                            option.value === field.value
                                        )}
                                        onChange={(selectedOption) => {
                                          form.setFieldValue(
                                            field.name,
                                            selectedOption
                                              ? selectedOption.value
                                              : null
                                          );
                                        }}
                                        options={productOptions}
                                        isSearchable
                                        styles={customStyles}
                                        isInvalid={meta.touched && meta.error}
                                        isValid={meta.touched && !meta.error}
                                        onBlur={() =>
                                          form.setFieldTouched(field.name, true)
                                        }
                                      />
                                      {meta.touched && meta.error && (
                                        <div className="invalid-feedback d-block">
                                          {meta.error}
                                        </div>
                                      )}
                                    </>
                                  )}
                                </Field>
                              </InputGroup>
                            </Form.Group>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4">
                            <div className="mb-2">
                              <label className="form-label">Quantity</label>

                              <div className="input-group quantity-group">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    const qty = Math.max(
                                      0,
                                      values.quantity - 1
                                    );
                                    setFieldValue("quantity", qty);
                                    calculateTotal(
                                      qty,
                                      values.unit_price,
                                      setFieldValue
                                    );
                                  }}
                                >
                                  −
                                </button>

                                <input
                                  type="number"
                                  className="form-control text-center"
                                  value={values.quantity}
                                  min="0"
                                  onChange={(e) => {
                                    const qty = Number(e.target.value);
                                    setFieldValue("quantity", qty);
                                    calculateTotal(
                                      qty,
                                      values.unit_price,
                                      setFieldValue
                                    );
                                  }}
                                />

                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    const qty = values.quantity + 1;
                                    setFieldValue("quantity", qty);
                                    calculateTotal(
                                      qty,
                                      values.unit_price,
                                      setFieldValue
                                    );
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* <div className="col-lg-4">
                            <Form.Group className="form-outline mb-2">
                              <Form.Label>
                                Unit Price
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="unit_price"
                                  id="unit_price"
                                  value={values.unit_price}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.unit_price && !!errors.unit_price
                                  }
                                  isValid={
                                    touched.unit_price && !errors.unit_price
                                  }
                                  className="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.unit_price}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div> */}

                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-2">
                              <Form.Label>
                                Unit Price{" "}
                                <span className="text-danger">*</span>
                              </Form.Label>

                              <InputGroup>
                                <Form.Control
                                  type="text"
                                  name="unit_price"
                                  value={values.unit_price}
                                  min="0"
                                  onChange={(e) => {
                                    const price = Number(e.target.value);
                                    setFieldValue("unit_price", price);
                                    calculateTotal(
                                      values.quantity,
                                      price,
                                      setFieldValue
                                    );
                                  }}
                                />
                              </InputGroup>
                            </Form.Group>
                          </div>

                          {/* 
                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-2">
                              <Form.Label>
                                Total Price
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="unit_price"
                                  id="unit_price"
                                  value={values.unit_price}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.unit_price && !!errors.unit_price
                                  }
                                  isValid={
                                    touched.unit_price && !errors.unit_price
                                  }
                                  readOnly
                                  className="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.unit_price}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div> */}

                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-2">
                              <Form.Label>
                                Total Price{" "}
                                <span className="text-danger">*</span>
                              </Form.Label>

                              <InputGroup>
                                <Form.Control
                                  type="number"
                                  name="total_price"
                                  value={values.total_price}
                                  readOnly
                                />
                              </InputGroup>
                            </Form.Group>
                          </div>
                        </div>

                        <div className="p-3 mt-2 rounded">
                          <div className="row justify-content-end g-2">
                            <div className="col-lg-2">
                              <button
                                className="btn btn-outline-secondary w-100"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                {isSubmitting
                                  ? "Submitting..."
                                  : "Purchase Add"}
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

const Wrapper = styled.section`
  .h4 {
    line-height: 0px !important;
  }

  .quantity-group button {
    font-weight: bold;
  }

  .quantity-group input {
    font-weight: 600;
  }
`;

export default AddPurchase;
