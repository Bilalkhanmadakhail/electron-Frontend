import React, { useEffect } from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize, faTimes } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const ipcRenderer = window.ipcRenderer;
  const handleCloseClick = () => {
    window && window.close();
  };
  const handleMinimizeClick = () => {
    ipcRenderer.send("minimize-screen");
  };
  return (
    <>
      <div className="flex justify-between border-b-[1px] border-white border-opacity-[0.05] bg-[#1F2126] items-center">
        <div className="drag w-[92%] px-5 py-3">
          <img src={logo} alt="logo" className="" />
        </div>
        <div className="w-[8%] flex justify-end items-cente px-5 py-3">
          <div className="flex items-center">
            <FontAwesomeIcon
              color="white"
              className="cursor-pointer mb-4"
              onClick={handleMinimizeClick}
              icon={faWindowMinimize}
              size="lg"
            />
            <FontAwesomeIcon
              color="white"
              className="ml-5 cursor-pointer"
              onClick={handleCloseClick}
              icon={faTimes}
              size="lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
