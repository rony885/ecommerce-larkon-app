import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "@iconify-icon/react";
import Tooltip from "@mui/material/Tooltip";

import { Formik, Form as FormikForm, Field } from "formik";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";
import { useApiContext } from "../../context/ApiContext";

const schema = yup.object().shape({
  courier: yup.string(),
  order_status: yup.string(),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const OrderList = () => {
  const { order, courier, fetchOrder, fetchCourier } = useApiContext();

  useEffect(() => {
    fetchOrder();
    fetchCourier();
  }, [fetchOrder, fetchCourier]);

  const [message, setMessage] = useState();

  const [item, setItem] = useState({});
  const [receivedId, setReceivedId] = useState(null);

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

  // ====== update ======
  const updatedValues = {
    courier: item.courier ? item.courier : "",
    order_status: item.order_status ? item.order_status : "",
  };

  const UpdateBrandFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("courier", values.courier);
    formfield.append("order_status", values.order_status);

    await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BASE_URL}/order/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Order is successfully updated...");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateBrandForm = async (
    values,
    { setErrors, setSubmitting },
  ) => {
    try {
      UpdateBrandFunc(values);
      setSubmitting(false);
    } catch (error) {
      setErrors({ err: error.message });
    }
  };

  const updateOrder = async (id) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/order/${id}/`,
    );
    setItem(data);
  };

  // delete
  const getId = (id) => {
    setReceivedId(id);
  };

  const deleteOrder = async (id) => {
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/order/${id}/`);
    window.location.reload(false);
  };

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                <h4 className="card-title flex-grow-1 fs-4">
                  <Link to="/">Dashboard</Link> | Order List
                </h4>
                <Link
                  to="/add-order"
                  className="btn btn-sm btn-primary fs-5"
                  // data-bs-toggle="modal"
                  // data-bs-target="#createModalCenteredScrollable"
                >
                  Create Order
                </Link>
              </div>

              <div className="table-responsive">
                <div className="barcode-input mb-2 mx-2">
                  <input
                    type="text"
                    className="form-control w-100"
                    placeholder="Search here..."
                  />
                </div>
                <table className="table align-middle mb-0 table-hover table-centered">
                  <thead className="bg-light">
                    <tr>
                      <th className="text-start" style={{ width: "20px" }}>
                        #
                      </th>
                      <th className="text-center">Order Number</th>
                      <th className="text-center">Invoice No</th>
                      <th className="text-center">Customer</th>
                      <th className="text-center">Product</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">quantity</th>
                      <th className="text-center">Subtotal</th>
                      <th className="text-center">Discount</th>
                      <th className="text-center">Total Amount</th>
                      <th className="text-center">Delivery Charge</th>
                      <th className="text-center">Payable Amount</th>
                      <th className="text-center">Paid Amount</th>
                      <th className="text-center">Due</th>
                      <th className="text-center">Delivery Status</th>
                      <th className="text-center">Courier</th>
                      <th className="text-center">Delivery Type</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order &&
                      order.map((item, index) => {
                        return (
                          <tr key={item.id}>
                            <td className="text-start">{index + 1}</td>
                            <td className="text-center">{item.order_number}</td>
                            <td className="text-center">{item.invoice_no}</td>
                            <td className="text-center">{item.client_name}</td>
                            <td className="text-center">{item.product_name}</td>
                            <td className="text-center">{item.price}</td>
                            <td className="text-center">{item.quantity}</td>
                            <td className="text-center">{item.subtotal}</td>
                            <td className="text-center">{item.discount}</td>
                            <td className="text-center">{item.total_amount}</td>
                            <td className="text-center">
                              {item.delivery_charge}
                            </td>
                            <td className="text-center">
                              {item.payable_amount}
                            </td>
                            <td className="text-center">{item.paid_amount}</td>
                            <td className="text-center">{item.due}</td>
                            <td className="text-center">{item.order_status}</td>
                            <td className="text-center">{item.courier_name}</td>
                            <td className="text-center">
                              {item.delivery_type_name}
                            </td>
                            <td>
                              <div className="d-flex gap-2 justify-content-end align-items-center">
                                <Tooltip title="Edit" arrow>
                                  <Link
                                    className="btn btn-soft-primary btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalCenteredScrollable"
                                    onClick={() => updateOrder(item.id)}
                                  >
                                    <iconify-icon
                                      icon="solar:pen-2-broken"
                                      className="align-middle fs-18"
                                    ></iconify-icon>
                                  </Link>
                                </Tooltip>

                                <Tooltip title="Delete" arrow>
                                  <button className="btn btn-soft-danger btn-sm">
                                    <iconify-icon
                                      icon="solar:trash-bin-minimalistic-2-broken"
                                      className="align-middle fs-18"
                                      data-bs-toggle="modal"
                                      data-bs-target="#deleteModal"
                                      type="button"
                                      onClick={() => getId(item.id)}
                                    ></iconify-icon>
                                  </button>
                                </Tooltip>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>

              <div className="card-footer border-top">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end mb-0">
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        Previous
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* ========= Edit Modal ========= */}
            <div
              className="modal fade"
              id="exampleModalCenteredScrollable"
              readOnly="-1"
              aria-labelledby="exampleModalCenteredScrollableTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id="exampleModalCenteredScrollableTitle"
                    >
                      Update Order
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="card-body">
                      <Formik
                        enableReinitialize={true}
                        initialValues={updatedValues}
                        validationSchema={schema}
                        onSubmit={submitUpdateBrandForm}
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
                          <FormikForm
                            noValidate
                            onSubmit={(e) => handleSubmit(e)}
                          >
                            <div className="row">
                              <div className="col-lg-12">
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
                                              (option) =>
                                                option.id === field.value,
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
                                            getOptionLabel={(option) =>
                                              option.name
                                            }
                                            getOptionValue={(option) =>
                                              option.id
                                            }
                                            isSearchable
                                            styles={customStyles}
                                            isInvalid={
                                              meta.touched && meta.error
                                            }
                                            isValid={
                                              meta.touched && !meta.error
                                            }
                                            onBlur={() =>
                                              form.setFieldTouched(
                                                field.name,
                                                true,
                                              )
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

                              <div className="col-lg-12">
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

                              <div className="modal-footer">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                  disabled={isSubmitting}
                                >
                                  {isSubmitting
                                    ? "Submitting..."
                                    : "Update Order"}
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
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

            {/* ========= Delete Modal ========= */}
            <div
              className="modal fade"
              id="deleteModal"
              tabIndex="-1"
              aria-labelledby="deleteModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="deleteModalLabel">
                      Delete Modal
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="modal-body d-flex flex-column justify-content-center align-address-center text-center">
                    <iconify-icon
                      icon="solar:trash-bin-minimalistic-bold-duotone"
                      className="fs-1 text-danger mb-3"
                    ></iconify-icon>
                    <p className="mb-0">
                      Are you sure you want to delete this item?
                    </p>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-light"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteOrder(receivedId)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderList;
