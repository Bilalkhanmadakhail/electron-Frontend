import React, { useState } from "react";
import SideBar from "../components/Sidebar2";
import NavBar from "../components/NavBar";
import Overview from "./components/Overview";

const Index = ({ onSetActiveItem, onSetSidebarVisible}) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [activeItem, setActiveItem] = useState(0);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    onSetSidebarVisible(!sidebarVisible);
  };

  // Function to update activeItem and pass it to the parent
  const updateActiveItem = (newActiveItem) => {
    setActiveItem(newActiveItem);
    onSetActiveItem(newActiveItem);
  };

  return (
    <>
      <div className="flex w-[100%]">
        <div >
          <SideBar isVisible={sidebarVisible} activeItem={activeItem} setActiveItem={updateActiveItem} />
        </div>
        <div className="w-[100%]">
          <NavBar onToggleSidebar={toggleSidebar} activeItem={activeItem} />
          <Overview />
        </div>
      </div>
    </>
  );
};

export default Index;
