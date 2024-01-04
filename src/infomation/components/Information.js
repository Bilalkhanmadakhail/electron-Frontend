import React from "react";

const Information = () => {
  return (
    <>
      <div className="h-[76.5vh] px-[18px]  w-[100%] ">
        <div className=" w-[100%]  flex flex-col font-sanssem h-full bg-[#181B1F] rounded-[2.5px] border-[1px] border-color ">
          {/* General and Cpu usage */}
          <div className="h-[55%] w-[100%]   flex justify-center">
            <div className="w-[50%] h-[100%] overflow-auto tablecontainer border-r flex-col flex justify-start pl-6 pr-4 border-b border-color">
              <p className="text-white pt-4 flex items-start text-opacity-75 justify-start">
                General
              </p>
              <div className="  w-[100%]   ">
                <div className="  flex justify-start items-start">
                  <div className="w-[30%] flex items-start flex-col justify-start  mt-[18px]">
                    <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                      Service State
                    </p>
                    <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                      Service Status
                    </p>
                    <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                      Last Sync
                    </p>
                    <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                      Version
                    </p>
                    <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                      GUID
                    </p>
                  </div>
                  <div className="w-[60%] flex flex-col justify-start items-start mt-[18px]">
                    <p className="text-[12px] font-sanssem leading-4 text-[#2FC740] pb-5">
                      Installed
                    </p>
                    <p className="text-[12px] font-sanssem leading-4 text-[#2FC740] pb-5">
                    Running
                    </p>
                    <p className="text-[12px] font-sanssem leading-4 text-[#2FC740] pb-5">
                    3/30/2023 09:14 AM
                    </p>
                    <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
                    1.6.1.9
                    </p>
                    <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
                     a2b543b543bh53bh3b5j3bk3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[100%] pl-6 pr-4 border-b border-color">
              <p className="text-white pt-4 flex items-start text-opacity-75 justify-start">
                CPU Usage - Last 24h
              </p>
            </div>
          </div>
          {/* Setting and Licensing */}
          <div className="h-[45%] w-[100%]   flex justify-center">
            <div className="w-[50%] h-[100%]  overflow-auto tablecontainer flex-col flex justify-start pl-6 pr-4 ">
              <p className="text-white pt-4 flex items-start text-opacity-75 justify-start">
                Settings
              </p>
              <div className="  w-[100%]   ">
                <div className="  flex justify-start items-start">
                  <div className="w-[30%] flex items-start flex-col justify-start  mt-[18px]">
                    <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                      Server Address
                    </p>
                    <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                      Automatic Updates
                    </p>
                  </div>
                  <div className="w-[60%] flex flex-col justify-start items-start mt-[18px]">
                    <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
                      192.168.17.36
                    </p>
                    <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
                      On
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[100%] overflow-auto tablecontainer border-r flex-col flex justify-start pl-6 pr-4 border-b border-color">
              <p className="text-white pt-4 flex items-start text-opacity-75 justify-start">
              Licensing
              </p>
              <div className="  w-[100%]   ">
                <div className="  flex justify-start items-start">
                  <div className="w-[30%] flex items-start flex-col justify-start  mt-[18px]">
                    <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                    License Status
                    </p>
                    <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                    License Expiration Date
                    </p>
                    <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                    License Key
                    </p>
                    <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                    Activation Key
                    </p>
                    <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                    License URL
                    </p>
                  </div>
                  <div className="w-[60%] flex flex-col justify-start items-start mt-[18px]">
                    <p className="text-[12px] font-sanssem leading-4 text-[#2FC740] pb-5">
                    Active
                    </p>
                    <p className="text-[12px] font-sanssem leading-4 text-[#2FC740] pb-5">
                    01/02/25
                    </p>
                    <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
                    a2b543b543bh53bh3b5j3bk3
                    </p>
                    <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
                    a2b543b543bh53bh3b5j3bk3
                    </p>
                    <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
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
