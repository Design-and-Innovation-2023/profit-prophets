import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
  background: '#00395d',
});

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Team 7B - Savings Rate Chaser
          </Typography>
          <Button color="inherit" component={Link} to="/project-journey">Project Journey</Button>
          <Button color="inherit" component={Link} to="/reflection">Reflection</Button>
          <Button color="inherit" component={Link} to="/proud-moments">Proud Moments</Button>
        </Toolbar>
      </StyledAppBar>
      <Container className="mt-8">
        <Typography variant="h4" component="h1" className="font-semibold text-gray-800 mt-10">
          Welcome to Team 7B's Diary
        </Typography>
        <Typography variant="h6" component="h2" className="mt-4 text-gray-700">
          Our tool aims to solve the difficulty of comparing various savings accounts between different banks. We provide an in-depth comparison with ease of use at the forefront of our design.
        </Typography>
        <Typography variant="body1" component="p" className="mt-2 text-gray-600">
          Navigate to different sections to learn more about our journey, reflections, and proud moments.
        </Typography>
      </Container>
    </Box>
  );
};

export default HomePage;
