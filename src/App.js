import React from 'react';
import FullWidthTabs from './components/navbar';

import './App.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      mode: 'dark',
      main: '#ffffff',
      light: '#ffffff',
      dark: '#ffffff'
    },
    secondary: {
      main: '#081842',
    },
  },
});

library.add(fab);

function Footer() {
  return (
    <Box align="center" className="footer_box" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}}>
      <Typography className="footer" variant="caption" color="white">
      {'Copyright © '}
      Mark Lindskog
      {' '}{new Date().getFullYear()}.
      {' '}
      <Tooltip title="Github">
        <Link target="_blank" href="https://github.com/mjlindskog">
        <GitHubIcon fontSize="small" sx={{ color: "white" }}/>
        </Link>
      </Tooltip>
      {' '}
      <Tooltip title="LinkedIn">
        <Link target="_blank" href="https://www.linkedin.com/in/mark-lindskog-2bb256186/">
        <LinkedInIcon fontSize="small" sx={{ color: "white" }}/>
        </Link>
      </Tooltip>
    </Typography>
    </Box>
  );
};

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <FullWidthTabs  />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;