import React, { useEffect, useState } from "react";

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    fetch("./UpcomingGadgets.json")
      .then((res) => res.json())
      .then((data) => setUpcoming(data));
  }, []);


  return (
    <div className="card rounded-3xl grid grid-cols-3 gap-12 w-[80%] mx-auto mt-20">
      {upcoming.map((upGadgets,index) => (
        <div key={index} className="rounded-3xl p-10 shadow-md">
          <figure>
            <img className="bg-[#D9D9D9] rounded-3xl p-8" src={upGadgets.image}/>
          </figure>
          <div className="card-body space-y-2">
            <h2 className="card-title text-2xl font-semibold">{upGadgets.title}</h2>
            <h4 className="font-semibold ">Price:{upGadgets.price}</h4>
            <p className="font-semibold ">warranty:{upGadgets.warranty}</p>
            <div className="card-actions ">
              <button className="btn w-[11em] border-2 border-[#9538E2] text-[#9538E2] text-lg rounded-3xl">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;
