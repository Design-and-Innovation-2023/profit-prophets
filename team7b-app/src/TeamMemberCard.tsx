import React from 'react';
import { Container, Divider, Typography } from '@mui/material';
import TwoColumnLayout from './TwoColumnLayout';
import LinkedInLogo from './assets/LI-In-Bug.png';
import GithubLogoDark from './assets/github-mark.png';
import GlobeIcon from './assets/globe.png';
import './TeamMemberCard.css';
import { Height } from '@mui/icons-material';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


export interface TeamMember {
    id: number;
    name: string;
    role: string;
    description: string;
    linkedin?: string;
    github?: string;
    website?: string;
  }
  
  interface TeamMemberCardProps {
    member: TeamMember;
    id: number;
  }
  
  const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, id }) => {
    return (
      <div className="team-member-card" data-card-id={id}>
        
          <div style={{ flex: 1 }}>
            {/* Left Content */}
            <div>
              <Typography variant="body1" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '28px',
                fontSize: '18px',
                marginLeft: '20px',
                marginTop: '20px'
              }} paragraph>
              {member.name}
              </Typography>

              <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                marginLeft: '20px',
                fontStyle: 'italic'
              }} paragraph>
              {member.role}{id === 1 ? ", Main Point of Contact" : null}
              </Typography>

              <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
              }} paragraph>
              {member.description}
              </Typography>
            </div>

          </div>

          <Divider orientation="vertical" flexItem />

          <div style={{ flex: 1 }}>
            
            <div className='right-content'>
                <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" className="team-member-card-portrait" />
                <div className="social-links" >
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInLogo} alt="Logo" className="team-member-card-icon" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <img src={GithubLogoDark} alt="Logo" className="team-member-card-icon" />
                      </a>
                    )}
                    {member.website && (
                      <a href={member.website} target="_blank" rel="noopener noreferrer">
                        <img src={GlobeIcon} alt="Logo" className="team-member-card-icon" />
                      </a>
                    )}
                </div>
            </div>
            
          </div>

      </div>
    );
  };
  
  export default TeamMemberCard;