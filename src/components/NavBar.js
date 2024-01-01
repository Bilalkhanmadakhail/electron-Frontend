import React, { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import arrow from "../assets/arrow.svg";

const Header = ({ onToggleSidebar, activeItem }) => {
  const itemNames = ["Overview", "Scan Now", "Threats", "Information"];
  return (
    <>
      <div className="flex justify-between mt-4 bg-[#121212] items-center px-4 py-3">
        <div className="flex items-center">
          <img onClick={onToggleSidebar} src={hamburger} alt="hamburger" className="cursor-pointer" />
          <p className="font-sanssem text-[17px] ml-4 tracking-[1.6px] text-[#fff]">Home</p>
          <img src={arrow} alt="arrow" className="mx-[10px] cursor-pointer transform " />
          <p className="font-sanssem text-[17px] ml-4 tracking-[1.6px] text-[#fff]"> {itemNames[activeItem]}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
