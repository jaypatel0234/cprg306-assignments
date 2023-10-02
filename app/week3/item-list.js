import React from 'react';
import Item from './item';


const ItemList = () => {
  const items = [
    {
      name: "milk, 4 L 🥛",
      quantity: 1,
      category: "dairy",
    },
    {
      name: "bread 🍞",
      quantity: 2,
      category: "bakery",
    },
    {
      name: "eggs, dozen 🥚",
      quantity: 2,
      category: "dairy",
    },
    {
      name: "bananas 🍌",
      quantity: 6,
      category: "produce",
    },
    {
      name: "broccoli 🥦",
      quantity: 3,
      category: "produce",
    },
    {
      name: "chicken breasts, 1 kg 🍗",
      quantity: 1,
      category: "meat",
    },
    {
      name: "pasta sauce 🍝",
      quantity: 3,
      category: "canned goods",
    },
    {
      name: "spaghetti, 454 g 🍝",
      quantity: 2,
      category: "dry goods",
    },
    {
      name: "toilet paper, 12 pack 🧻",
      quantity: 1,
      category: "household",
    },
    {
      name: "paper towels, 6 pack",
      quantity: 1,
      category: "household",
    },
    {
      name: "dish soap 🍽️",
      quantity: 1,
      category: "household",
    },
    {
      name: "hand soap 🧼",
      quantity: 4,
      category: "household",
    }
  ];


  return (
    <div className="bg-indigo-900 min-h-screen py-8 flex flex-col justify-center sm:py-19">
        <div className="relative py-3 sm:max-w-xl sm:mx-100">
        <div className="relative px-6 py-12 bg-indigo-900 sm:rounded-3xl sm:p-20">
          <ul className="space-y-6 text-lg text-blue-900">
            {items.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </ul>
        </div>
      </div>
      </div>
  );
};

export default ItemList;
