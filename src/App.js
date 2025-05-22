import React, { useState } from 'react';
import { fetchRecipes } from './api';
import RecipeCard from './components/RecipeCard';

const App = () => {
  const [diet, setDiet] = useState('');
  const [maxCalories, setMaxCalories] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const results = await fetchRecipes(diet, maxCalories);
      setRecipes(results);
    } catch (error) {
      alert("Error fetching recipes. Please check your API key or try again.");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🥗 Healthify Kitchen</h1>
      <input
        type="text"
        placeholder="Diet (e.g. keto, vegan)"
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Calories"
        value={maxCalories}
        onChange={(e) => setMaxCalories(e.target.value)}
      />
      <button onClick={handleSearch}>Search Recipes</button>

      <div style={{ marginTop: '20px' }}>
        {recipes.map((recipe, i) => (
          <RecipeCard key={i} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;

