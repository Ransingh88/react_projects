import React from "react";

import { Route, Routes } from "react-router-dom";
import { ROUTE_CONSTANT } from "../constants/routeConstants";

import Home from "../pages/home/Home";

const AppRoutes = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route exact path={ROUTE_CONSTANT.ROOT} element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
