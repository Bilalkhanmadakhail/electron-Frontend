import React, { useEffect } from "react";
import logo from "../assets/logo.svg";
import minimize from "../assets/minimize.svg";
import cross from "../assets/cross.svg";
const Header=() => {
  const ipcRenderer = window.ipcRenderer
  const handleCloseClick = () => {
    window && window.close();
  };
  const handleMinimizeClick = () => {
    ipcRenderer.send('minimize-screen');
  };
  return (
    <>
      <div className="flex justify-between border-b-[1px] border-color bg-[#1E1E1E] items-center">
        <div className="drag w-[92%] px-5 py-3">
          <img src={logo} alt="logo" className="" />
        </div>
        <div className="w-[8%] flex justify-end items-cente px-5 py-3">
          <div className="flex items-center">
            <img
              src={minimize}
              alt="minimize"
              className="cursor-pointer"
              onClick={handleMinimizeClick}
            />
            <img
              src={cross}
              alt="close"
              className="ml-5 cursor-pointer"
              onClick={handleCloseClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;