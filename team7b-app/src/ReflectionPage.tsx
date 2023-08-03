import { Box, Container, Divider, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import conceptualizationImg from './assets/conceptualization.png'; 
import TeamContractPDF from './assets/team-contract.pdf';

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
        style={{ paddingLeft: '15px', paddingTop: '15px' }}
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
        <Tab label="Team Contract" {...a11yProps(0)} />
        <Tab label="Requirement Gathering" {...a11yProps(1)} />
        <Tab label="Prototyping" {...a11yProps(2)} />
        <Tab label="Refinement" {...a11yProps(3)} />
        <Tab label="Roadshow" sx={{ borderBottom: 1, borderColor: 'divider' }} {...a11yProps(4)} />
        {/* Divider between Roadshow and Team Dailies */}
        <Tab label="Team Dailies" {...a11yProps(5)} />
        <Tab label="Weekly Pitch Videos" {...a11yProps(6)} />
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
                Team Contract
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            {/* Embedding PDF file */}
            <embed 
                src={TeamContractPDF}
                type="application/pdf" 
                style={{width: '400%', height: '600px'}}/>
          </div>
        </Container>
      </TabPanel>

      <TabPanel value={value} index={1}>
        {/* Content for Requirement Gathering */}
        <Container>
            <div className="position-relative" style={{ textAlign: 'left'}}>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Requirements Gathering
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                18th July 2023
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
      The team studied the concept of mental models and their influence on perception and association. This learning was particularly relevant to our product design process, particularly in understanding how our target users perceive the affordances of the user interface. <br/><br/>

      The concept of mental models also resonated with our internal and external communication processes. Since every team member and partner comes from diverse backgrounds with distinct mental models, understanding these differences and aligning them towards a common goal is vital. We employ a transparent approach, ensuring everyone is on the same page about our shared objectives.

      To streamline communication with our partners and avoid misinterpretation, we devised a Behavior Driven Development Model. Rather than focusing on distinct features, we centred our approach on the expected behavior of the final product. We used Google Jamboard for collaborative brainstorming and integrated a large language model to assess the quality of our questions critically.

      <br/><br/>

      Our next steps include meeting our partners to gather requirements, scope, and intended behaviors. Afterwards, we will collaboratively decide on the direction of our first prototype and allocate tasks accordingly.
            </Typography>
            <img src={conceptualizationImg} alt="dailies image" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
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
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
            </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
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
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
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
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
            </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={3}>
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
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
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
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
            </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={4}>
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
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
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
            <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
            </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={5}>
        {/* Content for Team Dailies */}
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
                Day 1 - 18th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Today we learnt about mental models and how it affects how we associate and percieve items, images and concepts. It was insighful as we felt that it could be applied to our product design too as we need to dertermine what our intended users percieve the user interface control to perform. I believe the actual term for it should be affordance of the interface.

              <br></br><br></br>As a team, its somehow applicable to how we communicate internally and externally too as we each have different mental models, especially with the partners as they have different backgrounds from us and may not have the same understanding as we do. Even within the team we also have differnt perceptions on how we should solve the idea or what the actual problem might be, as such we take steps to align everyone onto the same goal by building a common undertsanding. By figuratively laying all the cards in the table, we ensure that all our team members are alligned towards the common goal.

              <br></br><br></br>To ensure that we are aligned with the partners on the requirements and to avoid any miscommunications, we conceptulized the questions that we intend to ask them using a Behaviour Driven Development Model where we focus not on features but the behaviour of the final product as coming form a different land, a certain feature may mean to us something radically different, wherehas, understanding the scenario and behaviours that the product should have will simplify things and align our mental models. Using jamboard, we collabratively placed questions on the various scenarios that a user may face and added on some technical questions to establish the non functional requirements of the partner, furthermore, we attempted to ensure that our questions are meaningful by having a large language model emulate the partner and critically evaluate the questions we were posting to them.

              <br></br><br></br>Ending off the day, we cemented our commitment to the project by establishing a teamwork contract on the principles of equal work disrtubution and contribution, open commuication and mutual respect. By establishing the contract, we hope that it encourages commitment to the project, a non-judgemental and free space to share ideas and a framework to resolve any potential conflict.

              <br></br><br></br>Tomorrow, we will meet the partners to obtain the requirements, scope and intented behaviours, followed by coming together as a group to decide on the direction of the first prototype and splitting the work for it.
            </Typography>
            <img src={process.env.PUBLIC_URL + '/BDD-Jamboard.png'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', margin: '20px'}} />
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
              Today we met the partner to understand the problem from their perspective and the various considerations that we need to account before heading into the prototyping stage to develop a comprehensive and feasible product.

              <br></br><br></br>Despite reading the project brief in depth, we realized that our perception of the project differs slightly for the partner. We believed that they wanted a product that compares the saving rates across various Barclays products and perform automatic transfer between them, whereas they were looking for a product that can help with people facing cost of living issues as inflation is increasing in the UK and they want to help them find the optimal product offering to save money. Ensuring that we utilize our time with the partner efficiently, we attempted to align our mental models about the problem by utilizing our scenario based questions that we conceptualized yesterday with the assistance of the LLM to gain a better understanding on their expectations and priorities on the project which is about the comparison of the various banks offerings and finding the most optimal choice for a given user based on metrics such as flat interest rate, fees, amount available, withdrawal limits, etc. While talking to the partner, we felt the idea of automatically creating and transferring savings of a user’s bank account was not extremely feasible as there lies the issue of consent, especially when working with the life savings of the user and the partner agreed that it too should be considered. Heading further into the conversation, we picked up the fact that every user has their unique financial needs and profiles and as such, what’s optimal for user A may not be optimal for user B and this is something our product needs to account for.

              <br></br><br></br>Heading back for the feedback session, we learnt about the feedback model where after some retrospectives, the feedback that I have been providing to others in the past were definitely not assertive in nature but typically more suggestive which may not be the most constructive for those receiving them. Moving forward, when providing feedback, we will work towards justifying our suggestions with either experience, research or information we’ve learnt to ensure that it’s constructive and provides a direction for those receiving it.

              <br></br><br></br>Tomorrow, the team will come together to continue researching what metrics for the various financial profiles and look into finding further pain points for the various user groups that exist.
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 3 - 20th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Today has been a productive day as our team has been diligently working on creating and ranking metrics for customers to compare savings accounts effectively. We understand that helping users make informed decisions when it comes to their savings is crucial, and we want to ensure our product optimally meets their needs.

              <br></br><br></br>To start off, we conducted thorough research to identify the key metrics that customers consider while choosing a savings account. We studied existing websites that compare bank accounts, analyzed different types of savings accounts available, and reviewed open banking principles to gain valuable insights.

              <br></br><br></br>Based on our research, we’ve identified several essential metrics for comparing savings accounts, and with these metrics in mind, we’re now in the process of ranking their importance to users. This could be done through surveys and interviews to understand which metrics customers value the most when making decisions about their savings accounts. This user-centric approach will guide us in creating a well-rounded and user-friendly product.

              <br></br><br></br>A snippet of the key metrics identified by the team include:
              <ol>
                <li><strong>Interest Rate:</strong> The interest rate offered by each savings account is critical, as it directly impacts the potential returns for users.</li>
                <li><strong>Eligibility Requirements:</strong> Age, residency, minimum initial deposit, and minimum/maximum balance requirements are important considerations for customers looking to open a new account.</li>
                <li><strong>Fees:</strong> We’re exploring different fees, such as maintenance fees, withdrawal fees, overdraft fees, and inactivity fees, as they can significantly impact the overall returns.</li>
                <li><strong>Tax Implications:</strong> Understanding the income tax and capital gains tax implications can help customers evaluate the after-tax returns on their savings.</li>
                <li><strong>Accessibility:</strong> We’re looking into how easily users can access their funds through web and mobile applications, physical branches, or by post, and if there are any limitations on transactions or withdrawals.</li>
                <li><strong>Account Closure Requirements:</strong> Considering whether there are any restrictions or penalties on early closures or withdrawals from certain accounts.</li>
                <li><strong>Cashback Aspects:</strong> While cashback features are not typical for savings accounts, we’re exploring any potential rewards or incentives offered by the banks.</li>
                <li><strong>Open Banking Integration:</strong> We’re investigating whether the savings accounts can be integrated with other financial apps or services for a more comprehensive financial management experience.</li>
                <li><strong>Customer Support:</strong> Ensuring that quality customer support is provided, as it can impact user trust and satisfaction.</li>
              </ol>
              
              Additionally, we’ve started working on prototypes for both the web and phone application versions of our product using Figma. The prototypes will help us visualize the user interface and user experience, allowing us to gather feedback early on and make necessary improvements before proceeding with the full development.

              <br></br><br></br>The following is a work-in-progress Figma prototype recently started by the team:
            </Typography>
            <img src={process.env.PUBLIC_URL + '/figmaprototype1.jpg'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', marginLeft: '20px'}} />
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Tomorrow, we’ll continue refining our metric ranking, gather user feedback on our prototypes, and move forward with the next steps of the design phase. We’re excited about the progress we’re making and remain committed to delivering a valuable and convenient savings account comparison platform for our users.
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 4 - 21th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Today the team went through prototyping a simple solution for the application. With the constraints of the physical element of creating a bank account and the need for user consent to move money along with the buy-in of the bank to provide access to such connectors, directed us to focus more on the comparisons and forecasting of savings over the automation of creation and transferring of money.

              <br></br><br></br>With that, we used the “what would have to be true” form to conceptualize and determine the features our application needs to fulfill and what conditions will help the proposed idea succeed. The 3 critical conditions identified were:

              <br></br>
              <ul>
                <li>User are willing to trust the application and share sensitive financial information</li>
                <li>The application needs to be able to determine optimal savings accounts for user</li>
                <li>The application needs to be able to intuitively display differences to the user</li>
              </ul>

              We’ve determined that the most important thing is that the user needs to trust the application with sensitive financial information like type of bank account, net worth and spending habits. This may bring about data protection requirements under the GDPR and other financial information regulations which we will need to consider when designing the backend of the solution. While the team,mostly made up of the target demographic, is in agreement that we will provide the information if there’s a tangible benefit and need, we felt it best to get opinion from our peers who will be neutral in their opinion of the solution.

              <br></br><br></br>The 2 test conceptualized for our peers were:
              <ol>
                <li>Survey on their perception of the application and if they are willing to give information to application</li>
                <li>Comparisons of 2 different means of displaying data (Text chunk in form of the different fact sheets and a comparison table)</li>
              </ol>

              Of the 20 peers surveyed, 14 agreed to share the data if they can be assured that it will only be used for its intended purposes and stored securely while 6 flat out refused to share. When asked about the reason on why they were unwilling to share, they were in agreement that they were not willing to risk their financial information in the case of a data leak and do not wish for the data being used for marketing or advertisement purposes.

              <br></br><br></br>When showed the 2 proposed formats on showing the comparisons

              <br></br><br></br>Comparison Matrix
            </Typography>
            <img src={process.env.PUBLIC_URL + '/day4image1.png'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', marginLeft: '20px'}} />
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            Text Chunk
            </Typography>
            <img src={process.env.PUBLIC_URL + '/day4image2.png'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', marginLeft: '20px'}} />
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            17 of the surveyed peers replied that that they prefer the comparison matrix over the text chunk due to the fact that all the important information has been extracted out and placed side by side while 3 replied that they preferred the text chunk as it contained more details and that they were not sure if all the information is represented in the comparison matrix.

            <br></br><br></br>Using these insights, the team drafted a sample prototype flow that leads the user from the registration to the furnishing of financial information to the comparison pages.
            </Typography>
            <img src={process.env.PUBLIC_URL + '/day4image3.jpg'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', marginLeft: '20px'}} />
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            It is planned for the next week to test the prototype with our peers and continue improving on it while conceptulizing on additional features and fleshing out flow and interface of the various steps
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , marginTop: '40px', marginLeft: '20px', marginBottom: '20px'}}>
                Week 2
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 5 - 24th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Today the team recieved some feedback from Greg, our partner at Barclays. Having shown Greg our initial prototype he provided some feedback that was extremely useful from an external perspective.

              <ol>
                <li>Possibly limiting the maximum number of comparisons that can be done</li>
                <li>Color coding the comparisons to show what’s the best</li>
                <li>Instead of adding another screen, redirect the users who want more details to the banks factsheet or product page</li>
              </ol>
              
              From this feedback, we modified the prototype to have the constraints of a maximum of 3 simultaneous comparisons in the comparison table for 2 reasons:

              <ol>
                <li>Ensure enough screen space for readable comparison on both web and mobile</li>
                <li>Improve usability by not using horizontal scrollbars which may confuse users on the bank accounts they are comparing and require them to expand more effort to scroll</li>
              </ol>
              
              Should a user intend to compare another bank account, they will then have to replace one of the accounts that they are comparing while their existing bank account remains on the comparison. Reason being we wish to use the existing bank account as the benchmark for the comparison with the different accounts to show the user either the benefits or disadvantages of the compared account for their financial profile.

              <br></br><br></br>Next, we modified the prototype to color code the comparisons with green being the most optimal, red being the worst and yellow being neutral. We modeled it after the traffic lights as it will fit with the user preconceptions of the colors such as green being go ahead and red being stop. Next we modified the flow to redirect the user to the bank page if they wish to sign up for the account or require more details to ensure that they get the most accurate information.

              <br></br><br></br>Testing out the intended flow for the prototype with 5 users, we noticed that when asked on their spending habits such as how much is spent in a month, how many withdrawals and the amount, they were able to tell us accurately about their recurring expenses like Netflix and Spotify subscriptions but provided a vague amount of how much they have spent in a month. When asked to refer to their bank statements to determine the amount spent, it was unanimously higher than the value provided. This presented a challenge, as the users themselves are unsure how much they actually spent due to the convenience of frictionless payment methods like contactless payment and the use of debit cards/fintech products which do not generate a consolidated statement at the end of each month like a credit card.

              <br></br><br></br>An idea conceptualized is to have the user provide their statements to the application and it will use Computer Vision to convert the document into a machine readable format and perform analysis on the user’s monthly deposits, withdrawal and spending habits. By providing the statement, we also remove the need for the user to provide information such as the bank and account type they are using hence improving the experience.

              <br></br><br></br>Within the team there were dissenting opinions on the compulsory submission of the bank statement as some felt that using the survey still provided the user some form of anonymity wherehas the bank statement contained a significant amount of Personally identifiable information (PII). This will be a discussion for the next day to determine what should we prioritize, accuracy of the recommendation or the anonymity for the user

              <br></br><br></br>Another feedback about the flow from the users reflected that there was no process for a user without an existing savings account. This was an oversight as the initial assumption was that the user will have a bank account before using the application to compare. As such, we’ve modified the onboarding parts of the prototype to include a flow where the user without a bank account will be presented with a survey that excludes all the banking related questions. This allows the application to gain some understanding of the user needs in a bank account before making recommendations instead of just recommending based on a set metric such as interest rate like other web applications do.
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 6 - 25th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Today we learnt how to make choices between 2 different approaches to the problem. Something that resonated with the project was that both models (manual survey and automated scanning of bank statements) brought with it advantages that we wish to see in the application. That being giving the user control of their data while providing accurate recommendations based on their financial profile. However, since users may not be able to provide accurate information of their spending habits needed to recommend the most optimal bank account, it may affect the quality of the recommendation provided which may result in the users losing trust in the application.
              
              <br></br><br></br>On the flip side, by providing an artifact like their bank statements, we can accurately determine their spending habits, net worth and other required information. However, it may dissuade users from using the application as it is an extremely invasive approach and the amount of Personally Identifiable Information a bank statement contains may not be what the user wants to share or that they have discrete transactions they wish to keep private. Furthermore, users may not want to expose themselves to the risk of data leaks on the application or marketing adverts. Afterall the old saying is that if you are not paying for the product you are the product.

              <br></br><br></br>Using the integrative thinking templates we identified the benefits for the stakeholders for each model, their similarities, differences and relationship to gain a better picture of our models. What was most useful was the tension part where it was prompted if there were any issues using both models at the same time which had us thinking of providing the user the ability to use both models.

              <br></br><br></br>By providing both models provide the choice to the user to determine which they are more comfortable with, which prevents fragmenting the user base. On the manual survey, a disclaimer can be used to prompt the user that the manual survey may not be as accurate as its based on provided information while on the automated scanning, we conceptualized that the user could erase off transactions or PII that they do not wish to share with the application after uploading and only the redacted statement will be used for analysis. This helps strike the balance between accuracy and privacy of the user.
            </Typography>
            <img src={process.env.PUBLIC_URL + '/day6image.jpg'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', marginLeft: '20px'}} />
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Tomorrow, the team will update Greg and get his expert opinion on our new flow and test it out with our peers to determine if the proposed idea assures their privacy concerns.
            </Typography> 
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 7 - 26th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Today the team met with Greg for his opinion on the prototype created and the proposed flow. Overall, Greg was satisfied with the interface and agreed that the feature to erase certain components in the bank statement was a clever feature to protect user privacy. He provided the following feedback to us after going through the flow as a user who is viewing the interface for the first time:

              <ol>
                <li>There should be some sort of identification of the user’s current account</li>
                <li>There needs to be a clear identification of the recommendations</li>
                <li>He felt that the mobile interface should be limited to just a single comparison for usability sake</li>
                <li>Comparing the existing comparison matrix and the “traffic light” categorical comparison, he preferred the traffic light as it was easier and quicker to determine which was the best</li>
              </ol>
              
              Going through his feedback, we agreed that without any prior knowledge, it was extremely hard to determine which was the existing account and which were the suggested accounts along with the fact that it was not clear on the interface the limits of how many accounts can be compared at once. To help a new user get familiar with the interface, we implemented legends and tooltips that can be accessible in the interface for easy reference by the users. Going forward, we felt that it is best to test the whole interface on our peers which have yet to view the interface after major changes as we are able to gain greater knowledge on what they notice as a first time user.

              <br></br><br></br>Next, we implemented his suggestions by categorizing the bank accounts displayed using different carousels with clear labels to show which accounts are the users existing accounts and which are the suggested accounts. This has two benefits

              <ol>
                <li>Allow user to easily identify their existing accounts</li>
                <li>Enable the support of multiple existing accounts for comparisons.</li>
              </ol>

              While the team felt that limiting the mobile interface to only a single comparison was a disconnect between the functionality of the web and mobile as we were usually taught to ensure that both web and mobile have unified functionality to prevent any disconnect with the users preconceptions when using either interface, it was explained to us that even with existing barclays applications, the functionality between web and mobile were not unified due to compromises made to improve user experience on mobile. Looking at the prototype at this angle, we conceptualized using the carousel to switch between the different bank accounts compared instead of using the drag and drop to add to comparison. This will reduce the number of actions users need to perform to compare the accounts.

              <br></br><br></br>Carousel for comparison on mobile
            </Typography>
            <img src={process.env.PUBLIC_URL + '/day7image1.png'} alt="dailies image" style={{ width: '100%', maxWidth: '300px', marginLeft: '20px'}} />
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Finally, our opinion was split on the adaptation of either the categorical comparison or the comparison matrix table. While part of the team felt that the table was better due to it providing all the metrics used while the other half felt that by displaying the metrics separately and color coding it, it helps the user quickly identify which account is better in each category and make a decision that best suits them.

              <br></br><br></br>To decide on which interface to display to the user, we will consult our peers tomorrow with the following images and ask them to rank their choice and reasoning.

              <br></br><br></br>Color coded comparison matrix
            </Typography> 
            <img src={process.env.PUBLIC_URL + '/day7image2.png'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', marginLeft: '20px'}} />
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Categorical comparisons
            </Typography> 
            <img src={process.env.PUBLIC_URL + '/day7image3.png'} alt="dailies image" style={{ width: '100%', maxWidth: '600px', marginLeft: '20px'}} />
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 8 - 27th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Today the team focused on testing our existing prototype with our users and conceptualizing a tech stack for the application to meet the requirements of our partners at Barclays.

              <br></br><br></br>Testing our prototype with our peers who are our users, we found that they were willing to use the application now that they had the opportunity to decide how much of their data was exposed to the application, however, some feedbacked that since the bank statements were uploaded, even if we only use the redacted version for analysis, we do still have a copy of the unredacted version which makes the part of the redaction obsolete or theatrical. As such, one concept that we have was to assure the users that the uploaded copy was replaced with the redacted version through the display of the hash of the various files retained by the application. However, as our targeted users are not purely computer science students but generally students between 18-27, not all may understand the concept of hashing functions and its implications. This is something we will continue conceptualizing. Some feedback from our users that was extremely useful was that there isnt any means to add additional bank accounts or start fresh without any bank accounts and as such, it felt that the application was only meant for users to just compare a single account with other accounts on the market. This limits our userbase and longevity of the application. As such, we made changes to the flow to account for this by asking the users if they have existing bank accounts before getting their financial information and prompting them to check if they have multiple bank accounts after adding their first bank account.

              <br></br><br></br>Next we worked on the tech stack of the application. To prove that it is actually feasible to implement the application, we researched existing technologies that are used in the industry and determined that Flutter and Firebase are best suited for the implementation. Reason being Flutter is cross-platform and as of the recent update, is able to support Web, iOS and Android which covers the mediums that the users can access the services from. Furthermore, the codebase of the functionality can be reused easily ensuring unified functionality across all platforms which will fit into the users mental model when they are using the application on different platforms. To support the backend, comparing the typical cloud services such as EC2 instances, self-hosted services,Firebase and cloud native implementations such as EKS, we found that using Firebase was the most suitable as Firebase is able to perform Identity Authentication and Management, Data storage and compute functions for the application through the Firebase authentication, NoSQL database in the form of the Firestore, Cloud Messaging to trigger notifications to the application and emails to web-based users when there is a new product that is suitable to them and within their indicated preference period for notification. Given these services, it will be costly and time intensive to program or integrate external providers for such services if the choice was made to self-host on premise or utilize IaaS offerings such as EC2. As such we proposed our tech stack and justification to Greg and await his reply.
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 9 - 28th July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Today the team learnt how to conduct a usability test with a live demonstration of a think aloud test. Coincidentally, the team ran some usability tests with our intended users yesterday. Comparing our tests with what was taught, we found that tests that we conducted by the team were lacking in terms of a standardized script or scenarios. Neither did we prompt them much about their thinking at each stage of the test or try to understand what they are actually seeing or understanding from the application. We typically pass the prototype to the user and provide a task that is somewhat “guided” such as Sign up for an account and compare your bank account with what’s available on the market and ask for their opinion on the flow and interface

              <br></br><br></br>Whereas we should have made the task less specific such as determining the best bank account for you using the application to allow the user to self-explore the interface to allow for a more accurate understanding from the users and at the same time, prompt them to share what they are seeing and thinking, feeling and understand from the interface and steps that they have just went through.

              <br></br><br></br>Heading forward, we drafted a script that will be used for the usability tests conducted along with scenarios for the different possible flows that may occur in the production build of the application. An example is: You are a student with 10,000 in savings in a Tesco instant access savings account, you spend 500 a month and withdraw 200 cash over 5 withdrawals. Using the application, look for a bank account that is the most suited for you.

              <br></br><br></br>With the script and scenarios, it is our aim to obtain better quality feedback from the users as they will be able to explore the application interface more and provide us with feedback on items that we may have missed out and for them to vocalize what they are thinking and seeing so that we can understand more from the user perspective.
            </Typography>
          </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={6}>
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
            <iframe
              width="700px"
              height="400px"
              src="https://www.youtube.com/embed/nEm3Tc2ma4k"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              style={{margin: '20px' }}
            ></iframe>
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
            <iframe
              width="700px"
              height="400px"
              src="https://www.youtube.com/embed/rfQ9PMgVIIo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              style={{margin: '20px' }}
            ></iframe>
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
            <iframe
              width="700px"
              height="400px"
              src="https://www.youtube.com/embed/rfQ9PMgVIIo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              style={{margin: '20px' }}
            ></iframe>
        </Container>
      </TabPanel>
    </Box>
  );
}
