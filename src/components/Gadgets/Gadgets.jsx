import React, { createContext, useEffect, useState } from "react";
import Gadget from "./Gadget";
import { NavLink } from "react-router-dom";
import errorPic from "../../assets/404.png";
import "../ErrorPage/error.css";

export const AssetsContext = createContext();

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [btnCategory, setBtnCategory] = useState([]);
  const [newGadgets, setNewGadgets] = useState(gadgets);
  const [errorData, setErrorData] = useState(false);
  const [errorData2, setErrorData2] = useState(true);


  useEffect(() => {
    fetch("./Gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);


  useEffect(() => {
    fetch("./Category.json")
      .then((res) => res.json())
      .then((data) => setBtnCategory(data));
  }, []);


  useEffect(() => {
    if (newGadgets.length === 0) {
      setNewGadgets(gadgets);
    }
  }, [gadgets]);


  const loadByCategory = (id) => {
    if (id === "All Products") {
      return setNewGadgets(gadgets);
    } else {
      const filteredBYCat = [...gadgets].filter((cats) => cats.category === id);
      setNewGadgets(filteredBYCat);
      if (filteredBYCat.length === 0 && filteredBYCat !== "All Products") {
        setErrorData(true);
      } else {
        setErrorData(false);
      }
    }
  };


  return (
    <div className="flex flex-col 2xl:flex-row 2xl:items-start justify-center items-center gap-8">
        <div className="">
          <div className="grid grid-rows-2 w-max grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-rows-1 2xl:grid-cols-1 
                          justify-items-center gap-5 bg-white rounded-3xl p-5 shadow">
            {btnCategory.map((category) => (
              <button key={category.id}>
                <NavLink
                  to={`category/${category.category}`}
                  onClick={() => loadByCategory(category.category)}
                  className="btn w-[9em] xl:w-[10em] h-[4em] rounded-full text-lg btn-lg outline-none hover:outline-none 
                                  transition-all duration-300 ease-in-out hover:scale-105 focus:bg-[#9538E2] focus:text-white
                                  hover:text-black hover:border-2 hover:border-[#9538E2]"
                >
                  {category.category}
                </NavLink>
              </button>
            ))}
          </div>
        </div>

        {errorData && (
          <div className="border-2 border-[#9538E2] p-8 rounded-3xl w-full flex flex-col justify-evenly items-center">
            <img src={errorPic} alt="home image" className="hero-img md:w-1/2" />
            <p className="text-3xl font-semibold">Data Not Available</p>
          </div>
        )}

        {errorData2 && (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {newGadgets.map((gadget) => (
              <Gadget key={gadget.id} gadget={gadget}></Gadget>
            ))}
          </div>
        )}
    </div>
  );
};


export default Gadgets;
