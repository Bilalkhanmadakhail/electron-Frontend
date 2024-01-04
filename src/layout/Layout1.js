import React, { useState } from "react";
import Header from "../components/Header";
import Threats from "../threats/Threats";
import OverView from "../overview/index";
import Information from "../infomation/index";
import ScanNow from '../scannow/index';

const Layout = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Callback function to update activeItem in Layout component
  const handleSetActiveItem = (newActiveItem) => {
    setActiveItem(newActiveItem);
  };

  // Callback function to update sidebarVisible in Layout component
  const handleSetSidebarVisible = (newSidebarVisible) => {
    setSidebarVisible(newSidebarVisible);
  };

  console.log(activeItem, sidebarVisible);

  return (
    <>
      <div className="h-screen overflow-hidden bg-[#111217]">
        <div className="w-[100%] bg-[#181B1F]">
          <Header />
        </div>
        <div className="w-[100%] flex ">
          <div className="w-[100%]">
            {activeItem === 0 && <OverView onSetActiveItem={handleSetActiveItem} onSetSidebarVisible={handleSetSidebarVisible}  />}
            {activeItem === 1 && <ScanNow onSetActiveItem={handleSetActiveItem} onSetSidebarVisible={handleSetSidebarVisible}  />}
            {activeItem === 2 && <Threats onSetActiveItem={handleSetActiveItem} onSetSidebarVisible={handleSetSidebarVisible}  />}
            {activeItem === 3 && <Information onSetActiveItem={handleSetActiveItem} onSetSidebarVisible={handleSetSidebarVisible} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
