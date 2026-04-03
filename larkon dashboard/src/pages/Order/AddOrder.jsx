import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import "@iconify-icon/react";

import { Formik, Form as FormikForm, Field } from "formik";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

import { useApiContext } from "../../context/ApiContext";

const initialValues = {
  date: "",
  client: "",
  address: "",
  delivery_charge: "",
  delivery_type: "",
  courier: "",
  order_status: "",
  product: "",
  price: "",
  quantity: "",
  discount: "",
  subtotal: "",
  payable_amount: "",
  paid_amount: "",
  due: "",
  total_amount: "",
};

const schema = yup.object().shape({
  date: yup.string().required("Date and time is a required field!"),
  client: yup.string().required("Client is a required field!"),
  address: yup.string().required("Address is a required field!"),

  delivery_charge: yup.string(),
  delivery_type: yup.string(),
  courier: yup.string(),
  order_status: yup.string(),

  product: yup.string().required("Product is a required field!"),
  price: yup.string(),
  quantity: yup.string(),

  discount: yup.string(),
  subtotal: yup.string(),

  payable_amount: yup.string(),
  paid_amount: yup.string(),
  due: yup.string(),
  total_amount: yup.string(),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const AddOrder = () => {
  const {
    product,
    courier,
    deliveryType,
    client,
    // order,
    // orderStatus,

    fetchProduct,
    fetchCourier,
    fetchDeliveryType,
    fetchClient,
    fetchOrder,
  } = useApiContext();

  useEffect(() => {
    fetchProduct();
    fetchCourier();
    fetchDeliveryType();
    fetchClient();
    fetchOrder();
  }, [fetchProduct, fetchCourier, fetchDeliveryType, fetchClient, fetchOrder]);

  const [message, setMessage] = useState();
  const navigate = useNavigate();

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

  const calculateValues = (name, value, values, setFieldValue) => {
    const updatedValues = { ...values, [name]: value };

    const price = Number(updatedValues.price) || 0;
    const quantity = Number(updatedValues.quantity) || 0;
    const discount = Number(updatedValues.discount) || 0;
    const delivery = Number(updatedValues.delivery_charge) || 0;
    const paid = Number(updatedValues.paid_amount) || 0;

    // 1️⃣ Subtotal
    const subtotal = price * quantity;

    // 2️⃣ Total Amount
    const totalAmount = subtotal - discount + delivery;

    // 3️⃣ Payable Amount (same as total)
    const payableAmount = totalAmount;

    // 4️⃣ Due
    const due = payableAmount - paid;

    setFieldValue("subtotal", subtotal);
    setFieldValue("total_amount", totalAmount);
    setFieldValue("payable_amount", payableAmount);
    setFieldValue("due", due);
  };

  // const orderStatusOptions = [
  //   ...new Set(order.map((item) => item.order_status)),
  // ].map((status) => ({
  //   value: status,
  //   label: status.charAt(0).toUpperCase() + status.slice(1),
  // }));

  // add
  const AddOrderFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("date", values.date);
    formfield.append("client", values.client);
    formfield.append("address", values.address);

    formfield.append("delivery_charge", Number(values.delivery_charge));
    formfield.append("delivery_type", values.delivery_type);
    formfield.append("courier", values.courier);
    formfield.append("order_status", values.order_status);

    formfield.append("product", values.product);
    formfield.append("price", Number(values.price));
    formfield.append("quantity", Number(values.quantity));

    formfield.append("discount", Number(values.discount));
    formfield.append("subtotal", Number(values.subtotal));

    formfield.append("payable_amount", Number(values.payable_amount));
    formfield.append("paid_amount", Number(values.paid_amount));
    formfield.append("due", Number(values.due));
    formfield.append("total_amount", Number(values.total_amount));

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/order/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Order is successfuly created...");
        navigate("/order-list");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.message, "Error");
      });
  };

  const submitAddOrderForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      setSubmitting(true);
      await AddOrderFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      console.log(error);
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                <h4 className="card-title flex-grow-1 fs-4">
                  <Link to="/">Dashboard</Link> | Create Order
                </h4>
                <Link to="/order-list" className="btn btn-sm btn-primary fs-5">
                  Order List
                </Link>
              </div>

              <div className="card-body">
                <Formik
                  initialValues={initialValues}
                  validationSchema={schema}
                  onSubmit={submitAddOrderForm}
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
                        <div className="col-lg-3">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Date
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="date"
                                name="date"
                                id="date"
                                value={values.date}
                                onChange={handleChange}
                                isInvalid={!!touched.date && !!errors.date}
                                isValid={touched.date && !errors.date}
                                className="form-control mb-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.date}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </div>
                        <div className="col-lg-3">
                          <Form.Group className="form-outline mb-3 divv">
                            <Form.Label>
                              Customer
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Field name="client">
                                {({ field, form, meta }) => (
                                  <>
                                    <Select
                                      className="react-select w-100"
                                      id="client"
                                      name="client"
                                      value={client.find(
                                        (option) => option.id === field.value,
                                      )}
                                      onChange={(selectedOption) => {
                                        form.setFieldValue(
                                          field.name,
                                          selectedOption
                                            ? selectedOption.id
                                            : null,
                                        );
                                      }}
                                      options={client}
                                      getOptionLabel={(option) => option.name}
                                      getOptionValue={(option) => option.id}
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
                        <div className="col-lg-3">
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
                                isValid={touched.address && !errors.address}
                                className="form-control mb-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.address}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </div>

                        <div className="col-lg-3">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Delivery Charge
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="delivery_charge"
                                id="delivery_charge"
                                value={values.delivery_charge}
                                // onChange={handleChange}
                                onChange={(e) => {
                                  handleChange(e);
                                  calculateValues(
                                    "delivery_charge",
                                    e.target.value,
                                    values,
                                    setFieldValue,
                                  );
                                }}
                                isInvalid={
                                  !!touched.delivery_charge &&
                                  !!errors.delivery_charge
                                }
                                isValid={
                                  touched.delivery_charge &&
                                  !errors.delivery_charge
                                }
                                className="form-control mb-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.delivery_charge}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3">
                          <Form.Group className="form-outline mb-3 divv">
                            <Form.Label>
                              Delivery Type
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Field name="delivery_type">
                                {({ field, form, meta }) => (
                                  <>
                                    <Select
                                      className="react-select w-100"
                                      id="delivery_type"
                                      name="delivery_type"
                                      value={deliveryType.find(
                                        (option) => option.id === field.value,
                                      )}
                                      onChange={(selectedOption) => {
                                        form.setFieldValue(
                                          field.name,
                                          selectedOption
                                            ? selectedOption.id
                                            : null,
                                        );
                                      }}
                                      options={deliveryType}
                                      getOptionLabel={(option) => option.name}
                                      getOptionValue={(option) => option.id}
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
                        <div className="col-lg-3">
                          <Form.Group className="form-outline mb-3 divv">
                            <Form.Label>
                              Courier
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Field name="courier">
                                {({ field, form, meta }) => (
                                  <>
                                    <Select
                                      className="react-select w-100"
                                      id="courier"
                                      name="courier"
                                      value={courier.find(
                                        (option) => option.id === field.value,
                                      )}
                                      onChange={(selectedOption) => {
                                        form.setFieldValue(
                                          field.name,
                                          selectedOption
                                            ? selectedOption.id
                                            : null,
                                        );
                                      }}
                                      options={courier}
                                      getOptionLabel={(option) => option.name}
                                      getOptionValue={(option) => option.id}
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
                        <div className="col-lg-3">
                          {/* <Form.Group className="form-outline mb-3 divv">
                            <Form.Label>
                              Delivery Status
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Field name="orderStatus">
                                {({ field, form, meta }) => (
                                  <>
                                    <select className="react-select w-100 py-1">
                                      <option value="new">New</option>
                                      <option value="pending">Pending</option>
                                      <option value="confirmed">
                                        Confirmed
                                      </option>
                                      <option value="shipped">Shipped</option>
                                      <option value="delivered">
                                        Delivered
                                      </option>
                                      <option value="cancelled">
                                        Cancelled
                                      </option>
                                    </select>

                                    {meta.touched && meta.error && (
                                      <div className="invalid-feedback d-block">
                                        {meta.error}
                                      </div>
                                    )}
                                  </>
                                )}
                              </Field>
                            </InputGroup>
                          </Form.Group>  */}

                          <Form.Group className="form-outline mb-3 divv">
                            <Form.Label>
                              Delivery Status
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              as="select"
                              name="order_status"
                              value={values.order_status}
                              onChange={handleChange}
                            >
                              <option value="">Select Status</option>
                              <option value="new">New</option>
                              <option value="pending">Pending</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="shipped">Shipped</option>
                              <option value="delivered">Delivered</option>
                              <option value="cancelled">Cancelled</option>
                            </Form.Control>
                          </Form.Group>
                        </div>
                        <div className="col-lg-3">
                          <Form.Group className="form-outline mb-3 divv">
                            <Form.Label>
                              Product
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Field name="product">
                                {({ field, form, meta }) => (
                                  <>
                                    <Select
                                      className="react-select w-100"
                                      id="product"
                                      name="product"
                                      value={product.find(
                                        (option) => option.id === field.value,
                                      )}
                                      onChange={(selectedOption) => {
                                        form.setFieldValue(
                                          field.name,
                                          selectedOption
                                            ? selectedOption.id
                                            : null,
                                        );
                                      }}
                                      options={product}
                                      getOptionLabel={(option) => option.name}
                                      getOptionValue={(option) => option.id}
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
                        <div className="col-lg-3">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Price
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="price"
                                id="price"
                                // onChange={handleChange}
                                value={values.price}
                                onChange={(e) => {
                                  handleChange(e);
                                  calculateValues(
                                    "price",
                                    e.target.value,
                                    values,
                                    setFieldValue,
                                  );
                                }}
                                isInvalid={!!touched.price && !!errors.price}
                                isValid={touched.price && !errors.price}
                                className="form-control mb-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.price}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </div>
                        <div className="col-lg-3">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Quantity
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="quantity"
                                id="quantity"
                                value={values.quantity}
                                // onChange={handleChange}
                                onChange={(e) => {
                                  handleChange(e);
                                  calculateValues(
                                    "quantity",
                                    e.target.value,
                                    values,
                                    setFieldValue,
                                  );
                                }}
                                isInvalid={
                                  !!touched.quantity && !!errors.quantity
                                }
                                isValid={touched.quantity && !errors.quantity}
                                className="form-control mb-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.quantity}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </div>
                        <div className="col-lg-3">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Discount
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="discount"
                                id="discount"
                                value={values.discount}
                                // onChange={handleChange}
                                onChange={(e) => {
                                  handleChange(e);
                                  calculateValues(
                                    "discount",
                                    e.target.value,
                                    values,
                                    setFieldValue,
                                  );
                                }}
                                isInvalid={
                                  !!touched.discount && !!errors.discount
                                }
                                isValid={touched.discount && !errors.discount}
                                className="form-control mb-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.discount}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </div>
                        <div className="col-lg-3">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Sub Total
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="subtotal"
                                id="subtotal"
                                value={values.subtotal}
                                // onChange={handleChange}
                                readOnly
                                isInvalid={
                                  !!touched.subtotal && !!errors.subtotal
                                }
                                isValid={touched.subtotal && !errors.subtotal}
                                className="form-control mb-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.subtotal}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Payable Amount
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="payable_amount"
                                id="payable_amount"
                                value={values.payable_amount}
                                // onChange={handleChange}
                                readOnly
                                isInvalid={
                                  !!touched.payable_amount &&
                                  !!errors.payable_amount
                                }
                                isValid={
                                  touched.payable_amount &&
                                  !errors.payable_amount
                                }
                                className="form-control mb-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.payable_amount}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </div>
                        <div className="col-lg-3">
                          {/* <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Paid Amount
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="paid_amount"
                                id="paid_amount"
                                value={values.paid_amount}
                                onChange={handleChange}
                                onChange={(e) => {
                                  handleChange(e);
                                  calculateValues(
                                    "paid_amount",
                                    e.target.value,
                                    values,
                                    setFieldValue,
                                  );
                                }}
                                isInvalid={
                                  !!touched.paid_amount && !!errors.paid_amount
                                }
                                isValid={
                                  touched.paid_amount && !errors.paid_amount
                                }
                                className="form-control mb-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.paid_amount}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group> */}

                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Paid Amount
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="paid_amount"
                                id="paid_amount"
                                value={values.paid_amount}
                                onChange={(e) => {
                                  const value = e.target.value;

                                  // Update Formik value
                                  handleChange(e);

                                  // Recalculate totals
                                  calculateValues(
                                    "paid_amount",
                                    value,
                                    values,
                                    setFieldValue,
                                  );

                                  // Check for overpayment
                                  const payable =
                                    Number(values.payable_amount) || 0;
                                  const paid = Number(value) || 0;

                                  if (paid > payable) {
                                    alert(
                                      `You have entered an amount greater than the payable amount (${payable}).`,
                                    );
                                  }
                                }}
                                isInvalid={
                                  !!touched.paid_amount && !!errors.paid_amount
                                }
                                isValid={
                                  touched.paid_amount && !errors.paid_amount
                                }
                                className="form-control mb-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.paid_amount}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </div>
                        <div className="col-lg-3">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Due
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="due"
                                id="due"
                                value={values.due}
                                onChange={handleChange}
                                isInvalid={!!touched.due && !!errors.due}
                                isValid={touched.due && !errors.due}
                                className="form-control mb-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.due}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </div>
                        <div className="col-lg-3">
                          <Form.Group className="form-outline mb-3">
                            <Form.Label>
                              Total Amount
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                name="total_amount"
                                id="total_amount"
                                value={values.total_amount}
                                // onChange={handleChange}
                                readOnly
                                isInvalid={
                                  !!touched.total_amount &&
                                  !!errors.total_amount
                                }
                                isValid={
                                  touched.total_amount && !errors.total_amount
                                }
                                className="form-control mb-0"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.total_amount}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end gap-2 my-2">
                        <button type="reset" className="btn btn-danger">
                          Cancel
                        </button>
                        <button
                          className="btn btn-success"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Add Order"}
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
      <Footer />
    </div>
  );
};

export default AddOrder;
