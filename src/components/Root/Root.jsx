import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import React, { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const VisibilityContext = createContext();
import { useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Gadget Heaven - Home";
        break;
      case "/home":
        document.title = "Gadget Heaven - Home";
        break;
      case "/upcoming":
        document.title = "Gadget Heaven - Upcoming";
        break;
      case "/statistic":
        document.title = "Gadget Heaven - Statistic";
        break;
      case "/dashboard":
        document.title = "Gadget Heaven - Dashboard";
        break;
      default:
        document.title = "Gadget Heaven";
    }
  }, [location]);

  return (
    <div className="font-sans mx-auto">
      <div className="container mx-auto">
        <Toaster />
        <VisibilityContext.Provider value={{ location }}>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </VisibilityContext.Provider>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
