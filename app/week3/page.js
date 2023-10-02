import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="bg-black-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-indigo-400 flex-auto items-centre">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
