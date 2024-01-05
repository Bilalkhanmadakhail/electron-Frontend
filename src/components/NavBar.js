import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Header = ({ activeItem }) => {
  const itemNames = ["Overview", "Threats", "Information"];

  return (
    <>
      <div className="flex justify-between border-b-[1px] border-white border-opacity-[0.05] bg-[#1F2126] items-center px-4 py-2">
        <div className="flex items-center">
          {activeItem === 0 ? (
            // Render this content when activeItem is 0
            <p className="text-[14px] font-Inter font-normal mx-8 my-2 text-[#C2C1D2]">
              {itemNames[activeItem]}
            </p>
          ) : (
            // Render this content when activeItem is not 0
            <>
              <p className="text-[14px] font-Inter font-normal ml-8 my-2 text-[#C2C1D2] ">
                Overview
              </p>
              <FontAwesomeIcon
                color="white"
                className="mx-[10px] cursor-pointer transform"
                icon={faAngleRight}
                size="xs"
              />
              <p className="text-[14px] font-Inter font-normal  my-2 text-[#C2C1D2]">
                {itemNames[activeItem]}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
