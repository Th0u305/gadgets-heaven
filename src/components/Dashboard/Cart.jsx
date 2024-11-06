import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { DashboardData } from "./Dashboard";

const Cart = () => {

 
    const {dashData, setDashData} = useContext(DashboardData)
  return (
    <div className="grid grid-row-auto gap-12">
      {dashData.length > 0 ? ( dashData.map(item =>
            <div key={item.id} className="flex justify-center items-center">
            <div className="flex flex-row justify-start items-center text-start gap-16">
              <div className="w-[15%] bg-[#ECECEC] rounded-3xl p-5">
                <img className="" src={item.image} alt="" />
              </div>
              <div className="space-y-">
                <h1 className="text-3xl font-semibold">{item.title}</h1>
                <p className="text-lg text-gray-600">{item.description}</p>
                <p className="text-lg font-semibold text-gray-700">
                  Price <FontAwesomeIcon icon={faDollarSign} /> {item.price}
                </p>
              </div>
            </div>
            <div>
              <a className="btn btn-ghost btn-circle">
                <FontAwesomeIcon className="text-3xl" icon={faCircleXmark} />
              </a>
            </div>
          </div>
        )) : <div className="space-y-5">
            <h1 className="text-4xl font-semibold">Please add some gadgets first</h1>
            <p className="text-xl text-gray-600">No items in your Cart</p>
        </div> 

      }
    </div>
  );
};

export default Cart;
