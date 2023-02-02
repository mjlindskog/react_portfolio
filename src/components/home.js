import React from 'react';
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../styles/home.css'

export default function Home() {
  return (
    <div>
    <Box className="mjl" sx={{ display: "sticky", height: '50vh', mt: 20, width: '100%', justifyContent: 'center' }}>
      <Typography className="name" variant="h2" align="center" sx={{ color: "white", fontWeight: "bolder", display: "block" }}>
        MARK J LINDSKOG
      </Typography>
      <Typography className="subheader" variant="button" align="center" sx={{ color: "white", display: "block" }}>
        Software QA Engineer
      </Typography>
    </Box>
    </div>
  );
};