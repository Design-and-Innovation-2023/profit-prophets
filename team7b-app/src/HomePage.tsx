import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ mt: 4, p: 2 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'text.primary', mt: 4, mb: 2 }}>
            Welcome to Team 7B's Diary
        </Typography>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'medium', color: 'text.secondary', mt: 2, mb: 2, lineHeight: 1.5 }}>
            Our project aims to design a tool to solve the difficulty of comparing various savings accounts between different banks. We provide an in-depth comparison with ease of use at the forefront of our design.
        </Typography>
        <Typography variant="body1" component="p" sx={{ fontWeight: 'light', color: 'text.secondary', mt: 2, mb: 2, lineHeight: 1.6 }}>
            Navigate to different sections to learn more about our journey, reflections, and proud moments.
        </Typography>
        </Container>
    </Box>
  );
};

export default HomePage;
