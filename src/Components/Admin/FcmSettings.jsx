import React, { useState } from "react";
import Sidebar from "./Sidebar";

function FcmSettings() {
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
        {/* <div className="text-lg">Edit Push Notification Setting</div> */}
        <div className="w-full flex justify-end p-5">
          <span className="hover:cursor-pointer text-blue-500 hover:text-gray-400 ">
            Home/
          </span>
          <span> Edit Push Notification Setting</span>
        </div>

        <div className="w-full flex justify-center p-5">
        <div className="w-full border bg-white shadow-lg rounded-lg ">
          <div className="bg-blue-500 p-2 text-white">
            Edit Push Notification Setting
          </div>
          <div className="m-4">
            <div className=" ">
              <div>
                <label className="font-semibold">
                  API Key
                  <sup className="text-red-600 text-lg">*</sup>{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="w-full lg:w-3/4 border p-2 rounded focus:ring-1 ring-blue-500 focus:outline-none"
                  type="text"
                  placeholder="Enter API key"
                />
              </div>
            </div>
            <div className=" mt-3">
              <div>
                <label className="font-semibold">
                  FCM URL
                  <sup className="text-red-600 text-lg">*</sup>
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="w-full lg:w-3/4 border p-2 rounded focus:ring-1 ring-blue-500 focus:outline-none"
                  type="text"
                  placeholder="Enter FCM URL"
                />
              </div>
            </div>
            <div className=" mt-3">
              <div>
                <label className="font-semibold">
                  Sender ID
                  <sup className="text-red-600 text-lg">*</sup>
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="w-full lg:w-3/4 border p-2 rounded focus:ring-1 ring-blue-500 focus:outline-none"
                  type="text"
                  placeholder="Enter Sender ID"
                />
              </div>
            </div>
            <div className="mt-3 ">
              <div className="m-1 mx-2">
                <input type="checkbox" />
                SSL VERIFY PEER Active
              </div>
              <div className="m-1 mx-2">
                <input type="checkbox" />
                Active
              </div>
              <div className="flex gap-4">
                <button className="boredr bg-blue-500 rounded-md text-white p-2 px-5">
                  Update
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
      {/* service category form */}
      
    </div>
  );
}

export default FcmSettings;
