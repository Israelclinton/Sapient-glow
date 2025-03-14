import React from 'react';
const SocialIcons = ({Icons}) => {
  return (
    <div className='mb-6 text-gring-offset-gray-700'>
        {
            Icons.map(icon =>(
                <span key={icon.name} className='inline-flex items-center p-2 text-xl bg-gray-400 rounded-full cursor-pointer hover:bg-yellow-700 hover:text-gray-300 mx-1.5 shadow-md shadow-gray-500'>
                    <ion-icon name={icon.name}></ion-icon>
                </span>
            ))
        }
    </div>
  );
};

export default SocialIcons;