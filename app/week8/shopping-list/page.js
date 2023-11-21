"use client";
import React, { useState, useEffect } from 'react';
import { useNavigation } from 'next/navigation'; // Import useNavigation from next/navigation
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context'; // Import the auth context hook

const Page = () => {
  const [items, setItems] = useState([]); // Replace with your items data initialization if needed
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth(); // Use the useUserAuth hook
  const navigation = useNavigation(); // useNavigation from next/navigation

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigation.navigate('/'); // Redirect to the landing page using navigate
    }
    // Load items logic here if necessary
  }, [user, navigation]);

  // Add your existing handle functions here...
  // Example: handleAddItem, handleItemSelect

  if (!user) {
    // Render nothing or a loading spinner
    return null;
  }

  return (
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
