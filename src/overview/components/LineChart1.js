import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const data = {
    labels: ["",  "","",  "", "", "", "",  "", "", "", "", "","", "", ""],
    datasets: [
      {
        data: [0, 110, 90, 160, 95, 170, 100, 160, 20, 20, 20, 105, 140,145,150],
        backgroundColor: "transparent",
        borderColor: "#CCC",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        color:"#fff",
        tension:0.2 ,
      },
    ],
  };

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
        max: 300,
        ticks: {
          stepSize: 100,
          callback: (value) => value ,
          color: (context) => (context.tick.value === 0 || context.tick.value === 300 ? '#808080' : '#808080'), // Change color based on value
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div className="border-color mx-32" >
        <p className="text-white text-sm font-sans flex justify-end items-end">Sysmon Events</p>
      <Line data={data}  options={options} />
    </div>
  );
};

export default LineChart;
