"use client";
import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
  };

  useEffect(() => {
      loadMealIdeas();
  }, [ingredient]);

  return (
      <div>
          {ingredient ? (
                <>
                    <h2>Meal Ideas for {ingredient}</h2>
                    {meals && meals.length > 0 ? (
                        <ul>
                            {meals.map(meal => (
                                <li key={meal.idMeal}>
                                    {meal.strMeal}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No meal ideas for {ingredient}</p>
                    )}
                </>
            ) : (
                <p>Select an item to see meal ideas.</p>
            )}
      </div>
  );
};

export default MealIdeas;