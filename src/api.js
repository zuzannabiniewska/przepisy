const APP_ID = 'd36683aa';
const APP_KEY = '79ad56093b04baf4fbf0ce65f325194a';

export const fetchRecipes = async (query) => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  return data.hits;
};
