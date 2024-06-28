import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#800080', // fioletowy
    },
  },
});

const Header = () => (
  <ThemeProvider theme={theme}>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h4" position="mid">
          Przepisownik Zuzi
        </Typography>
      </Toolbar>
    </AppBar>
  </ThemeProvider>
);

export default Header;
