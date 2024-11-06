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
      }
      else{
        setErrorData(false)
      }
      
    }
  };

  return (
    <div className="flex flex-row justify-center items-top gap-8">
        <div>
          <div className="grid grid-rows-6 gap-3 bg-white w-fit rounded-3xl p-5 shadow">
            {btnCategory.map((category) => (
              <button key={category.id}>
                <NavLink
                  to={`category/${category.category}`}
                  onClick={() => loadByCategory(category.category)}
                  className="btn w-[10em] h-[4em] rounded-3xl text-lg"
                >
                  {category.category}
                </NavLink>
              </button>
            ))}
          </div>
        </div>

        {errorData && (
          <div className="border-2 border-[#9538E2] p-8 rounded-3xl w-full flex justify-evenly items-center">
            <img src={errorPic} alt="home image" className="hero-img" />
            <p className="text-5xl font-semibold">Data Not Available</p>
          </div>
        )}

        {errorData2 && (
          <div className="grid grid-cols-3 gap-10">
            {newGadgets.map((gadget) => (
              <Gadget key={gadget.id} gadget={gadget}></Gadget>
            ))}
          </div>
        )}
    </div>
  );
};

export default Gadgets;
