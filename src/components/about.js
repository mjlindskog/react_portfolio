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
        Transitioning inside sales executive who recently earned a certificate in full stack development from the Ohio State University Coding Bootcamp with a desire to continue learning about meaningful technologies and be a team player utilizing communication and problem solving skills. Now possessing skills around Javascript, React.js, Node.js, HTML and CSS.
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

