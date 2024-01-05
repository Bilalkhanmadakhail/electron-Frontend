import React, { useState } from "react";
import SideBar from "../components/Sidebar2";
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
  const [activeItem, setActiveItem] = useState(1);
  return (
    <>
      <div className="flex w-[100%]">
        <div >
        <SideBar isVisible={sidebarVisible} activeItem={activeItem} setActiveItem={updateActiveItem} />
        </div>
        <div className=" w-[100%]">
          <NavBar onToggleSidebar={toggleSidebar} activeItem={activeItem}/>
          <Tabs />
        </div>
      </div>
    </>
  );
};
export default Index;