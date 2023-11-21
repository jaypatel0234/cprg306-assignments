import React from 'react';

const Item = ({ name, quantity, category , onSelect}) => {
  return (
    <li className="bg-gray-100 hover:bg-gray-400 rounded-lg p-4 flex-1 justify-between items-left"  onClick={() => onSelect(name)}>
      <div className="text-gray-800">
        <span className="font-bold">{name}</span>
      </div>
      <div className="text-indigo-600 font-semibold">
        Buy {quantity} in {category}
      </div>
    </li>
  );
};

export default Item;
