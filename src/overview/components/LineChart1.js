import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const data = {
    labels: ["", "", "","", "", "", "", "", "", "", "", "", "", "", "", "", "",  ],
    datasets: [
      {
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 2.2, 0.1,0.1, 0.1, 0.1, 0.1, 0.1,0.1],
        backgroundColor: "transparent",
        borderColor: "#E17373",
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
        max: 6,
        ticks: {
          stepSize: 2,
          callback: (value) => value ,
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div className="ml-32" style={{ width: "350px", height: "350px",position:"relative",marginTop:"10px"  }}>
      <p className="text-[#B9C0C9] font-Inter font-normal absolute text-[13px] top-[-3%] left-[100%] w-32    flex justify-end items-end"> Attacks Detected</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
