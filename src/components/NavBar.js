import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Header = ({ activeItem }) => {
  const itemNames = ["Overview", "Scan Now", "Threats", "Information"];

  return (
    <>
      <div className="flex justify-between  bg-[#111217] items-center px-4 py-3">
        <div className="flex items-center">
          {/* <img
            src={hamburger}
            alt="hamburger"
            className="cursor-pointer"
     
          /> */}
          <p
            style={{ color: "white" }}
            className="font-sanssem my-custom-text text-[14px] ml-8 tracking-[.6px] text-[#fff]"
          >
            Home
          </p>
        
          <FontAwesomeIcon
            color="white"
            className="mx-[10px] cursor-pointer transform "
            icon={faAngleRight}
            size="lg"
          />
          <p className="font-sanssem text-[14px] mx-2 my-2 tracking-[.6px] text-[#fff]">
            {" "}
            {itemNames[activeItem]}
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
