import React from "react";
import { Route, Routes } from "react-router-dom";
import "./style.scss";

import PageNotFound from "../components/error/notFound/PageNotFound";

import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Explore from "../pages/explore/Explore";
import SearchResult from "../pages/searchResult/SearchResult";

const AppRoutes = () => {
  const routeElementMaps = [
    {
      path: "/",
      element: <Home />,
      exact: true,
    },
    {
      path: "/:mediaType/:id",
      element: <Details />,
      exact: false,
    },
    {
      path: "/search/:query",
      element: <SearchResult />,
      exact: false,
    },
    {
      path: "/explore/:mediaType",
      element: <Explore />,
      exact: false,
    },
    {
      path: "*",
      element: <PageNotFound />,
      exact: false,
    },
  ];
  return (
    <div className="contentBox">
      <Routes>
        {routeElementMaps.map((ele,index) => (
          <Route key={index} exact={ele.exact} path={ele.path} element={ele.element} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRoutes;
