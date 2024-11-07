import React, { createContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Wish = ({ setVisible, setVisible2 }) => {

  const [wishData, setWishData] = useState([]);

 
  useEffect(() => {
    const all = localStorage.getItem("wish");
    const data = JSON.parse(all);

    if (data !== null) {
      setWishData(data);
    } else {
      return;
    }
  }, []);

  

  const addToCart = (item) => {
    setVisible2(false);
    setVisible(true);    
  };


 
  return (
    <div className="grid grid-col-1">
      {wishData.length > 0 ? (
        wishData.map((item) => (
          <div key={item.id} className="flex justify-between items-center flex-col md:flex-row ">
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
                  onClick={() => addToCart(item)}
                  className="btn btn-lg text-lg font-semibold bg-[#9538E2] rounded-full text-white"
                >
                  Add To Card <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </div>
            <div>
              <a className="btn btn-ghost btn-circle">
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
