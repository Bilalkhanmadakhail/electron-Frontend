import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import sagabars from "../assets/sagaBars.svg";

export default function TemporaryDrawer({
  isVisible,
  activeItem,
  setActiveItem,
}) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  const listItemStyle = (index) => {
    return {
      borderLeft: activeItem === index ? "4px solid red" : "",
    };
  };
  const list = (anchor) => (
    <Box
      style={{ backgroundColor: "#181B1F" }}
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        style={{ display: isVisible ? "block" : "none" }}
        className="w-[100%] relative bg-[#181B1F] h-[91vh]  rounded-br-[5px] "
      >
        <div className="pt-2">
          <div className="px-2">
            <ul>
              <li className="mt-7">
                <div
                  className=" hover:text-white  group flex justify-start mb-4 cursor-pointer hover:rounded-[4px] hover:underline active:text-white active:fill-white active:bg-opacity-[0.10] hover:fill-[white] w-full items-center px-2 py-2 hover:bg-white hover:bg-opacity-[0.10] text-[#B9C0C9]  relative  fill-[#FFFFFF99] "
                  style={listItemStyle(0)}
                  onClick={() => handleItemClick(0)}
                >
                  <p className="text-sm  font-sans  leading-4">Overview</p>
                </div>
              </li>

              <li>
                <div
                  style={listItemStyle(1)}
                  onClick={() => handleItemClick(1)}
                  className=" hover:text-white   group flex justify-start mb-4 cursor-pointer  hover:underline  hover:fill-[white] w-full items-center px-2 py-2 hover:rounded-[4px] hover:bg-white hover:bg-opacity-[0.10] text-[#B9C0C9]  relative  fill-[#FFFFFF99] "
                >
                  <p className="text-sm  font-sans  leading-4">Threats</p>
                </div>
              </li>
              <li className="">
                <div
                  style={listItemStyle(2)}
                  onClick={() => handleItemClick(2)}
                  className=" hover:text-white  group flex justify-start mb-4 cursor-pointer   hover:underline  hover:fill-[white] w-full items-center px-2 py-2 hover:rounded-[4px] hover:bg-white hover:bg-opacity-[0.10] text-[#B9C0C9]  relative  fill-[#FFFFFF99] "
                >
                  <p className="text-sm  font-sans  leading-4">Information</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <img
            src={sagabars}
            onClick={toggleDrawer(anchor, true)}
            className="absolute w-[19px] h-[19px] mt-[17px] ml-5"
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transform={{ vertical: "top", horizontal: "left" }}
            onClose={toggleDrawer(anchor, false)}
            sx={{
              marginTop: "20px",
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
