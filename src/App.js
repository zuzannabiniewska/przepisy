import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SerchBar'
import RecipeList from './components/RecipeList';
import RecipePopup from './components/RecipePopup';
import { fetchRecipes } from './api';
import { CssBaseline, Container } from '@mui/material';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async (query) => {
    const results = await fetchRecipes(query);
    setRecipes(results);
  };

  useEffect(() => {
    const defaultSearch = async () => {
      const results = await fetchRecipes('Pizza');
      setRecipes(results);
    };

    defaultSearch();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <SearchBar onSearch={handleSearch} />
        <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
        <RecipePopup recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      </Container>
    </>
  );
};

export default App;
