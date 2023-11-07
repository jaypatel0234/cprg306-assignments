"use client";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook for redirecting the user
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context'; // Import the auth context hook
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth(); // Use the useUserAuth hook
  const navigate = useNavigate(); // For programmatic navigation

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/'); // Redirect to the landing page
    }
  }, [user, navigate]);

  // Rest of your existing handle functions...

  if (!user) {
    // Render nothing or a loading spinner
    return null;
  }

  return (
    // Your existing page JSX
    <main className="bg-black-100 p-4 flex">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-indigo-400 flex-auto items-center">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
};

export default Page;
