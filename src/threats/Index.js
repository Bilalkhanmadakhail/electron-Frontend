import React, { useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Tabs from "../threats/components/Tabs";
const Index = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const main = sidebarVisible ? "84%" : "100%";
  const sidebarWidth = sidebarVisible ? "16%" : "0%";
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <div className="flex w-[100%]">
        <div style={{ width: sidebarWidth }}>
          <SideBar isVisible={sidebarVisible} activeItem={activeItem} setActiveItem={setActiveItem}/>
        </div>
        <div style={{ width: main }}>
          <NavBar onToggleSidebar={toggleSidebar} activeItem={activeItem}/>
          <Tabs />
        </div>
      </div>
    </>
  );
};

export default Index;
