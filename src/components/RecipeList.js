import React from 'react';
import RecipeItem from './RecipeItem';
import { Grid } from '@mui/material';

const RecipeList = ({ recipes, onSelect }) => (
  <Grid container spacing={7}>
    {recipes.map((recipe) => (
      <Grid item xs={12} sm={4} md={4} lg={5} key={recipe.recipe.uri}>
        <RecipeItem recipe={recipe} onSelect={onSelect} />
      </Grid>
    ))}
  </Grid>
);

export default RecipeList;
