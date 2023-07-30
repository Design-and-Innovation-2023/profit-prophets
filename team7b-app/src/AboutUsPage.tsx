// AboutUsPage.tsx
import React from 'react';
import { Typography } from '@mui/material';
import TeamMemberCard from './TeamMemberCard';
import './AboutUsPage.css';

const teamMembers = [
  {
    name: 'Kai En Yong',
    role: 'Software Engineer',
    description: 'Kai En Yong is a talented software engineer with a passion for front-end development.',
    linkedin: 'https://www.linkedin.com/company/the-white-house',
    github: 'https://github.com/iShorty/',
    website: 'https://www.taharkhan.com/',
  },
  {
    name: 'Yan Hern Ryan Sim',
    role: 'Software Engineer',
    description: 'Yan Hern Ryan Sim is a talented software engineer with a passion for front-end development.',
    linkedin: 'https://www.linkedin.com/company/the-white-house',
    github: 'https://github.com/iShorty/',
    website: 'https://www.taharkhan.com/',
  },
  {
    name: 'Shi Ying Nicole Ng',
    role: 'Software Engineer',
    description: 'Shi Ying Nicole Ng is a talented software engineer with a passion for front-end development.',
    linkedin: 'https://www.linkedin.com/company/the-white-house',
    github: 'https://github.com/iShorty/',
    website: 'https://www.taharkhan.com/',
  },
  {
    name: 'Ng Geok Ting',
    role: 'Software Engineer',
    description: 'Ng Geok Ting is a talented software engineer with a passion for front-end development.',
    linkedin: 'https://www.linkedin.com/company/the-white-house',
    github: 'https://github.com/iShorty/',
    website: 'https://www.taharkhan.com/',
  },
  {
    name: 'Enrique Marcelo',
    role: 'Software Engineer',
    description: 'Enrique Marcelo is a talented software engineer with a passion for front-end development.',
    linkedin: 'https://www.linkedin.com/company/the-white-house',
    github: 'https://github.com/iShorty/',
    website: 'https://www.taharkhan.com/',
  },
  {
    name: 'Daycee Li Lyn Lau',
    role: 'Software Engineer',
    description: 'Daycee Li Lyn Lau is a talented software engineer with a passion for front-end development.',
    linkedin: 'https://www.linkedin.com/company/the-white-house',
    github: 'https://github.com/iShorty/',
    website: 'https://www.taharkhan.com/',
  },
];

const AboutUsPage: React.FC = () => {
  return (
    <div className="about-us-page">
      
      <Typography variant="h1" sx={{
          fontFamily: '"Raleway", sans-serif',
          fontSize: '36px',
          lineHeight: '36px',
          fontWeight: 700
          }} style={{ color: '#59596a', margin: '20px'}}>
          About Us - Team 7B
      </Typography>
      
      <Typography variant="body2" sx={{
          fontFamily: '"Open Sans", sans-serif',
          lineHeight: '24px',
          fontSize: '14px',
          margin: '20px'
      }} paragraph>
      If we rename our team, this is where I'd put a short description of our team name. Otherwise, is this paragraph needed..
      </Typography>

      <div className="team-members-container">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;
