import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { styled } from '@mui/system';


export { };

const StyledAppBar = styled(AppBar)({
  background: '#f4f5f8',
  top: 'auto',
  bottom: 0,
});

const Footer = () => {
  return (
    <StyledAppBar position="static">
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <div className="footer-top" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#414c64',
              fontSize: '14px',
              fontFamily: 'Open Sans, sans-serif',
              padding: '10px'
            }}>
              University of Glasgow | Team 7B
            </div>
            <div className="footer-top" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#414c64',
              fontSize: '14px',
              fontFamily: 'Open Sans, sans-serif',
              padding: '10px'
            }}>
              Kai En Yong | Yan Hern Ryan Sim | Shi Ying Nicole Ng | Ng Geok Ting | Enrique Marcelo | Daycee Li Lyn Lau
            </div>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Footer;
