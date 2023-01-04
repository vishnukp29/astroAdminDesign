import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import rudraksha from "../../Assests/rudraksha.jpg";
import germstone from "../../Assests/germstone.jpg";

function ProductCategory() {
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
            <button className="bg-blue-700 text-white px-8 py-2 rounded-md hover:to-blue-500">
              Add Product Category
            </button>
          </div>
          <div>
            <div>
              <span className="hover:cursor-pointer hover:text-red-400">
                Home/
              </span>
              <span> Product Category List</span>
            </div>
          </div>
        </div>

        <div className="m-4 bg-white rounded-md shadow-indigo-50 p-5 ">
          <div> Product Category List</div>
          <hr />
          <div className="flex justify-between m-2 align-center">
            <div className=" border rounded-md bg-gray-700 w-fit ">
              <button className="text-white p-2">Copy</button>
              <button className="text-white p-2">CSV</button>
              <button className="text-white p-2">Excel</button>
              <button className="text-white p-2">CD</button>
              <button className="text-white p-2">Print</button>
            </div>
            <div>
              Seaech:
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
                    <div>ProductCategory Name</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>ProductCategory icon</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>ProductCategory Background</div>
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
                <td className="border border-gray-300 md:p-5 ">Rudraksha</td>
                <td className="border border-gray-300 md:p-5 ">
                  <img src={rudraksha} height="150px" width="150px" />
                </td>
                <td className="border border-gray-300 md:p-5 ">
                  <img src={rudraksha} height="150px" width="150px" />
                </td>

                <td className="border border-gray-300 md:p-5 ">Active</td>
                <td className="border border-gray-300 md:p-5 ">
                  4th Sep, 2022 03:41 PM
                </td>
                <div className="flex align-center justify-center gap-2 mt-12">
                  <div className="flex border border-blue-500 p-2 rounded-md">
                    <CiEdit size={20} color="blue" />
                    <button className="text-blue-500">edit</button>
                  </div>
                  <div className="flex border border-red-500 p-2 rounded-md">
                    <AiOutlineDelete size={20} color="red" />
                    <button className="text-red-500">delete</button>
                  </div>
                </div>
              </tr>
              <tr className="h-16 flex  sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <td className="border border-gray-300 md:p-5 ">2</td>
                <td className="border border-gray-300 md:p-5 ">Gemstone</td>
                <td className="border border-gray-300 md:p-5 ">
                  <img src={germstone} height="150px" width="150px" />
                </td>
                <td className="border border-gray-300 md:p-5 ">
                  <img src={germstone} height="150px" width="150px" />
                </td>

                <td className="border border-gray-300 md:p-5 ">Active</td>
                <td className="border border-gray-300 md:p-5 ">
                  4th Sep, 2022 03:41 PM
                </td>
                <div className="flex align-center justify-center gap-2 mt-12">
                  <div className="flex border border-blue-500 p-2 rounded-md">
                    <CiEdit size={20} color="blue" />
                    <button className="text-blue-500">edit</button>
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
                  ProductCategory Name
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  ProductCategory icon
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  ProductCategory Background
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

export default ProductCategory;
