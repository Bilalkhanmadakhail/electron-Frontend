import React from "react";
import Information from "../../assets/information.svg";
import { Button } from "@grafana/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
const Overview = () => {
  return (
    <>
      <div className="h-[76.5vh] px-[18px]  w-[100%] ">
        <div className=" w-[100%] font-sanssem h-full bg-[#181B1F] rounded-[2.5px] border-[1px] border-color ">
          <div className="graph flex p-[10px]">
            <div className="w-[60%]   h-[72vh]">
              <div className="w-[100%] h-[40%] flex justify-between">

                {/* cpu div */}
                <div className="border w-[48%] border-color rounded-[2px] h-[100%]">
                  <p className="text-white mt-1">CPU</p>
                </div>
                {/* agent cpu */}
                <div className="border rounded-[2px] w-[48%] flex justify-center items-start border-color h-[100%]">
                  <p className="text-white mt-1 flex items-center justify-center">
                    Agent CPU{" "}
                    <span className="ml-2">
                    <FontAwesomeIcon  icon={faInfoCircle} size="lg" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="line-graph mt-[10px] h-[58%] rounded-[2px] border border-color "></div>
            </div>
            <div className="w-[40%] ml-[10px]  h-[72vh]">
              <div className="h-[64%] border border-color rounded-[2px] w-[100%] ">
                <p className="mt-2 text-white">General</p>
                <div className=" flex items-center w-[100%]  justify-between py-3 px-4">
                  <div className="w-[48%] flex justify-start items-start flex-col pl-3  green pt-2">
                    <p className="text-[9px] text-white font-sanssem">Status</p>
                    <p className="text-[18px] text-[#2FC740] pb-2 font-sanssem">
                      Running
                    </p>
                  </div>
                  <div className="w-[48%] flex justify-start items-start flex-col pl-3  green pt-2">
                    <p className="text-[9px] text-white font-sanssem">Wifi</p>
                    <p className="text-[18px] text-[#2FC740] pb-2 font-sanssem">
                      Protected
                    </p>
                  </div>
                </div>

                <div className=" flex items-center w-[100%] justify-between px-4">
                  <div className="w-[48%] flex justify-start items-start flex-col pl-3  red pt-2">
                    <p className="text-[9px] text-white font-sanssem">
                      Expired On
                    </p>
                    <p className="text-[18px] text-[#E70502] pb-2 font-sanssem">
                      10/12/23
                    </p>
                  </div>
                  <div className="w-[48%] flex justify-start items-start flex-col pl-3  green pt-2">
                    <p className="text-[9px] text-white font-sanssem">
                      Last Sync
                    </p>
                    <p className="text-[18px]   text-[#2FC740] pb-2 font-sanssem">
                      10/12/23 <span className="ml-2 text-[10px]">06:28</span>
                    </p>
                  </div>
                </div>
                <div className=" flex items-center w-[100%]  justify-between py-3 px-4">
                  <div className="w-[48%] black rounded-[2.5px] flex justify-start items-start flex-col pl-3   pt-2">
                    <p className="text-[9px] text-white font-sanssem">USB</p>
                    <p className="text-[18px] text-white pb-2 font-sanssem">
                      Allow All
                    </p>
                  </div>
                  <div className="w-[48%] flex black justify-start rounded-[2.5px]  items-start flex-col pl-3  pt-2">
                    <p className="text-[9px] text-white font-sanssem">
                      Version
                    </p>
                    <p className="text-[18px]   text-white pb-2 font-sanssem">
                      1.6.0.9
                    </p>
                  </div>
                </div>
              </div>
              <div className=" h-[34%] overflow-auto tablecontainer mt-2.5 rounded-[2px] border border-color">
                <p className="mt-2 text-white text-opacity-75 ">
                  Threats - Last 24h
                </p>

                <div className="flex items-center mx-8 justify-between ">
                  <div className=" flex items-start justify-start flex-col">
                    <p className=" text-white ">Qurantine Files</p>
                    <p className="text-white text-opacity-75 text-[12px] ">
                      3 items
                    </p>
                  </div>
                  <Button className="rounded-[2.5px] mt-4 cursor-pointer mb-[14px] mr-[18px] border border-white bg-[#2A2A2A] w-16  h-6 ">
                    <p className="  text-[12px] font-sansmed leading-4 text-[#fff]">
                      {" "}
                      Open
                    </p>
                  </Button>
                </div>
                <div className="flex items-center mt-2 mx-8 justify-between">
                  <div className=" flex items-start justify-start flex-col">
                    <p className="  text-white ">Dynamic Sheilding</p>
                    <p className="text-white text-opacity-75 text-[12px] ">
                      0 items
                    </p>
                  </div>
                  <Button className="rounded-[2.5px] mt-4 cursor-pointer mb-[14px] mr-[18px] border border-white bg-[#2A2A2A] w-16  h-6 ">
                    <p className="  text-[12px] font-sansmed leading-4 text-[#fff]">
                      {" "}
                      Open
                    </p>
                  </Button>
                </div>
                <div className="flex items-center my-2 mx-8 justify-between">
                  <div className=" flex items-start justify-start flex-col">
                    <p className="  text-white ">USB Connected </p>
                    <p className="text-white text-opacity-75 text-[12px] ">
                      0 items
                    </p>
                  </div>
                  <Button className="rounded-[2.5px] mt-4 cursor-pointer mb-[14px] mr-[18px] border border-white bg-[#2A2A2A] w-16  h-6 ">
                    <p className="  text-[12px] font-sansmed leading-4 text-[#fff]">
                      {" "}
                      Open
                    </p>
                  </Button>
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
