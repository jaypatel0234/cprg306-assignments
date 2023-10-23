"use client";
import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    onAddItem({
      name: itemName,
      quantity: quantity,
      category: category
    });
    
    // Reset fields
    setItemName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-80"
      >
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-200 placeholder-gray-500 text-gray-900"
        />
        <div className="flex justify-between mb-4">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-1/3 p-3 rounded bg-gray-200 text-gray-900"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-2/3 ml-4 p-3 rounded bg-gray-200 text-gray-900">
            <option value="Produce">Produce</option>
            <option value="Produce">Dairy</option>
            <option value="Produce">Bakery</option>
            <option value="Produce">Meat</option>
            <option value="Produce">Frozen Foods</option>
            <option value="Produce">Canned Foods</option>
            <option value="Produce">Dry Goods</option>
            <option value="Produce">Beverages</option>
            <option value="Produce">Snackes</option>
            <option value="Produce">Household</option>
            <option value="Produce">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600">
          +
        </button>
      </form>
    </div>
  );
};

export default NewItem;
