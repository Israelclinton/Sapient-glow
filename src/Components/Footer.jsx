import React from 'react'
import ItemsContainer from './ItemsContainer';

const Footer = () => {
  return (

        <footer className='mt-6 text-gray-600 bg-gray-200 border-t-2'>
            <div className='px-4 text-gray-600 md:flex md:justify-between sm:px-12 py-7 md:items-center'>
                <h1 className='mb-6 text-3xl font-semibold lg:text-4xl md:mb-0 lg:leading-normal md:w-2/5'>
                    <span className='text-yellow-700'>
                        Free
                    </span> until you're ready to launch
                </h1>
                <div>
                    <input type="text" placeholder='Enter Your Email.' className='text-black sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline shadow-md shadow-gray-500 bg-gray-100'/>
                    <button className='px-5 text-white duration-500 bg-gray-500 hover:bg-yellow-700 py-2.5 rounded-md font-bold shadow-md shadow-gray-500 md:w-auto w-full'>
                        Request Code
                    </button>
                </div>
            </div>
            <ItemsContainer />
        </footer>
  );
};

export default Footer;