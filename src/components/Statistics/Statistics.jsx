import React, { useContext, useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

import { VisibilityContext } from "../Root/Root";

const Statistics = () => {
  const { upcoming, setUpcoming } = useContext(VisibilityContext);
  const [gadgets, setGadgets] = useState([]);
  const [statsData, setStatsData] = useState([]);

  useEffect(() => {
    fetch("./Gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const stats = (id) => {
    if (id === "upcoming") {
      setStatsData(upcoming);
      return;
    } else if (id === "all") {
      setStatsData(gadgets);
      return;
    }
  };

  return (
    <div className="rounded-b-3xl flex flex-col gap-12 justify-center bg-[#f0f0f0]">
      <div className="bg-[#9538E2] w-full h-[50vh]  items-center text-center flex flex-col justify-center gap-8 rounded-b-3xl">
        <h1 className="text-5xl text-white">Statistics</h1>
        <p className="text-lg text-white w-[80%]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        <div className="flex justify-center items-center w-full gap-3">
          <button
            onClick={() => stats("all")}
            className="btn btn-lg rounded-full outline-none hover:outline-none w-[9em] md:w-[12em]
                                  transition-all duration-300 ease-in-out hover:scale-105
                                   focus:bg-gray-700 focus:text-white hover:bg-gray-700 hover:text-white"
          >
            All Gadgets
          </button>
          <button
            onClick={() => stats("upcoming")}
            className="btn btn-lg rounded-full outline-none hover:outline-none w-[9em] md:w-[12em]
                                  transition-all duration-300 ease-in-out hover:scale-105
                                   focus:bg-gray-700 focus:text-white hover:bg-gray-700 hover:text-white"
          >
            Upcoming Gadgets
          </button>
        </div>
      </div>
      <div className="w-full bg-white shadow rounded-3xl p-5 md:p-12 mt-12">
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            width={500}
            height={300}
            data={statsData}
            stackOffset="sign"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="price" fill="#8884d8" stackId="stack" />
            <Bar dataKey="rating" fill="#82ca9d" stackId="stack" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
