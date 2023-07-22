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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Team 7B - Savings Rate Chaser
        </Typography>
        <Button color="inherit" component={Link} to="/project-journey">Project Journey</Button>
        <Button color="inherit" component={Link} to="/reflection">Reflection</Button>
        <Button color="inherit" component={Link} to="/proud-moments">Proud Moments</Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;