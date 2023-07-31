import { Container, Divider, Typography } from '@mui/material';
import TwoColumnLayout from './TwoColumnLayout';
import './ProudMomentsPage.css';


const ProudMomentsPage = () => {
  return (
    <div className='proud-moments-page'>
      
        <Container>
            <div className="position-relative" style={{ textAlign: 'left'}}>

            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700,
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Our Journey: Overcoming Challenges, Achieving Success
            </Typography>

            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>

            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            This page documents the obstacles we faced throughout this project, and the solutions to overcome them.
            </Typography>
            
            {/* <Typography variant="h2" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '32px',
                lineHeight: '32px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Obstacles and Solutions
            </Typography> */}

            <div className="proud-moments-card">
              <Typography variant="h3" sx={{
                      fontFamily: '"Raleway", sans-serif',
                      fontSize: '28px',
                      lineHeight: '28px',
                      fontWeight: 700
                      }} style={{ color: '#59596a'  , margin: '20px'}}>
                      Obstacle/Solution Header
              </Typography>
                  
              <TwoColumnLayout
                leftContent={
                  <div>

                    {/* <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '80%', maxWidth: '600px', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}} /> */}

                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px',
                      margin: '20px'
                    }} paragraph>
                    Obstacle Text
                    </Typography>
                  </div>
              }

                rightContent={
                <div>
                  <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px',
                      margin: '20px'
                  }} paragraph>
                  Solution Text
                  </Typography>
                </div>
              }
            />
            </div>
            <div className="proud-moments-card">
              <Typography variant="h3" sx={{
                      fontFamily: '"Raleway", sans-serif',
                      fontSize: '28px',
                      lineHeight: '28px',
                      fontWeight: 700
                      }} style={{ color: '#59596a'  , margin: '20px'}}>
                      Teammates, New and Old
            </Typography>
            
              <TwoColumnLayout
                leftContent={
                  <div>

                    {/* <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '80%', maxWidth: '600px', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}} /> */}

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
                  <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px',
                      margin: '20px'
                  }} paragraph>
                  We know the importance of cohesive teamwork and swiftly focused on establishing clear means of communication and rapport among each other. With a clear understanding of our mindsets, we embarked on our ambitious project with determination and a shared commitment to success.
                  </Typography>
              }
              />
            
            </div>
            <div className="proud-moments-card">
              <Typography variant="h3" sx={{
                      fontFamily: '"Raleway", sans-serif',
                      fontSize: '28px',
                      lineHeight: '28px',
                      fontWeight: 700
                      }} style={{ color: '#59596a'  , margin: '20px'}}>
                      Short Timeframe
              </Typography>
                  
              <TwoColumnLayout
                leftContent={
                  <div>

                    {/* <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '80%', maxWidth: '600px', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}} /> */}

                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px',
                      margin: '20px'
                    }} paragraph>
                    Our Overseas Immersion Programme (OIP) spans from July 13th to August 5th. However, our classes commence on July 18th, and it would be only on the 19th that we will have our first meeting with our client, Mr. Gregory Peters. With the OIP exhibition fast approaching, we would have a mere 9 working days to handle crucial tasks like gathering functional and non-functional requirements from the client, conducting research, concept design and prototyping.
                    </Typography>
                  </div>
              }

                rightContent={
                <div>
                  <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px',
                      margin: '20px'
                  }} paragraph>
                  Thankfully, being a team of six allows us to efficiently distribute the workload. By leveraging our strengths and expertise, we can divide responsibilities and efficiently tackle challenges despite a short time frame. We also set clear and achievable goals to ensures that each team member knows their role. This allowed us to maintain focus and make significant progress within the given time constraints.
                  </Typography>
                </div>
              }
            />
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
                  <div>

                    {/* <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '80%', maxWidth: '600px', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}} /> */}

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
                <div>
                  <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px',
                      margin: '20px'
                  }} paragraph>
                  To address this challenge, we adopted a proactive and communicative approach with a comprehensive list of questions to discuss with the client. By asking thoughtful questions and involving them in the design process, we learned about their objectives and concerns, such as the cost of living crisis in the UK. Additionally, we took the initiative to present our design concepts at client meetings. This allowed us to receive timely feedback from the client and validate whether our solutions aligned with their expectations.
                  </Typography>
                </div>
              }
            />
            </div>
            <div className="proud-moments-card">
              <Typography variant="h3" sx={{
                      fontFamily: '"Raleway", sans-serif',
                      fontSize: '28px',
                      lineHeight: '28px',
                      fontWeight: 700
                      }} style={{ color: '#59596a'  , margin: '20px'}}>
                      Savings Accounts, Comparison Metrics, and the Law
              </Typography>
                  
              <TwoColumnLayout
                leftContent={
                  <div>

                    {/* <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '80%', maxWidth: '600px', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}} /> */}

                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px',
                      margin: '20px'
                    }} paragraph>
                    Another significant hurdle is our lack of familiarity with the numerous banks and their savings accounts, which was vital to our design. To create the key savings account comparison tool in our design, we conducted extensive research on the essential metrics required to evaluate and compare different accounts. We alse faced additional complexity due to unfamiliarity with relevant legal considerations.
                    </Typography>
                  </div>
              }

                rightContent={
                <div>
                  <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px',
                      margin: '20px'
                  }} paragraph>
                  To comply with legal requirements, we prioritized safety. We researched the UK government websites and relevant legislations for savings accounts, striving to understand the complex legal jargon. When in doubt, we consulted with our client, and followed industry standards for bank and savings account applications.
                  </Typography>
                </div>
              }
            />
            </div>
            <div className="proud-moments-card">
              <Typography variant="h3" sx={{
                      fontFamily: '"Raleway", sans-serif',
                      fontSize: '28px',
                      lineHeight: '28px',
                      fontWeight: 700
                      }} style={{ color: '#59596a'  , margin: '20px'}}>
                      Figma designs?
              </Typography>
                  
              <TwoColumnLayout
                leftContent={
                  <div>

                    {/* <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '80%', maxWidth: '600px', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}} /> */}

                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px',
                      margin: '20px'
                    }} paragraph>
                    Obstacle Text
                    </Typography>
                  </div>
              }

                rightContent={
                <div>
                  <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px',
                      margin: '20px'
                  }} paragraph>
                  Solution Text
                  </Typography>
                </div>
              }
            />
            </div>
            <div className="proud-moments-card">
              <Typography variant="h3" sx={{
                      fontFamily: '"Raleway", sans-serif',
                      fontSize: '28px',
                      lineHeight: '28px',
                      fontWeight: 700
                      }} style={{ color: '#59596a'  , margin: '20px'}}>
                      Website?
              </Typography>
                  
              <TwoColumnLayout
                leftContent={
                  <div>

                    {/* <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '80%', maxWidth: '600px', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}} /> */}

                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px',
                      margin: '20px'
                    }} paragraph>
                    Obstacle Text
                    </Typography>
                  </div>
              }

                rightContent={
                <div>
                  <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px',
                      margin: '20px'
                  }} paragraph>
                  Solution Text
                  </Typography>
                </div>
              }
            />
            </div>
            <div className="proud-moments-card">
              <Typography variant="h3" sx={{
                      fontFamily: '"Raleway", sans-serif',
                      fontSize: '28px',
                      lineHeight: '28px',
                      fontWeight: 700
                      }} style={{ color: '#59596a'  , margin: '20px'}}>
                      Poster?
              </Typography>
                  
              <TwoColumnLayout
                leftContent={
                  <div>

                    {/* <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '80%', maxWidth: '600px', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}} /> */}

                    <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px',
                      margin: '20px'
                    }} paragraph>
                    Obstacle Text
                    </Typography>
                  </div>
              }

                rightContent={
                <div>
                  <Typography variant="body2" sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '24px',
                      fontSize: '14px',
                      margin: '20px'
                  }} paragraph>
                  Solution Text
                  </Typography>
                </div>
              }
            />
            </div>
            


            

            


            


            


            

            


            

            <Typography variant="h3" sx={{
                      fontFamily: '"Raleway", sans-serif',
                      fontSize: '28px',
                      lineHeight: '28px',
                      fontWeight: 700
                      }} style={{ color: '#59596a'  , margin: '20px'}}>
                      Conclusion Header?
            </Typography>
<img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="Logo" style={{ width: '80%', maxWidth: '600px', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}} />
            <Typography variant="body2" sx={{
              fontFamily: '"Open Sans", sans-serif',
              lineHeight: '24px',
              fontSize: '14px',
              margin: '20px'
            }} paragraph>
            Conclusion text
            </Typography>

            </div>
        </Container>
    </div>
  );
};

export default ProudMomentsPage;
