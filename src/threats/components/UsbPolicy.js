import React, { useState } from "react";
import "./threats.css";
import up from "../../assets/up.svg";
const UsbPolicy = () => {
  const [showDiv, setShowDiv] = useState(false);
  const show = () => {
    setShowDiv(!showDiv);
  };
  return (
    <div className="w-[100%]">
      <div className="w-[100%] mt-7 pl-5 h-[61vh] overflow-auto  tablecontainer flex justify-start items-start flex-col">
        <p className="font-medium font-Inter pl-5 leading-4 text-[14px] text-[#B9C0C9] ">
          Allow ALL
        </p>
        <p className="flex justify-center mt-3 mb-5  items-center text-[#B9C0C9] text-opacity-75 text-[12px] pl-5 leading-4 font-Inter">
          Lorem ipsum dolor sit amet consectetur. Felis vel diam ac aliquam.
          Vestibulum lacus est.{" "}
          <span
            onClick={show}
            className="font-Inter font-normalbold cursor-pointer flex justify-center items-center ml-1"
          >
            {" "}
            Learn More <img src={up} />
          </span>
        </p>
        {showDiv && (
          <div className="border-t  w-[100%] border-white border-opacity-[0.05]">
            <div className="w-[50%]  flex items-center">
              <div className="w-[10%] pl-5 flex justify-start flex-col items-start mt-6">
                <p className="text-[12px] font-Inter font-normal leading-4 text-[#B9C0C9] pb-5">
                  Vendor
                </p>
                <p className="text-[12px] font-Inter font-normal leading-4 text-[#B9C0C9] pb-5">
                  Sundisk
                </p>
                <p className="text-[12px] font-Inter font-normal leading-4 text-[#B9C0C9] pb-5">
                  Sundisk
                </p>
                <p className="text-[12px] font-Inter font-normal leading-4 text-[#B9C0C9] pb-5">
                  Sundisk
                </p>
                <p className="text-[12px] font-Inter font-normal leading-4 text-[#B9C0C9] pb-5">
                  Sundisk
                </p>
                <p className="text-[12px] font-Inter font-normal leading-4 text-[#B9C0C9] pb-5">
                  Sundisk
                </p>
              </div>
              <div className="w-[60%] pl-5 mt-6">
                <p className="text-[12px] font-Inter  font-medium leading-4 text-[#B9C0C9] pb-5">
                  Serial Number
                </p>
                <p className="text-[12px] font-Inter  font-medium leading-4 text-[#B9C0C9] pb-5">
                  0901b3f6ee377cb8b68e
                </p>
                <p className="text-[12px] font-Inter  font-medium leading-4 text-[#B9C0C9] pb-5">
                  0901b3f6ee377cb8b68e
                </p>
                <p className="text-[12px] font-Inter  font-medium leading-4 text-[#B9C0C9] pb-5">
                  0901b3f6ee377cb8b68e
                </p>
                <p className="text-[12px] font-Inter  font-medium leading-4 text-[#B9C0C9] pb-5">
                  0901b3f6ee377cb8b68e
                </p>
                <p className="text-[12px] font-Inter  font-medium leading-4 text-[#B9C0C9] pb-5">
                  0901b3f6ee377cb8b68e
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsbPolicy;
