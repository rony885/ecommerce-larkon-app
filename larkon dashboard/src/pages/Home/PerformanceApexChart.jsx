import React, { useState } from "react";
import Chart from "react-apexcharts";

const PerformanceApexChart = () => {
  const [activeButton, setActiveButton] = useState("1Y");

  const options = {
    chart: {
      height: 260,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 4],
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 5,
      },
    },
    colors: ["#FF6C2F", "#22C55E"],
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    xaxis: {
      type: "category",
    },
    yaxis: [
      {
        title: {
          text: "Page Views",
        },
      },
      {
        opposite: true,
        title: {
          text: "Clicks",
        },
      },
    ],
    grid: {
      strokeDashArray: 5,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 250,
          },
          legend: {
            position: "bottom",
            horizontalAlign: "center",
          },
        },
      },
    ],
  };

  const series = [
    {
      name: "Page Views",
      type: "column",
      data: [120, 150, 170, 180, 200, 220, 210, 230, 250, 240, 260, 280],
    },
    {
      name: "Clicks",
      type: "line",
      data: [20, 30, 25, 35, 40, 45, 40, 50, 55, 50, 60, 65],
    },
  ];

  const buttons = ["ALL", "1M", "6M", "1Y"];
  return (
    <div className="card-body">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <h4 className="card-title mb-2 mb-md-0">Performance</h4>

        <div className="d-flex flex-wrap gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              type="button"
              onClick={() => setActiveButton(btn)}
              className={`btn btn-sm btn-outline-light ${
                activeButton === btn ? "active" : ""
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div id="dash-performance-chart" className="apex-charts">
          <Chart options={options} series={series} type="line" height={260} />
        </div>
      </div>
    </div>
  );
};

export default PerformanceApexChart;
