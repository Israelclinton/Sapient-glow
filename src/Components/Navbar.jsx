import React, { useState, useEffect } from "react";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  // const [isMobile, setIsMobile] = useState(window.position <= relative);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", dropdown: true },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
    // { name: "CONTACT", link: "/", icon: "search-outline" },
  ];

  const ServiceLinks = [
    { name: "Facial Treatment", link: "/facial-treatment" },
    { name: "Massage", link: "/massage" },
    { name: "Resort", link: "/resort" },
    {
      name: "Beauty Care",
      subMenu: [
        { name: "Cosmetic", link: "/beauty-care/cosmetic" },
        { name: "Pedicure", link: "/beauty-care/pedicure" },
        { name: "Manicure", link: "/beauty-care/manicure" },
      ],
    },
    { name: "Suite", link: "/suite" },
    { name: "Spa Therapy", link: "/spa-therapy" },
    {
      name: "Wellness",
      subMenu: [
        { name: "Yoga", link: "/wellness/yoga" },
        { name: "Meditation", link: "/wellness/meditation" },
        { name: "Nutrition", link: "/wellness/nutrition" },
      ],
    },
  ];

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between py-4 bg-white border-b-2 px-7 lg:px-10">
        {/* Logo */}
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins, Serif] text-gray-500 bg-white">
          <span className="pt-2 mr-1 text-4xl text-yellow-700">
            <ion-icon name="earth-outline"></ion-icon>
          </span>
          Sapient- <b className="text-yellow-700">Glow<sup>&copy;</sup></b>
        </div>

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <div onClick={() => setMenuOpen(!menuOpen)} className="absolute text-3xl cursor-pointer right-8 top-6 lg:hidden">
            <ion-icon name={menuOpen ? "close" : "menu"}></ion-icon>
          </div>
        )}

        {/* Navbar Links */}
        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in 
          ${menuOpen ? "top-20 opacity-100" : "top-[-490px] lg:opacity-100 opacity-0"} font-bold bg-white`}
        >
          {Links.map((link, index) => (
            // <li key={index} className="relative text-xl lg:text-lg lg:ml-8 lg:my-0 my-7">
            <li key={index} className="text-xl lg:text-lg lg:ml-8 lg:my-0 my-7 ">
              {link.dropdown ? (
                <div className="relative text-gray-800 cursor-pointer hover:text-yellow-700">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 focus:outline-none"
                  >
                    {link.name}
                    <ion-icon name={dropdownOpen ? "chevron-up-outline" : "chevron-down-outline"}></ion-icon>
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute left-0 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg ">
                    {/* <ul className="relative left-0 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg "> */}
                      {ServiceLinks.map((service, index) => (
                        <li key={index} className="relative group">
                          {service.subMenu ? (
                            <div
                              // onClick={(e) => {
                              //   e.stopPropagation();
                              //   setOpenSubMenu(openSubMenu === service.name ? null : service.name);
                              // }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenSubMenu((prev) => (prev === service.name ? null : service.name));
                              }}
                              className="flex items-center justify-between px-4 py-2 text-gray-800 cursor-pointer hover:bg-yellow-700 hover:text-white"
                            >
                              {service.name}
                              <ion-icon name="chevron-forward-outline"></ion-icon>
                            </div>
                          ) : (
                            <a href={service.link} className="block px-4 py-2 text-gray-800 hover:bg-yellow-700 hover:text-white">
                              {service.name}
                            </a>
                          )}
                          {/* Nested Dropdown for Beauty Care & Wellness */}
                          {service.subMenu && openSubMenu === service.name && (
                            <ul className="absolute top-0 z-50 w-48 bg-white border border-gray-200 rounded-md shadow-lg left-full p-[10px, 0] ">
                              {service.subMenu.map((sub, subIndex) => (
                                <li key={subIndex}>
                                  <a href={sub.link} className="block px-4 py-2 text-gray-800 hover:bg-yellow-700 hover:text-white">
                                    {sub.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}

                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a href={link.link} className="text-gray-800 duration-500 hover:text-yellow-700">
                  {link.name}
                  {link.icon && <ion-icon name={link.icon}></ion-icon>}
                </a>
              )}
            </li>
          ))}

          {/* Get Started Button */}
          <li className="mt-4 lg:mt-0">
            <Button>Get Started</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;