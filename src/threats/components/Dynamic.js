import React, { useState } from "react";
import "./threats.css";
import information from "../../assets/information.svg";
import lock from "../../assets/lock.svg";
import cross from "../../assets/cross.svg";
import cross2 from "../../assets/cross2.svg";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    cursor: "Pointer",
    // marginLeft: 20,
    // marginBottom: 20,
    fontWeight: "600",
  },
}));

const Dynamic = () => {
  const data = [
    {
      ip: "192.168.0.1",
      ports:"8686   8567   8674",
      date:"11:39",
    },
    {
      ip: "192.168.0.1",
      ports:"8686   8567   8674",
      date:"11:39",
    },
    {
      ip: "192.168.0.1",
      ports:"8686    8674",
      date:"11:39",
    },
    {
      ip: "192.168.0.1",
      ports:"All",
      date:"11:39",
    },
    {
      ip: "192.168.0.1",
      ports:"8686    8674",
      date:"11:39",
    },
    {
      ip: "192.168.0.1",
      ports:"8686    8674",
      date:"11:39",
    },
    {
      ip: "192.168.0.1",
      ports:"8686    8674",
      date:"11:39",
    },


    
    
  ];
  const [releaseMessage, setReleaseMessage] = useState(false); // New state
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);
  //for release threat
  const handleRelease = () => {
    setReleaseMessage(true);
  };
  const closePopUP = () => {
    setReleaseMessage(false);
  };
  //for the modale
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="w-[100%]">
      <table className="w-[100%]  h-[61vh] overflow-auto  tablecontainer flex flex-col">
        <thead className="">
          <tr className="text-[16px] border-b-[1px] border-color py-5 w-[100%] px-9 text-[#BABABA] flex justify-start font-sanssem leading-4">
            <th className="justify-start flex w-[20%]">IP</th>
            <th className="justify-start flex w-[30%]">Ports</th>
            <th className="justify-start flex w-[25%]"></th>
          </tr>
        </thead>
        <tbody className="w-[100%] ">
          {data.map((item, index) => (
            <tr
              key={index}
              className={`border-b-[1px] relative  flex flex-row px-7 border-color w-[100%] py-[14px] ${
                hoveredRowIndex === index ? "bg-[#111217] " : ""
              }`}
              onMouseEnter={() => setHoveredRowIndex(index)}
              onMouseLeave={() => setHoveredRowIndex(null)}
            >
              <td className="text-[12px] flex justify-start w-[20%] font-sanssem text-[#fff]">
                {item.ip}
              </td>
              <td className="text-[12px] leading-4 flex justify-start w-[30%] font-sanssem text-[#fff]">
                {item.ports}
              </td>
              <td className="text-[12px] leading-4 flex justify-start w-[20%] font-sanssem text-opacity-50 text-[#fff]">
                {item.path}
              </td>
              <td className="flex justify-end w-[30%]">
                {hoveredRowIndex === index ? (
                  <div className="flex items-center pb-0 ">
                   
                    <div className=" ml-5 hover:rounded-[5px] w-[30px] cursor-pointer flex justify-center items-center h-6 hover:bg-[#3F3F3F]">
                      <LightTooltip title="Resume Connection" onClick={handleRelease}>
                        <IconButton>
                          <img
                            className=" cursor-pointer"
                            src={lock}
                            alt="lock"
                          />
                        </IconButton>
                      </LightTooltip>
                    </div>
                  </div>
                ) : (
                  <p className="text-[12px] leading-4  font-sanssem text-[#fff]">
                    {item.date}
                  </p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {releaseMessage && (
        <div
          className="release-message"
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            backgroundColor: "white",
            fontFamily: "sans",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "16px",
            color: "#626262",
            borderRadius: "2.5px",
            border: "0.942px solid #C0C0C0",
            padding: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p>Access was allowed</p>
          <img
            src={cross2}
            alt="close"
            color="black"
            className=""
            style={{ marginLeft: "10px", cursor: "pointer" }}
            onClick={closePopUP}
          />
        </div>
      )}
    </div>
  );
};

export default Dynamic;
