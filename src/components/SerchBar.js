import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'purple',
          },
        },
        notchedOutline: {
          borderColor: 'purple',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#800080', // fioletowy
    },
  },
});

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent="center" m={5}>
        <TextField
          fullWidth
          variant="outlined"
          label="Co zjemy dziś dobrego?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          InputProps={{
            style: {
              borderColor: 'purple',
            },
          }}
        />
        <Button variant="contained" color="primary" size="large" onClick={handleSearch} sx={{ marginLeft: 4 }}>
          Szukaj
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default SearchBar;
