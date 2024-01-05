import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const data = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: [2.5, 5, 4.8, 5.8, 4.9, 5.9, 5, 5.5, 3.5, 3.5, 5, 5.2, 5.3, 7.2],
        backgroundColor: "transparent",
        borderColor: "#F09122",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        color: "#fff",
        tension: 0.16,
      },
    ],
  };

  // Extract the last data point value
  const lastPointValue = data.datasets[0].data[data.datasets[0].data.length - 1];

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 15,
        ticks: {
          stepSize: 5,
          callback: (value) => value + "%",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div style={{ width: "350px", height: "350px",position:"relative",marginTop:"10px"  }}>
      <p className="text-[#F09122] absolute left-[100%] top-[15%] flex justify-end items-end"> {lastPointValue}%</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
