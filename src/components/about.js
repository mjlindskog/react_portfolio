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
    <Container sx={{ display: "relative", mt: 20, height: '50vh', width: '100%', justifyContent: 'center' }}>
      <Typography className="about" variant='h6' align="center" sx={{ color: "white", fontWeight: "bolder", display: "block", px: 5 }}>
        Recent graduate of a coding boot camp through Ohio State University. Plan to utilize my new and growing skills around Full Stack Development and established communictions skills through various sales positions to become a vital member of a development team. Now possessing skills around Javascript, React, Node, HTML and CSS.
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

