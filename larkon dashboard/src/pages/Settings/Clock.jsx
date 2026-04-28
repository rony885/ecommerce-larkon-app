import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";


const Clock = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                <h4 className="card-title flex-grow-1 fs-4">
                  <Link to="/" data-discover="true">
                    Dashboard
                  </Link>{" "}
                  | CLock List
                </h4>
                {/* <Link to="/product-add" className="btn btn-sm btn-primary fs-4">
                  Product Add
                </Link> */}
              </div>

              <h1>Allah</h1>
            </div>

            {/* ========= Delete Modal ========= */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Clock;
