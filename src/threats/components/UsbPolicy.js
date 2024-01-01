import React, { useState } from "react";
import "./threats.css";
import up from "../../assets/up.svg";
const UsbPolicy = () => {
  const [showDiv , setShowDiv] = useState(false)
  const show =()=>{
    setShowDiv(!showDiv)
  }
  return (
    <div className="w-[100%]">
      <div className="w-[100%] mt-7 pl-5 h-[61vh] overflow-auto  tablecontainer flex justify-start items-start flex-col">
        <p className="font-sansbold pl-5 leading-4 text-[20px] text-[#fff] ">
          Allow ALL
        </p>
        <p className="flex justify-center mt-3 mb-5  items-center text-white text-opacity-75 text-[12px] pl-5 leading-4 font-sans">
          Lorem ipsum dolor sit amet consectetur. Felis vel diam ac aliquam.
          Vestibulum lacus est.{" "}
          <span onClick={show} className="font-sansbold cursor-pointer flex justify-center items-center ml-1">
            {" "} 
            Learn More <img src={up} />
          </span>
        </p>
    {showDiv && ( <div className="border-t  w-[100%] border-white border-opacity-50">
          <div className="w-[50%]  flex items-center">
            <div className="w-[10%] pl-5 flex justify-start flex-col items-start mt-6">
              <p className="text-[12px] font-sans leading-4 text-[#BABABA] pb-5">
                Vendor
              </p>
              <p className="text-[12px] font-sans leading-4 text-[#fff] pb-5">
                Sundisk
              </p>
              <p className="text-[12px] font-sans leading-4 text-[#fff] pb-5">
                Sundisk
              </p>
              <p className="text-[12px] font-sans leading-4 text-[#fff] pb-5">
                Sundisk
              </p>
              <p className="text-[12px] font-sans leading-4 text-[#fff] pb-5">
                Sundisk
              </p>
              <p className="text-[12px] font-sans leading-4 text-[#fff] pb-5">
                Sundisk
              </p>
            </div>
            <div className="w-[60%] pl-5 mt-6">
              <p className="text-[12px] font-sanssem leading-4 text-[#BABABA] pb-5">
              Serial Number
              </p>
              <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
              0901b3f6ee377cb8b68e
              </p>
              <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
              0901b3f6ee377cb8b68e
              </p>
              <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
              0901b3f6ee377cb8b68e
              </p>
              <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
              0901b3f6ee377cb8b68e
              </p>
              <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
              0901b3f6ee377cb8b68e
              </p>
            </div>
          </div>
        </div>)}   
      </div>
    </div>
  );
};

export default UsbPolicy;
