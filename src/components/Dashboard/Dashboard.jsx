import React, { createContext, useContext, useEffect, useState } from "react";
import logoSetting from "../../assets/Frame.png";
import Cart from "./Cart";
import Wish from "./Wish";
import ani from "../../assets/ccc.gif";
import { Link, NavLink } from "react-router-dom";
import { VisibilityContext } from "../Root/Root";

export const DashboardData = createContext();

const Dashboard = () => {
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(true);
  const { number, setNumber } = useContext(VisibilityContext);
  const [dashData, setDashData] = useState([]);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const all = localStorage.getItem("dashboard");
    const data = JSON.parse(all);

    if (data !== null) {
      return setDashData(data);
    } else if (number === 0) {
      setDisable(true);
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
    if (id === "default") {
      const all = localStorage.getItem("dashboard");
      const data = JSON.parse(all);
      if (data === null) {
        return;
      } else {
        setDashData(data);
      }
    } else if (id === "high") {
      const sorted = [...dashData].sort((a, b) => b.price - a.price);
      setDashData(sorted);
    } else if (id === "low") {
      const sorted = [...dashData].sort((a, b) => a.price - b.price);
      setDashData(sorted);
    } else if (itemId === "purchase") {
      setDashData([]);
      setNumber(0);
      setDisable(true);
      if (number === 0) {
        setVisible3(false);
        setDisable(true);
      }
      setNumber(0);
      localStorage.removeItem("dashboard");
    } else if (id === "remove") {
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
                         duration-300 ease-in-out hover:scale-105 bg-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 hover:text-white"
            >
              Cart
            </button>
            <button
              onClick={() => wishBtn()}
              className="w-[6em] md:w-[8em] h-[2.5em] text-2xl font-semibold rounded-full outline-none hover:outline-none 
                         duration-300 ease-in-out hover:scale-105 bg-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 hover:text-white"
            >
              Wishlist
            </button>
          </div>
        </div>

        <div className=" container mx-auto mb-12 w-full">
          {visible && (
            <div className="flex flex-col md:flex-row justify-between items-center lg:items-end gap-5">
              <div className="gap-8 flex flex-col justify-between items-center md:items-start lg:items-end lg:flex-row w-auto md:text-left">
                <h1 className="text-2xl lg:text-3xl font-bold">Cart</h1>
                <h1 className="text-2xl lg:text-3xl font-bold">
                  Total Cost: {number}{" "}
                </h1>
              </div>

              <div className="flex flex-col justify-between items-center gap-5 md:flex-row">
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn w-[10em] text-xl font-semibold rounded-full h-[3.5em] border-2 border-gray-400 
                                 btn-lg outline-none hover:outline-none
                                  transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-[#9538e2] focus:bg-[#9538e2]"
                  >
                    
                    Sort By{" "}
                    <img
                      className="bg-white mix-blend-multiply"
                      src={logoSetting}
                      alt=""
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 p-2 h-[10em] justify-evenly items-center shadow text-lg font-semibold border-2 border-[#9538e2b6]"
                  >
                    <li>
                      <a onClick={() => handelBtn("default")}>Default</a>
                    </li>
                    <li>
                      <a onClick={() => handelBtn("high")}>High To Low</a>
                    </li>
                    <li>
                      <a onClick={() => handelBtn("low")}>Low To High</a>
                    </li>
                  </ul>
                </div>
                <button
                  disabled={disable}
                  onClick={() =>
                    handelBtn(
                      document.getElementById("my_modal_4").showModal(),
                      "purchase",
                      0
                    )
                  }
                  className="btn w-[10em] text-xl font-semibold rounded-full text-black h-[3.5em] btn-lg  
                              outline-none hover:outline-none border-2 border-gray-400
                              transition-all duration-300 ease-in-out hover:scale-105"
                >
                  Purchase
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="p-12 bg-white rounded-3xl shadow-md">
          {visible && <Cart handelBtn={handelBtn}></Cart>}
          <>
            {visible2 && (
              <Wish
                setVisible={setVisible}
                setVisible2={setVisible2}
                dashData={dashData}
                setDashData={setDashData}
              ></Wish>
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
                  <NavLink
                    type="submit"
                    className="btn w-[15em] h-[3em] border-2 border-[#000000] text-xl outline-none"
                    to="/"
                  >
                    Close
                  </NavLink>
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
