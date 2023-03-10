import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import Sidebar from "./Sidebar";

function CallHistory() {
  const [open, setOpen] = useState(true);
  return (
    <div className="h-full bg-slate-200 flex ">
      <section
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-fit relative duration-300 `}
       >
        {" "}
        <Sidebar />
      </section>
      <div className=" ">
        <div className="flex justify-between m-4">
          <div className=" text-2xl font-bold">Call History List</div>
          <div>
            <div>
              {" "}
              <span className="hover:cursor-pointer hover:text-red-400">
                Home/
              </span>
              <span>CallHistory List</span>
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
              Seaech:
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
                  <div>Duration</div>
                  <div>
                    <BsArrowDownUp size={12} />
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 md:p-5 ">
                <div className="flex justify-between justify-items-center items-center text-center">
                  <div>Recording</div>
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
                  <div>Created Data</div>
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

              <td className="border border-gray-300 md:p-5 ">0:0:0 Hrs</td>
              <td className="border border-gray-300 md:p-5 "></td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
                Complete Call
              </td>

              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <div className="flex align-center justify-center gap-2 p-2">
                <div className="flex border border-red-500 p-2 rounded-md">
                  <AiOutlineDelete size={20} color="red" />
                  <button className="text-red-500">delete</button>
                </div>
              </div>
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

              <td className="border border-gray-300 md:p-5 ">0:0:0 Hrs</td>
              <td className="border border-gray-300 md:p-5 "></td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
                Complete Call
              </td>

              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <div className="flex align-center justify-center gap-2 p-2 ">
                <div className="flex border border-red-500 p-2 rounded-md">
                  <AiOutlineDelete size={20} color="red" />
                  <button className="text-red-500">delete</button>
                </div>
              </div>
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

              <td className="border border-gray-300 md:p-5 ">0:0:0 Hrs</td>
              <td className="border border-gray-300 md:p-5 "></td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
                Complete Call
              </td>

              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <div className="flex align-center justify-center gap-2 p-2">
                <div className="flex border border-red-500 p-2 rounded-md">
                  <AiOutlineDelete size={20} color="red" />
                  <button className="text-red-500">delete</button>
                </div>
              </div>
            </tr>
            <tr className=" h-16">
              <td className="border border-gray-300 md:p-5 ">4</td>
              <td className="border border-gray-300 md:p-5 ">CALL0136</td>
              <td className="border border-gray-300 md:p-5 ">
                abc
                <br />( USR100004 ) ( 9609609928 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                kvc ( AST100007 ) ( 6291177899 )
              </td>

              <td className="border border-gray-300 md:p-5 ">0:0:0 Hrs</td>
              <td className="border border-gray-300 md:p-5 "></td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
                Complete Call
              </td>

              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <div className="flex align-center justify-center gap-2 p-2">
                <div className="flex border border-red-500 p-2 rounded-md">
                  <AiOutlineDelete size={20} color="red" />
                  <button className="text-red-500">delete</button>
                </div>
              </div>
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

              <td className="border border-gray-300 md:p-5 ">0:0:0 Hrs</td>
              <td className="border border-gray-300 md:p-5 "></td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
                Complete Call
              </td>

              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <div className="flex align-center justify-center gap-2 p-2">
                <div className="flex border border-red-500 p-2 rounded-md">
                  <AiOutlineDelete size={20} color="red" />
                  <button className="text-red-500">delete</button>
                </div>
              </div>
            </tr>
            <tr className=" h-16">
              <td className="border border-gray-300 md:p-5 ">6</td>
              <td className="border border-gray-300 md:p-5 ">CALL0136</td>
              <td className="border border-gray-300 md:p-5 ">
                abc
                <br />( USR100004 ) ( 9609609928 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                kvc ( AST100007 ) ( 6291177899 )
              </td>

              <td className="border border-gray-300 md:p-5 ">0:0:0 Hrs</td>
              <td className="border border-gray-300 md:p-5 "></td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
                Complete Call
              </td>

              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <div className="flex align-center justify-center gap-2 p-2">
                <div className="flex border border-red-500 p-2 rounded-md">
                  <AiOutlineDelete size={20} color="red" />
                  <button className="text-red-500">delete</button>
                </div>
              </div>
            </tr>{" "}
            <tr className="bg-gray-200 h-16">
              <td className="border border-gray-300 md:p-5 ">7</td>
              <td className="border border-gray-300 md:p-5 ">CALL0136</td>
              <td className="border border-gray-300 md:p-5 ">
                abc
                <br />( USR100004 ) ( 9609609928 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                kvc ( AST100007 ) ( 6291177899 )
              </td>

              <td className="border border-gray-300 md:p-5 ">0:0:0 Hrs</td>
              <td className="border border-gray-300 md:p-5 "></td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
                Complete Call
              </td>

              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <div className="flex align-center justify-center gap-2 p-2">
                <div className="flex border border-red-500 p-2 rounded-md">
                  <AiOutlineDelete size={20} color="red" />
                  <button className="text-red-500">delete</button>
                </div>
              </div>
            </tr>
            <tr className=" h-16">
              <td className="border border-gray-300 md:p-5 ">8</td>
              <td className="border border-gray-300 md:p-5 ">CALL0136</td>
              <td className="border border-gray-300 md:p-5 ">
                abc
                <br />( USR100004 ) ( 9609609928 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                kvc ( AST100007 ) ( 6291177899 )
              </td>

              <td className="border border-gray-300 md:p-5 ">0:0:0 Hrs</td>
              <td className="border border-gray-300 md:p-5 "></td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
                Complete Call
              </td>

              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <div className="flex align-center justify-center gap-2 p-2">
                <div className="flex border border-red-500 p-2 rounded-md">
                  <AiOutlineDelete size={20} color="red" />
                  <button className="text-red-500">delete</button>
                </div>
              </div>
            </tr>
            <tr className="bg-gray-200 h-16">
              <td className="border border-gray-300 md:p-5 ">9</td>
              <td className="border border-gray-300 md:p-5 ">CALL0136</td>
              <td className="border border-gray-300 md:p-5 ">
                abc
                <br />( USR100004 ) ( 9609609928 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                kvc ( AST100007 ) ( 6291177899 )
              </td>

              <td className="border border-gray-300 md:p-5 ">0:0:0 Hrs</td>
              <td className="border border-gray-300 md:p-5 "></td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
                Complete Call
              </td>

              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <div className="flex align-center justify-center gap-2 p-2">
                <div className="flex border border-red-500 p-2 rounded-md">
                  <AiOutlineDelete size={20} color="red" />
                  <button className="text-red-500">delete</button>
                </div>
              </div>
            </tr>
            <tr className=" h-16">
              <td className="border border-gray-300 md:p-5 ">10</td>
              <td className="border border-gray-300 md:p-5 ">CALL0136</td>
              <td className="border border-gray-300 md:p-5 ">
                abc
                <br />( USR100004 ) ( 9609609928 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                kvc ( AST100007 ) ( 6291177899 )
              </td>

              <td className="border border-gray-300 md:p-5 ">0:0:0 Hrs</td>
              <td className="border border-gray-300 md:p-5 "></td>
              <td className="border border-gray-300 md:p-5 text-green-700 text-base ">
                Complete Call
              </td>

              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <div className="flex align-center justify-center gap-2 p-2">
                <div className="flex border border-red-500 p-2 rounded-md">
                  <AiOutlineDelete size={20} color="red" />
                  <button className="text-red-500">delete</button>
                </div>
              </div>
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
              </button>{" "}
              <button className="border p-2 focus:bg-blue-500 focus:text-white  border-gray-400 text-blue-500">
                3
              </button>{" "}
              <button className="border p-2 focus:bg-blue-500 focus:text-white  border-gray-400 text-blue-500">
                4
              </button>{" "}
              <button className="border p-2 focus:bg-blue-500 focus:text-white  border-gray-400 text-blue-500">
                5
              </button>{" "}
              <button className="border p-2 focus:bg-blue-500 focus:text-white  border-gray-400 text-blue-500">
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

export default CallHistory;
