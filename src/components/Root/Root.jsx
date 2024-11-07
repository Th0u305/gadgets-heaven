import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import React, { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const VisibilityContext = createContext();
import { useLocation } from "react-router-dom";

const Root = () => {
  const [navCart, setNavCart] = useState(0);
  const [navWish, setNavWish] = useState(0);
  const [number, setNumber] = useState(0);
  const [deleteItem, setDeleteItem] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [upcomingBtn , setUpcomingBtn] = useState([]);
  

  useEffect(() => {
    fetch("./UpcomingGadgets.json")
      .then((res) => res.json())
      .then((data) => setUpcoming(data))
  }, []);

 


  window.onload = function () {
    const all = localStorage.getItem("dashboard");
    const data = JSON.parse(all);
    setNavCart(data.length);

    const all2 = localStorage.getItem("wish");
    const data2 = JSON.parse(all2);
    setNavWish(data2.length);
  };

  const location = useLocation();

  const DynamicTitle = () => {
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
    return null;
  };
  DynamicTitle();


  return (
    <div className="font-sans mx-auto">
      <div className="container mx-auto p-9">
        <Toaster />
        <VisibilityContext.Provider
          value={{
            location,
            navCart,
            setNavCart,
            number,
            setNumber,
            deleteItem,
            setDeleteItem,
            navWish,
            setNavWish,
            upcoming,
            setUpcoming,
            upcomingBtn,
            setUpcomingBtn
          }}
        >
          <Navbar></Navbar>
          <Outlet></Outlet>
        </VisibilityContext.Provider>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
