import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import Sidebar from "./Sidebar";

function ServiceBookings() {
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
      <div className="w-full ">
        <div className="flex justify-between m-4">
          <div>
            <div>
              <span className="hover:cursor-pointer hover:text-red-400">
                Home/
              </span>
              <span> Service Assign List</span>
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
          <div className="flex gap-3">
            <div>
              <select
                class="block  w-64 bg-white-200 border border-blue-500 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="All"
                id="grid-state"
              >
                <option>Choose Astrologer</option>
                <option>Astro Test Ast(100001) </option>
                <option>Astro Test Ast(100001) </option>
                <option>Kbc(100006) </option>
                <option>Kvc(100007) </option>
              </select>
            </div>
            <div>
              <select
                class="block w-64 bg-white-200 border border-blue-500 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="All"
                id="grid-state"
              >
                <option>Choose User</option>
                <option>Astro Test Ast(100001) </option>
                <option>Astro Test Ast(100001) </option>
                <option>Kbc(100006) </option>
                <option>Kvc(100007) </option>
              </select>
            </div>
          </div>
          <div>
            <button className="bg-green-600 py-2 px-5 rounded-md">
              Filter
            </button>
          </div>
        </div>
        <div className="m-4 bg-white rounded-md shadow-indigo-50 p-5 ">
          <div> Service Assign List</div>
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
                  <div>Astrologer</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>Service Category</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>Service</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>Price</div>
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
                  <div>Service Requested Date</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>Service Requested Time </div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>Service Date</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
            </tr>
            <tr className="bg-gray-200 h-16">
              <td className="border border-gray-300 md:p-5 ">1</td>
              <td className="border border-gray-300 md:p-5 ">
                Namaskar( USR100025 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Astro Akash( AST100005 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Birth time Rectification
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Special Group Puja form relationship
              </td>

              <td className="border border-gray-300 md:p-5 ">??? 5000.00</td>
              <td className="border border-gray-300 md:p-5 ">Pending</td>
              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <td className="border border-gray-300 md:p-5 ">06:09 PM</td>
              <td className="border border-gray-300 md:p-5 "></td>
            </tr>
            <tr className=" h-16">
              <td className="border border-gray-300 md:p-5 ">2</td>
              <td className="border border-gray-300 md:p-5 ">
                Namaskar( USR100025 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Astro Akash( AST100005 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Birth time Rectification
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Special Group Puja form relationship
              </td>
              <td className="border border-gray-300 md:p-5 ">??? 5000.00</td>
              <td className="border border-gray-300 md:p-5 ">Pending</td>
              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <td className="border border-gray-300 md:p-5 ">06:09 PM</td>
              <td className="border border-gray-300 md:p-5 "></td>
            </tr>
            <tr className="bg-gray-200 h-16">
              <td className="border border-gray-300 md:p-5 ">3</td>
              <td className="border border-gray-300 md:p-5 ">
                Namaskar( USR100025 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Astro Akash( AST100005 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Birth time Rectification
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Special Group Puja form relationship
              </td>
              <td className="border border-gray-300 md:p-5 ">??? 5000.00</td>
              <td className="border border-gray-300 md:p-5 ">Pending</td>
              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <td className="border border-gray-300 md:p-5 ">06:09 PM</td>
              <td className="border border-gray-300 md:p-5 "></td>
            </tr>
            <tr className=" h-16">
              <td className="border border-gray-300 md:p-5 ">4</td>
              <td className="border border-gray-300 md:p-5 ">
                Namaskar( USR100025 )
              </td>

              <td className="border border-gray-300 md:p-5 ">
                Astro Akash( AST100005 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Birth time Rectification
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Special Group Puja form relationship
              </td>
              <td className="border border-gray-300 md:p-5 ">??? 5000.00</td>
              <td className="border border-gray-300 md:p-5 ">Pending</td>
              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <td className="border border-gray-300 md:p-5 ">06:09 PM</td>
              <td className="border border-gray-300 md:p-5 "></td>
            </tr>
            <tr className="bg-gray-200 h-16">
              <td className="border border-gray-300 md:p-5 ">5</td>
              <td className="border border-gray-300 md:p-5 ">
                Namaskar( USR100025 )
              </td>

              <td className="border border-gray-300 md:p-5 ">
                Astro Akash( AST100005 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Birth time Rectification
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Special Group Puja form relationship
              </td>
              <td className="border border-gray-300 md:p-5 ">??? 5000.00</td>
              <td className="border border-gray-300 md:p-5 ">Pending</td>
              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <td className="border border-gray-300 md:p-5 ">06:09 PM</td>
              <td className="border border-gray-300 md:p-5 "></td>
            </tr>
            <tr>
              <th className="border border-gray-300 md:p-5 ">#</th>
              <th className="border border-gray-300 md:p-5 ">User</th>
              <th className="border border-gray-300 md:p-5 ">Astrologer</th>
              <th className="border border-gray-300 md:p-5 ">
                Service Category
              </th>
              <th className="border border-gray-300 md:p-5  ">Service</th>
              <th className="border border-gray-300 md:p-5  ">Price</th>
              <th className="border border-gray-300 md:p-5 ">Status </th>
              <th className="border border-gray-300 md:p-5 ">
                Service Requested Date{" "}
              </th>
              <th className="border border-gray-300 md:p-5 ">
                Service Requested Time
              </th>
              <th className="border border-gray-300 md:p-5 ">Service Date</th>
            </tr>
          </table>
          <div className="flex justify-between m-2 align-center text-center items-center">
            <div>Showing 1 to 10 of 96 entries</div>
            <div className="flex">
              <button className="border p-2 px-3 border-gray-400 rounded-l-md">
                Previous
              </button>
              <button className="border p-2 focus:bg-blue-500  border-gray-400 color:blue-50 focus:text-white">
                1
              </button>
              <button className="border p-2 focus:bg-blue-500  border-gray-400 color:blue-50 focus:text-white">
                2
              </button>
              <button className="border p-2 focus:bg-blue-500  border-gray-400 color:blue-50 focus:text-white">
                3
              </button>
              <button className="border p-2 focus:bg-blue-500  border-gray-400 color:blue-50 focus:text-white">
                4
              </button>
              <button className="border p-2 focus:bg-blue-500  border-gray-400 color:blue-50 focus:text-white">
                5
              </button>
              <button className="border p-2 focus:bg-blue-500  border-gray-400 color:blue-50 focus:text-white">
                ...
              </button>
              <button className="border p-2 focus:bg-blue-500  border-gray-400 color:blue-50 focus:text-white">
                10
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

export default ServiceBookings;
