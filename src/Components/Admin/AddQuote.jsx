import React, { useState } from "react";
import Sidebar from "./Sidebar";

function AddQuote() {
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
          <span> Add Quote List</span>
        </div>

        <div className="w-full flex justify-center p-5 ">
          <div className="  w-full border bg-white shadow-lg rounded-lg  ">
            <div className="bg-blue-500 p-4 text-white rounded-t-lg">Add Quote</div>
            <div className="m-4">
              <div className=" ">
                <div>
                  <label className="font-semibold">
                    Quote Date
                    <sup className="text-red-600 text-lg">*</sup>{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="w-full lg:w-3/4 border p-1 focus:ring-1 ring-blue-500 focus:outline-none"
                    type="date"
                    placeholder=""
                  />
                </div>
              </div>
              <div className=" mt-3">
                <div>
                  <label>
                    <span className="font-semibold">Quote Image</span>
                    <span className="text-sm text-muted">
                      {" "}
                      ( File must be in PNG | JPG | JPEG and size must be 500 x
                      500 px){" "}
                    </span>
                    <sup className="text-red-600 text-lg">*</sup>
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="w-full lg:w-3/4 border p-1 focus:ring-1 ring-blue-500 focus:outline-none"
                    type="file"
                    placeholder="Icon"
                  />
                </div>
              </div>
              <div className="mt-3 ">
                <div className="m-4 mx-2">
                  <input type="checkbox" />
                  Active
                </div>
                <div className="flex gap-4">
                  <button className="boredr bg-blue-500 rounded-md text-white p-2 px-5">
                    Save
                  </button>
                  <button className="boredr bg-blue-500 rounded-md text-white p-2 px-3">
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

export default AddQuote;
