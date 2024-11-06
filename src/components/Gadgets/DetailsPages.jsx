import React, { createContext, useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
export const  NavCartLength = createContext();



const DetailsPages = () => {

  const [singleDevice, setSingleDevice] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isAvailable2, setIsAvailable2] = useState(false);


  // Check if the item exists in local storage when component loads

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("device"));
    setSingleDevice(item);

    // Check if the item is already in the "dashboard" list
    const all = localStorage.getItem("dashboard");
    if (all) {
      const data = JSON.parse(all);
      const exists = data.find((storedItem) => storedItem.id === item?.id);
      if (exists) {
        setIsAvailable(true); // Disable button if item exists
      }
    }
  }, []);

  const addToCart = () => {
    addToDash(singleDevice);
  };

  const addToDasAll = () => {
    const all = localStorage.getItem("dashboard");
    if (all) {
      const data = JSON.parse(all);
      return data;
    } else {
      return [];
    }
  };

  const addToDash = (item) => {
    const existingItems = addToDasAll();
    const isAlreadyInCart = existingItems.find((storedItem) => storedItem.id === item.id);
    
    if (isAlreadyInCart) {
      toast.error("This Product Already Exists in your Cart");
    } else {
      toast.success("Successfully Added To Cart");
      existingItems.push(item);
      localStorage.setItem("dashboard", JSON.stringify(existingItems));
      setIsAvailable(true); // Disable button after adding to cart
    }
  };




////////////////////   wish list



const addToWish = () => {
  addToDash2(singleDevice);
};

const addToDasAll2 = () => {
  const all = localStorage.getItem("wish");

  if (all) {
    const data = JSON.parse(all);
    const exists = data.find((storedItem) => storedItem.id === all?.id);
    if (exists) {
      setIsAvailable2(true); // Disable button if item exists
    }
    return data;
  } else {
    return [];
  }
};

const addToDash2 = (item) => {
  console.log(item);
  
  const existingItems = addToDasAll2();
  const isAlreadyInCart = existingItems.find(
    (storedItem) => storedItem.id === item.id);

  if (isAlreadyInCart) {
    toast.error("This Product Already Exists in your Wish List");
  } else {
    toast.success("Successfully Added To Wishlist");
    existingItems.push(item);
    localStorage.setItem("wish", JSON.stringify(existingItems));
    setIsAvailable2(true);
  }
};




  return (
    <NavCartLength.Provider value={{singleDevice}}>
    <div className="h-[100vh]">
      <div className="bg-[#9538E2] text-center relative h-[50vh] flex flex-col justify-start items-center pt-16 rounded-b-3xl">
        <h1 className="text-5xl font-semibold text-white">Product Details</h1>
        <p className="text-lg font-semibold text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div
        className="flex flex-row border-2 justify-center items-center z-50
                        absolute top-1/2 left-0 right-0 mx-auto bg-white rounded-3xl w-1/2 p-8">
        <div className="">
          <img className="" src={singleDevice.image} alt="" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">{singleDevice.title}</h1>
          <p className="text-lg font-semibold">
            Price <FontAwesomeIcon icon={faDollarSign} /> {singleDevice.price}
          </p>
          <p className="bg-[#309C081A] text-[#309C08] rounded-2xl w-28 text-center border-2 border-[#309C08] font-semibold">
            {singleDevice.availability ? "In Stock" : "Not Available"}
          </p>
          <p className="text-lg text-gray-700">{singleDevice.description}</p>
          <p className="text-lg text-gray-700">Color: {singleDevice.color}</p>
          <div className="">
            <p className="text-xl font-semibold mb-2">Specification</p>
            <ul className="list-disc pl-5">
              {singleDevice?.Specification?.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Rating</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <p className="text-lg text-gray-700">
            warranty: <a>{singleDevice.warranty}</a>
          </p>
          <div className="space-x-4 flex flex-row justify-start items-center">
            <button
              onClick={() => addToCart()}
              disabled={isAvailable}
              className="btn btn-lg text-lg font-semibold bg-[#9538E2] rounded-full text-white"
            >
              Add To Card <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <a className="btn btn-ghost btn-circle"   disabled={isAvailable2} onClick={() => addToWish()}>
              <FontAwesomeIcon className="text-3xl" icon={faHeart} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </NavCartLength.Provider>
  );
};

export default DetailsPages;
