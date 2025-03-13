import React from 'react'

const ReadMore = (props) => {
  return (
    <button className="px-4 py-2 font-bold text-white bg-yellow-700 rounded shadow-md hover:bg-gray-500 shadow-gray-500">
        {props.children}
    </button>
  )
}

export default ReadMore;