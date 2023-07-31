// AboutUsPage.tsx
import { Typography } from '@mui/material';
import TeamMemberCard from './TeamMemberCard';
import './AboutUsPage.css';

const teamMembers = [
  {
    id: 1,
    name: 'Yan Hern Ryan Sim',
    role: 'Software Engineer',
    description: 'Yan Hern Ryan Sim is a talented software engineer with a passion for front-end development.',
    linkedin: 'https://www.linkedin.com/company/the-white-house',
    github: 'https://github.com/iShorty/',
    website: 'https://www.taharkhan.com/',
  },
  {
    id: 2,
    name: 'Ng Geok Ting',
    role: 'Software Engineer',
    description: 'Ng Geok Ting is a talented software engineer with a passion for front-end development.',
    linkedin: 'https://www.linkedin.com/company/the-white-house',
    github: 'https://github.com/iShorty/',
    website: 'https://www.taharkhan.com/',
  },
  {
    id: 3,
    name: 'Enrique Marcelo',
    role: 'Software Engineer',
    description: 'Enrique Marcelo is a talented software engineer with a passion for front-end development.',
    linkedin: 'https://www.linkedin.com/company/the-white-house',
    github: 'https://github.com/iShorty/',
    website: 'https://www.taharkhan.com/',
  },
  {
    id: 4,
    name: 'Shi Ying Nicole Ng',
    role: 'Software Engineer',
    description: 'Shi Ying Nicole Ng is a talented software engineer with a passion for front-end development.',
    linkedin: 'https://www.linkedin.com/company/the-white-house',
    github: 'https://github.com/iShorty/',
    website: 'https://www.taharkhan.com/',
  },
  {
    id: 5,
    name: 'Kai En Yong',
    role: 'Software Engineer',
    description: 'Kai En Yong is a talented software engineer with a passion for front-end development.',
    linkedin: 'https://www.linkedin.com/company/the-white-house',
    github: 'https://github.com/iShorty/',
    website: 'https://www.taharkhan.com/',
  },
  {
    id: 6,
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
      Hello! We are Team 7B, comprising of Kai En Yong, Yan Hern Ryan Sim, Shi Ying Nicole Ng, Ng Geok Ting, Enrique Carlos Marcelo and Daycee Li Lyn Lau. 
      Thank you for your interest in our work and us! The main person of contact for this project is Ryan Sim. 
      If you'd like to contact any of us individually, our personal links are below.
      <br />
      <br />
      We would also like to mention our client, Gregory Peters from Barclays for giving us the opportunity to work on this Saving Rate Chaser project, and our professor Jonathan Grizou for teaching us over these past few weeks. 
      This team would not have a purpose without either of them, so thank you!
      </Typography>
      
      <div className="team-members-container">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            member={member} 
            id={index + 1}
          />
        ))}
      </div>

      {/* <div className="team-members-container">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} id={index + 1} />
        ))}
      </div> */}
    </div>
  );
};

export default AboutUsPage;
