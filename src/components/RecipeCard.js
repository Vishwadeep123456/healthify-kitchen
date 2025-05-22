import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>{recipe.title}</h3>
      <p><strong>Calories:</strong> {recipe.calories}</p>
      <p><strong>Protein:</strong> {recipe.protein}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients?.join(', ')}</p>
    </div>
  );
};

export default RecipeCard;
