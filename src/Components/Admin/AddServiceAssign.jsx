import React, { useState } from "react";
import Sidebar from "./Sidebar";

function AddServiceAssign() {
  const [open, setOpen] = useState(true);
  return (
    <div className="h-full bg-slate-200 flex">
      <section
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-fit relative duration-300 scrollbar scrollbar-thin-gray-800`}
      >
        {" "}
        <Sidebar />
      </section>
      <div className="w-full">
        <div className="w-full flex justify-end p-5">
          <span className="hover:cursor-pointer text-blue-500 hover:text-gray-400 ">
            Home/
          </span>
          <span> Add Service Assign</span>
        </div>

        <div className="w-full flex justify-center p-5 ">
          <div className=" w-full border bg-white shadow-lg rounded-lg ">
            <div className="bg-blue-500 p-4 text-white rounded-t-lg">Add Service Assign</div>
            <div className="m-4">
              <div className=" ">
                <div>
                  <label className="font-semibold">
                    Service Category
                    <sup className="text-red-600 text-lg">*</sup>
                  </label>
                </div>
                <select
                  class="block w-full bg-white-200 border border-blue-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  placeholder="Choose Service Category "
                  id="grid-state"
                >
                  <option> Choose Service Category </option>
                  <option>1</option>
                  <option>2 </option>
                  <option>3 </option>
                  <option>4 </option>
                  <option>5 </option>
                </select>
              </div>
              <div className=" mt-3">
                <div className=" ">
                  <div>
                    <label className="font-semibold">
                      Service
                      <sup className="text-red-600 text-lg">*</sup>
                    </label>
                  </div>
                  <select
                    class="block w-full bg-white-200 border border-blue-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                    placeholder="Choose Service Category "
                    id="grid-state"
                  >
                    <option> Service </option>
                    <option>1</option>
                    <option>2 </option>
                    <option>3 </option>
                    <option>4 </option>
                    <option>5 </option>
                  </select>
                </div>
              </div>
              <div className=" mt-3">
                <div>
                  <label className="font-semibold">
                    Astrologer
                    <sup className="text-red-600 text-lg">*</sup>
                  </label>
                </div>
                <div className="mt-2">
                  <select
                    class="block w-full bg-white-200 border border-blue-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="All"
                    id="grid-state"
                  >
                    <option>Choose user</option>
                    <option> </option>
                    <option> Test (100002) </option>
                    <option>Kbc(100006) </option>
                    <option>Kvc(100007) </option>
                    <option>abc(100008) </option>
                    <option>deepali(100009) </option>
                    <option>User</option>
                  </select>
                </div>
                <div className="mt-3">
                  <div>
                    <label className="font-semibold">
                      Service Price ( ₹ )
                      <sup className="text-red-600 text-lg">*</sup>
                    </label>
                  </div>
                  <div>
                    <input
                      className="w-full bg-white-200 border border-blue-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="number"
                      placeholder="Enter service price"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <div>
                    <label className="font-semibold">
                      Status
                      <sup className="text-red-600 text-lg">*</sup>
                    </label>
                  </div>
                  <div>
                    <select
                      class="block w-full bg-white-200 border border-blue-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="All"
                      id="grid-state"
                    >
                      <option>Pending</option>
                      <option>Approved</option>
                      <option>Edited</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-3 ">
                <div className="m-1 mx-2">
                  <input type="checkbox" />
                  <span className="mx-2">Active</span> 
                </div>
                <div className="flex gap-4">
                  <button className="boredr bg-blue-500 rounded-md text-white p-2 px-5">
                    Save
                  </button>
                  <button className="boredr bg-blue-500 rounded-md text-white p-2 px-5">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddServiceAssign;
