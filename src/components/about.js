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
      With a dynamic background spanning software quality assurance, web development, and cybersecurity, I bring a versatile skill set to any team. My recent CompTIA Security+ certification enhances my foundational knowledge in security practices. Previously, as a Software Quality Assurance Engineer, I honed my skills in manual testing. My technical expertise is further enriched by completing a Full Stack Web Development Bootcamp at Ohio State University, where I mastered HTML, CSS, JavaScript, ReactJS, NodeJS, SQL, and NoSQL. Additionally, I have developed proficiency in Python. I am excited to apply my diverse technical background and analytical abilities to new opportunities.</Typography>
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
        <FontAwesomeIcon className="icon" icon={["fab", "python"]} size="5x" color="black"/>
        {'  '}
        <FontAwesomeIcon className="icon" icon={["fab", "git-alt"]} size="5x" color="black"/>
      </Container>
    </Container>
  );
};

