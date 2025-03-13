import React from 'react'

const Item = ({links, title}) => {
  return (
        <ul>
            <h1 className="mb-1 font-semibold">{title}</h1>
            {
                links.map((link) => {
                    <li key={link.name} >
                        <a href={link.link}> {link.name} </a>
                    </li>
                })
            }
        </ul>
  );
};

export default Item;