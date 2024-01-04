import React, { useState } from "react";
import "./threats.css";
import information from "../../assets/information.svg";
import monitor from "../../assets/monitor.svg";
import cross from "../../assets/cross.svg";
import cross2 from "../../assets/cross2.svg";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Button } from '@grafana/ui';


const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    cursor: "Pointer",
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "600",
  },
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "#2A2A2A",
  borderRadius: "5px",
  // border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
};
const Qurantine = () => {
  const data = [
    {
      fileName: "eicar.txt",
      hash: "1a79a4d60de6718e8e5b326e338ae533",
      path: "C:\\Users\\YourUsername\\Documents\\Pro..",
      date: "11:39",
    },
    {
      fileName: "eicar.txt",
      hash: "1a79a4d60de6718e8e5b326e338ae533",
      path: "C:\\Users\\YourUsername\\Documents\\Pro..",
      date: "11:39",
    },
    {
      fileName: "eicar.txt",
      hash: "1a79a4d60de6718e8e5b326e338ae533",
      path: "C:\\Users\\YourUsername\\Documents\\Pro..",
      date: "11:39",
    },
    {
      fileName: "eicar.txt",
      hash: "1a79a4d60de6718e8e5b326e338ae533",
      path: "C:\\Users\\YourUsername\\Documents\\Pro..",
      date: "11:39",
    },
    {
      fileName: "eicar.txt",
      hash: "1a79a4d60de6718e8e5b326e338ae533",
      path: "C:\\Users\\YourUsername\\Documents\\Pro..",
      date: "11:39",
    },
    {
      fileName: "eicar.txt",
      hash: "1a79a4d60de6718e8e5b326e338ae533",
      path: "C:\\Users\\YourUsername\\Documents\\Pro..",
      date: "11:39",
    },
    {
      fileName: "eicar.txt",
      hash: "1a79a4d60de6718e8e5b326e338ae533",
      path: "C:\\Users\\YourUsername\\Documents\\Pro..",
      date: "11:39",
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
      <table className="w-[100%]  h-[61vh] overflow-auto tablecontainer flex flex-col">
        <thead className="">
          <tr className="text-[16px] border-b-[1px] border-color py-5 w-[100%] px-9 text-[#BABABA] flex justify-start font-sanssem leading-4">
            <th className="justify-start flex w-[20%]">File Name</th>
            <th className="justify-start flex w-[30%]">Hash</th>
            <th className="justify-start flex w-[20%]">Path</th>
            <th className="justify-start flex w-[25%]"></th>
          </tr>
        </thead>
        <tbody className="w-[100%] ">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr
                key={index}
                className={`border-b-[1px] relative  flex flex-row px-7 border-color w-[100%] py-[14px] ${
                  hoveredRowIndex === index ? "bg-[#111217] " : ""
                }`}
                onMouseEnter={() => setHoveredRowIndex(index)}
                onMouseLeave={() => setHoveredRowIndex(null)}
              >
                <td className="text-[12px] flex justify-start w-[20%] font-sanssem text-[#fff]">
                  {item.fileName}
                </td>
                <td className="text-[12px] leading-4 flex justify-start w-[30%] font-sanssem text-[#fff]">
                  {item.hash}
                </td>
                <td className="text-[12px] leading-4 flex justify-start w-[20%] font-sanssem text-opacity-50 text-[#fff]">
                  {item.path}
                </td>
                <td className="flex justify-end w-[30%]">
                  {hoveredRowIndex === index ? (
                    <div className="flex items-center pb-0 ">
                      <div className="hover:rounded-[5px] w-[30px] cursor-pointer flex justify-center items-center h-6 hover:bg-[#3F3F3F]">
                        <LightTooltip title="More info" onClick={handleOpen}>
                          <IconButton>
                            <img
                              className="hover:"
                              src={information}
                              alt="info"
                            />
                          </IconButton>
                        </LightTooltip>
                        <Modal
                          keepMounted
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="keep-mounted-modal-title"
                          aria-describedby="keep-mounted-modal-description"
                        >
                          <Box sx={style}>
                            <Typography
                              id="keep-mounted-modal-title"
                              variant="h6"
                              component="h2"
                              fontFamily="sans"
                              display="flex"
                              marginTop="14px"
                              paddingX="37px"
                              justifyContent="space-between"
                              color="white"
                            >
                              Threat Info
                              <img
                                onClick={handleClose}
                                className="cursor-pointer"
                                src={cross}
                              />
                            </Typography>
                            <div className="border-t my-[18px] px-10 border-b border-white border-opacity-50">
                              <div className="  flex items-center">
                                <div className="w-[40%] mt-[18px]">
                                  <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                                    File Name
                                  </p>
                                  <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                                    uid
                                  </p>
                                  <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                                    Hash
                                  </p>
                                  <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                                    File Extension
                                  </p>
                                  <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                                    threat
                                  </p>
                                  <p className="text-[12px] font-sans leading-4 text-[#949494] pb-5">
                                    Timestamp
                                  </p>
                                </div>
                                <div className="w-[60%] mt-[18px]">
                                  <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
                                    eicar.txt
                                  </p>
                                  <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
                                    a2b543b543bh53bh3b5j3bk3
                                  </p>
                                  <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
                                    a2b543b543bh53bh3b5j3bk3
                                  </p>
                                  <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
                                    .txt
                                  </p>
                                  <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
                                    EICAR-AV-Test
                                  </p>
                                  <p className="text-[12px] font-sanssem leading-4 text-[#fff] pb-5">
                                    30 October, 2023 09:14:31 AM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <Button
                                onClick={handleClose}
                                
                                className="rounded-[2.5px] cursor-pointer mb-[14px] mr-[18px] border border-white bg-[#2A2A2A] w-16  h-6 "
                              >
                                <p className="  text-[12px] font-sansmed leading-4 text-[#fff]">
                                  {" "}
                                  Close
                                </p>
                              </Button>
                            </div>
                          </Box>
                        </Modal>
                      </div>
                      <div className=" ml-5 hover:rounded-[5px] w-[30px] cursor-pointer flex justify-center items-center h-6 hover:bg-[#3F3F3F]">
                        <LightTooltip title="Release" onClick={handleRelease}>
                          <IconButton>
                            <img
                              className=" cursor-pointer"
                              src={monitor}
                              alt="monitor"
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
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="text-[12px] font-sanssem leading-4 text-[#fff]"
              >
                No data available
              </td>
            </tr>
          )}
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
          <p>The threat was released</p>
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

export default Qurantine;
