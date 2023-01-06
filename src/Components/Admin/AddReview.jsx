import React, { useState } from "react";
import Sidebar from "./Sidebar";

function AddReview() {
  const [open, setOpen] = useState(true);
  return (
    <div className="h-screen bg-slate-50 flex">
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
          <span>Add Review </span>
        </div>

        <div className="w-full flex justify-center p-5 ">
          <div className=" w-full border bg-white shadow-lg rounded-lg ">
            <div className="bg-blue-500 p-4 text-white rounded-t-lg">Add Review</div>
            <div className="m-4">
              <div className=" ">
                <div>
                  <label className="font-semibold">
                    Astrologer
                    <sup className="text-red-600 text-lg">*</sup>
                  </label>
                </div>
                <div className="">
                  <select
                    class="block w-full bg-white-200 border border-blue-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="All"
                    id="grid-state"
                  >
                    <option>Choose Astrologer</option>
                    <option>Astro Test Ast(100001) </option>
                    <option>Astro Test Ast(100001) </option>
                    <option>Kbc(100006) </option>
                    <option>Kvc(100007) </option>

                    <option>User</option>
                  </select>
                </div>
              </div>
              <div className=" mt-3">
                <div>
                  <label className="font-semibold">
                    User
                    <sup className="text-red-600 text-lg">*</sup>
                  </label>
                </div>
                <div className="">
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
              </div>
              <div className="mt-3 ">
                <div>
                  <label className="font-semibold">
                    Rating
                    <sup className="text-red-600 text-lg">*</sup>
                  </label>
                </div>

                <div className="">
                  <select
                    class="block w-full bg-white-200 border border-blue-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                    placeholder="All"
                    id="grid-state"
                  >
                    <option>0</option>
                    <option>1</option>
                    <option>2 </option>
                    <option>3 </option>
                    <option>4 </option>
                    <option>5 </option>
                  </select>
                </div>
              </div>
              <div className="mt-3  ">
                <div>
                  <label className="font-semibold">
                    Comment
                    <sup className="text-red-600 text-lg">*</sup>
                  </label>
                  <input
                    className="block w-full bg-white-200 border border-blue-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                    type="text"
                    placeholder="Enter comment"
                  />
                </div>

                <div className="m-4">
                  <input type="checkbox" />
                  Active
                </div>
                <div className="flex gap-4">
                  <button className="boredr bg-blue-500 rounded-md p-2 text-white px-4">
                    Save
                  </button>
                  <button className="boredr bg-blue-500 rounded-md p-2 text-white px-3">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service category form */}
    </div>
  );
}

export default AddReview;
