import React, { useState } from "react";
// import './Sidebar/AdminHoro.css'
import Aries from "../../Assests/Aries.png";
import Taurus from "../../Assests/Taurus.png";
import Gemini from "../../Assests/Gemini.png";
import Cancer from "../../Assests/Cancer.png";
import Leo from "../../Assests/Leo.png";
import Virgo from "../../Assests/Virgo.png";
import Libra from "../../Assests/Libra.png";
import Scorpius from "../../Assests/Scorpius.png";
import Sagittarius from "../../Assests/Sagittarius.png";
import Capricornus from "../../Assests/Capricornus.png";
import Aquarius from "../../Assests/Aquarius.png";
import Pisces from "../../Assests/Pisces.png";
import Sidebar from "./Sidebar";
// import axios from "axios";

const Horoscope = () => {
  const [open, setOpen] = useState(true);
  //      JavaScript Request Example

  // var apiEndPoint = "horoscope_prediction/daily/:signName";
  // var userId = "610";
  // var apiKey = "159c61f6e5b5835353a95165b72f9a93";
  // var language = "en";
  // var data1 = {
  //     "timezone": 5.5
  // };
  // const data = JSON.stringify(data1)

  // var url = 'https://json.apireports.com/v1/'+apiEndPoint;
  // const headers = {
  //     "Authorization": "Basic " + btoa(userId+":"+apiKey),
  //     "Accept-Language": "en",
  //     "Content-Type":'application/json'
  // }
  // const horoscope = async () => {
  //     const da = await axios.post(
  //         url,
  //         headers,
  //         data
  //     )
  //     console.log(da,'data')
  // }
  // horoscope();
  // var request = $.ajax({
  // 	url: url,
  // 	method: "POST",
  // 	dataType:'json',

  // });

  // request.then(
  // 	function(resp){
  // 		console.log(resp);
  // 	},
  // 	function(err){
  // 		console.log(err);
  // 	}
  // );

  /* END */
  return (
    <div className=" h-full bg-slate-200 flex">
      <section
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-fit relative duration-300 scrollbar scrollbar-thin-gray-800`}
      >
        {" "}
        <Sidebar />
      </section>

      <div className=" ">
        <div className="px-4">
          <div class="container p-6 h-auto rounded overflow-hidden shadow-lg">
            <h1 className="relative left-2 m">Horoscope List</h1>
            <div className="line"></div>
            <div className="header grid grid-cols-2">
              <div
                class="inline-flex rounded-md shadow-sm relative top-4 "
                role="group"
              >
                <button
                  type="button"
                  class="h-12 py-2 px-4 text-md font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  Copy
                </button>
                <button
                  type="button"
                  class="h-12 py-2 px-4 text-md font-medium text-gray-900 bg-white border-t border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  CSV
                </button>
                <button
                  type="button"
                  class="h-12 py-2 px-4 text-md font-medium text-gray-900 bg-white border-t border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  Excel
                </button>
                <button
                  type="button"
                  class="h-12 py-2 px-4 text-md font-medium text-gray-900 bg-white border-t border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  PDF
                </button>
                <button
                  type="button"
                  class="h-12 py-2 px-4 text-md font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  Print
                </button>
              </div>
              <div className="mb-3 xl:w-96 ">
                <div className="input-group relative top-6 left-[35%] flex flex-wrap items-stretch w-[70%] mb-4 ">
                  <input
                    type="search"
                    class="form-control relative  flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex  relative bottom-[37px] left-[83%]"
                    type="button"
                    id="button-addon2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      className="w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* ,,,,,,,,,,,,,,,,,,,,Table Zone,,,,,,,,,,,,,,,,,,  */}

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="py-3 px-6">
                      #
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-1 w-3 h-3 relative bottom-1"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 320 512"
                        >
                          <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                        </svg>
                      </a>
                    </th>
                    <th scope="col" class="py-3 px-6">
                      <div class="flex items-center">
                        Zodioc Sign Name
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-1 w-3 h-3"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" class="py-3 px-6">
                      <div class="flex items-center">
                        Horoscope Icons
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-1 w-3 h-3"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" class="py-3 px-6">
                      <div class="flex items-center">
                        Horoscope Date
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-1 w-3 h-3"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" class="py-3 px-6">
                      <div class="flex items-center">
                        Status
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-1 w-3 h-3"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" class="py-3 px-6">
                      <div class="flex items-center">
                        Created Date
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-1 w-3 h-3"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" class="py-3 px-6">
                      <div class="flex items-center">
                        Action
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-1 w-3 h-3"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      1
                    </th>
                    <td class="py-4 px-6 text-sm">Aries</td>
                    <td class="py-4 px-6 text-sm">
                      <img src={Aries} alt="Aries" height="120px" width="120px"/>
                    </td>
                    <td class="py-4 px-6 text-sm">01/06/2002</td>
                    <td class="py-4 px-6 text-sm">Active</td>
                    <td class="py-4 px-6 text-sm">7th May,2022 11:08AM</td>
                    <td class="py-4 px-6 text-sm">
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      2
                    </th>
                    <td class="py-4 px-6 text-sm">Taurus</td>
                    <td class="py-4 px-6 text-sm">
                      <img src={Taurus} alt="Taurus" height="120px" width="120px"/>
                    </td>
                    <td class="py-4 px-6 text-sm">01/06/2002</td>
                    <td class="py-4 px-6 text-sm">Active</td>
                    <td class="py-4 px-6 text-sm">7th May,2022 11:08AM</td>
                    <td class="py-4 px-6 text-sm">
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      3
                    </th>
                    <td class="py-4 px-6 text-sm">Gemini</td>
                    <td class="py-4 px-6 text-sm">
                      <img src={Gemini} alt="Gemini" height="120px" width="120px"/>
                    </td>
                    <td class="py-4 px-6 text-sm">01/06/2002</td>
                    <td class="py-4 px-6 text-sm">Active</td>
                    <td class="py-4 px-6 text-sm">7th May,2022 11:08AM</td>
                    <td class="py-4 px-6 text-sm">
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      4
                    </th>
                    <td class="py-4 px-6 text-sm">Cancer</td>
                    <td class="py-4 px-6 text-sm">
                      <img src={Cancer} alt="Cancer" height="120px" width="120px"/>
                    </td>
                    <td class="py-4 px-6 text-sm">01/06/2002</td>
                    <td class="py-4 px-6 text-sm">Active</td>
                    <td class="py-4 px-6 text-sm">7th May,2022 11:08AM</td>
                    <td class="py-4 px-6 text-sm">
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      5
                    </th>
                    <td class="py-4 px-6 text-sm">Leo</td>
                    <td class="py-4 px-6 text-sm">
                      <img src={Leo} alt="Leo" height="120px" width="120px"/>
                    </td>
                    <td class="py-4 px-6 text-sm">01/06/2002</td>
                    <td class="py-4 px-6 text-sm">Active</td>
                    <td class="py-4 px-6 text-sm">7th May,2022 11:08AM</td>
                    <td class="py-4 px-6 text-sm">
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      6
                    </th>
                    <td class="py-4 px-6 text-sm">Virgo</td>
                    <td class="py-4 px-6 text-sm">
                      <img src={Virgo} alt="Virgo" height="120px" width="120px"/>
                    </td>
                    <td class="py-4 px-6 text-sm">01/06/2002</td>
                    <td class="py-4 px-6 text-sm">Active</td>
                    <td class="py-4 px-6 text-sm">7th May,2022 11:08AM</td>
                    <td class="py-4 px-6 text-sm">
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      7
                    </th>
                    <td class="py-4 px-6 text-sm">Libra</td>
                    <td class="py-4 px-6 text-sm">
                      <img src={Libra} alt="Libra" height="120px" width="120px"/>
                    </td>
                    <td class="py-4 px-6 text-sm">01/06/2002</td>
                    <td class="py-4 px-6 text-sm">Active</td>
                    <td class="py-4 px-6 text-sm">7th May,2022 11:08AM</td>
                    <td class="py-4 px-6 text-sm">
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      8
                    </th>
                    <td class="py-4 px-6 text-sm">Scorpius</td>
                    <td class="py-4 px-6 text-sm">
                      <img src={Scorpius} alt="Scorpius" height="120px" width="120px"/>
                    </td>
                    <td class="py-4 px-6 text-sm">01/06/2002</td>
                    <td class="py-4 px-6 text-sm">Active</td>
                    <td class="py-4 px-6 text-sm">7th May,2022 11:08AM</td>
                    <td class="py-4 px-6 text-sm">
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      9
                    </th>
                    <td class="py-4 px-6 text-sm">Sagittarius</td>
                    <td class="py-4 px-6 text-sm">
                      <img src={Sagittarius} alt="Sagittarius" height="120px" width="120px"/>
                    </td>
                    <td class="py-4 px-6 text-sm">01/06/2002</td>
                    <td class="py-4 px-6 text-sm">Active</td>
                    <td class="py-4 px-6 text-sm">7th May,2022 11:08AM</td>
                    <td class="py-4 px-6 text-sm">
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      10
                    </th>
                    <td class="py-4 px-6 text-sm">Capricornus</td>
                    <td class="py-4 px-6 text-sm">
                      <img src={Capricornus} alt="Capricornus" height="120px" width="120px"/>
                    </td>
                    <td class="py-4 px-6 text-sm">01/06/2002</td>
                    <td class="py-4 px-6 text-sm">Active</td>
                    <td class="py-4 px-6 text-sm">7th May,2022 11:08AM</td>
                    <td class="py-4 px-6 text-sm">
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      11
                    </th>
                    <td class="py-4 px-6 text-sm">Aquarius</td>
                    <td class="py-4 px-6 text-sm">
                      <img src={Aquarius} alt="Aquarius" height="120px" width="120px"/>
                    </td>
                    <td class="py-4 px-6 text-sm">01/06/2002</td>
                    <td class="py-4 px-6 text-sm">Active</td>
                    <td class="py-4 px-6 text-sm">7th May,2022 11:08AM</td>
                    <td class="py-4 px-6 text-sm">
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      12
                    </th>
                    <td class="py-4 px-6 text-sm">Pisces</td>
                    <td class="py-4 px-6 text-sm">
                      <img src={Pisces} alt="Pisces" height="120px" width="120px"/>
                    </td>
                    <td class="py-4 px-6 text-sm">01/06/2002</td>
                    <td class="py-4 px-6 text-sm">Active</td>
                    <td class="py-4 px-6 text-sm">7th May,2022 11:08AM</td>
                    <td class="py-4 px-6 text-sm">
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="py-3 px-6">
                      #
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-1 w-3 h-3 relative bottom-1"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 320 512"
                        >
                          <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                        </svg>
                      </a>
                    </th>
                    <th scope="col" class="py-3 px-6">
                      <div class="flex items-center">
                        Zodioc Sign Name
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-1 w-3 h-3"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" class="py-3 px-6">
                      <div class="flex items-center">
                        Horoscope Icons
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-1 w-3 h-3"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" class="py-3 px-6">
                      <div class="flex items-center">
                        Horoscope Date
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-1 w-3 h-3"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" class="py-3 px-6">
                      <div class="flex items-center">
                        Status
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-1 w-3 h-3"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" class="py-3 px-6">
                      <div class="flex items-center">
                        Created Date
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-1 w-3 h-3"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" class="py-3 px-6">
                      <div class="flex items-center">
                        Action
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-1 w-3 h-3"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <nav aria-label="Page navigation example ">
              <ul class="inline-flex -space-x-px relative top-6 left-[78.3%]">
                <li>
                  <a
                    href="#"
                    class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
            <h3 className="text-black text-start">
              Showing 1 to 10 of 12 entries
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horoscope;
