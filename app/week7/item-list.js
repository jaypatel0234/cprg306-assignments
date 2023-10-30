"use client"
import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
    const [sortBy, setSortBy] = useState("name");
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "category") return a.category.localeCompare(b.category);
      });
      
  
    const sortButtonStyle = {
      backgroundColor: '#FFA500', // orange
      border: 'none',
      color: 'white',
      padding: '10px 20px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '4px 2px',
      cursor: 'pointer',
      borderRadius: '4px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // subtle shadow for depth
      transition: 'transform 0.1s' // smooth press effect
  };
  
  const activeSortButtonStyle = {
      ...sortButtonStyle,
      backgroundColor: '#FF8C00' // darken when selected
  };

  return (
<div>
        <button 
            style={sortBy === "name" ? activeSortButtonStyle : sortButtonStyle}
            onClick={() => setSortBy("name")}
        >
            Sort by Name
        </button>
        <button 
            style={sortBy === "category" ? activeSortButtonStyle : sortButtonStyle}
            onClick={() => setSortBy("category")}
        >
            Sort by Category
        </button>
        
        <ul>
        {sortedItems.map(item => (
                    <Item key={item.id} {...item} onSelect={onItemSelect} />
                ))}
        </ul>
    </div>
 
    
  );
};

export default ItemList;
