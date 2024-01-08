import React from "react";
import LineChart from "./LineChart";

const Information = () => {
  return (
    <>
      <div className="h-[77.5vh] px-[17px] pt-[14px] w-[100%] ">
        <div className=" w-[100%]  flex flex-col  h-full bg-[#1F2126] rounded-[2.5px] border-[1px] border-color ">
          {/* General and Cpu usage */}
          <div className="h-[50%] w-[100%]   flex justify-center">
            <div className="w-[50%] h-[100%] overflow-auto tablecontainer  flex-col flex justify-start pl-6 pr-4 ">
              <p className="text-[#B9C0C9] text-[14px] font-Inter font-normal pt-4 flex items-start text-opacity-75 justify-start">
                General
              </p>
              <div className="  w-[100%]  font-Inter ">
                <div className="  flex justify-start items-start">
                  <div className="w-[30%] flex font-Inter  items-start flex-col justify-start  mt-[18px]">
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                      Service State
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                      Service Status
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                      Last Sync
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                      Version
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                      GUID
                    </p>
                  </div>
                  <div className="w-[60%] flex flex-col font-Inter font-medium justify-start items-start mt-[18px]">
                    <p className="text-[12px]  leading-4 text-[#2FC740] pb-4">
                      Installed
                    </p>
                    <p className="text-[12px]  leading-4 text-[#2FC740] pb-4">
                    Running
                    </p>
                    <p className="text-[12px] leading-4 text-[#2FC740] pb-4">
                    3/30/2023 09:14 AM
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                    1.6.1.9
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                     a2b543b543bh53bh3b5j3bk3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[100%] pl-6 pr-4 ">
              <p className="text-[#B9C0C9] text-[14px] font-Inter font-normal pt-4 flex items-start text-opacity-75 justify-start">
                CPU Usage - Last 24h
              </p>
              <LineChart/>
            </div>
          </div>
          {/* Setting and Licensing */}
          <div className="h-[50%] w-[100%]   flex justify-center">
            <div className="w-[50%] h-[100%]  overflow-auto tablecontainer flex-col flex justify-start pl-6 pr-4 ">
              <p className="text-[#B9C0C9] text-[14px] font-Inter font-normal flex items-start text-opacity-75 justify-start">
                Settings
              </p>
              <div className="  w-[100%] font-Inter font-medium ">
                <div className="  flex justify-start items-start">
                  <div className="w-[30%] flex items-start flex-col justify-start  mt-[18px]">
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                      Server Address
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                      Automatic Updates
                    </p>
                  </div>
                  <div className="w-[60%] flex flex-col justify-start items-start mt-[18px]">
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                      192.168.17.36
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                      On
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[100%]  overflow-auto tablecontainer  flex-col flex justify-start pl-6 pr-4 ">
              <p className="text-[#B9C0C9] text-[14px] font-Inter font-normal  flex items-start  text-opacity-75 justify-start">
              Licensing
              </p>
              <div className="  w-[100%] font-Inter  ">
                <div className="  flex justify-start items-start">
                  <div className="w-[30%] flex items-start flex-col justify-start  mt-[18px]">
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                    License Status
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                    License Expiration Date
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                    License Key
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                    Activation Key
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                    License URL
                    </p>
                  </div>
                  <div className="w-[60%] flex font-Inter font-medium flex-col justify-start items-start mt-[18px]">
                    <p className="text-[12px]  leading-4 text-[#2FC740] pb-4">
                    Active
                    </p>
                    <p className="text-[12px]  leading-4 text-[#2FC740] pb-4">
                    01/02/25
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                    a2b543b543bh53bh3b5j3bk3
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                    a2b543b543bh53bh3b5j3bk3
                    </p>
                    <p className="text-[12px]  leading-4 text-[#B9C0C9] pb-4">
                    http://jewhrlwhflewbflbslbflsbflksbnf/QA
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

export default Information;
