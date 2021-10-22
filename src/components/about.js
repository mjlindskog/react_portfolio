import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../styles/about.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function About() {
  return (
    <Container sx={{ display: "sticky", mt: 15, height: '90vh', width: '100%', justifyContent: 'center' }}>
      <Typography className="about" variant='h6' align="center" sx={{ color: "white", fontWeight: "bolder", display: "block", px: 5 }}>
        Recent graduate of the Ohio State Unviersity Full Stack coding bootcamp. In 2019 recieved a B.A. in History from Ohio University. After holding a various positions in sales and business development, now have established strong communication skills. Have had an interest in learning coding skills since I was a teenager with avid initerest in video games and their development process. 
      </Typography>
      <Container fixed align="center" sx={{ width: '100%', justifyContent: 'center', display: 'sticky', opacity: '0.5', p: 5 }}>
        <FontAwesomeIcon icon={["fab", "html5"]} size="5x" color="black"/>
        {'  '}
        <FontAwesomeIcon icon={["fab", "css3-alt"]} size="5x" color="black"/>
        {'  '}
        <FontAwesomeIcon icon={["fab", "js-square"]} size="5x" color="black"/>
        {'  '}
        <FontAwesomeIcon icon={["fab", "node"]} size="5x" color="black"/>
        {'  '}
        <FontAwesomeIcon icon={["fab", "react"]} size="5x" color="black"/>
        {'  '}
        <FontAwesomeIcon icon={["fab", "git-alt"]} size="5x" color="black"/>
      </Container>
    </Container>
  );
};

