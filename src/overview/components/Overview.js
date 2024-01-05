import React from "react";
import JustGage from "justgage";
import gradient from "../../assets/gradient.png";
import { useEffect, useRef } from "react";
import "./overview.css";
import LineChart from "./LineChart1";
const Overview = () => {
  const hasCpuInitialized = useRef(false);
  const hasAgentCpuInitialized = useRef(false);
  useEffect(() => {
    if (!hasCpuInitialized.current) {
      var g4 = new JustGage({
        id: "g4",
        value: 70,
        min: 0,
        max: 100,
        symbol: "%",
        pointerOptions: {
          toplength: 8,
          bottomlength: -20,
          bottomwidth: 6,
          color: "#8E8E93",
        },
        gaugeWidthScale: 0.9,
        counter: true,
        relativeGaugeSize: true,
        hideMinMax: true,
      });
      hasCpuInitialized.current = true;
    }
    if (!hasAgentCpuInitialized.current) {
      var g5 = new JustGage({
        id: "g5",
        value: 40,
        min: 0,
        max: 100,
        symbol: "%",
        pointerOptions: {
          toplength: 8,
          bottomlength: -20,
          bottomwidth: 6,
          color: "#8E8E93",
        },
        gaugeWidthScale: 0.9,
        counter: true,
        relativeGaugeSize: true,
        hideMinMax: true,
      });
      hasAgentCpuInitialized.current = true;
    }
  }, [hasAgentCpuInitialized, hasCpuInitialized]);
  return (
    <>
      <div className="h-[80vh]   w-[100%] ">
        <div className=" w-[100%]  h-full bg-[#17191C] rounded-[2.5px]  ">
          <div className="graph flex pt-[14px]  px-[17px]">
            <div className="w-[60%]   h-[75vh]">
              <div className="w-[100%] h-[40%] flex justify-between">
                <div className="border w-[49.3%] bg-[#1F2126] flex justify-center flex-col items-center border-color h-[100%]">
                  <p className="text-[#B9C0C9] text-[14px] font-Inter font-normal my-1">
                    CPU
                  </p>
                  <img className="image w-[60%]" src={gradient} />
                  <div id="g4" className="gauge w-[67%] mt-[-27%]"></div>
                </div>
                <div className="border w-[49.3%] bg-[#1F2126] flex justify-center flex-col items-center border-color h-[100%]">
                  <p className="text-[#B9C0C9]   text-[14px] font-Inter font-normal  my-1 flex items-center justify-center">
                    Agent CPU{" "}
                  </p>
                  <img className="image w-[60%]" src={gradient} />
                  <div id="g5" className="gauge w-[67%] mt-[-27%]"></div>
                </div>
              </div>
              <div className="line-graph  text-sm font-Inter font-normal bg-[#1F2126] mt-[10px] h-[58%] border border-color ">
                {/* <p className="mt-2 text-[#B9C0C9]">Events - Last 24h</p> */}
              </div>
            </div>
            <div className="w-[40%] ml-[10px]  h-[75vh]">
              <div className="h-[62%] border bg-[#1F2126] border-color w-[100%] ">
                <p className="mt-2   text-[14px] font-Inter font-normal  text-[#B9C0C9]">
                  General
                </p>
                <div className=" flex items-center w-[100%]  justify-between pt-2 pb-3 px-4">
                  <div className="w-[49%] flex justify-start items-start flex-col pl-3 card  pt-2">
                    <p className="text-[10px] text-[#B9C0C9] font-Inter font-normal">Status</p>
                    <p  className="text-[30px] mb-2.5 leading-none  text-[#55944B]  font-semibold font-Intersem">
                      Running
                    </p>
                  </div>
                  <div className="w-[49%] flex justify-start items-start flex-col pl-3  card pt-2">
                    <p className="text-[10px] text-[#B9C0C9] font-Inter font-normal">Wifi</p>
                    <p className="text-[30px] mb-2.5 leading-none  text-[#55944B]  font-semibold font-Intersem">
                      Safe
                    </p>
                  </div>
                </div>
                <div className=" flex items-center w-[100%] justify-between px-4">
                  <div className="w-[49%] flex justify-start items-start flex-col pl-3 card pt-2">
                    <p className="text-[10px] text-[#B9C0C9] font-Inter font-normal">
                      Expired On
                    </p>
                    <p className="text-[30px] mb-2.5 leading-none  text-[#E70502]  font-semibold font-Intersem">
                      10/25/23
                    </p>
                  </div>
                  <div className="w-[49%] flex justify-start items-start flex-col pl-3  card pt-2">
                    <p className="text-[10px] text-[#B9C0C9] font-Inter font-normal">
                      Last Sync
                    </p>
                    <p className="text-[30px]  mb-2.5 leading-none  text-[#55944B] font-semibold font-Inter ">
                      04/01/23
                    </p>
                  </div>
                </div>
                <div className=" flex items-center w-[100%]  justify-between py-3 px-4">
                  <div className="w-[49%] border border-color card rounded-[2.5px] flex justify-start items-start flex-col pl-3   pt-2">
                    <p className="text-[10px] text-[#B9C0C9] font-Inter font-normal">
                      USB Policy
                    </p>
                    <p className="text-[30px] mb-2.5 leading-none  text-[#B9C0C9] font-semibold font-Inter">
                      Allow All
                    </p>
                  </div>
                  <div className="w-[49%] flex justify-start card rounded-[2.5px] border border-color items-start flex-col pl-3  pt-2">
                    <p className="text-[10px] text-[#B9C0C9] font-Inter font-normal">
                      Version
                    </p>
                    <p className="text-[30px] mb-2.5 leading-none   text-[#B9C0C9]  font-Inter font-semibold">
                      1.6.0.9
                    </p>
                  </div>
                </div>
              </div>
              <div className=" h-[36%] bg-[#1F2126] overflow-auto tablecontainer mt-2.5 border border-color">
                <p className="mt-2 text-[#B9C0C9] flex items-center justify-center ml-4 text-[14px] font-Inter font-medium ">
                   Last 24h Threats
                </p>
                <div className="flex border-t border-b border-[#2A2C31] items-center pl-6 mt-2 justify-between">
                  <div className=" flex items-start justify-start flex-col">
                    <p className="my-2 hover:text-blue-500  hover:underline cursor-pointer text-sm font-Inter font-normal text-[#B9C0C9] ">
                     3 Qurantine Files
                    </p>
                   
                  </div>
                </div>
                <div className="flex items-center pl-6   border-b border-[#2A2C31] justify-between">
                  <div className=" flex items-start justify-start flex-col">
                    <p className="my-2  hover:text-blue-500 hover:underline cursor-pointer text-sm font-Inter font-normal text-[#B9C0C9] ">
                     3 Blocked Connection  (Dynamic Shielding)
                    </p>
                   
                  </div>
                </div>
                <div className="flex items-center ml-6 mt-2 justify-between">
                  <div className=" flex items-start justify-start flex-col">
                    <p className=" hover:text-blue-500 hover:underline cursor-pointer text-sm font-Inter font-normal text-[#B9C0C9] ">
                     1 USB Connected
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Overview;
