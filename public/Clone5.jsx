import React from 'react';

const Clone5 = () => {
  return (
    <div>
        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in 
          ${menuOpen ? "top-20 opacity-100" : "top-[-490px] lg:opacity-100 opacity-0"} font-bold bg-white`}
        >
          {Links.map((link, index) => (
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
                      {OthersLinks.map((others, index) => (
                        <li key={index} className="relative group">
                          {others.subMenu ? (
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenSubMenu((prev) => (prev === others.name ? null : others.name));
                              }}
                              className="flex items-center justify-between px-4 py-2 text-gray-800 cursor-pointer hover:bg-yellow-700 hover:text-white"
                            >
                              {others.name}
                              <ion-icon name="chevron-forward-outline"></ion-icon>
                            </div>
                          ) : (
                            <a href={others.link} className="block px-4 py-2 text-gray-800 hover:bg-yellow-700 hover:text-white">
                              {others.name}
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
          <li className="mt-4 lg:mt-0">
            <button className='px-4 py-3 font-bold text-white duration-500 bg-yellow-700 rounded shadow-md hover:bg-gray-500 shadow-gray-500 md:ml-8'>
                Membership
            </button>
          </li>
          
        </ul>
    </div>
  );
};

export default Clone5;