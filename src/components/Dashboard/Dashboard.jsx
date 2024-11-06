import React, { createContext, useContext, useEffect, useState } from "react";
import logoSetting from "../../assets/Frame.png";
import Cart from "./Cart";
import Wish from "./Wish";
import ani from "../../assets/ccc.gif";
import { Link } from "react-router-dom";

export const DashboardData = createContext();
const Dashboard = () => {
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const [number, setNumber] = useState(0);

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

  const handelBtn = (id) => {
    if (id === "sort") {
      const sorted = [...dashData].sort((a, b) => b.price - a.price);
      setDashData(sorted);
    } else if (id === "purchase") {
      setNumber(0);
      localStorage.removeItem("dashboard");
    }
  };

  const cartBtn = () => {
    setVisible(true);
    setVisible2(false);
  };
  const wishBtn = () => {
    setVisible(false);
    setVisible2(true);
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
        <div className="bg-[#9538E2] p-20 mb-20 space-y-5 rounded-b-3xl">
          <h1 className="text-5xl font-semibold text-white">Dashboard</h1>
          <p className="text-lg text-white w-1/2 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="space-x-5">
            <button
              className="btn w-[8em] h-[2.5em] text-2xl font-semibold rounded-full"
              onClick={() => cartBtn()}
            >
              Cart
            </button>
            <button
              className="btn w-[8em] h-[2.5em] text-2xl font-semibold rounded-full"
              onClick={() => wishBtn()}
            >
              Wishlist
            </button>
          </div>
        </div>

        <div className=" container mx-auto mb-12 w-full">
          {visible && (
            <div className="flex flex-row justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">Cart</h1>
              </div>
              <div className="flex flex-row justify-between items-center gap-5">
                <h1 className="text-3xl font-bold mr-10">
                  Total Cost: {number}{" "}
                </h1>
                <button
                  onClick={() => handelBtn("sort")}
                  className="btn w-[10em] text-xl font-semibold rounded-full h-[3.5em]"
                >
                  Sort by Price <img src={logoSetting} alt="" />
                </button>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                  className="btn w-[10em] text-xl font-semibold rounded-full bg-[#9538E2] text-white h-[3.5em]"
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
          {visible && <Cart></Cart>}
          <>
            {visible2 && (
              <Wish setVisible={setVisible} setVisible2={setVisible2}></Wish>
            )}
          </>
        </div>

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box">
            <div className="flex flex-col justify-center items-center">
              <img className="rounded-full" src={ani} alt="" />
              <h1 className="text-2xl font-semibold">
                Thank you for shopping <br /> with us
              </h1>
            </div>
            <div className="modal-action">
              <form  method="dialog" className="w-full">
                <button  type="submit"
                  className="btn w-[15em] h-[3em] border-2 border-[#9538E2] text-xl outline-none">
                  <Link to="/">Close</Link>
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </DashboardData.Provider>
  );
};

export default Dashboard;
