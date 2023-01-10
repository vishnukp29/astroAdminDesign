import React, { useState } from "react";
import TextEditor from "../TextEditor/TextEditor";
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
      <div className="w-full ">
        <div className="w-full flex justify-end p-5">
          <span className="hover:cursor-pointer text-blue-500 hover:text-gray-400 ">
            Service/
          </span>
          <span> AddService </span>
        </div>
        <div className="w-full flex justify-center p-5 ">
          <div className=" w-full border bg-white shadow-lg rounded-lg ">
            <div className="bg-blue-500 p-4 text-white rounded-t-lg">Add Service </div>
            <div className="m-4">
              <div className=" ">
                <div>
                  <label className="font-semibold">
                    Service Category
                    <sup className="text-red-600 text-lg">*</sup>{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <select
                    className="w-full lg:w-3/4 border p-1 focus:ring-1 ring-blue-500 focus:outline-none"
                    type="text"
                    placeholder="Enter Service Category Name">
                        <option value="select">Select a Service</option>
                        <option value="volvo">Online Puja</option>
                        <option value="Evil Eye (Najar Lagna)">Evil Eye (Najar Lagna)</option>
                        <option value="Spell">Spell</option>
                        <option value="Reiki Healing">Reiki Healing</option>
                        <option value="Theta Healing">Theta Healing</option>
                        <option value="Cord Cutting">Cord Cutting</option>
                        <option value="Birth Time Rectification">Birth Time Rectification</option>
                        <option value="Past Life Regression">Past Life Regression</option>
                    </select>
                </div>
              </div>
              <div className="mt-4 ">
                <div>
                  <label className="font-semibold">
                    Service Name
                    <sup className="text-red-600 text-lg">*</sup>{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="w-full lg:w-3/4 border p-1 focus:ring-1 ring-blue-500 focus:outline-none"
                    type="text"
                    placeholder="Enter Service Name"
                  />
                </div>
              </div>
              <div className="mt-3">
                <div>
                  <label className="font-semibold">
                    Service Description
                    <sup className="text-red-600 text-lg">*</sup>{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <TextEditor/>
                </div>
              </div>
              <div className=" mt-12">
                <div>
                  <label>
                    <span className="font-semibold">Service Category Icon</span>
                    <span className="text-sm text-muted">
                      {" "}
                      ( File must be in PNG | JPG | JPEG and size must be 400 x
                      400 px){" "}
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
                <div className="m-4">
                  <input type="checkbox" />
                  Active
                </div>
                <div className="flex gap-4">
                  <button className="boredr bg-blue-500 rounded-md p-2 text-white px-4">
                    Save
                  </button>
                  <button className="boredr bg-blue-500 rounded-md p-2  text-white px-3">
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

export default AddService;
