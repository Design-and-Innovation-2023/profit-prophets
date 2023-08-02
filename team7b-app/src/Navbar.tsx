// // Navbar.js
// import { AppBar, Button, Toolbar, Typography } from '@mui/material';
// import { styled } from '@mui/system';
// import { Link } from 'react-router-dom';

// const StyledAppBar = styled(AppBar)({
//   background: '#00395d',
// });

// const Navbar = () => {
//   return (
//     <StyledAppBar position="static">
//       <Toolbar>
//         <Link to="/" style={{ textDecoration: 'none', flexGrow: 1, color: 'white' }}>
//           <Typography variant="h6" component="div">
//             Team 7B - Savings Rate Chaser
//           </Typography>
//         </Link>
//         <Button color="inherit" component={Link} to="/">Home</Button>
//         <Button color="inherit" component={Link} to="/project-journey">Project Journey</Button>
//         <Button color="inherit" component={Link} to="/reflection">Reflection</Button>
//         <Button color="inherit" component={Link} to="/achievements">Proud Moments</Button>
//       </Toolbar>
//     </StyledAppBar>
//   );
// };


// export default Navbar;

import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
  background: '#ffffff',
});

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <StyledAppBar position="sticky">
      <Container>
        <Toolbar>
          {/* <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              <Link to="/" style={{ textDecoration: 'none', color: '#00b0f5'}}>
                Team 7B
              </Link>
            </Typography>
          </Box> */}
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', flexGrow: 1 }}>
              <img src={process.env.PUBLIC_URL + '/websiteLogo.jpg'} alt="Logo" style={{ width: '215px'}} />
            </Link>
          </Box>
          <Button color="inherit" component={Link} to="/" style={{ color: '#00b0f5' }} >Home</Button>
          <Button color="inherit" component={Link} to="/project-journey"  style={{ color: '#00b0f5' }} >Project Journey</Button>
          <Button color="inherit" component={Link} to="/reflection" style={{ color: '#00b0f5' }} >Reflection</Button>
          <Button color="inherit" component={Link} to="/achievements" style={{ color: '#00b0f5' }} >Achievements</Button>
          <Button color="inherit" component={Link} to="/about-us" style={{ color: '#00b0f5' }} >About Us</Button>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;

