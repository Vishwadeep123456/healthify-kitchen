import axios from 'axios';

const API_BASE = https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&diet=low-carb&calories=100-500
 // यहाँ असली Nutrition API URL डालें

export const fetchRecipes = async (diet, maxCalories) => {
  const response = await axios.get(API_BASE, {
    params: {
      diet,
      maxCalories
    },
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    }
  });

  return response.data.results;
};
