import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { useApiContext } from "../../context/ApiContext";
import BarcodeGenerator from "../../components/BarcodeGenerator";

const PurchaseOverview = () => {
  // data fetching
  const { purchase, fetchPurchase } = useApiContext();
  // console.log(product);

  useEffect(() => {
    fetchPurchase();
  }, [fetchPurchase]);

  const formattedDate = purchase?.purchase_date
    ? new Date(purchase.purchase_date).toLocaleDateString()
    : "No date available";

  //   const [receivedId, setReceivedId] = useState(null);

  // delete
  //   const getId = (id) => {
  //     setReceivedId(id);
  //   };

  //   const deleteProduct = async (id) => {
  //     await axios.delete(
  //       `${process.env.REACT_APP_BASE_URL}/product_api/product/${id}/`,
  //     );
  //     window.location.reload(false);
  //   };

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title d-flex align-items-center gap-1">
                  <iconify-icon
                    icon="solar:settings-bold-duotone"
                    className="text-primary fs-20"
                  ></iconify-icon>
                  General Settings
                </h4>
              </div>
              <div className="card-body">
                {/* <div className="row">
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="meta-name" className="form-label">
                          Meta Title
                        </label>
                        <input
                          type="text"
                          id="meta-name"
                          className="form-control"
                          placeholder="Title"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="meta-tag" className="form-label">
                          Meta Tag Keyword
                        </label>
                        <input
                          type="text"
                          id="meta-tag"
                          className="form-control"
                          placeholder="Enter word"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="themes" className="form-label">
                          Store Themes
                        </label>
                        <select
                          className="form-control"
                          id="themes"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Themes"
                        >
                          <option defaultValue="">Default</option>
                          <option defaultValue="Dark">Dark</option>
                          <option defaultValue="Minimalist">Minimalist</option>
                          <option defaultValue="High Contrast">
                            High Contrast
                          </option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="layout" className="form-label">
                          Layout
                        </label>
                        <select
                          className="form-control"
                          id="layout"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Layout"
                        >
                          <option defaultValue="">Default</option>
                          <option defaultValue="Electronics">
                            Electronics
                          </option>
                          <option defaultValue="Fashion">Fashion</option>
                          <option defaultValue="Dining">Dining</option>
                          <option defaultValue="Interior">Interior</option>
                          <option defaultValue="Home">Home</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-12">
                    <div className="">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control bg-light-subtle"
                        id="description"
                        rows="4"
                        placeholder="Type description"
                      ></textarea>
                    </div>
                  </div>
                </div> */}

                <div className="table-responsive">
                  <table className="table align-middle mb-0 table-hover table-centered">
                    <thead className="bg-light-subtle">
                      <tr>
                        <th>Supplier</th>
                        <th>Product Name</th>
                        <th>Purchase Date</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Stock</th>
                        {/* <th className="text-end">Action</th> */}
                      </tr>
                    </thead>

                    <tbody>
                      {purchase &&
                        purchase.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{item.supplier.name}</td>
                              <td>{item.product_name}</td>
                              <td>{item.purchase_date}</td>
                              <td>{item.quantity}</td>
                              <td>{item.unit_price}</td>
                              <td>{item.total_price}</td>
                              {/* <td>
                                <div className="d-flex gap-2 justify-content-end align-items-center">
                                  <Tooltip title="View" arrow>
                                    <Link
                                      to={`/purchase-overview/${item.id}`}
                                      className="btn btn-light btn-sm"
                                    >
                                      <iconify-icon
                                        icon="solar:eye-broken"
                                        className="align-middle fs-18"
                                      ></iconify-icon>
                                    </Link>
                                  </Tooltip>

                                  <Tooltip title="Edit" arrow>
                                    <Link
                                 
                                      className="btn btn-soft-primary btn-sm"
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
                              </td> */}
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>

                <div className="col-xxl-12 col-lg-6">
                  <div className="card">
                    <div className="card-body border-top border-dashed">
                      <div>
                        <h6 className="text-muted float-end mb-0">
                          {purchase.total_price}
                        </h6>
                        <h6 className="mb-4">Purchase Barcode</h6>
                        <p className="text-muted mb-2 mb-md-0">
                          Scan barcode to track
                        </p>

                        {/* <div className="text-center p-3 pb-0">
                          <BarcodeGenerator value={purchase.total_price} />
                        </div> */}
                        <div className="text-center p-3 pb-0">
                          {formattedDate && (
                            <BarcodeGenerator value={formattedDate} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-end d-flex justify-content-end gap-2 my-2">
                  <Link to="#" className="btn btn-danger">
                    Cancel
                  </Link>
                  <Link to="#" className="btn btn-success">
                    Save Change
                  </Link>
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

export default PurchaseOverview;
