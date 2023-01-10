import React, { useState } from "react";
import TextEditor from "../TextEditor/TextEditor";
import Sidebar from "./Sidebar";

function AddCoupon() {
  const [open, setOpen] = useState(true);
  return (
    <div className="h-screen bg-slate-50 flex">
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
            <span className="hover:cursor-pointer text-blue-500 hover:text-gray-400 ">
              HOME/
            </span>
            <span> Add Coupon</span>
          </div>

        <div className="w-full flex justify-center p-5">
          <div className="w-full border bg-white shadow-lg rounded-lg">
            <div className="bg-blue-500  text-white p-2">Add Coupon</div>
            <div className="m-4">
              <div className="mt-2 ">
                <div>
                  <label className="font-semibold">
                    Coupon Code
                    <sup className="text-red-600 text-lg">*</sup>{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="w-full border rounded-md p-2 focus:ring-1 ring-blue-500 focus:outline-none"
                    type="text"
                    placeholder="Enter Coupon Code"
                  />
                </div>
              </div>
              <div className="mt-2">
                <div className="mt-1">
                  <label className="font-semibold">Description</label>
                </div>
                <div className="mb-14">
                  <TextEditor />
                </div>
                <div className="mt-2 ">
                  <div>
                    <label className="font-semibold">
                      Start Date
                      <sup className="text-red-600 text-lg">*</sup>{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="w-full border rounded-md p-2 focus:ring-1 ring-blue-500 focus:outline-none"
                      type="date"
                      placeholder="Enter Start Date"
                    />
                  </div>
                </div>
                <div className="mt-2 ">
                  <div>
                    <label className="font-semibold">
                      End Date
                      <sup className="text-red-600 text-lg">*</sup>{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="w-full border rounded-md p-2 focus:ring-1 ring-blue-500 focus:outline-none"
                      type="date"
                      placeholder="Enter End Date"
                    />
                  </div>
                </div>
                <div className="mt-2 ">
                  <div>
                    <label className="font-semibold">
                      Number of Users
                      <sup className="text-red-600 text-lg">*</sup>{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="w-full border rounded-md p-2 focus:ring-1 ring-blue-500 focus:outline-none"
                      type="text"
                      placeholder="Enter Number of Users"
                    />
                  </div>
                </div>
                <div className=" mt-2">
                  <div>
                    <label className="font-semibold">
                      Minimum Order Amount
                      <sup className="text-red-600 text-lg">*</sup>{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="w-full border rounded-md p-2 focus:ring-1 ring-blue-500 focus:outline-none"
                      type="text"
                      placeholder="Enter Minimum Order Amount"
                    />
                  </div>
                </div>
                <div className=" mt-2">
                  <div>
                    <label className="font-semibold">
                      Discount
                      <sup className="text-red-600 text-lg">*</sup>{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="w-full border rounded-md p-2 focus:ring-1 ring-blue-500 focus:outline-none"
                      type="text"
                      placeholder="Enter  Discount"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div>
                  <label className="font-semibold">
                    Discount type
                    <sup className="text-red-600 text-lg">*</sup>{" "}
                  </label>
                </div>
                <div>
                  <select
                    class="block w-full rounded-md bg-white-200 border border-blue-500 text-gray-700 py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder=""
                    id="grid-state"
                  >
                    <option>Percentage</option>
                    <option>Amount</option>
                  </select>
                </div>
              </div>
              <div className=" mt-2">
                <div>
                  <label className="font-semibold">
                    Maximum Discount Amount
                    <sup className="text-red-600 text-lg">*</sup>{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="w-full border rounded-md p-2 focus:ring-1 ring-blue-500 focus:outline-none"
                    type="text"
                    placeholder="Enter Maximum Discount Amount"
                  />
                </div>
              </div>
              <div className="mt-2">
                <div>
                  <label className="font-semibold">
                    Repeat Usage
                    <sup className="text-red-600 text-lg">*</sup>{" "}
                  </label>
                </div>
                <div>
                  <select
                    class="block w-full rounded-md bg-white-200 border border-blue-500 text-gray-700 py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder=""
                    id="grid-state"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="mt-2">
                <div>
                  <label>
                    <span className="font-semibold"> Coupon Image </span>
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
                    className="w-full  border rounded-md p-1 focus:ring-1 ring-blue-500 focus:outline-none"
                    type="file"
                    placeholder="Choose Image1"
                  />
                </div>
              </div>

              <div className="m-4">
                <input type="checkbox" />
                Active
              </div>
              <div className="flex gap-4">
                <button className="boredr bg-blue-500 rounded-md p-2 text-white px-5">
                  Save
                </button>
                <button className="boredr bg-blue-500 rounded-md p-2 text-white px-5">
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

export default AddCoupon;
