import React, { useState } from 'react';
import '../styles/contact.css';
import Resume from '../img/resume_screenshot.png';
import PDF from '../docs/Resume.pdf'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Contact() {

    return (
        <Container>
            <Stack direction="row" spacing={2} sx={{ display: "relative", mt: 6, width: '100%', justifyContent: 'center'}}>
                <Button fixed align="center" variant="contained" href="mailto:lindskogmarkj@gmail.com" target="_blank" rel="noopener" color="secondary" size="large" startIcon={<SendIcon />} sx={{ color: "white", '&:hover': { color: '#99ddff' } }}>
                Email
                </Button>
                <Button href={PDF} download fixed align="center" variant="contained" target="_blank" rel="noopener" color="secondary" size="large" startIcon={<DownloadIcon />} sx={{ color: "white", '&:hover': { color: '#99ddff' } }} >
                Resume
                </Button>
            </Stack>
            <Box sx={{ display: 'relative', justifyContent: 'center', my: 5, width: '100%' }}>
                <img src={Resume} alt="screenshot of resume"></img>
            </Box>
        </Container>
        
    )
};

