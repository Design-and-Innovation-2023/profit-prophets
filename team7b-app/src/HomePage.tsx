// import React from 'react';
// import { Typography, Container, Box } from '@mui/material';

// const HomePage = () => {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Container sx={{ mt: 4, p: 2 }}>
//         <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'text.primary', mt: 4, mb: 2 }}>
//             Welcome to Team 7B's Diary
//         </Typography>
//         <Typography variant="h6" component="h2" sx={{ fontWeight: 'medium', color: 'text.secondary', mt: 2, mb: 2, lineHeight: 1.5 }}>
//             Our tool aims to solve the difficulty of comparing various savings accounts between different banks. We provide an in-depth comparison with ease of use at the forefront of our design.
//         </Typography>
//         <Typography variant="body1" component="p" sx={{ fontWeight: 'light', color: 'text.secondary', mt: 2, mb: 2, lineHeight: 1.6 }}>
//             Navigate to different sections to learn more about our journey, reflections, and proud moments.
//         </Typography>
//         </Container>

//     </Box>
//   );
// };

// export default HomePage;


import { Box, Button, Card, CardContent, CardMedia, Container, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <Container>
        <div className="position-relative" style={{ textAlign: 'center' , margin: '100px'}}>
          <Typography variant="h1" sx={{
              fontFamily: '"Raleway", sans-serif',
              fontSize: '28px',
              lineHeight: '36px',
              fontWeight: 700
            }} style={{ color: '#59596a'  , margin: '20px'}}>
            Welcome to Team 7B's Diary
          </Typography>
          <Typography variant="h2" sx={{
              color: '#59596a',
              fontFamily: '"Raleway", sans-serif',
              fontSize: '18px',
              lineHeight: '24px',
              fontWeight: '500',
              marginBottom: '20px',
              paddingBottom: '20px',
              position: 'relative'
            }} style={{ color: '#59596a'  , margin: '20px'}}>
            Navigate to different sections to learn more about our journey, reflections, and proud moments.
          </Typography>
          {/* <Button color="inherit" component={Link} to="/project-journey" variant="outlined" style={{ color: '#59596a', margin: '10px'}} >Get Started</Button> */}
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset value based on your layout
            duration={500}
          >
            <Button
              color="inherit"
              variant="outlined"
              style={{ color: '#59596a', margin: '10px' }}
            >
              Get Started
            </Button>
          </ScrollLink>
        </div>
      </Container>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <Container>
        <div className="row" style={{ textAlign: 'center' , margin: '100px'}}>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <Typography variant="h2" sx={{
              color: '#59596a',
              fontFamily: '"Raleway", sans-serif',
              fontSize: '32px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: '20px',
              paddingBottom: '20px',
              position: 'relative'
            }} style={{ color: '#59596a'  , margin: '10px'}}>
              Our Project
            </Typography>
            <Divider variant="middle" style={{display: 'block', margin: '0 auto', height: 2, maxWidth: 60, backgroundColor: '#00b0f5'}}/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" style={{margin: '30px'}}>
            <Grid container spacing={6}>
              <Grid item xs={4}>
                <Card sx={{ minWidth: 275, height: '100%' }} style={{backgroundColor: '#f0f8ff'}}>
                  <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardMedia
                      component="img"
                      style={{maxWidth: '60%', height: 'auto' }}
                      image={process.env.PUBLIC_URL + '/contextIcon.jpg'}
                      alt="Card Image"
                    />
                    <Typography sx={{
                      fontFamily: '"Raleway", sans-serif',
                      fontWeight: 600,
                      margin: '10px 0 15px 0',
                      fontSize: '22px',
                      lineHeight: 1.2
                    }} style={{ color: '#59596a'}}>
                      Context
                    </Typography>
                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px'
                    }} paragraph>
                    Barclays, with a history dating back to 1690, is a global financial institution known for innovation and its network of Eagle Labs across the UK.
                    </Typography>
                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px'
                    }} paragraph>
                    Their flagship Glasgow campus, opened in 2021, focuses on sustainability and inclusivity.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ minWidth: 275, height: '100%' }} style={{backgroundColor: '#f0f8ff'}}>
                  <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <CardMedia
                        component="img"
                        style={{maxWidth: '60%', height: 'auto' }}
                        image={process.env.PUBLIC_URL + '/problemIcon.jpg'}
                        alt="Card Image"
                      />
                    <Typography sx={{
                      fontFamily: '"Raleway", sans-serif',
                      fontWeight: 600,
                      margin: '10px 0 15px 0',
                      fontSize: '22px',
                      lineHeight: 1.2
                    }} style={{ color: '#59596a'}}>
                      Problem Statement
                    </Typography>
                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px'
                    }} paragraph>
                    The challenge is to create an application that simplifies and optimizes the process of transferring funds between accounts to maximize savings.
                    </Typography>
                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px'
                    }} paragraph>
                    This app should analyse the user's financial profile, aggregate and rank different savings accounts based on established metrics, allow the user to receive recommendations, and be redirected to set up their preferred account.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ minWidth: 275, height: '100%' }} style={{backgroundColor: '#f0f8ff'}}>
                  <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <CardMedia
                        component="img"
                        style={{maxWidth: '60%', height: 'auto' }}
                        image={process.env.PUBLIC_URL + '/solutionIcon.jpg'}
                        alt="Card Image"
                      />
                    <Typography sx={{
                      fontFamily: '"Raleway", sans-serif',
                      fontWeight: 600,
                      margin: '10px 0 15px 0',
                      fontSize: '22px',
                      lineHeight: 1.2
                    }} style={{ color: '#59596a'}}>
                      Our Solution
                    </Typography>
                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px'
                    }} paragraph>
                    To tackle this problem, the initial steps involve researching existing websites that compare bank accounts and interviewing individuals about their savings optimization preferences to develop a metrics for the recommendation system. 
                    </Typography>
                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px'
                    }} paragraph>
                    Leveraging Barclays experts' knowledge about various savings accounts will also be beneficial.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </section>
  );
};

const ProjectSection = () => {
  return (
    <section
      id="project"
      className="project"
      style={{
        backgroundColor: '#016594',
        height: '300px',
      }}
    >
      <Container>
        <div className="position-relative" style={{ textAlign: 'center' , margin: '100px', padding: '55px'}}>
          <Typography variant="h1" sx={{
              fontFamily: '"Raleway", sans-serif',
              fontSize: '28px',
              lineHeight: '36px',
              fontWeight: 700
            }} style={{ color: '#ffffff'  , margin: '20px'}}>
            Project Journey
          </Typography>
          <Typography variant="h2" sx={{
              color: '#ffffff',
              fontFamily: '"Raleway", sans-serif',
              fontSize: '18px',
              lineHeight: '24px',
              fontWeight: '500',
              marginBottom: '20px',
              paddingBottom: '20px',
              position: 'relative'
            }} style={{ color: '#ffffff'  , margin: '20px'}}>
            Navigate to different sections to learn more about our journey, reflections, and proud moments.
          </Typography>
          <Button color="inherit" component={Link} to="/project-journey" variant="contained" style={{ backgroundColor: '#00b0f5', color: 'white', margin: '10px'}} >Get Started</Button>
        </div>
      </Container>
    </section>
  );
};


const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </Box>
  );
};

export default HomePage;
