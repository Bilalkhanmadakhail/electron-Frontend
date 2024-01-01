import React from "react";
import Header from "../components/Header";

import Main from "../threats/Index";
const Layout = () => {
  return (
    <>
      <div className="h-screen overflow-hidden bg-[#000]">
        <div className="w-[100%] bg-black">
          <Header />
        </div>
        <div className="w-[100%] flex ">
          <div className="w-[100%] ">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
