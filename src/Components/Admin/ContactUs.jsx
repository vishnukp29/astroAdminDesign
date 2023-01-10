import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";

function ContactUs() {
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
          <div></div>
          <div>
            <div>
              
              <span className="hover:cursor-pointer hover:text-gray-800 text-blue-400">
                Home/
              </span>
              <span>Contact Us List</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 border bg-white shadow-red-50 mx-3 my-6 rounded-md h-24 p-3">
          <div>
            <input type="date" className="border p-2"></input>
          </div>
          <div>
            <input type="date" className="border p-2"></input>
          </div>
          <div className="">
            <select
              class="block   w-72 bg-white-200 border border-blue-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="All"
              id="grid-state"
            >
              <option>Choose User</option>
              <option>Astro Test Ast(100001) </option>
              <option>Astro Test Ast(100001) </option>
              <option>Kbc(100006)</option>
              <option>Kvc(100007)</option>

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
          <div>Contact Us List</div>
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
              <input placeholder="" className="border p-1 border-gray-500" />
            </div>
          </div>

          <table className="border border-gray-300 w-full text-sm md:text-md   ">
            <tr className="h-16 ">
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>#</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>User</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>Name</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>Mobile</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>Email</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>Description</div>
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
            <tr className="bg-gray-200 h-4">
              <td className="border border-gray-300 p-4  ">1</td>
              <td className="border border-gray-300 p-4   ">
                abc ( USR100004 )
              </td>
              <td className="border border-gray-300 p-4   ">Rishab Bhadani</td>
              <td className="border border-gray-300 p-4   ">9609609928</td>

              <td className="border border-gray-300 p-4   ">
                awesomerishabjain143@gmail.com
              </td>
              <td className="border border-gray-300 p-4   ">Test</td>
              <td className="border border-gray-300 p-4   ">
                24th Mar, 2022 12:26 PM
              </td>

              <div className="flex align-center justify-center gap-2 p-4">
                <div className="flex border border-red-500 p-2 rounded-md">
                  <AiOutlineDelete size={20} color="red" />
                  <button className="text-red-500">delete</button>
                </div>
              </div>
            </tr>

            <tr>
              <th className="border border-gray-300 p-2 ">#</th>
              <th className="border border-gray-300 p-2 ">User</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Mobile</th>
              <th className="border border-gray-300 p-2">Email </th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Created Date</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </table>
          <div className="flex justify-between m-2 align-center text-center items-center">
            <div>Showing 1 to 1 of 1 entries</div>
            <div className="flex">
              <button className="border p-2 px-3 border-gray-400 rounded-l-md">
                Previous
              </button>
              <button className="border p-2 bg-blue-500  border-gray-400 text-white">
                1
              </button>
              <button className="border p-2 px-4 border-gray-400 rounded-r-md">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;