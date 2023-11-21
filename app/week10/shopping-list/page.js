"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Next.js router for redirection
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context'; // Auth context hook
import { getItems, addItem } from '../_services/shopping-list-service'; // Firestore services

const Page = () => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth(); // Auth hook
  const router = useRouter(); // Next.js router
  
  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push('/');
    } else {
      loadItems();
    }
  }, [user, router]);

  // Function to load items from Firestore
  const loadItems = async () => {
    const fetchedItems = await getItems(user?.uid);
    setItems(fetchedItems);
  };

  // Function to handle adding an item
  const handleAddItem = async (newItemData) => {
    const newItemId = await addItem(user.uid, newItemData);
    const newItem = { id: newItemId, ...newItemData };
    setItems([...items, newItem]);
  };

  // Function to handle item selection
  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

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
