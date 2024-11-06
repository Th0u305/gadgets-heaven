import React, { createContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Wish = ({ setVisible, setVisible2 }) => {
  const [wishData, setWishData] = useState([]);


  const addToCart = () => {
    setVisible2(false);
    setVisible(true);
  };


  useEffect(() => {
    const all = localStorage.getItem("wish");
    const data = JSON.parse(all);
    
    if (data !== null) {
        setWishData(data);
    } else {
      return ;
    }          
  }, []);

  

  return (
  
    <div className="grid grid-row-auto gap-12">
      {wishData.length > 0 ? ( wishData.map(item =>
             <div key={item.id} className="flex flex-row items-center">
             <div className="flex flex-row justify-start items-center text-start gap-8">
                 <div className="w-[15%] bg-[#ECECEC] rounded-3xl p-5">
                   <img className="" src={item.image} alt="" />
                 </div>
                 <div className="space-y-3">
                     <h1 className="text-3xl font-semibold">{item.title}</h1>
                     <p className="text-lg text-gray-600">
                       {item.description}
                     </p>
                     <p className="text-lg font-semibold text-gray-700">
                       Price <FontAwesomeIcon icon={faDollarSign} />{" "}
                       {item.price}
                     </p>
                     <button
                       onClick={() => addToCart()}
                       className="btn btn-lg text-lg font-semibold bg-[#9538E2] rounded-full text-white">
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
        )) : <div className="space-y-5">
            <h1 className="text-4xl font-semibold">Please add some gadgets first</h1>
            <p className="text-xl text-gray-600">No items in WishList</p>
        </div> 

        }
    </div>
  );
};
export default Wish;



