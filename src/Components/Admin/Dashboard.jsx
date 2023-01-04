import React, { useState } from "react";

import { GoPerson } from "react-icons/go";
import { HiUsers } from "react-icons/hi";
import { GiAstrolabe } from "react-icons/gi";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className=" flex ">
      {/* <section class="sidebar md:col-span-1"> */}
      <section
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-fit relative duration-300 `}
       >
        {" "}
        {/* <button className={`absolute cursor-pointer -right-10 top-9 w-7 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}><BiMenu/></button> */}
        <Sidebar />
      </section>

      <div className="dashboardContainer">
        <div className="container">
          <h1 className="relative flex justify-center text-4xl font-bold mb-5">
            Dashboard
          </h1>
          <br />
          <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-1  ">
            <div className="bg-cyan-600 rounded-md shadow-xl h-[120px] w-[250px]  flex  flex-row justify-between">
              <div className="flex flex-col">
                <h2 className="mt-4 font-bold text-3xl ml-5 text-white w-fit">
                  522
                </h2>
                <h3 className="text-lg text-white font-semibold ml-5 mt-3 w-fit">
                  Astrologers
                </h3>
              </div>
              <div className="">
                <GoPerson className="h-16 w-16 mt-6 text-gray-300 blur-sm " />
              </div>
            </div>
            <div className="bg-green-600 rounded-md shadow-xl h-[120px] w-[250px]  flex  flex-row justify-between">
              <div className="flex flex-col">
                <h2 className="mt-4 font-bold text-3xl ml-5 text-white w-fit">
                  522
                </h2>
                <h3 className="text-lg text-white font-semibold ml-5 mt-3 w-fit">
                  Users
                </h3>
              </div>
              <div>
                <HiUsers className="h-20 w-20 mt-5 text-gray-300 blur-sm" />
              </div>
            </div>

            <div className="bg-red-600 rounded-md shadow-xl h-[120px] w-[250px]  flex  flex-row justify-between">
              <div className="flex flex-col">
                <h2 className="mt-4 font-bold text-3xl ml-5 text-white w-fit">
                  522
                </h2>
                <h3 className="text-lg text-white font-semibold ml-5 mt-3 w-fit">
                  Services
                </h3>
              </div>
              <div>
                <GiAstrolabe className="h-16 w-16 text-white mt-6 blur-sm" />
              </div>
            </div>

            <div className="bg-yellow-600 rounded-md shadow-xl h-[120px] w-[250px]  flex  flex-row justify-between">
              <div className="flex flex-col">
                <h2 className="mt-4 font-bold text-3xl ml-5 text-white w-fit">
                  $ 75752
                </h2>
                <h3 className="text-lg text-white font-semibold ml-5 mt-3 w-fit">
                  Amount
                </h3>
              </div>
              <div>
                <AiOutlinePieChart className="h-16 w-16 text-white mt-6 blur-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Button
            </button> */}
    </div>
  );
};

export default Dashboard;
