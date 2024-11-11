import React, { createContext } from "react";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DetailsPages from "./DetailsPages";
import { VisibilityContext } from "../Root/Root";

const DetailsPage = ({ gadget }) => {
 
  const [visible, setVisible] = useState(false);
  const [singleDevice, setSingleDevice] = useState([]);
  const { upcomingBtn, setUpcomingBtn } = useContext(VisibilityContext);
 

  useEffect(() => {
    setSingleDevice(gadget);
  }, []);

  const singleGadget = (id) => {
    localStorage.setItem("device", JSON.stringify(singleDevice));
    setUpcomingBtn(id)
  };
  

  return (
    <div className="card-actions">
      { (
        <NavLink
          onClick={
            (() => singleGadget("singleDev"))}
          to="details"
          className="btn border-2 border-[#9538E2] text-[#9538E2] text-lg rounded-full 
                    btn-lg outline-none hover:outline-none w-[11em] transition-all 
                    duration-300 ease-in-out hover:scale-105">
          View Details
        </NavLink>
      )}

      {visible && <DetailsPages singleDevice={singleDevice}></DetailsPages>}
    </div>
  );
};

export default DetailsPage;
