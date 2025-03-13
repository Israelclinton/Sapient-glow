import React, { useState } from 'react';
import Button from '../src/Components/Button';
import 'ionicons/dist/ionicons/ionicons.css'; // Ensure Ionicons CSS is imported

const Navbar = () => {
  let Links = [
    { name: 'HOME', link: '/' },
    { name: 'SERVICE', link: '/' },
    { name: 'ABOUT', link: '/' },
    { name: "BLOG'S", link: '/' },
    { name: 'CONTACT', link: '/', icon: 'search-outline' }, // CONTACT link with icon
  ];

  let [open, setOpen] = useState(false);

  return (
    <>
      <div className='fixed top-0 left-0 w-full shadow-md'>
        {/* Black-bg */}
        <div className='items-center justify-between py-4 bg-white md:flex md:px-10 px-7'>
          <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins, Serif] text-gray-500'>
            <span className='pt-2 mr-1 text-4xl text-yellow-700'>
              <ion-icon name="earth-outline"></ion-icon>
            </span>
            Sapient- <b className='text-yellow-700'>Glow<sup>&copy;</sup></b>
          </div>

          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>

          <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
            {
              Links.map(link => (
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                  <a href={link.link} className='text-gray-800 duration-500 hover:text-yellow-700'>
                    {link.name}
                    {link.icon && <ion-icon name={link.icon}></ion-icon>} {/* Icon renders next to the text */}
                  </a>
                </li>
              ))
            }

            <Button>
              Get Started
            </Button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
