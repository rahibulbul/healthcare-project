import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Index from "./components/landingPage/index/Index";
import EmployeeDashboard from "./components/dashboard/employeeDashboard/index/Index";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/employeedashboard" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
