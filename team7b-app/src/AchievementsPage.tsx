import * as React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TwoColumnLayout from './TwoColumnLayout';
import './AchievementsPage.css';
import TeamPhoto from './assets/team-picture.jpg';
import TeamworkIcon from './assets/teamwork-icon.jpg';
import HourglassPic from './assets/hourglass-running-out.jpg';
import SavingsAcctPic from './assets/savings-account.jpg';
import RequirementsPic from './assets/requirements.jpg';
import HappyClientPic from './assets/happy-client.png';
import PosterPic from './assets/poster.png';
import { width } from '@mui/system';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}



const AchievementsPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        style={{paddingLeft: '15px', paddingTop: '15px'}}
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          minWidth: '200px',
          '& .MuiTabs-flexContainer': {
            '& button': {
              '&:hover': {
                color: '#00b0f4', // Text color on hover
                backgroundColor: '#fff', // Tab background color on hover
              },
            },
            '& .Mui-selected': {
              color: '#00b0f4', // Selected tab text color
              backgroundColor: '#fff', // Selected tab background color
            },
          },
        }}
      >
        <Tab label="Proud Moments" {...a11yProps(0)} />
        <Tab label="Poster" {...a11yProps(1)} />
        {/* <Divider variant="middle" style={{display: 'block', height: 0.1, maxWidth: 210, backgroundColor: '#59596a'}}/> */}
        {/* <Tab label="Weekly Pitch Videos" {...a11yProps(4)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Container>
          <div className='proud-moments-page'>
            <div className="position-relative" style={{ textAlign: 'left'}}>

              <Container>
                <Typography variant="h1" sx={{
                    fontFamily: '"Raleway", sans-serif',
                    fontSize: '36px',
                    lineHeight: '36px',
                    fontWeight: 700,
                    }} style={{ color: '#59596a'}}>
                    Our Journey: Overcoming Challenges and Achieving Success
                </Typography>
                <Divider variant="fullWidth" style={{ width: '100%', height: 2, backgroundColor: '#00b0f5'}}/>
              </Container>

              <Typography variant="body2" sx={{
                  fontFamily: '"Open Sans", sans-serif',
                  lineHeight: '24px',
                  fontSize: '14px',
                  margin: '20px'
              }} paragraph>
              This page documents the obstacles we faced throughout this project, and the solutions to overcome them.
              </Typography>

              <div className="proud-moments-card">
                <Typography variant="h3" sx={{
                    fontFamily: '"Raleway", sans-serif',
                    fontSize: '28px',
                    lineHeight: '28px',
                    fontWeight: 700
                }} style={{ color: '#59596a', margin: '20px' }}>
                    Teammates, New and Old
                </Typography>
                <TwoColumnLayout
                    leftContent={
                      <div style={{ display: 'flex', flexDirection: 'column'}}>
                          <img src={TeamPhoto} alt="Team" style={{ maxHeight: '322px', marginLeft: '20px', marginRight: '20px', flex: 1 }} />
                            <Typography variant="body2" sx={{
                              fontFamily: '"Open Sans", sans-serif',
                              lineHeight: '24px',
                              fontSize: '14px',
                              margin: '20px'
                            }} paragraph>
                            Our team consists of six individuals, each bringing their unique skill sets and perspectives. At the outset, we faced the obstacle of varying degrees of familiarity with one another.
                            </Typography>
                        </div>
                    }
                    rightContent={
                      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '430px', marginLeft: '40px'}}>
                          <img src={TeamworkIcon} alt="Team" style={{ maxHeight: '322px', flex: 1 }} />
                          <Typography variant="body2" sx={{
                              fontFamily: '"Open Sans", sans-serif',
                              lineHeight: '24px',
                              fontSize: '14px',
                              margin: '20px',
                              flex: '1',
                          }} paragraph>
                              We know the importance of cohesive teamwork and swiftly focused on establishing clear means of communication and rapport among each other. With a clear understanding of our mindsets, we embarked on our ambitious project with determination and a shared commitment to success.
                          </Typography>
                      </div>
                    }
                />
              </div>

              <div className="proud-moments-card-narrow">
                    
                    <Typography variant="h3" sx={{
                            fontFamily: '"Raleway", sans-serif',
                            fontSize: '28px',
                            lineHeight: '28px',
                            fontWeight: 700
                            }} style={{ color: '#59596a'  , margin: '20px'}}>
                            Short Timeframe
                    </Typography>

                    <Typography variant="body2" sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        lineHeight: '24px',
                        fontSize: '14px',
                        margin: '20px'
                      }} paragraph>
                      Our Overseas Immersion Programme (OIP) spans from July 13th to August 5th. However, our classes commence on July 18th, and it would be only on the 19th that we will have our first meeting with our client, Mr. Gregory Peters. With the OIP exhibition fast approaching, we would have a mere 9 working days to handle crucial tasks like gathering functional and non-functional requirements from the client, conducting research, concept design and prototyping.
                    </Typography>

                    <img src={HourglassPic} alt="NoTime" style={{width: '50%', flex: 1 }} />

                    <Typography variant="body2" sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        lineHeight: '24px',
                        fontSize: '14px',
                        margin: '20px'
                    }} paragraph>
                    Thankfully, being a team of six allows us to efficiently distribute the workload. By leveraging our strengths and expertise, we assigned roles and responsibilities that allowed us to navigate the challenges effectively, despite the tight schedule. We set precise and attainable goals, which kept us aligned and focused, and helped us make significant headway within our time limitations.
                    </Typography>
                  
                  {/* </div> */}
                  
              </div>
              <div className="proud-moments-card">
                <Typography variant="h3" sx={{
                        fontFamily: '"Raleway", sans-serif',
                        fontSize: '28px',
                        lineHeight: '28px',
                        fontWeight: 700
                        }} style={{ color: '#59596a'  , margin: '20px'}}>
                        Unclear Design Requirements
                </Typography>
                    
                <TwoColumnLayout
                  leftContent={
                    <div style={{ display: 'flex', flexDirection: 'column', placeItems: 'center'}}>

                      <img src={RequirementsPic} alt="Requirements" style={{ filter: 'blur(5px)', width: '50%' }} />

                      <Typography variant="body2" sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        lineHeight: '24px',
                        fontSize: '14px',
                        margin: '20px'
                      }} paragraph>
                      One of the significant obstacles we faced during the project was dealing with hazy design requirements. With Barclays as our client, we were tasked with designing an application to help individuals maximise their savings and ensure it is convenient for use. With numerous considerations even prior to meeting Mr Peters and the initial specifications lacking in specificity, we found ourselves in a challenging position to determine precisely what the client wanted and needed for their project.
                      </Typography>

                    </div>
                }

                  rightContent={
                  <div style={{ display: 'flex', flexDirection: 'column', placeItems: 'center'}}>

                    <img src={HappyClientPic} alt="Requirements" style={{ width: '50%' }} />

                    <Typography variant="body2" sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        lineHeight: '24px',
                        fontSize: '14px',
                        margin: '20px'
                    }} paragraph>
                    However, we take pride in the solution we devised to overcome this challenge. We developed an exhaustive list of queries to clarify the project's scope during our meetings with the client. By engaging them actively in the design process, we uncovered their primary concerns and objectives, such as the UK's cost of living crisis. Our proactive approach included presenting our design concepts during these meetings, which provided us with immediate feedback and helped us ensure our designs met their expectations.
                    </Typography>
                  </div>
                }
              />
              </div>
              <div className="proud-moments-card-narrow">

                <Typography variant="h3" sx={{
                  fontFamily: '"Raleway", sans-serif',
                        fontSize: '28px',
                        lineHeight: '28px',
                        fontWeight: 700
                      }} style={{ color: '#59596a'  , margin: '20px'}}>
                        Savings Accounts, Comparison Metrics, and the Law
                </Typography>
                                    
                <Typography variant="body2" sx={{
                    fontFamily: '"Open Sans", sans-serif',
                    lineHeight: '24px',
                    fontSize: '14px',
                    margin: '20px'
                  }} paragraph>
                  Another significant hurdle is our lack of familiarity with the numerous banks and their savings accounts, which was vital to our design. To create the key savings account comparison tool in our design, we conducted extensive research on the essential metrics required to evaluate and compare different accounts. We alse faced additional complexity due to unfamiliarity with relevant legal considerations.
                </Typography>

                <img src={SavingsAcctPic} alt="PiggyBank" style={{ width: '50%', flex: 1 }}/>

                <Typography variant="body2" sx={{
                    fontFamily: '"Open Sans", sans-serif',
                    lineHeight: '24px',
                    fontSize: '14px',
                    margin: '20px'
                  }} paragraph>
                  To comply with legal requirements, we prioritized safety. We researched the UK government websites and relevant legislations for savings accounts, striving to understand the complex legal jargon. When in doubt, we consulted with our client, and followed industry standards for bank and savings account applications. Our team takes pride in how we addressed these complexities and came up with solutions that complied with the law.
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Content for Roadshow */}
        <Container>
            <div className="position-relative" style={{ textAlign: 'left'}}>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Poster
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <img src={PosterPic} alt="Team" style={{ width: '100%', maxWidth: '500px', marginLeft: '20px', marginRight: '20px'}} />
            </div>
        </Container>
      </TabPanel>
    </Box>

  );
};

export default AchievementsPage;
