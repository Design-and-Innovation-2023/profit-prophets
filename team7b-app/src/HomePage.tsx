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
import { styled } from '@mui/system';
import Carousel from "nuka-carousel";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const FlexContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <Container>
        <div className="position-relative" style={{ textAlign: 'left' , margin: '100px'}}>
        <FlexContainer>
        <div>
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Raleway", sans-serif',
              fontSize: '45px',
              lineHeight: '36px',
              fontWeight: 700,
              color: '#59596a',
              marginBottom: '20px',
            }}
          paragraph>
            Welcome to
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Raleway", sans-serif',
              fontSize: '45px',
              lineHeight: '36px',
              fontWeight: 700,
              color: '#59596a',
              marginBottom: '40px',
            }}
          paragraph>
            Team 7B's Diary
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: '#59596a',
              fontFamily: '"Raleway", sans-serif',
              fontSize: '19px',
              lineHeight: '24px',
              fontWeight: '500',
              marginBottom: '20px',
              paddingBottom: '20px',
              position: 'relative',
            }}
          >
            Navigate to different sections to learn more about our journey, reflections, and proud moments.
          </Typography>
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset value based on your layout
            duration={500}
          >
            <Button color="inherit" variant="outlined" style={{ color: '#59596a' }}>
              Get Started
            </Button>
          </ScrollLink>
        </div>
        <img
          src={process.env.PUBLIC_URL + '/teamPicture.jpg'}
          alt="Welcome"
          style={{ width: '475px', height: 'auto', marginLeft: '20px' }}
        />
      </FlexContainer>
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
              paddingBottom: '10px',
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
                      image={process.env.PUBLIC_URL + '/rateIcon.jpg'}
                      alt="Card Image"
                    />
                    <Typography sx={{
                      fontFamily: '"Raleway", sans-serif',
                      fontWeight: 600,
                      margin: '10px 0 15px 0',
                      fontSize: '22px',
                      lineHeight: 1.2
                    }} style={{ color: '#59596a'}}>
                      Fixed Rate? <br></br>
                      Variable Rate?
                    </Typography>
                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px'
                    }} paragraph>
                    Savings account offerings differ among banks, with various interest rates, deposit requirements, and eligibility rules. What may work for others, may not work well for you!
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
                        image={process.env.PUBLIC_URL + '/whyIcon.jpg'}
                        alt="Card Image"
                      />
                    <Typography sx={{
                      fontFamily: '"Raleway", sans-serif',
                      fontWeight: 600,
                      margin: '10px 0 15px 0',
                      fontSize: '22px',
                      lineHeight: 1.2
                    }} style={{ color: '#59596a'}}>
                      Why It Matters
                    </Typography>
                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px'
                    }} paragraph>
                    Banks often impose penalties onto account holders with accounts that fall short of the minimum deposits or exceed withdrawal limits. 
                    <br></br><br></br>With ever increasing costs of living, why not switch to an account that helps you save?
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
                        image={process.env.PUBLIC_URL + '/helpIcon.jpg'}
                        alt="Card Image"
                      />
                    <Typography sx={{
                      fontFamily: '"Raleway", sans-serif',
                      fontWeight: 600,
                      margin: '10px 0 15px 0',
                      fontSize: '22px',
                      lineHeight: 1.2
                    }} style={{ color: '#59596a'}}>
                      How We Help
                    </Typography>
                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px'
                    }} paragraph>
                    Rate Chaser works to understand your financial profile and provide personalized recommandations for the best savings account.
                    <br></br><br></br>View how they stack up using detailed metrics and get updated when a better account is introduced.
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

const CarouselSection = () => {
  const photos = [
    process.env.PUBLIC_URL + '/teamPicture.jpg',
    process.env.PUBLIC_URL + '/placeholder.jpeg',
    process.env.PUBLIC_URL + '/teamPicture.jpg',
    process.env.PUBLIC_URL + '/placeholder.jpeg',
    process.env.PUBLIC_URL + '/teamPicture.jpg',
    process.env.PUBLIC_URL + '/placeholder.jpeg',
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '350px',
    }}>
      <Carousel autoplay={true} autoplayInterval={7000} wrapAround={true} style={{ maxWidth: '600px', width: '100%', height: '100%', margin: '20px auto', textAlign: 'center' }}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo${index + 1}`}
            style={{ maxHeight: '500px', width: '100%', margin: 'auto' }}
          />
        ))}
      </Carousel>
    </div>
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
      <CarouselSection />
      <ProjectSection />
    </Box>
  );
};

export default HomePage;
