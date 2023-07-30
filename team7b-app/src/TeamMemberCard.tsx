import React from 'react';
import { Container, Divider, Typography } from '@mui/material';
import TwoColumnLayout from './TwoColumnLayout';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


interface TeamMember {
    name: string;
    role: string;
    description: string;
    linkedin?: string;
    github?: string;
    website?: string;
  }
  
  interface TeamMemberCardProps {
    member: TeamMember;
  }
  
  const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
    return (
      <div className="team-member-card">
              
              <TwoColumnLayout
              leftContent={
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
                  }} paragraph>
                  {member.role}
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
            }

              rightContent={
                <div>
                    <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '80%', maxWidth: '600px', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}} />
                    <div className="social-links">
                        {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '20%', maxWidth: '80px', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}} />
                        </a>
                        )}
                        {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '20%', maxWidth: '80px', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}} />
                        </a>
                        )}
                        {member.website && (
                        <a href={member.website} target="_blank" rel="noopener noreferrer">
                            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '20%', maxWidth: '80px', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}} />
                        </a>
                        )}
                    </div>
                </div>
            }
            />
      </div>
    );
  };
  
  export default TeamMemberCard;