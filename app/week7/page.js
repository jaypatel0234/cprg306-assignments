"use client";
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import MealIdeas from './meal-ideas'; 

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').split(',')[0].trim();
    setSelectedItemName(cleanedItemName);
};



  return (

<main className="bg-black-100 p-4 flex">
<div>
<h1 className="text-2xl font-bold mb-4 text-indigo-400 flex-auto items-centre">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
  <ItemList items={items} onItemSelect={handleItemSelect} />
</div>
<MealIdeas ingredient={selectedItemName} />
</main>
  );
};

export default Page;
