import React, { useState, useRef, useEffect } from "react";
import "./threats.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faTimes } from "@fortawesome/free-solid-svg-icons";

const Qurantine = () => {
  const data = [
    {
      fileName: "eicar.txt",
      hash: "1a79a4d60de6718e8e5b326e338ae533",
      path: "C:\\Users\\YourUsername\\Documents\\Pro..",
      date: "11:39",
    },
    {
      fileName: "eicar.txt",
      hash: "1a79a4d60de6718e8e5b326e338ae533",
      path: "C:\\Users\\YourUsername\\Documents\\Pro..",
      date: "11:39",
    },
    {
      fileName: "eicar.txt",
      hash: "1a79a4d60de6718e8e5b326e338ae533",
      path: "C:\\Users\\YourUsername\\Documents\\Pro..",
      date: "11:39",
    },
    {
      fileName: "eicar.txt",
      hash: "1a79a4d60de6718e8e5b326e338ae533",
      path: "C:\\Users\\YourUsername\\Documents\\Pro..",
      date: "11:39",
    },

    {
      fileName: "eicar.txt",
      hash: "1a79a4d60de6718e8e5b326e338ae533",
      path: "C:\\Users\\YourUsername\\Documents\\Pro..",
      date: "11:39",
    },
  ];
  const [openRowIndex, setOpenRowIndex] = useState(null);
  const tableRef = useRef(null);
  useEffect(() => {
    scrollToBottom();
  }, [data]);
  const toggleDiv = (index) => {
    setOpenRowIndex(openRowIndex === index ? null : index);
  };
  const scrollToBottom = () => {
    if (tableRef.current) {
      tableRef.current.scrollTop = tableRef.current.scrollHeight;
    }
  };

  return (
    <div className="w-[100%]">
      <table
        ref={tableRef}
        className="w-[100%]  h-[63vh]  overflow-auto tablecontainer flex flex-col"
      >
        <thead className="h-[15%] ">
          <tr className="text-[14px]  py-5 w-[100%] px-8 text-[#B9C0C9] flex justify-start  leading-4">
            <th className="justify-start font-Inter font-medium flex w-[20%]">
              File Name
            </th>
            <th className="justify-start font-Inter font-medium flex w-[30%]">
              Hash
            </th>
            <th className="justify-start font-Inter font-medium flex w-[20%]">
              Path
            </th>
            <th className=" font-Inter font-medium flex  justify-end w-[30%]">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="w-[100%] h-[70%]  relative">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <div key={index}>
                <tr className=" relative  flex flex-row pl-3 pr-7 border-color-2 w-[100%] py-[14px] ">
                  <div className="absolute  ">
                    <FontAwesomeIcon
                      color="#C2C1D2"
                      className={`w- pb-[2px] cursor-pointer transform ${
                        openRowIndex === index ? "rotate-90" : ""
                      }`}
                      icon={faAngleRight}
                      size="xs"
                      onClick={() => toggleDiv(index)}
                    />
                  </div>
                  <td className="text-[12px] ml-4 flex justify-start w-[20%] font-Inter font-normal text-[#B9C0C9]">
                    {item.fileName}
                  </td>
                  <td className="text-[12px] leading-4 flex justify-start w-[30%] font-Inter text-[#B9C0C9]">
                    {item.hash}
                  </td>
                  <td className="text-[12px] leading-4 flex justify-start w-[20%] font-Inter font-normal  text-[#B9C0C9]">
                    {item.path}
                  </td>
                  <td className="flex justify-end w-[30%]">
                    <p className="text-[12px] leading-4 pr-2 font-Inter text-[#B9C0C9]">
                      {item.date}
                    </p>
                  </td>
                </tr>

                {openRowIndex === index && (
                  <div className="bg-[#17191C] absolute w-full z-40">
                    <div className=" flex-col flex justify-start pl-6 pr-4 ">
                      <p className="text-[#B9C0C9] flex justify-between  pt-2 text-[14px] font-Inter font-normal  items-start text-opacity-75 ">
                        Threats Info{" "}
                        <FontAwesomeIcon
                          color="#C2C1D2"
                          className="ml-5 cursor-pointer"
                          onClick={toggleDiv}
                          icon={faTimes}
                          size="lg"
                        />
                      </p>
                      <div className="  w-[100%] font-Inter font-medium ">
                        <div className="  flex justify-start items-start">
                          <div className="w-[40%] flex items-start flex-col justify-start  mt-[18px]">
                            <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                              File Name
                            </p>
                            <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                              uid
                            </p>
                            <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                              Hash
                            </p>
                            <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                              File Extension
                            </p>
                          </div>
                          <div className="w-[60%] flex flex-col justify-start items-start mt-[18px]">
                            <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                              eciar.txt
                            </p>
                            <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                              a2b543b543bh53bh3b5j3bk3
                            </p>
                            <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                              .txt
                            </p>
                            <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                              EICAR-AV-Test
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="text-[12px] font-sanssem leading-4 text-[#fff]"
              >
                No data available
              </td>
            </tr>
          )}
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
            <button className="bg-[#486ED6] text-[#B9C0C9] font-Inter font-semibold mx-4 px-2 rounded-[2.2px]">
              1
            </button>
            <button className="bg-[#17191C] flex justify-center items-center  pl-3 pr-2.5 py-1 rounded-[2.2px]">
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

export default Qurantine;

// import React, { useRef, useEffect, useState } from 'react';

// const ScrollToBottom = () => {
//   const messagesRef = useRef(null);
//   const [messages, setMessages] = useState([
//     "Message 1",
//     "Message 2",
//     "Message 1",
//     "Message 2",
//     "Message 1",
//     "Message 2",
//     "Message 1",
//     "Message 2",
//     "Message 1",
//     "Message 2",
//     // ... more messages
//   ]);

//   // Scroll to the bottom when messages change
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   // Function to scroll to the bottom
//   const scrollToBottom = () => {
//     if (messagesRef.current) {
//       messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
//     }
//   };

//   return (
//     <div
//       ref={messagesRef}
//       className="h-64 overflow-auto border p-4"
//     >
//       {messages.map((message, index) => (
//         <div key={index} className="mb-2">
//           {message}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ScrollToBottom;
