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
      Full-Stack Developer focused on mobile platforms, secure cloud databases, and automated infrastructure.I thrive in fast-paced, high-autonomy environments that require deep technical analysis and physical execution. My background combines rigorous digital product development with real-world operational logistics, structural asset restoration, and complex spatial coordination.From setting up serverless cloud functions to optimizing real-world resource deployment, I bring an exceptional, hands-on work ethic and a dedicated project-focused mindset to engineering clean, efficient technology.</Typography>
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

