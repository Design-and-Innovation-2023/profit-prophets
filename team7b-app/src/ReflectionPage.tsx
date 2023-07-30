import { Box, Container, Divider, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
// import videoFile from './path/to/your/video.mp4';


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

export default function ProjectJourneyPage() {
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
        <Tab label="Requirement Gathering" {...a11yProps(0)} />
        <Tab label="Prototyping" {...a11yProps(1)} />
        <Tab label="Refinement" {...a11yProps(2)} />
        <Tab label="Roadshow" {...a11yProps(3)} />
        <Divider variant="middle" style={{display: 'block', height: 0.1, maxWidth: 210, backgroundColor: '#59596a'}}/>
        <Tab label="Weekly Pitch Videos" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* Content for Requirement Gathering */}
            <Container>
            <div className="position-relative" style={{ textAlign: 'left'}}>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                18th - 19th July
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 1 - 18th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            Populate with dailies, maybe summarise or rephrase in more of a reflection format.
            </Typography>
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 2 - 19th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            Populate with dailies, maybe summarise or rephrase in more of a reflection format.
            </Typography>
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
            </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Content for Prototyping */}
        <Container>
            <div className="position-relative" style={{ textAlign: 'left'}}>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                18th - 19th July
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 1 - 18th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            Populate with dailies, maybe summarise or rephrase in more of a reflection format.
            </Typography>
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 2 - 19th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            Populate with dailies, maybe summarise or rephrase in more of a reflection format.
            </Typography>
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
            </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Content for Refinement */}
        <Container>
            <div className="position-relative" style={{ textAlign: 'left'}}>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                18th - 19th July
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 1 - 18th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            Populate with dailies, maybe summarise or rephrase in more of a reflection format.
            </Typography>
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 2 - 19th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            Populate with dailies, maybe summarise or rephrase in more of a reflection format.
            </Typography>
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
            </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/* Content for Roadshow */}
        <Container>
            <div className="position-relative" style={{ textAlign: 'left'}}>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                18th - 19th July
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 1 - 18th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            Populate with dailies, maybe summarise or rephrase in more of a reflection format.
            </Typography>
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 2 - 19th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            Populate with dailies, maybe summarise or rephrase in more of a reflection format.
            </Typography>
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
            </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={4}>
        {/* Content for Weekly Pitch Videos */}
        <Container>
            <div className="position-relative" style={{ textAlign: 'left'}}>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Week 1
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                18th - 21st July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            </div>
            {/* <video controls>
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            Brief explanation / summary of video.
            </Typography>
        </Container>
        <Container>
            <div className="position-relative" style={{ textAlign: 'left'}}>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Week 2
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                24th - 28th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            </div>
            {/* <video controls>
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            Brief explanation / summary of video.
            </Typography>
        </Container>
        <Container>
            <div className="position-relative" style={{ textAlign: 'left'}}>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Week 3
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                31st July - 4th August
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            </div>
            {/* <video controls>
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            Brief explanation / summary of video.
            </Typography>
        </Container>
      </TabPanel>
    </Box>
  );
}