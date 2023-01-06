import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import cancel from "../../Assests/cancel.png";
import discount from "../../Assests/discount.jpg";


function CouponList() {
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
              Add Coupon
            </button>
          </div>
          <div>
            <div>
            
              <span className="hover:cursor-pointer hover:text-red-400">
                Home/
              </span>
              <span> CouponList </span>
            </div>
          </div>
        </div>

        <div className="m-4 bg-white rounded-md shadow-indigo-50 p-5 ">
          <div> CuponList List</div>
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
                    <div>Coupon Image</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center ">
                    <div>	Coupon Code</div>
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
                    <div>Start Date</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>End Date</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th><th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>No of users</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>Min. order amt</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>Disc.</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
                <th className="border border-gray-300 md:p-5 ">
                  <div className="flex justify-between justify-items-center items-center text-center">
                    <div>Disc. type</div>
                    <div>
                      <BsArrowDownUp size={12} />
                    </div>
                  </div>
                </th>
              
              </tr>
              <tr className="bg-gray-200 h-16 flex   sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <td className="border border-gray-300 md:p-5  ">1</td>
                <td className="border border-gray-300 md:p-5 ">
                  <img src={cancel} height="150px" width="150px" />
                </td>
                <td className="border border-gray-300 md:p-5 ">NEW10</td>

                <td className="border border-gray-300 md:p-5 ">New user get 10% discount on recharge over rs 100/-</td>
               
                <td className="border border-gray-300 md:p-5 ">08/09/2022
                </td>
                <td className="border border-gray-300 md:p-5 ">
                15/09/2022
                </td>
                <td className="border border-gray-300 md:p-5 ">	20
                </td>
                <td className="border border-gray-300 md:p-5 ">100.00</td>
                <td className="border border-gray-300 md:p-5 ">
                10.0
                </td>
                <td className="border border-gray-300 md:p-5 ">
                percentage
                </td>
                
              </tr>
              <tr className=" h-16 flex   sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <td className="border border-gray-300 md:p-5  ">1</td>
                <td className="border border-gray-300 md:p-5 ">
                  <img src={discount} height="150px" width="150px" />
                </td>
                <td className="border border-gray-300 md:p-5 ">NEW10</td>

                <td className="border border-gray-300 md:p-5 ">New user get 10% discount on recharge over rs 100/-</td>
               
                <td className="border border-gray-300 md:p-5 ">08/09/2022
                </td>
                <td className="border border-gray-300 md:p-5 ">
                15/09/2022
                </td>
                <td className="border border-gray-300 md:p-5 ">	20
                </td>
                <td className="border border-gray-300 md:p-5 ">100.00</td>
                <td className="border border-gray-300 md:p-5 ">
                10.0
                </td>
                <td className="border border-gray-300 md:p-5 ">
                percentage
                </td>
                
              </tr>
              
              <tr className="flex  sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="border border-gray-300 md:p-5 ">#</th>
                <th className="border border-gray-300 md:p-5  ">
                Coupon Image
                </th>
                <th className="border border-gray-300 md:p-5  ">
                Coupon Code
                </th>
                <th className="border border-gray-300 md:p-5 ">
                Description
                </th>
                <th className="border border-gray-300 md:p-5 ">
                Start Date
                </th>
                <th className="border border-gray-300 md:p-5 ">
                End Date
                </th>
                <th className="border border-gray-300 md:p-5 ">
                No of users
                </th>
                <th className="border border-gray-300 md:p-5 ">Min. order amt </th>
                <th className="border border-gray-300 md:p-5 ">Disc.</th>
                <th className="border border-gray-300 md:p-5 ">Disc. type</th>
              </tr>
            </table>
          </div>
          <div className="flex justify-between m-2 align-center text-center items-center">
            <div>Showing 1 to 10 of 37 entries</div>
            <div className="flex">
              <button className="border p-2 px-3 border-gray-400 rounded-l-md">
                Previous
              </button>
              <button className="border p-2 focus:bg-blue-500  border-gray-400 text-blue-500 focus:text-white">
                1
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

export default CouponList;