import { Box, Button, Card, CardContent, CardMedia, Container, Divider, Grid, Typography, Modal } from '@mui/material';
import { styled } from '@mui/system';
import Carousel from "nuka-carousel";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import NotificationSurveyImg from './assets/NotificationSurvey.png';
import FinancialSurveyImg from './assets/FinancialSurvey.png';
import MetricsBreakdownImg from './assets/MetricsBreakdown.png';
import PhoneNotificationImg from './assets/PhoneNotification.png';
import BankAccountRedactImg from './assets/BankAccountRedact.png';
import MetricsComparisonImg from './assets/MetricsComparison.png';
import React, { useState } from 'react';

const FlexContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <Container>
        <div className="position-relative" style={{ textAlign: 'left' , margin: '100px'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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
              RateChaser
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
              Navigate to different sections below to learn more about RateChaser and its benefits
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

          <div>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/pV6oUA_CABI?autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
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
              RateChaser
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
						Rate Chaser analyzes your financial profile to offer personalized savings account recommendations.<br></br><br></br>Use detailed metrics to compare accounts and receive notifications when superior options become available.
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

const features = [
  {
    title: 'Tailored For You, Hidden From View',
    description: 'Data protection and user control are prioritized, creating banking recommendations through a survey or redacted statements. The collected data is used strictly for these tailored suggestions, ensuring no misuse or distribution.',
    images: [FinancialSurveyImg, BankAccountRedactImg]
  },
  {
    title: 'Personalized Banking, Made Easy',
    description: 'Leverage a personalized bank account comparison, using metrics matched to your financial profile. Factor in projected annual savings for a more informed decision.',
    images: [MetricsComparisonImg, MetricsBreakdownImg]
  },
  {
    title: 'Customized Alerts, Maximized Gains',
    description: 'Personalized notifications, sent via various platforms, alert users to superior savings account options, considering their financial profiles and preferences for notification frequency and platform.',
    images: [NotificationSurveyImg, PhoneNotificationImg]
  },
];

const FeaturesSection = () => {
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const StyledImage = styled('img')({
    width: '70%',
    objectFit: 'contain',
    cursor: 'pointer',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  });

  const handleOpen = (image: string) => () => {
    setModalImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}
    >
      <img src={modalImage} alt="Selected" style={{ width: '100%', objectFit: 'contain' }} />
    </Box>
  );

  return (
    <section id="features" className="features">
      <Container>
        <div className="row" style={{ textAlign: 'center', margin: '100px' }}>
          <Typography variant="h2" sx={{
            color: '#59596a',
            fontFamily: '"Raleway", sans-serif',
            fontSize: '32px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            paddingBottom: '10px',
            position: 'relative',
            margin: '10px'
          }}>
            Features
          </Typography>
          <Divider variant="middle" style={{ display: 'block', margin: '0 auto', height: 2, maxWidth: 60, backgroundColor: '#00b0f5' }} />
          <div className="col-lg-12 pt-4 pt-lg-0" style={{ margin: '30px' }}>
            <Grid container spacing={6}>
              {features.map((feature, index) => (
                <Grid item xs={6} key={index}>
                  <Card sx={{ height: '100%' }} style={{ backgroundColor: '#f0f8ff' }}>
                    <CardContent>
                      <Typography sx={{
                        fontFamily: '"Raleway", sans-serif',
                        fontWeight: 600,
                        margin: '10px 0 15px 0',
                        fontSize: '22px',
                        lineHeight: 1.2
                      }} style={{ color: '#59596a', textAlign: 'center' }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        lineHeight: '24px',
                        fontSize: '14px'
                      }} style={{ textAlign: 'justify' }} paragraph>
                        {feature.description}
                      </Typography>
                    </CardContent>
                    <Carousel>
                    {feature.images.map((image, imageIndex) => (
                      <StyledImage
                        key={imageIndex}
                        src={image}
                        alt={feature.title}
                        onClick={handleOpen(image)}
                        style={{marginLeft: '60px'}}
                      />
                    ))}
                    </Carousel>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {modalBody}
        </Modal>
      </Container>
    </section>
  );
};

// const CarouselSection = () => {
//   const photos = [
//     process.env.PUBLIC_URL + '/teamPicture.jpg',
//     process.env.PUBLIC_URL + '/placeholder.jpeg',
//     process.env.PUBLIC_URL + '/teamPicture.jpg',
//     process.env.PUBLIC_URL + '/placeholder.jpeg',
//     process.env.PUBLIC_URL + '/teamPicture.jpg',
//     process.env.PUBLIC_URL + '/placeholder.jpeg',
//   ];

//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '350px',
//     }}>
//       <Carousel autoplay={true} autoplayInterval={7000} wrapAround={true} style={{ maxWidth: '600px', width: '100%', height: '100%', margin: '20px auto', textAlign: 'center' }}>
//         {photos.map((photo, index) => (
//           <img
//             key={index}
//             src={photo}
//             alt={`Photo${index + 1}`}
//             style={{ maxHeight: '500px', width: '100%', margin: 'auto' }}
//           />
//         ))}
//       </Carousel>
//     </div>
//   );
// };


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
      <FeaturesSection />
      <ProjectSection />
    </Box>
  );
};

export default HomePage;
