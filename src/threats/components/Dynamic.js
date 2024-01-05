import React from "react";
import "./threats.css";

const Dynamic = () => {
  const data = [
    {
      ip: "192.168.0.1",
      ports: "8686   8567   8674",
      date: "11:39",
    },
    {
      ip: "192.168.0.1",
      ports: "8686   8567   8674",
      date: "11:39",
    },
    {
      ip: "192.168.0.1",
      ports: "8686    8674",
      date: "11:39",
    },
    {
      ip: "192.168.0.1",
      ports: "All",
      date: "11:39",
    },
    {
      ip: "192.168.0.1",
      ports: "8686    8674",
      date: "11:39",
    },
  ];

  return (
    <div className="w-[100%]">
      <table className="w-[100%]  h-[63vh]  overflow-auto  tablecontainer flex flex-col">
        <thead className="h-[15%]">
          <tr className="text-[14px]  py-5 w-[100%] px-8 text-[#C2C1D2] flex justify-start  leading-4">
            <th className="justify-start  font-Inter font-medium flex w-[20%]">
              IP
            </th>
            <th className="justify-start font-Inter font-medium flex w-[30%]">
              Ports
            </th>
            <th className="justify-end font-Inter font-medium flex w-[50%]">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="w-[100%] h-[70%] ">
          {data.map((item, index) => (
            <tr
              key={index}
              className="relative  flex flex-row px-7 border-color-2 w-[100%] py-[14px] "
            >
              <td className="text-[12px] flex justify-start w-[20%] font-Inter font-normal text-[#C2C1D2]">
                {item.ip}
              </td>
              <td className="text-[12px] leading-4 flex justify-start w-[30%] font-Inter font-normal text-[#C2C1D2]">
                {item.ports}
              </td>

              <td className="flex justify-end w-[50%]">
                <p className="text-[12px] leading-4 pr-2  font-Inter font-normal text-[#C2C1D2]">
                  {item.date}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
        <div className=" w-[100%] h-[15%] flex items-center justify-center">
          <div className=" flex justify-center items-center">
            <button className="bg-[#17191C] translate-x-[180] flex justify-center items-center  pl-2 pr-3 py-1 rounded-[2.2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                class="css-1d3xu67-Icon rotated-icon"
              >
                <path d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"></path>
              </svg>
            </button>
            <button className="bg-[#486ED6] mx-4 px-2 rounded-[2.2px]">
              1
            </button>
            <button className="bg-[#17191C] flex justify-center items-center  pl-3 pr-2 py-1 rounded-[2.2px]">
              <svg
                className="translate-x-[180]"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                class="css-1d3xu67-Icon"
              >
                <path d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </table>
    </div>
  );
};

export default Dynamic;
