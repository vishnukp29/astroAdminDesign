import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";

function Follower() {
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
            <div> <span className="hover:cursor-pointer hover:text-red-400">Home/</span><span>Follower List</span></div>
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
              class="block   w-72 bg-white-200 border border-blue-500 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="All"
              id="grid-state"
            >
              <option>All</option>
              <option>Astrologer</option>
              <option>User</option>
            </select>

          </div>
          <div>
            <button className="bg-green-600 p-2 px-5 rounded-md text-white">
              Filter
            </button>
          </div>
        </div>
        <div className="m-4 bg-white rounded-md shadow-indigo-50 p-5 ">
          <div>Follower List</div>
          <hr/>
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
              <th className="border border-gray-300 md:p-5 "><div className="flex justify-between justify-items-center items-center text-center"><div>#</div><div><BsArrowDownUp size={12}/></div></div></th>
              <th className="border border-gray-300 md:p-5 "><div className="flex justify-between justify-items-center items-center text-center"><div>User</div><div><BsArrowDownUp size={12}/></div></div></th>
              <th className="border border-gray-300 md:p-5 "><div className="flex justify-between justify-items-center items-center text-center"><div>Astrologer</div><div><BsArrowDownUp size={12}/></div></div></th>
              <th className="border border-gray-300 md:p-5 "><div className="flex justify-between justify-items-center items-center text-center"><div>Created Date</div><div><BsArrowDownUp size={12}/></div></div></th>
              <th className="border border-gray-300 md:p-5 "><div className="flex justify-between justify-items-center items-center text-center"><div>Action</div><div><BsArrowDownUp size={12}/></div></div></th>
            </tr>
            <tr className="bg-gray-200 h-16">
              <td className="border border-gray-300 md:p-5 ">1</td>
              <td className="border border-gray-300 md:p-5 ">
                Astro Akash( AST100005 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Akash Sadani ( USR100022 )
              </td>
              
              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <div className="flex align-center justify-center gap-2 p-2">
                
             <div className="flex border border-red-500 p-2 rounded-md">
            < AiOutlineDelete size={20} color="red"/>
               <button className="text-red-500">delete</button>
               </div> 
              
              </div>
            </tr>
            <tr className="h-16">
              <td className="border border-gray-300 md:p-5 ">2</td>
              <td className="border border-gray-300 md:p-5 ">
                Astro Akash( AST100005 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Akash Sadani ( USR100022 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <div className="flex align-center justify-center gap-2 p-2">
                
             <div className="flex border border-red-500 p-2 rounded-md">
            < AiOutlineDelete size={20} color="red"/>
               <button className="text-red-500">delete</button>
               </div> 
              
              </div>
            </tr>
            <tr className="bg-gray-200 h-16">
              <td className="border border-gray-300 md:p-5 ">3</td>
              <td className="border border-gray-300 md:p-5 ">
                Astro Akash( AST100005 )
              </td>
              <td className="border border-gray-300 md:p-5 ">
                Akash Sadani ( USR100022 )
              </td>
              
              <td className="border border-gray-300 md:p-5 ">
                4th Sep, 2022 03:41 PM
              </td>
              <div className="flex align-center justify-center gap-2 p-2">
                
             <div className="flex border border-red-500 p-2 rounded-md">
            < AiOutlineDelete size={20} color="red"/>
               <button className="text-red-500">delete</button>
               </div> 
              
              </div>
            </tr>
            <tr>
              <th className="border border-gray-300 md:p-5 ">#</th>
              <th className="border border-gray-300 md:p-5  ">User</th>
              <th className="border border-gray-300 md:p-5 ">Astrologer</th>
              <th className="border border-gray-300 md:p-5 ">Created Date</th>
              <th className="border border-gray-300 md:p-5 ">Action</th>
            </tr>
          </table>
          <div className="flex justify-between m-2 align-center text-center items-center">
          <div>Showing 1 to 3 of 3 entries</div>
          <div className="flex">
            <button className="border p-2 px-3 border-gray-400 rounded-l-md">Previous</button>
            <button className="border p-2 bg-blue-500  border-gray-400 text-white">1</button>
            <button className="border p-2 px-4 border-gray-400 rounded-r-md">Next</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Follower;