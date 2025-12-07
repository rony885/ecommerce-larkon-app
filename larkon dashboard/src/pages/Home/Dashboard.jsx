import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";
import PerformanceApexChart from "./PerformanceApexChart";
import { Link } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import DashboardTable from "./DashboardTable";

const Dashboard = () => {
  const chartOptions = {
    chart: {
      type: "radialBar",
      height: 276,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
        track: {
          background: "rgba(170,184,197, 0.2)",
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            offsetY: 20, // pushes the label "Returning Customer" downward
            fontSize: "14px",
            fontWeight: 600,
            // color: "#555",
            color: "#aab8c5",
          },
          value: {
            offsetY: -20, // pushes the value upward, creating space
            fontSize: "20px",
            fontWeight: 400,
            // color: "#373d3f",
            color: "#aab8c5",
          },
        },
      },
    },
    stroke: {
      lineCap: "butt",
      dashArray: [4],
    },
    colors: ["rgba(255,108,47,0.85)"],
    labels: ["Returning Customer"], // This is what shows inside the circle
  };

  const series = [65.2];

  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-5">
              <div className="row">
                <div className="col-12">
                  <div
                    className="alert alert-primary text-truncate mb-3"
                    role="alert"
                  >
                    We regret to inform you that our server is currently
                    experiencing technical difficulties.
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card overflow-hidden">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <div className="avatar-md bg-soft-primary rounded">
                            <Icon
                              icon="solar:cart-5-bold-duotone"
                              className="avatar-title fs-32 text-primary"
                            />
                          </div>
                        </div>
                        <div className="col-6 text-end">
                          <p className="text-muted mb-0 text-truncate">
                            Total Orders
                          </p>
                          <h3 className="text-dark mt-1 mb-0">13,647</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer py-2 bg-light bg-opacity-50">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <span className="text-success">
                            <i className="bx bxs-up-arrow fs-12"></i> 2.3%
                          </span>
                          <span className="text-muted ms-1 fs-12">
                            Last Week
                          </span>
                        </div>
                        <Link to="#!" className="text-reset fw-semibold fs-12">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card overflow-hidden">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <div className="avatar-md bg-soft-primary rounded">
                            <i className="bx bx-award avatar-title fs-24 text-primary"></i>
                          </div>
                        </div>
                        <div className="col-6 text-end">
                          <p className="text-muted mb-0 text-truncate">
                            New Leads
                          </p>
                          <h3 className="text-dark mt-1 mb-0">9,526</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer py-2 bg-light bg-opacity-50">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <span className="text-success">
                            <i className="bx bxs-up-arrow fs-12"></i> 8.1%
                          </span>
                          <span className="text-muted ms-1 fs-12">
                            Last Month
                          </span>
                        </div>
                        <Link to="#!" className="text-reset fw-semibold fs-12">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card overflow-hidden">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <div className="avatar-md bg-soft-primary rounded">
                            <i className="bx bxs-backpack avatar-title fs-24 text-primary"></i>
                          </div>
                        </div>
                        <div className="col-6 text-end">
                          <p className="text-muted mb-0 text-truncate">Deals</p>
                          <h3 className="text-dark mt-1 mb-0">976</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer py-2 bg-light bg-opacity-50">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <span className="text-danger">
                            <i className="bx bxs-down-arrow fs-12"></i> 0.3%
                          </span>
                          <span className="text-muted ms-1 fs-12">
                            Last Month
                          </span>
                        </div>
                        <Link to="#!" className="text-reset fw-semibold fs-12">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card overflow-hidden">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <div className="avatar-md bg-soft-primary rounded">
                            <i className="bx bx-dollar-circle avatar-title text-primary fs-24"></i>
                          </div>
                        </div>
                        <div className="col-6 text-end">
                          <p className="text-muted mb-0 text-truncate">
                            Booked Revenue
                          </p>
                          <h3 className="text-dark mt-1 mb-0">$123.6k</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer py-2 bg-light bg-opacity-50">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <span className="text-danger">
                            <i className="bx bxs-down-arrow fs-12"></i> 10.6%
                          </span>
                          <span className="text-muted ms-1 fs-12">
                            Last Month
                          </span>
                        </div>
                        <Link to="#!" className="text-reset fw-semibold fs-12">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ==== chart ==== */}
            <div className="col-12 col-xxl-7">
              <div className="card">
                <PerformanceApexChart />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Conversions</h5>
                  {/* ==== chart ==== */}
                  {/* <div id="conversions" className="apex-charts mb-2 mt-n2"></div> */}
                  {/* <div
                  id="conversions"
                  className="apex-charts mb-2 mt-n2"
                  style={{ minHeight: "276.025px" }}
                >
                  <Chart
                    options={chartOptions}
                    series={series}
                    type="radialBar"
                    height={276.025}
                    width={443}
                  />
                </div> */}

                  <div className="chart-wrapper">
                    <ReactApexChart
                      options={chartOptions}
                      series={series}
                      type="radialBar"
                      height={276}
                    />
                  </div>

                  <div className="row text-center">
                    <div className="col-6">
                      <p className="text-muted mb-2">This Week</p>
                      <h3 className="text-dark mb-3">23.5k</h3>
                    </div>

                    <div className="col-6">
                      <p className="text-muted mb-2">Last Week</p>
                      <h3 className="text-dark mb-3">41.05k</h3>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-light shadow-none w-100"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Sessions by Country</h5>
                  {/* ===== world map ===== */}
                  <div id="world-map-markers" style={{ height: "316px" }}></div>
                  <div className="row text-center">
                    <div className="col-6">
                      <p className="text-muted mb-2">This Week</p>
                      <h3 className="text-dark mb-3">23.5k</h3>
                    </div>

                    <div className="col-6">
                      <p className="text-muted mb-2">Last Week</p>
                      <h3 className="text-dark mb-3">41.05k</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card card-height-100">
                <div className="card-header d-flex align-items-center justify-content-between gap-2">
                  <h4 className="card-title flex-grow-1">Top Pages</h4>
                  <Link to="#" className="btn btn-sm btn-soft-primary">
                    View All
                  </Link>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover table-nowrap table-centered m-0">
                    <thead className="bg-light bg-opacity-50">
                      <tr>
                        <th className="text-muted ps-3">Page Path</th>
                        <th className="text-muted">Page Views</th>
                        <th className="text-muted">Exit Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="ps-3">
                          <Link to="#" className="text-muted">
                            larkon/ecommerce.html
                          </Link>
                        </td>
                        <td>465</td>
                        <td>
                          <span className="badge badge-soft-success">4.4%</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-3">
                          <Link to="#" className="text-muted">
                            larkon/dashboard.html
                          </Link>
                        </td>
                        <td>426</td>
                        <td>
                          <span className="badge badge-soft-danger">20.4%</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-3">
                          <Link to="#" className="text-muted">
                            larkon/chat.html
                          </Link>
                        </td>
                        <td>254</td>
                        <td>
                          <span className="badge badge-soft-warning">
                            12.25%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-3">
                          <Link to="#" className="text-muted">
                            larkon/auth-login.html
                          </Link>
                        </td>
                        <td>3369</td>
                        <td>
                          <span className="badge badge-soft-success">5.2%</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-3">
                          <Link to="#" className="text-muted">
                            larkon/email.html
                          </Link>
                        </td>
                        <td>985</td>
                        <td>
                          <span className="badge badge-soft-danger">64.2%</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-3">
                          <Link to="#" className="text-muted">
                            larkon/social.html
                          </Link>
                        </td>
                        <td>653</td>
                        <td>
                          <span className="badge badge-soft-success">2.4%</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-3">
                          <Link to="#" className="text-muted">
                            larkon/blog.html
                          </Link>
                        </td>
                        <td>478</td>
                        <td>
                          <span className="badge badge-soft-danger">1.4%</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <DashboardTable />
        </div>

        <Footer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
`;
export default Dashboard;
