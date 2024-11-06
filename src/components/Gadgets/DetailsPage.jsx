import React, { createContext } from "react";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DetailsPages from "./DetailsPages";



const DetailsPage = ({gadget}) => {
  
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const [singleDevice, setSingleDevice] = useState([]);
  
useEffect(()=>{
  setSingleDevice(gadget)    
},[])


const singleGadget = () =>{
  localStorage.setItem("device",JSON.stringify(singleDevice));
}

  return (
    <div className="card-actions">

       {visible && (
        <NavLink
          onClick={(() => setVisible(), ()=> setVisible2(false),()=> singleGadget(gadget))}
          to="details"
          className="btn w-[11em] border-2 border-[#9538E2] text-[#9538E2] text-lg rounded-3xl"
        >
          View Details
        </NavLink>
      )}
  
      {
        visible2 && 
       <DetailsPages singleDevice={singleDevice}></DetailsPages>
      }
    </div>
  );
};

export default DetailsPage;
