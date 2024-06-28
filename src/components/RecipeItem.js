import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const RecipeItem = ({ recipe, onSelect }) => (
  <Card 
    onClick={() => onSelect(recipe)} 
    sx={{  
      border: '1px solid #800080', // fioletowy
      padding: '2px',
      borderRadius: '1px' 
    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        alt={recipe.recipe.label}
        height="180"
        image={recipe.recipe.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {recipe.recipe.label}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default RecipeItem;
