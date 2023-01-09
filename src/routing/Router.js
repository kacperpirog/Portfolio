import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import { routes } from "../utilis/routes";
import NavBar from "../components/navigation/NavBar";
import About from "../views/About";
import Contact from "../views/Contact";
import MySkills from "../views/MySkills";
import Work from "../views/Work";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.mySkills} element={<MySkills />} />
        <Route path={routes.work} element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
