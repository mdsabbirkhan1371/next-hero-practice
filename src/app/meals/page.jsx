import SearchMeal from '@/components/Meals/SearchMeal';
import React from 'react';

const MealsPage = () => {
  return (
    <div className="p-5 h-screen">
      <h2 className="text-2xl font-semibold text-red-400">
        Search Your Favorite Meal
      </h2>
      <p>Search food now</p>

      <SearchMeal></SearchMeal>
    </div>
  );
};

export default MealsPage;
