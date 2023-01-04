import React, { useState } from "react";
import Sidebar from "./Sidebar";

function AddService() {
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
      <div className="flex justify-between m-4">
        <div></div>
        <div>
          <div>
            <span className="hover:cursor-pointer text-blue-500 hover:text-gray-400 ">
              Service/
            </span>
            <span> AddService Category List</span>
          </div>
        </div>
      </div>
      {/* service category form */}
      <div className="flex justify-center">
        <div className=" w-2/3 border bg-white shadow-lg rounded-md border-white">
          <div className="bg-blue-500 p-2">Add Service Category</div>
          <div className="m-4">
            <div className=" ">
              <div>
                <label className="font-semibold">
                  Service Category Name
                  <sup className="text-red-600 text-lg">*</sup>{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="w-3/4 border p-1 focus:ring-1 ring-blue-500 focus:outline-none"
                  type="text"
                  placeholder="Enter Service Category Name"
                />
              </div>
            </div>
            <div className=" mt-3">
              <div>
                <label>
                  <span className="font-semibold">Service Category Name</span>
                  <span className="text-sm text-muted">
                    {" "}
                    ( File must be in PNG | JPG | JPEG and size must be 200 x
                    200 px){" "}
                  </span>
                  <sup className="text-red-600 text-lg">*</sup>
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="w-3/4 border p-1 focus:ring-1 ring-blue-500 focus:outline-none"
                  type="file"
                  placeholder="Icon"
                />
              </div>
            </div>
            <div className="mt-3 ">
              <div>
                <label>
                  <span className="font-semibold">Service Category Name</span>
                  <span className="text-sm text-muted ">
                    ( File must be in PNG | JPG | JPEG and size must be 500 x
                    250 px){" "}
                  </span>
                  <sup className="text-red-600 text-lg">*</sup>
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="w-3/4 border p-1 focus:ring-1 ring-blue-500 focus:outline-none"
                  type="file"
                  placeholder="Icon"
                />
              </div>
              <div className="m-4">
                <input type="checkbox" />
                Active
              </div>
              <div className="flex gap-4">
                <button className="boredr bg-blue-500 rounded-md p-2">
                  Save
                </button>
                <button className="boredr bg-blue-500 rounded-md p-2">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddService;
