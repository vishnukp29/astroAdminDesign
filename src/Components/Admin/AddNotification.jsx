import React, { useState } from "react";
import TextEditor from "../TextEditor/TextEditor";
import Sidebar from "./Sidebar";

function AddNotification() {
  const [open, setOpen] = useState(true);
  return (
    <div className="h-full bg-slate-200 flex">
      <section
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-fit relative duration-300 `}
      >
        {" "}
        <Sidebar />
      </section>
      <div className="w-full">
        <div className="w-full flex justify-end p-5">
          <span className="hover:cursor-pointer text-blue-500  hover:text-gray-400 ">
            Home/
          </span>
          <span> Add Notification</span>
        </div>

        <div className="w-full flex justify-center p-5">
          <div className="w-full border bg-white shadow-lg rounded-lg">
            <div className="bg-blue-500 p-2 text-white">Add Notification</div>
            <div className="m-4">
              <div>
                <select
                  class="block w-full bg-white-200 border border-blue-500 text-gray-700 py-2 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="All"
                  id="grid-state"
                >
                  <option>Astrologer</option>
                  <option>User</option>
                </select>
              </div>
              <div className="mt-3 w-full">
                <div>
                  <label className="font-semibold">
                    Notification table
                    <sup className="text-red-600 text-lg">*</sup>{" "}
                  </label>
                </div>
                <div className="mt-2 w-full">
                  <input
                    className=" w-full border p-2 focus:ring-1 ring-blue-500 focus:outline-none rounded-md"
                    type="text"
                    placeholder="Enter Notification Title"
                  />
                </div>
              </div>
              <div className="mt-6 mb-14">
                <div>
                  <label className="font-semibold">
                    Notification Body
                    <sup className="text-red-600 text-lg">*</sup>{" "}
                  </label>
                </div>
                <TextEditor />
              </div>

              <div className="mt-3 ">
                <div>
                  <label>
                    <span className="font-semibold">Notification Image </span>
                    <span className="text-sm text-muted ">
                      {" "}
                      ( File must be in PNG | JPG | JPEG and size must be 200 x
                      200 px)
                    </span>
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="w-full rounded-md border p-1 focus:ring-1 ring-blue-500 focus:outline-none"
                    type="file"
                    placeholder="Choose Image"
                  />
                </div>
                <div className="m-4">
                  <input type="checkbox" />
                  Active
                </div>
                <div className="flex gap-4">
                  <button className="boredr bg-blue-500 rounded-md p-2 px-5 text-white ">
                    Save
                  </button>
                  <button className="boredr bg-blue-500 rounded-md p-2 px-5 text-white">
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

export default AddNotification;
