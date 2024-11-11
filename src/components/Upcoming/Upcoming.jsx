import React, { useContext, useEffect, useState } from "react";
import { VisibilityContext } from "../Root/Root";
import { NavLink } from "react-router-dom";

const Upcoming = () => {
  const {upcoming, setUpcoming} = useContext(VisibilityContext);
  const { setUpcomingBtn} = useContext(VisibilityContext);


  useEffect(()=>{
    const all = localStorage.getItem("upData")
    const data = JSON.parse(all);
    setUpcoming(data)
  },[])



  const viewDetails = (id, id2) =>{   
    if (id) {
      localStorage.setItem("upDataDetails", JSON.stringify(id))      
      setUpcomingBtn(id2)      
    }
    else{
      return [];
    }
  }


  return (
    <div className="card rounded-3xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 w-[80%] mx-auto mt-14">
      {upcoming.map((upGadgets) => (
        <div key={upGadgets.id} className="rounded-3xl p-10 shadow-md border-t-2">
          <figure>
            <img className="bg-[#D9D9D9] rounded-3xl p-8" src={upGadgets.image}/>
          </figure>
          <div className="card-body space-y-2 justify-center items-center text-center">
            <h2 className="card-title text-2xl font-semibold">{upGadgets.title}</h2>
            <h4 className="font-semibold ">Price:{upGadgets.price}</h4>
            <p className="font-semibold ">warranty:{upGadgets.warranty}</p>
            <div className="card-actions ">
            <NavLink 
                    to="/details"
                    onClick={(()=> viewDetails(upGadgets, "up"))}
                    className="btn w-[11em] border-2 border-[#9538E2] text-[#9538E2] text-lg rounded-3xl">
                    View Details
            </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;
