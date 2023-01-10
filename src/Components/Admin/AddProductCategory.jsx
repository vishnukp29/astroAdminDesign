import React, { useState } from "react";
import Sidebar from "./Sidebar";

function AddProductcategory() {
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
          <span> Add Product category</span>
        </div>

        <div className="w-full flex justify-center p-5">
          <div className="w-full border bg-white shadow-lg rounded-lg">
            <div className="bg-blue-500 p-2">Add Product Category</div>
            <div className="m-4">
              <div className=" ">
                <div>
                  <label className="font-semibold">
                    Product Category Name
                    <sup className="text-red-600 text-lg">*</sup>{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="w-full lg:w-3/4 border p-1 focus:ring-1 ring-blue-500 focus:outline-none"
                    type="text"
                    placeholder="Enter Product Category Name"
                  />
                </div>
              </div>
              <div className=" mt-3">
                <div>
                  <label>
                    <span className="font-semibold">
                      {" "}
                      Product Category Icon
                    </span>
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
                    className="w-full lg:w-3/4 border p-1 focus:ring-1 ring-blue-500 focus:outline-none"
                    type="file"
                    placeholder=" Choose Icon"
                  />
                </div>
              </div>
              <div className="mt-3 ">
                <div>
                  <label>
                    <span className="font-semibold">
                      Product Category Background
                    </span>
                    <span className="text-sm text-muted ">
                      ( File must be in PNG | JPG | JPEG and size must be 500 x
                      250 px){" "}
                    </span>
                    <sup className="text-red-600 text-lg">*</sup>
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="w-full lg:w-3/4 border p-1 focus:ring-1 ring-blue-500 focus:outline-none"
                    type="file"
                    placeholder=" Choose Icon"
                  />
                </div>
                <div className="m-4">
                  <input type="checkbox" />
                  Active
                </div>
                <div className="flex gap-4">
                  <button className="boredr bg-blue-500 rounded-md p-2 px-6">
                    Save
                  </button>
                  <button className="boredr bg-blue-500 rounded-md p-2 px-5">
                    Action
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

export default AddProductcategory;
