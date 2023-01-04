import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdCall,
  MdNotifications,
  MdSettings,
} from "react-icons/md";
import {
  BsChevronDown,
  BsChatLeftText,
  BsFileSpreadsheetFill,
} from "react-icons/bs";
import {
  BiNetworkChart,
  BiCircle,
  BiMenu,
  BiLogOutCircle,
} from "react-icons/bi";
import { FaUser, FaUsers, FaBloggerB, FaHome } from "react-icons/fa";
import Logo from "../../Assests/logo1.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", href: "/", icon: <FaHome />, current: false },
    { title: "Horoscope", href: "/horoscope", icon: <BsChatLeftText /> },
    {
      title: "Master",
      href: "Master",
      icon: <BiNetworkChart />,
      subMenus: [
        {
          title: "Astrologer Category",
          href: "/astro-category",
          icon: <BiCircle />,
          cName: "sub-nav",
        },
        {
          title: "Language List",
          href: "/language-list",

          cName: "sub-nav",
        },
        // {
        //   title: 'Zodiac Sign',
        //   href: '/astrologer/zodiac-sign',
        // },
      ],
    },
    {
      title: "Manage Astrologer",
      href: "Master Astrologer",
      icon: <FaUser />,
      subMenus: [
        {
          title: "Astrologer List",
          href: "/astro-list",

          cName: "sub-nav",
        },
      ],
    },
    {
      title: "Manage Users",
      href: "Manage Users",
      icon: <FaUser />,
      subMenus: [
        {
          title: "User List",
          href: "/user-list",

          cName: "sub-nav",
        },
      ],
    },
    { title: "Follower", href: "Chart", icon: <FaUsers /> },
    { title: "Review", href: "/review", gap: true, icon: <FaUsers /> },
    { title: "Blog", href: "/blog", icon: <FaBloggerB />, current: false },
    {
      title: "Manage Services",
      href: "Manage Services",
      icon: <BiNetworkChart />,
      subMenus: [
        {
          title: "Service Category",
          href: "/service-category",

          cName: "sub-nav",
        },
        {
          title: "Service List",
          href: "/service-list",

          cName: "sub-nav",
        },
        {
          title: "Service Assign",
          href: "/service-assign",
        },
        {
          title: "Service Bookings",
          href: "/service-assign",
        },
      ],
    },
    {
      title: "Astro Bazar",
      href: "Astro Bazar",
      icon: <BiNetworkChart />,
      subMenus: [
        {
          title: "Product Category",
          href: "/product-category",
          cName: "sub-nav",
        },
        {
          title: "Product Sub Category",
          href: "/bazar/product-subcategory",
          cName: "sub-nav",
        },
        {
          title: "Product",
          href: "/bazar/product",
        },
        {
          title: "Order",
          href: "/bazar/order",
        },
      ],
    },
    {
      title: "Coupon",
      href: "Coupon",
      icon: <BiNetworkChart />,
      subMenus: [
        {
          title: "Add Coupon",
          href: "/coupon/add",
          cName: "sub-nav",
        },
        {
          title: "Coupon List",
          href: "/coupon/list",
          cName: "sub-nav",
        },
      ],
    },
    {
      title: "Quote",
      href: "Quote",
      icon: <BiNetworkChart />,
      subMenus: [
        {
          title: "Add Quate",
          href: "/quate/add",

          cName: "sub-nav",
        },
        {
          title: "Quate List",
          href: "/quate/list",

          cName: "sub-nav",
        },
      ],
    },
    { title: "Contact Us", href: "Contact", icon: <MdCall /> },
    {
      title: "Notifications",
      href: "Notifications",
      icon: <MdNotifications />,
      subMenus: [
        {
          title: "FCM Settings",
          href: "/notifications/settings",

          cName: "sub-nav",
        },
        {
          title: "Push Notifications",
          href: "/notifications/push",

          cName: "sub-nav",
        },
        {
          title: "Notifications",
          href: "/notifications",
        },
      ],
    },
    {
      title: "Reports",
      href: "Reports",
      icon: <BsFileSpreadsheetFill />,
      subMenus: [
        {
          title: "Call History",
          href: "/call-history",

          cName: "sub-nav",
        },
        {
          title: "Call History Accounting",
          href: "/call-history-accounting",

          cName: "sub-nav",
        },
      ],
    },
    {
      title: "Settings",
      href: "Settings",
      icon: <MdSettings />,
      subMenus: [
        {
          title: "Software Config",
          href: "/settings/software-config",
        },
        {
          title: "Return Policy",
          href: "/settings/return-policy",
        },
        {
          title: "Privacy Policy",
          href: "/settings/privacy-policy",
        },
        {
          title: "Terms and Conditions",
          href: "/settings/terms-conditions",
        },
        {
          title: "About Us",
          href: "/settings/about-us",
        },
        {
          title: "FAQs",
          href: "/settings/faqs",
        },
        {
          title: "Currency List",
          href: "/settings/currency-list",
        },
        {
          title: "Astrologer Cover Image",
          href: "/settings/astr-cover-image",
        },
        {
          title: "Banner Category",
          href: "/settings/banner-category",
        },
        {
          title: "Banner",
          href: "/settings/banner",
        },
        {
          title: "Paytm Settings",
          href: "/settings/paytm",
        },
        {
          title: "Recharge Options",
          href: "/settings/banner",
        },
        {
          title: "Gift",
          href: "/settings/gift",
        },
      ],
    },
    { title: "Logout", href: "Logout", icon: <BiLogOutCircle /> },
  ];

  return (
    <div className="flex z-50">
      <div
        className={` ${
          open ? "w-64" : "w-24"
        } bg-gray-700 h-fit p-4  pt-5 relative duration-300 `}
       >
        <div className="">
          <button
            className={`absolute cursor-pointer right-1 top-8 w-7 text-white ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          >
            <BiMenu />
          </button>
          <div className="flex gap-x-4 items-center ">
            <img
              src={Logo}
              className={`cursor-pointer duration-500 w-10 h-10 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Astrosoul
            </h1>
          </div>
          <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        <ul className="">
          {Menus.map((Menu, index) => (
            <>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-600 text-white text-sm items-center gap-x-4
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
                <Link
                  key={Menu.title}
                  to={Menu.href}
                  className={`${
                    !open && "hidden"
                  } flex-1 origin-left duration-200`}
                  aria-current={Menu.current ? "page" : undefined}
                >
                  {Menu.title}
                </Link>
                {Menu.subMenus && (
                  <BsChevronDown
                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                    className={`${subMenuOpen && "rotate-180"}`}
                  />
                )}
              </li>
              {Menu.subMenus && subMenuOpen && open && (
                <ul>
                  {Menu.subMenus.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer hover:bg-gray-600 text-center text-sm text-gray-200 py-1"
                    >
                      <Link
                        key={subMenuItem.title}
                        to={subMenuItem.href}
                        className={`${
                          !open && "hidden"
                        } flex-1 origin-left duration-200`}
                        aria-current={subMenuItem.current ? "page" : undefined}
                      >
                        {subMenuItem.title}
                      </Link>
                      
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
    </div>
  );
};
export default Sidebar;
