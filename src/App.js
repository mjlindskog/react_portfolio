import React from 'react';
import FullWidthTabs from './components/navbar';

import './App.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

function Footer() {
  return (
    <Typography className="footer" variant="caption" align="center" color="white" sx={{ display: 'block' }}>
      {'Copyright © '}
      Mark Lindskog
      {' '}{new Date().getFullYear()}.
      {' '}
      <Tooltip title="Github">
        <Link href="https://github.com/mjlindskog">
        <GitHubIcon fontSize="small" sx={{ color: "white" }}/>
        </Link>
      </Tooltip>
      {' '}
      <Tooltip title="LinkedIn">
        <Link href="https://www.linkedin.com/in/mark-lindskog-2bb256186/">
        <LinkedInIcon fontSize="small" sx={{ color: "white" }}/>
        </Link>
      </Tooltip>
    </Typography>
  );
};

function App() {
  
  return (
    <div className="app">
      <FullWidthTabs  />
      <Footer />
    </div>
  );
};

export default App;

