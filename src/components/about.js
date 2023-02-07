import React from 'react';
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
    
    <Container className="about_box" sx={{ display: "relative", mt: 20, height: '100vh', width: '100%', justifyContent: 'center' }}>
      <Typography className="about" variant='h6' align="center" sx={{ color: "white", fontWeight: "bolder", display: "block", px: 5 }}>
      Currently a Software Quality Assurance Engineer with experience in manual testing. My previous completion of a 6 month Full Stack Web Development Bootcamp through Ohio State University helped me advance my knowledge in HTML, CSS, Javascript, ReactJS, NodeJS,  SQL and NoSQL. I want to use my current QA skills and previous coding knowledge to further my career growth.</Typography>
      <Container fixed align="center" sx={{ width: '100%', justifyContent: 'center', display: 'sticky', opacity: '0.5', p: 5 }}>
        <FontAwesomeIcon className="icon" icon={["fab", "html5"]} size="5x" color="black"/>
        {'  '}
        <FontAwesomeIcon className="icon" icon={["fab", "css3-alt"]} size="5x" color="black"/>
        {'  '}
        <FontAwesomeIcon className="icon" icon={["fab", "js-square"]} size="5x" color="black"/>
        {'  '}
        <FontAwesomeIcon className="icon" icon={["fab", "node"]} size="5x" color="black"/>
        {'  '}
        <FontAwesomeIcon className="icon" icon={["fab", "react"]} size="5x" color="black"/>
        {'  '}
        <FontAwesomeIcon className="icon" icon={["fab", "git-alt"]} size="5x" color="black"/>
      </Container>
    </Container>
  );
};

