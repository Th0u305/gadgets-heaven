import React, { createContext, useContext, useEffect, useState } from "react";
import logoSetting from "../../assets/Frame.png";
import Cart from "./Cart";
import Wish from "./Wish";
import ani from "../../assets/ccc.gif";
import { Link } from "react-router-dom";
import { VisibilityContext } from "../Root/Root";

export const DashboardData = createContext();

const Dashboard = () => {
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(true);
  const { number, setNumber } = useContext(VisibilityContext);
  const [dashData, setDashData] = useState([]);

  useEffect(() => {
    const all = localStorage.getItem("dashboard");
    const data = JSON.parse(all);
    
    if (data !== null) {
      setDashData(data);
    } else {
      return;
    }
  }, []);

  const cartBtn = () => {
    setVisible(true);
    setVisible2(false);
  };
  const wishBtn = () => {
    setVisible(false);
    setVisible2(true);
  };

  const handelBtn = (id, itemId, price) => {
    if (id === "sort") {
      const sorted = [...dashData].sort((a, b) => b.price - a.price);
      setDashData(sorted);
    } else if (id === "purchase") {
      if (number === 0) {
        setVisible3(false);
      }
      setNumber(0);
      localStorage.removeItem("dashboard");
    }else if (id === "remove") {
      const filterDelete = dashData.filter((item) => item.id !== itemId);
      setDashData(filterDelete);
      localStorage.setItem("dashboard", JSON.stringify(filterDelete));
      setNumber(number - price);
    }
  };

  useEffect(() => {
    const all = localStorage.getItem("dashboard");
    const data = JSON.parse(all);
    if (data === null) {
      return setNumber(0);
    } else {
      const totalSum = data.reduce(
        (accumulator, item) => accumulator + item.price,
        0
      );
      setNumber(totalSum);
    }
  }, []);

  return (
    <DashboardData.Provider value={{ dashData, setDashData }}>
      <div className=" text-center">
        <div className="bg-[#9538E2] p-10 mb-20 space-y-5 rounded-b-3xl">
          <h1 className="text-5xl font-semibold text-white">Dashboard</h1>
          <p className="text-lg text-white mx-auto lg:w-[80%]">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="space-x-5 flex justify-center items-center">
            <button
              onClick={() => cartBtn()}
              className="w-[6em] md:w-[8em] h-[2.5em] text-2xl font-semibold rounded-full outline-none hover:outline-none transition-all 
                         duration-300 ease-in-out hover:scale-105 bg-white focus:bg-gray-700 focus:text-white"
            >
              Cart
            </button>
            <button
              onClick={() => wishBtn()}
              className="w-[6em] md:w-[8em] h-[2.5em] text-2xl font-semibold rounded-full outline-none hover:outline-none transition-all 
                         duration-300 ease-in-out hover:scale-105 bg-white focus:bg-gray-700 focus:text-white"
            >
              Wishlist
            </button>
          </div>
        </div>

        <div className=" container mx-auto mb-12 w-full">
          {visible && (
            <div className="flex flex-col md:flex-row justify-between items-center lg:items-end space-y-5">
              <div className="space-y-5 flex flex-col justify-between items-center md:items-start lg:items-end lg:flex-row w-auto">
                <h1 className="text-3xl font-bold mr-12">Cart</h1>
                <h1 className="text-3xl font-bold mr-10">
                  Total Cost: {number}{" "}
                </h1>
              </div>

              <div className="flex flex-col justify-between items-center gap-5 md:flex-row">
                <button
                  onClick={() => handelBtn("sort")}
                  className="btn w-[10em] text-xl font-semibold rounded-full h-[3.5em] border-2 border-gray-400 
                                 btn-lg outline-none hover:outline-none  focus:bg-[#9538E2]
                                  transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-[#9538e2]"
                >
                  Sort by Price <img src={logoSetting} alt="" />
                </button>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                  className="btn w-[10em] text-xl font-semibold rounded-full text-black h-[3.5em] btn-lg  
                                  outline-none hover:outline-none border-2 border-gray-400
                                  transition-all duration-300 ease-in-out hover:scale-105 focus:bg-[#9538E2]"
                >
                  <button
                    onClick={() => handelBtn("purchase")}
                    className="w-full h-full"
                  >
                    <Link>Purchase</Link>
                  </button>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="p-12 bg-white rounded-3xl shadow-md">
          {visible && <Cart handelBtn={handelBtn}></Cart>}
          <>
            {visible2 && (
              <Wish setVisible={setVisible} setVisible2={setVisible2}></Wish>
            )}
          </>
        </div>
        {visible3 && (
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box">
              <div className="flex flex-col justify-center items-center">
                <img className="rounded-full" src={ani} alt="" />
                <h1 className="text-2xl font-semibold">
                  Thank you for shopping <br /> with us
                </h1>
              </div>
              <div className="modal-action">
                <form method="dialog" className="w-full">
                  <button
                    type="submit"
                    className="btn w-[15em] h-[3em] border-2 border-[#000000] text-xl outline-none"
                  >
                    <Link to="/">Close</Link>
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </DashboardData.Provider>
  );
};

export default Dashboard;
