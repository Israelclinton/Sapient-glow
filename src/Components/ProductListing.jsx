import React from 'react'
import facial from '../assets/images/facial.jpg'

const ProductListing = () => {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between py-4 bg-white rounded flex-3 md:px-10 px-7'>
        <div className="flex flex-col items-center justify-center md:flex-grid">
          <img src={facial} alt='' className='h-[140px] w-[180px] rounded-md mb-3'/>
          <span className='items-center w-full py-1 text-center text-white bg-yellow-700 rounded'>
            Facial Treatment
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={facial} alt='' className='h-[140px] w-[180px] rounded-md mb-3'/>
          <span className='items-center w-full py-1 text-center text-white bg-yellow-700 rounded'>
            Massage
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={facial} alt='' className='h-[140px] w-[180px] rounded-md mb-3'/>
          <span className='items-center w-full py-1 text-center text-white bg-yellow-700 rounded'>
            Resort
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={facial} alt='' className='h-[140px] w-[180px] rounded-md mb-3'/>
          <span className='items-center w-full py-1 text-center text-white bg-yellow-700 rounded'>
            Suite
          </span>
        </div>
        
      </div>
        
    </div>
  )
}

export default ProductListing;