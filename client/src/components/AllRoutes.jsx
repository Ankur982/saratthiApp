import React from "react";
import { Route, Routes } from "react-router-dom";
import { Create } from "../pages/create/Create";
import { Home } from "../pages/home/Home";



const AllRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};

export default AllRoutes;
