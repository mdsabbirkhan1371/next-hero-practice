'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // Correct import
import styles from './meals.module.css';
const SearchMeal = () => {
  const [searchText, setSearchText] = useState('');
  const [mealData, setMealData] = useState([]);

  const handleChange = event => {
    console.log(event.target.value);
    setSearchText(event.target.value);
  };

  const fetchMealData = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
      );
      const data = await response.json();
      console.log(data.meals);
      setMealData(data.meals || []); // Ensures mealData is an empty array if no meals are found
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSearch = () => {
    if (searchText.trim()) {
      fetchMealData();
    }
  };

  return (
    <div className="my-3">
      <div>
        <input
          onChange={handleChange}
          value={searchText}
          className="px-4 py-2 text-white bg-teal-950"
          placeholder="Type Food Name"
          type="text"
        />
        <button
          onClick={handleSearch}
          className="bg-teal-950 px-6 ml-3 text-white rounded py-2"
        >
          Search
        </button>
      </div>
      <div className="grid grid-col-1 md:grid-cols-3 gap-6">
        {mealData.length > 0 &&
          mealData.map(meal => (
            <div key={meal.idMeal} className="my-2 border p-4">
              <Image
                className="w-96"
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={384} // width in pixels
                height={384} // height in pixels
              />
              <h3 className="text-xl font-semibold">{meal.strMeal}</h3>
              <p className={styles.color}>
                {meal.strInstructions.slice(0, 250)}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchMeal;
