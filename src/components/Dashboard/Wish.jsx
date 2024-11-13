import React, { createContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import toast from "react-hot-toast";
import { VisibilityContext } from "../Root/Root";

const Wish = ({ setVisible, setVisible2, dashData, setDashData }) => {
  const [wishData, setWishData] = useState([]);
  const { number, setNumber } = useContext(VisibilityContext);

  useEffect(() => {
    const all = localStorage.getItem("wish");
    const data = JSON.parse(all);

    if (data !== null) {
      setWishData(data);
    } else {
      return;
    }
  }, []);

  const addToDasAll = () => {
    const all = localStorage.getItem("dashboard");
    if (all) {
      const data = JSON.parse(all);
      return data;
    } else {
      return [];
    }
  };

  const addToCart = (item, price) => {
    const existingItems = addToDasAll();
    const isAlreadyInCart = dashData.find(
      (storedItem) => storedItem.id === item.id
    );
    const filterDelete = wishData.filter((deleteItem) => deleteItem !== item);
    if (wishData.length === 0) {
      setVisible2(false);
      setVisible(true);
      console.log('ok');
      
    }
    if (isAlreadyInCart) {
      return toast.error("This Product Already Exists in your Cart");
    } else {
      setWishData(filterDelete);
      localStorage.setItem("wish", JSON.stringify(filterDelete));
      existingItems.push(item);
      localStorage.setItem("dashboard", JSON.stringify(existingItems));
      setDashData((wishData) => [...wishData, item]);
      setNumber(number + price);
      if (wishData.length === 1) {
        setVisible2(false);
        setVisible(true);
      }
    }
  };

  const handelBtn = (id, item2) => {
    if (id === "removeWish") {
      const filterDelete = wishData.filter((item) => item.id !== item2.id);
      setWishData(filterDelete);
      localStorage.setItem("wish", JSON.stringify(filterDelete));
    }
  };

  return (
    <div className="grid grid-col-1 gap-12">
      {wishData.length > 0 ? (
        wishData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center flex-col md:flex-row "
          >
            <div className="flex justify-start items-center flex-col md:flex-row border-2 gap-8 rounded-3xl p-5">
              <div className=" bg-[#ECECEC] rounded-3xl p-3 md:w-1/2 lg:w-[20%] xl:w-[15%]">
                <img className="" src={item.image} alt="" />
              </div>
              <div className="space-y-3 flex flex-col justify-start items-start text-left">
                <h1 className="text-3xl font-semibold">{item.title}</h1>
                <p className="text-lg text-gray-600">{item.description}</p>
                <p className="text-lg font-semibold text-gray-700">
                  Price <FontAwesomeIcon icon={faDollarSign} /> {item.price}
                </p>
                <button
                  onClick={() => addToCart(item, item.price)}
                  className="btn btn-lg text-lg font-semibold bg-[#9538E2] rounded-full text-white"
                >
                  Add To Cart <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </div>
            <div>
              <a
                className="btn btn-ghost btn-circle"
                onClick={() => handelBtn("removeWish", item)}
              >
                <FontAwesomeIcon className="text-3xl" icon={faCircleXmark} />
              </a>
            </div>
          </div>
        ))
      ) : (
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Please add some gadgets first
          </h1>
          <p className="text-xl text-gray-600">No items in WishList</p>
        </div>
      )}
    </div>
  );
};
export default Wish;
