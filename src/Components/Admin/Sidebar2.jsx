import React, { useState } from 'react';
import {MdOutlineDashboard,MdCall,MdHome,MdNotifications,MdSettings} from 'react-icons/md';
import {BsChevronDown, BsChatLeftText,BsFileSpreadsheetFill} from 'react-icons/bs';
import { BiNetworkChart,BiCircle,BiMenu } from "react-icons/bi";
import { FaUser,FaUsers,FaBloggerB } from "react-icons/fa";

const Menus = [
  { title: 'Dashboard', src: 'Chart_fill', icon: <MdHome /> },
  { title: 'Horoscope', src: 'Chat', icon: <BsChatLeftText /> },
  {
    title: 'Master',
    src: 'Master',
    icon: <BiNetworkChart />,
    subMenus: [
      {
        title: 'Astrologer Category',
        src: '/astrologer/astr-category',
        icon: <BiCircle />,
        cName: 'sub-nav',
      },
      {
        title: 'Language List',
        src: '/astrologer/astr-laguage',

        cName: 'sub-nav',
      },
      {
        title: 'Zodiac Sign',
        src: '/astrologer/zodiac-sign',
      },
    ],
  },
  {
    title: 'Manage Astrologer',
    src: 'Master Astrologer',
    icon: <FaUser />,
    subMenus: [
      {
        title: 'Add Astrologer',
        src: '/astrologer/add-astrologer',

        cName: 'sub-nav',
      },
      {
        title: 'Astrologer List',
        src: '/astrologer/add-astrologer',

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Manage Users',
    src: 'Manage Users',
    icon: <FaUser />,
    subMenus: [
      {
        title: 'Add User',
        src: '/users/add-user',

        cName: 'sub-nav',
      },
      {
        title: 'User List',
        src: '/users/user-list',

        cName: 'sub-nav',
      },
    ],
  },
  { title: 'Follower', src: 'Chart', icon: <FaUsers /> },
  { title: 'Review', src: 'Folder', gap: true, icon: <FaUsers /> },
  { title: 'Blog', src: 'Setting', icon: <FaBloggerB /> },
  {
    title: 'Manage Services',
    src: 'Manage Services',
    icon: <BiNetworkChart />,
    subMenus: [
      {
        title: 'Service 1',
        src: '/services/services1',

        cName: 'sub-nav',
      },
      {
        title: 'Service 2',
        src: '/services/services2',

        cName: 'sub-nav',
      },
      {
        title: 'Service 3',
        src: '/services/services3',
      },
    ],
  },
  {
    title: 'Astro Bazar',
    src: 'Astro Bazar',
    icon: <BiNetworkChart />,
    subMenus: [
      {
        title: 'Service 1',
        src: '/services/services1',
        cName: 'sub-nav',
      },
      {
        title: 'Service 2',
        src: '/services/services2',
        cName: 'sub-nav',
      },
      {
        title: 'Service 3',
        src: '/services/services3',
      },
    ],
  },
  {
    title: 'Coupon',
    src: 'Coupon',
    icon: <BiNetworkChart />,
    subMenus: [
      {
        title: 'Service 1',
        src: '/services/services1',

        cName: 'sub-nav',
      },
      {
        title: 'Service 2',
        src: '/services/services2',

        cName: 'sub-nav',
      },
      {
        title: 'Service 3',
        src: '/services/services3',
      },
    ],
  },
  {
    title: 'Quote',
    src: 'Quote',
    icon: <BiNetworkChart />,
    subMenus: [
      {
        title: 'Service 1',
        src: '/services/services1',

        cName: 'sub-nav',
      },
      {
        title: 'Service 2',
        src: '/services/services2',

        cName: 'sub-nav',
      },
      {
        title: 'Service 3',
        src: '/services/services3',
      },
    ],
  },
  { title: 'Contact Us', src: 'Contact', icon: <MdCall /> },
  {
    title: 'Notifications',
    src: 'Notifications',
    icon: <MdNotifications />,
    subMenus: [
      {
        title: 'Service 1',
        src: '/services/services1',

        cName: 'sub-nav',
      },
      {
        title: 'Service 2',
        src: '/services/services2',

        cName: 'sub-nav',
      },
      {
        title: 'Service 3',
        src: '/services/services3',
      },
    ],
  },
  {
    title: 'Reports',
    src: 'Reports',
    icon: <BsFileSpreadsheetFill />,
    subMenus: [
      {
        title: 'Service 1',
        src: '/services/services1',

        cName: 'sub-nav',
      },
      {
        title: 'Service 2',
        src: '/services/services2',

        cName: 'sub-nav',
      },
      {
        title: 'Service 3',
        src: '/services/services3',
      },
    ],
  },
  {
    title: 'Settings',
    src: 'Settings',
    icon: <MdSettings />,
    subMenus: [
      {
        title: 'Service 1',
        src: '/services/services1',

        cName: 'sub-nav',
      },
      {
        title: 'Service 2',
        src: '/services/services2',

        cName: 'sub-nav',
      },
      {
        title: 'Service 3',
        src: '/services/services3',
      },
    ],
  },
];

const Sidebar2 = () => {
  const [open, setOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSidebar = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="h-fit flex items-end justify-end">
      <button
        className="fixed lg:hidden z-90 bottom-10 right-8 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800   duration-300"
        onClick={toggleSidebar}
       >
        <span class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-6 m-auto"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
            />
          </svg>
        </span>
      </button>

      <div
        className={` ${
          menuOpen ? 'w-48 px-2 ' : 'w-0 '
        } lg:w-72 bg-gray-800    relative duration-500 `}
      >
        <div className=" justify-center mt-3">
          <h1
            className={`text-white  font-medium text-2xl text-center duration-200 ${
              !open && "scale-0"
            }`}
          >
            Your Brand
          </h1>
        </div>
        <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-600 text-white text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'}  `}
              >
                {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
                <span className={`${!open && "hidden"} flex-1 origin-left duration-200`}>{Menu.title}</span>
                {Menu.subMenus && (
                  <BsChevronDown
                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                    className={`${subMenuOpen && 'rotate-180'}`}
                  />
                )}
              </li>
              {Menu.subMenus && subMenuOpen && menuOpen && (
                <ul>
                  {Menu.subMenus.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer hover:bg-gray-600 text-center text-sm text-gray-200 py-1"
                    >
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar2;