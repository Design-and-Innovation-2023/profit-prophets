// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
  background: '#00395d',
});

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', flexGrow: 1, color: 'white' }}>
          <Typography variant="h6" component="div">
            Team 7B - Savings Rate Chaser
          </Typography>
        </Link>
        <Button color="inherit" component={Link} to="/project-journey">Project Journey</Button>
        <Button color="inherit" component={Link} to="/reflection">Reflection</Button>
        <Button color="inherit" component={Link} to="/proud-moments">Proud Moments</Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
