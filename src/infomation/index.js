import React, { useState } from "react";
import SideBar from "../components/Sidebar2";
import NavBar from "../components/NavBar";
import Information from "./components/Information";
const Index = ({ onSetActiveItem, onSetSidebarVisible }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [activeItem, setActiveItem] = useState(3);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    onSetSidebarVisible(!sidebarVisible);
  };

  // Function to update activeItem and pass it to the parent
  const updateActiveItem = (newActiveItem) => {
    setActiveItem(newActiveItem);
    onSetActiveItem(newActiveItem);
  };

  // const main = sidebarVisible ? "84%" : "100%";
  // const sidebarWidth = sidebarVisible ? "16%" : "0%";
  return (
    <>
      <div className="flex w-[100%]">
        <div>
          <SideBar
            isVisible={sidebarVisible}
            activeItem={activeItem}
            setActiveItem={updateActiveItem}
          />
        </div>
        <div className="w-[100%]">
          <NavBar onToggleSidebar={toggleSidebar} activeItem={activeItem} />
          <Information />
        </div>
      </div>
    </>
  );
};

export default Index;
