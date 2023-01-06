import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {BsEyeSlash } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";

function Order() {
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
      <div className=" ">
        <div className="flex justify-between m-4">
          <div>
              Invoice List
        
          </div>
          <div>
            <div>
            
              <span className="hover:cursor-pointer hover:text-red-400">
                Home/
              </span>
              <span>   Invoice List</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 border bg-white shadow-red-50 mx-3 my-6 rounded-md h-24 p-3">
          
          <div className="">
            <select
              class="block   w-72 bg-white-200 border border-blue-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
          <div>
            <button className="bg-green-600 py-3 px-4 rounded-md">
              Filter
            </button>
          </div>
        </div>

        <div className="m-4 bg-white rounded-md shadow-indigo-50 p-5 ">
          <div>  Invoice List </div>
          <hr />
          <div className="flex justify-between m-2 align-center">
            <div className=" border rounded-md bg-gray-700 w-fit ">
              <button className="text-white p-2">Copy</button>
              <button className="text-white p-2">CSV</button>
              <button className="text-white p-2">Excel</button>
              <button className="text-white p-2">Print</button>
            </div>
            <div>
              Search:
              <input placeholder="" className="border border-gray-500" />
            </div>
          </div>
          <div className="container mx-auto ">
            <table className="border border-gray-300 text-sm md:text-md w-full table-auto">
              <tr className="h-16 flex  sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0  ">
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>#</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center ">
                    <div>Order No</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>Customer</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>QTY</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>Total Amount</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th> <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>Payment Type</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th> <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>Address</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>Status</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>Created Date</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>Action</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
              </tr>
              <tr className="bg-gray-200 h-16 flex   sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <td className="border border-gray-300 md:p-5  ">1</td>
                <td className="border border-gray-300 md:p-5 ">	INV100001</td>
                <td className="border border-gray-300 md:p-5 ">
                Akash Sadani
              ( USR100002 ) 
                </td>
                <td className="border border-gray-300 md:p-5  ">3</td>
                <td className="border border-gray-300 md:p-5  ">₹ 43500.00</td>
                <td className="border border-gray-300 md:p-5  "></td>

                <td className="border border-gray-300 md:p-5 ">
                </td>

                <td className="border border-gray-300 md:p-5 ">Cancel Request</td>
                <td className="border border-gray-300 md:p-5 ">
                  4th Sep, 2022 03:41 PM
                </td>
                <div className="p-3 block align-center  justify-center gap-2 mt-12">
                  <div className="flex border border-green-500 p-2 m-2 rounded-md">
                    <BsEyeSlash size={20} color="green" />
                    <button className="text-green-600 px-3">edit</button>
                  </div>
                  <div className="flex border border-red-500 p-2 rounded-md">
                    <AiOutlineDelete size={20} color="red" />
                    <button className="text-red-500">delete</button>
                  </div>
                </div>
              </tr>
              <tr className=" h-16 flex   sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <td className="border border-gray-300 md:p-5  ">2</td>
                <td className="border border-gray-300 md:p-5 ">	INV100001</td>
                <td className="border border-gray-300 md:p-5 ">
                Akash Sadani
              ( USR100002 ) 
                </td>
                <td className="border border-gray-300 md:p-5  ">3</td>
                <td className="border border-gray-300 md:p-5  ">₹ 43500.00</td>
                <td className="border border-gray-300 md:p-5  "></td>

                <td className="border border-gray-300 md:p-5 ">
                </td>

                <td className="border border-gray-300 md:p-5 ">Pending</td>
                <td className="border border-gray-300 md:p-5 ">
                  4th Sep, 2022 03:41 PM
                </td>
                <div className="p-3 block align-center  justify-center gap-2 mt-12">
                  <div className="flex border border-green-500 p-2 m-2 rounded-md">
                    <BsEyeSlash size={20} color="green" />
                    <button className="text-green-600 px-3">edit</button>
                  </div>
                  <div className="flex border border-red-500 p-2 rounded-md">
                    <AiOutlineDelete size={20} color="red" />
                    <button className="text-red-500">delete</button>
                  </div>
                </div>
              </tr>
              <tr className="bg-gray-200 h-16 flex   sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <td className="border border-gray-300 md:p-5  ">3</td>
                <td className="border border-gray-300 md:p-5 ">	INV100001</td>
                <td className="border border-gray-300 md:p-5 ">
                Akash Sadani
              ( USR100002 ) 
                </td>
                <td className="border border-gray-300 md:p-5  ">3</td>
                <td className="border border-gray-300 md:p-5  ">₹ 43500.00</td>
                <td className="border border-gray-300 md:p-5  "></td>

                <td className="border border-gray-300 md:p-5 ">
                </td>

                <td className="border border-gray-300 md:p-5 ">Pending</td>
                <td className="border border-gray-300 md:p-5 ">
                  4th Sep, 2022 03:41 PM
                </td>
                <div className="p-3 block align-center  justify-center gap-2 mt-12">
                  <div className="flex border border-green-500 p-2 m-2 rounded-md">
                    <BsEyeSlash size={20} color="green" />
                    <button className="text-green-600 px-3">edit</button>
                  </div>
                  <div className="flex border border-red-500 p-2 rounded-md">
                    <AiOutlineDelete size={20} color="red" />
                    <button className="text-red-500">delete</button>
                  </div>
                </div>
              </tr>
              <tr className=" h-16 flex   sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <td className="border border-gray-300 md:p-5  ">4</td>
                <td className="border border-gray-300 md:p-5 ">	INV100001</td>
                <td className="border border-gray-300 md:p-5 ">
                Akash Sadani
              ( USR100002 ) 
                </td>
                <td className="border border-gray-300 md:p-5  ">3</td>
                <td className="border border-gray-300 md:p-5  ">₹ 43500.00</td>
                <td className="border border-gray-300 md:p-5  "></td>

                <td className="border border-gray-300 md:p-5 ">
                </td>

                <td className="border border-gray-300 md:p-5 ">Pending</td>
                <td className="border border-gray-300 md:p-5 ">
                  4th Sep, 2022 03:41 PM
                </td>
                <div className="p-3 block align-center  justify-center gap-2 mt-12">
                  <div className="flex border border-green-500 p-2 m-2 rounded-md">
                    <BsEyeSlash size={20} color="green" />
                    <button className="text-green-600 px-3">edit</button>
                  </div>
                  <div className="flex border border-red-500 p-2 rounded-md">
                    <AiOutlineDelete size={20} color="red" />
                    <button className="text-red-500">delete</button>
                  </div>
                </div>
              </tr>
             
             
             
             
              <tr className="flex  sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="border border-gray-300 md:p-5 ">#</th>
                <th className="border border-gray-300 md:p-5  ">
                 Order No
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  Customer
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  QTY 
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  Total Amount 
                </th><th className="border border-gray-300 md:p-5 ">
                  Payment Type 
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  Address
                </th>
                <th className="border border-gray-300 md:p-5 ">Status </th>
                <th className="border border-gray-300 md:p-5 ">Created Date</th>
                <th className="border border-gray-300 md:p-5 ">Action</th>
              </tr>
            </table>
          </div>
          <div className="flex justify-between m-2 align-center text-center items-center">
            <div>Showing 1 to 2 of 2 entries</div>
            <div className="flex">
              <button className="border p-2 px-3 border-gray-400 rounded-l-md">
                Previous
              </button>
              <button className="border p-2 focus:bg-blue-500  border-gray-400 text-blue-500 focus:text-white">
                1
              </button>
              <button className="border p-2 focus:bg-blue-500  border-gray-400 text-blue-500 focus:text-white">
                2
              </button>
              <button className="border p-2 px-4 border-gray-400 text-blue-500 rounded-r-md">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;