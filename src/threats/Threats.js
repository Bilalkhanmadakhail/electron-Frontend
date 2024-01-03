import React, { useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Tabs from "../threats/components/Tabs";
const Index = ({onSetActiveItem,  onSetSidebarVisible}) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    onSetSidebarVisible(!sidebarVisible);
  };
  const updateActiveItem = (newActiveItem) => {
    setActiveItem(newActiveItem);
    onSetActiveItem(newActiveItem);
  };
  const main = sidebarVisible ? "84%" : "100%";
  const sidebarWidth = sidebarVisible ? "16%" : "0%";
  const [activeItem, setActiveItem] = useState(2);
  return (
    <>
      <div className="flex w-[100%]">
        <div style={{ width: sidebarWidth }}>
        <SideBar isVisible={sidebarVisible} activeItem={activeItem} setActiveItem={updateActiveItem} />
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