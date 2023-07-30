import { Container, Divider, Typography } from '@mui/material';
import TwoColumnLayout from './TwoColumnLayout';


const ProudMomentsPage = () => {
  return (
    <div style={{backgroundColor: '#ededed', minHeight: '100vh'}}>
      
        {/* Content for Requirement Gathering */}
        <Container>
            <div className="position-relative" style={{ textAlign: 'left'}}>

            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
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
            Our team consists of six individuals, each bringing their unique skill sets and perspectives. At the outset, we faced the obstacle of varying degrees of familiarity with one another and the project. However, we recognized the importance of cohesive teamwork and swiftly focused on building strong communication and rapport among team members. With a clear understanding of our strengths and weaknesses, we embarked on our ambitious project with determination and a shared commitment to success.
            </Typography>
            
            {/* <Typography variant="h2" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '32px',
                lineHeight: '32px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Obstacles and Solutions
            </Typography> */}

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
                  Our team consists of six individuals, each bringing their unique skill sets and perspectives. At the outset, we faced the obstacle of varying degrees of familiarity with one another and the project. 
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
                However, we recognized the importance of cohesive teamwork and swiftly focused on building strong communication and rapport among team members. With a clear understanding of our strengths and weaknesses, we embarked on our ambitious project with determination and a shared commitment to success.
                </Typography>
            }
            />
            

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
                  Our Overseas Immersion Programme (OIP) spans from the 13th of July to the 5th of August. However, our classes commence on the 18th of July, and it's only on the 19th that we will have our first meeting with our client, Mr. Gregory Peters. With the OIP exhibition in sight, we find ourselves with a mere 9 working days to handle crucial tasks like gathering functional and non-functional requirements from the client, conducting in-depth research, designing the concept, and creating a prototype.
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
                Thankfully, being a team of 6 allows us to efficiently distribute the workload. By leveraging our strengths and expertise, we can divide responsibilities and efficiently tackle challenges despite a short time frame. To make the most of the limited time available, we set clear and achievable goals. This approach ensures that each team member knows their role, allowing us to maintain focus and make significant progress within the given time constraints. 
                </Typography>
              </div>
            }
            />


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
                  One of the significant obstacles we faced during the project was dealing with hazy design requirements. With Barclays as our client, we were tasked with designing an application to help individuals maximise their savings by streamlining the process of transferring funds between accounts, ensuring it is convenient for use. There are also other considerations, such as aggregating savings rates from various types of bank accounts, ranking
                  them based on the highest interest rates available to customers, and even more that we would find in preliminary research before meeting our client. As the initial specifications lacked specificity, we found ourselves in a challenging position to determine precisely what the client wanted and needed for their project.
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
                To address this challenge, we adopted a proactive and communicative approach by a comprehensive list of questions to discuss with the client. By asking thoughtful questions and involving them in the design process, we could gain additional insights into their objectives and concerns. One such concern is the cost of living crisis in the UK. If our concept could serve to help people maximise their savings, it is vital we do so. This kind of insights and discussions ensured that their evolving preferences and requirements were properly understood and integrated. 
                Additionally, we took the initiative to present our design concepts at client meetings. This allowed us to receive timely feedback from the client and validate whether our solutions aligned with their expectations. 
                </Typography>
              </div>
            }
            />


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
                  Another significant hurdle is our lack of familiarity with the savings accounts offered by the (very) numerous banks an individual could sign up for. Thus, this meant that for our design whos' key feature is the savings account comparison concept to enable users to easily understand how their account(s) compare to a suggested/chosen savings account, we needed to conduct thorough research to understand the essential metrics required to effectively evaluate and compare different savings accounts offered by various banks. Additionally, we were also unaware of the legal considerations that might be relevant to our concept, which further complicated our approach.
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
                To ensure compliance with legal requirements, we took a safety-first approach. Despite not being law students, we researched the UK government websites and examined the relevant legislations applicable to savings accounts. While navigating the complexities of legal jargon, we strived to comprehend and interpret the information to the best of our abilities. When in doubt, we conferred with our client, and if needed defaulted to what we found were industry standards for applications that interface with banks and savings accounts.
                </Typography>
              </div>
            }
            />


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
