import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Qurantine from "./Qurantine";
import UsbPolicy from "./UsbPolicy";
import Dynamic from "./Dynamic";
import Box from "@mui/material/Box";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
///new tab component 
const [activeTab, setActiveTab] = useState(1);

const changeTab = (tabNumber) => {
  setActiveTab(tabNumber);
};
  return (
    <>
      <div className="h-[77.5vh] px-[18px] pt-[14px]  w-[100%] ">
        <div className=" w-[100%] font-sanssem h-full bg-[#1F2126] rounded-[2px] border-[1px]  border-color">
          {/* <Box className=" ">
            <AppBar position="static ">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                borderRadius="2.5px"
                variant="fullWidth"
                aria-label="full width tabs example"
                sx={{
                  borderRadius: "2.2px",
                  borderBottom: "1px solid rgba(194, 193, 210, 0.05)",
                  borderOpacity: 0.5,

                  backgroundColor: "#1F2126",
                  "& .MuiTabs-indicator": {
                    // border-radius: 5px;
                    background: "#C2C1D2",
                  },
                  "& .MuiTab-root": {
                    color: "white",
                    marginTop: "19px",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    textTransform: "none",
                  },
                }}
              >
                <Tab
                  label="Quarantined Files"
                  {...a11yProps(0)}
                  style={{
                    minWidth: "25%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    // marginLeft: "8px",
                    paddingLeft: "31px",
                  }}
                  disableRipple
                />
                <Tab
                  label="Dynamic Shielding"
                  {...a11yProps(1)}
                  style={{
                    Width: "25%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    paddingLeft: "31px",
                  }}
                  disableRipple
                />
                <Tab
                  label="USB Policy"
                  {...a11yProps(2)}
                  style={{
                    minWidth: "45%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    paddingLeft: "31px",
                  }}
                  disableRipple
                />
              </Tabs>
            </AppBar>
            <div>
              <TabPanel
                className="text-white "
                value={value}
                index={0}
                margin={0}
                padding={0}
                dir={theme.direction}
              >
                <Qurantine />
              </TabPanel>
              <TabPanel
                className="text-white "
                value={value}
                index={1}
                dir={theme.direction}
              >
                <Dynamic />
              </TabPanel>
              <TabPanel
                className="text-white"
                value={value}
                index={2}
                dir={theme.direction}
              >
                <UsbPolicy />
              </TabPanel>
            </div>
          </Box> */}
          <div className="flex border-b pt-2 border-color-2">
        <div
          className={`cursor-pointer  text-[14px] font-Inter font-medium py-2 px-4 ${
            activeTab === 1 ? 'border-b-4 border-[#B9C0C9] text-[#B9C0C9]' : ' text-white text-opacity-45'
          }`}
          onClick={() => changeTab(1)}
        >
         Quarantined Files
        </div>
        <div
          className={`cursor-pointer text-[#B9C0C9]  text-[14px] font-Inter font-medium py-2 px-4 ${
            activeTab === 2 ? 'border-b-4 border-[#B9C0C9] text-[#B9C0C9]' : ' text-white text-opacity-45'
          }`}
          onClick={() => changeTab(2)}
        >
         Dynamic Shielding
        </div>
        <div
          className={`cursor-pointer text-[#B9C0C9] text-[14px] font-Inter font-medium py-2 px-4 ${
            activeTab === 3 ? 'border-b-4 border-[#B9C0C9] text-[#B9C0C9]' : ' text-white text-opacity-45'
          }`}
          onClick={() => changeTab(3)}
        >
          USB Policy
        </div>
      </div>
      <div className="mt-4">
        {activeTab === 1 && <div><Qurantine /></div>}
        {activeTab === 2 && <div><Dynamic /></div>}
        {activeTab === 3 && <div><UsbPolicy /></div>}
      </div>
        </div>
      </div>
    </>
  );
}
