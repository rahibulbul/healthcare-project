import React from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const Index = () => {
  return (
    <>
      <div className="wrapper">
        <div className="emp-dash-navbar">
          <Navbar />
        </div>
        <div className="emp-dash-main">
          <div className="emp-dash-sidebar">
            <Sidebar />
          </div>
          <div className="emp-dash-content"></div>
        </div>
      </div>
    </>
  );
};

export default Index;
