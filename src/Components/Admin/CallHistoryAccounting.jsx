import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import Sidebar from "./Sidebar";

function CallhistoryAccounting() {
    const [open, setOpen] = useState(true);
  return (
    <div className="h-full bg-slate-200 flex">
        <section
        className={` ${open ? "w-72" : "w-20 "} bg-dark-purple h-fit relative duration-300 `}
       >
        {" "}
        <Sidebar />
      </section>
      <div className=" ">
        <div className="flex justify-between m-4">
          <div className=" text-2xl font-bold">
          Call History List
          </div>
          <div>
            <div>
              {" "}
              <span className="hover:cursor-pointer hover:text-red-400">
                Home/
              </span>
              <span>CallHistoryList</span>
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
              <option>Choose Astrologer</option>
              <option>Astro Test Ast(100001) </option>
              <option>Astro Test Ast(100001) </option>
              <option>Kbc(100006) </option>
              <option>Kvc(100007) </option>
            </select>
          </div>
          <div>
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
            </select>
          </div>
          <div>
            <button className="bg-green-600 py-3 px-2 rounded-md">
              Filter
            </button>
          </div>
        </div>
        <div className="m-4 bg-white rounded-md shadow-indigo-50 p-5 ">
          <div>CallHistory List</div>
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
                  <div>Calling Id</div>
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
                  <div>Astrologer</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>charge</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>Duration</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>Amount</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>Given<br/> Admin</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>TDS(10.00%)</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>Gateway Charge(2.00%)</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
            </tr>
            <tr className="bg-gray-200 h-16">
              <td className="border border-gray-300 md:p-5 ">1</td>
              <td className="border border-gray-300 md:p-5 ">CALL0136</td>
              <td className="border border-gray-300 md:p-5 ">
                abc
                <br />( USR100004 ) ( 9609609928 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                kvc ( AST100007 ) ( 6291177899 )
              </td>

              <td className="border border-gray-300 md:p-5 ">0</td>
              <td className="border border-gray-300 md:p-5 ">0</td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
              0
              </td>

              <td className="border border-gray-300 md:p-5 ">
             0
              </td>
              <td className="border border-gray-300 md:p-5 ">
             0
              </td>  <td className="border border-gray-300 md:p-5 ">
             0
              </td>
             
            </tr>
            <tr className="h-16">
              <td className="border border-gray-300 md:p-5 ">2</td>
              <td className="border border-gray-300 md:p-5 ">CALL0136</td>
              <td className="border border-gray-300 md:p-5 ">
                abc
                <br />( USR100004 ) ( 9609609928 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                kvc ( AST100007 ) ( 6291177899 )
              </td>

              <td className="border border-gray-300 md:p-5 ">0</td>
              <td className="border border-gray-300 md:p-5 ">0</td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
              0
              </td>

              <td className="border border-gray-300 md:p-5 ">
             0
              </td>
              <td className="border border-gray-300 md:p-5 ">
             0
              </td>  <td className="border border-gray-300 md:p-5 ">
             0
              </td>
             
            </tr>
            <tr className="bg-gray-200 h-16">
              <td className="border border-gray-300 md:p-5 ">3</td>
              <td className="border border-gray-300 md:p-5 ">CALL0136</td>
              <td className="border border-gray-300 md:p-5 ">
                abc
                <br />( USR100004 ) ( 9609609928 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                kvc ( AST100007 ) ( 6291177899 )
              </td>

              <td className="border border-gray-300 md:p-5 ">0</td>
              <td className="border border-gray-300 md:p-5 ">0</td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
              0
              </td>

              <td className="border border-gray-300 md:p-5 ">
             0
              </td>
              <td className="border border-gray-300 md:p-5 ">
             0
              </td>  <td className="border border-gray-300 md:p-5 ">
             0
              </td>
             
            </tr>
            <tr className="h-16">
              <td className="border border-gray-300 md:p-5 ">4</td>
              <td className="border border-gray-300 md:p-5 ">CALL0136</td>
              <td className="border border-gray-300 md:p-5 ">
                abc
                <br />( USR100004 ) ( 9609609928 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                kvc ( AST100007 ) ( 6291177899 )
              </td>

              <td className="border border-gray-300 md:p-5 ">0</td>
              <td className="border border-gray-300 md:p-5 ">0</td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
              0
              </td>

              <td className="border border-gray-300 md:p-5 ">
             0
              </td>
              <td className="border border-gray-300 md:p-5 ">
             0
              </td>  <td className="border border-gray-300 md:p-5 ">
             0
              </td>
             
            </tr>
            <tr className="bg-gray-200 h-16">
              <td className="border border-gray-300 md:p-5 ">5</td>
              <td className="border border-gray-300 md:p-5 ">CALL0136</td>
              <td className="border border-gray-300 md:p-5 ">
                abc
                <br />( USR100004 ) ( 9609609928 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                kvc ( AST100007 ) ( 6291177899 )
              </td>

              <td className="border border-gray-300 md:p-5 ">0</td>
              <td className="border border-gray-300 md:p-5 ">0</td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
              0
              </td>

              <td className="border border-gray-300 md:p-5 ">
             0
              </td>
              <td className="border border-gray-300 md:p-5 ">
             0
              </td>  <td className="border border-gray-300 md:p-5 ">
             0
              </td>
             
            </tr>
            <tr className="h-16 font-semibold">
              <td className="border border-gray-300 md:p-5 ">#</td>
              <td className="border border-gray-300 md:p-5 ">Calling ID</td>
              <td className="border border-gray-300 md:p-5 ">
              Customer
                
              </td>
              <td className="border border-gray-300 md:p-5 ">
              Astrologer
              </td>

              <td className="border border-gray-300 md:p-5 ">	Charge</td>
              <td className="border border-gray-300 md:p-5 ">Duration</td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
              Amount
              </td>

              <td className="border border-gray-300 md:p-5 ">
              Given<br/> Admin
              </td>
              <td className="border border-gray-300 md:p-5 ">
              TDS ( 10.00% )
              </td>  <td className="border border-gray-300 md:p-5 ">
              	Gateway Charge ( 2.00% )
              </td>
             
            </tr>
           
          </table>
          <div className="flex justify-between m-2 align-center text-center items-center">
            <div>Showing 1 to 10 of 358 entries</div>
            <div className="flex">
              <button className="border p-2 px-3 border-gray-400 rounded-l-md">
                Previous
              </button>
              <button className="border p-2 focus:bg-blue-500 focus:text-white  border-gray-400 text-blue-500">
                1
              </button>
              <button className="border p-2 focus:bg-blue-500 focus:text-white  border-gray-400 text-blue-500">
                2
              </button> <button className="border p-2 focus:bg-blue-500 focus:text-white  border-gray-400 text-blue-500">
                3
              </button> <button className="border p-2 focus:bg-blue-500 focus:text-white  border-gray-400 text-blue-500">
                4
              </button> <button className="border p-2 focus:bg-blue-500 focus:text-white  border-gray-400 text-blue-500">
                5
              </button> <button className="border p-2 focus:bg-blue-500 focus:text-white  border-gray-400 text-blue-500">
                ...
              </button>
              <button className="border p-2 focus:bg-blue-500 focus:text-white  border-gray-400 text-blue-500">
                36
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

export default CallhistoryAccounting;