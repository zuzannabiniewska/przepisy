import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const RecipePopup = ({ recipe, onClose }) => {
  if (!recipe) return null;

  const { label, image, ingredientLines, url, totalNutrients } = recipe.recipe;

  return (
    <Dialog open={Boolean(recipe)} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{label}</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src={image} alt={label} style={{ width: '100%', maxHeight: '290px', objectFit: 'cover' }} />
          
          <Box display="flex" justifyContent="space-between" mt={2} width="100%">
            <Box flex="1" mr={1}>
              <Typography variant="h6">Składniki:</Typography>
              <List>
                {ingredientLines.map((line, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={line} />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box flex="1" mx={1}>
              <Typography variant="h6">Makroskładniki:</Typography>
              <List>
                <ListItem>
                  <ListItemText primary={`Kalorie: ${totalNutrients.ENERC_KCAL.quantity.toFixed(2)} ${totalNutrients.ENERC_KCAL.unit}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Tłuszcz: ${totalNutrients.FAT.quantity.toFixed(2)} ${totalNutrients.FAT.unit}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Węglowodany: ${totalNutrients.CHOCDF.quantity.toFixed(2)} ${totalNutrients.CHOCDF.unit}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Białko: ${totalNutrients.PROCNT.quantity.toFixed(2)} ${totalNutrients.PROCNT.unit}`} />
                </ListItem>
              </List>
            </Box>

            <Box flex="1" ml={1}>
              <Typography variant="h6">Instrukcje:</Typography>
              <Typography variant="body1">
                <a href={url} target="_blank" rel="noopener noreferrer">Kliknij tutaj, aby zobaczyć cały przepis</a>
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Zamknij</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RecipePopup;
