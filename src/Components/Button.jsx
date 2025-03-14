import React from 'react'

const Button = (props) => {
  return (
        <button className='px-5 py-3 text-white bg-gray-500 rounded shadow-md md:ml-8 hover:bg-yellow-700 duration-600 shadow-gray-500'>
          {props.children}
        </button>
  );
};

export default Button;