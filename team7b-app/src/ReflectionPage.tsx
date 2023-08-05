import { Box, Container, Divider, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import TeamContractPDF from './assets/team-contract.pdf';
import PrototypingPDF from './assets/prototyping-document.pdf';
import IntegrativeThinkingPDF from './assets/integrative-thinking-document.pdf';
import RoadshowPic1 from './assets/roadshow-1.jpg';
import RoadshowPic2 from './assets/roadshow-2.jpg';
import RoadshowPic3 from './assets/roadshow-3.jpg';

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
        <Tab label="Team Reflection" {...a11yProps(0)} />
        <Tab label="Team Contract" {...a11yProps(1)} />
        <Tab label="Requirement Gathering" {...a11yProps(2)} />
        <Tab label="Prototyping" {...a11yProps(3)} />
        <Tab label="Refinement" {...a11yProps(4)} />
        <Tab label="Roadshow" sx={{ borderBottom: 1, borderColor: 'divider' }} {...a11yProps(5)} />
        {/* Divider between Roadshow and Team Dailies */}
        <Tab label="Team Dailies" {...a11yProps(6)} />
        <Tab label="Weekly Pitch Videos" {...a11yProps(7)} />
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
                Team Reflection
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px',
                width: '90%',
                textAlign: 'justify'
            }} paragraph> Starting the project as a team that has yet to work with each other was challenging as the groups were assigned in a 
            pseudo-random manner where we did not have choices of who we were working with. When we met, some were old faces, some were 
            completely new faces but we had something in common, the motivation to learn and complete this module. While we had the fire, 
            some limits had to be established and there came the team contract to govern our actions and ensure that there is a commitment to 
            see the project through while maintaining the work-life balance. <br/><br/>

            Heading into the problems, We agreed upon an approach after analyzing the brief as a team and felt that a web application that 
            calls APIs to get user’s banking information, existing products on the market and some means of authentication that was created by 
            the government would solve it easily, all we had to do was get the requirements from the client and from there, make simple 
            interface or logic changes and that's that.<br/><br/>
            
            After meeting Greg and realizing that unlike Singapore, where there is a national 
            digital identify platform (Singpass and MyInfo), the UK does not have anything similar to this, the closest being their national 
            insurance number which can act as an identifier neither was there any API endpoints for a fully digital banking experience that 
            banks provide unlike in Singapore where every bank were voluntold (a Singaporean term used to refer to actions that a superior 
            wishes to be done but remained voluntary for a subordinate) to participate in the national standards for API endpoints. 
            This realization that there were geographical constraints too to our solution as we were accustomed to the tools that were 
            available in Singapore and we would have been able to build what we conceptualized easily in singapore, wherehas in the UK 
            where there are still physical elements to banking such as opening an account, document verification and mailers for pin and 
            usernames, we had to pivot and reconceptualized based on the given constraints. <br/><br/>
            
            Looking at what is available on the existing market, we felt that what was lacking was personalization and as such we 
            conceptualized the Rate Chaser to be focused on personalization for the user and the recommendations were to be made for the 
            most optimal benefit for the user without affecting any lifestyle changes. Given that we were not able to automatically create 
            and transfer the money due to technical and regulatory constraints, we focused on providing a neutral point of view for the user 
            where we enable comparisons between our recommendations and their existing accounts on pure quantitative data and to stand 
            out, perhaps forecast their savings like what a financial advisor will do for their client. <br/><br/>
            
            In hindsight, we definitely rushed into conceptualizing an idea without a true understanding of the the problem or our target 
            users along with the constraints that it may bring with it which we felt now may have limited the ideas that we were 
            conceptualized as we mainly focused on something accessible by users like web or mobile app but just failed to “dream” bigger 
            and look outside the tunnel of an application.
            
            </Typography>
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
                Team Contract
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5', marginBottom: '20px'}}/>
            {/* Embedding PDF file */}
            <embed 
                src={TeamContractPDF}
                type="application/pdf" 
                style={{width: '400%', height: '600px'}}/>
          </div>
        </Container>
      </TabPanel>

      <TabPanel value={value} index={2}>
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
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px',
                textAlign: 'justify'
            }} paragraph>
              Reflecting on the process of requirements gathering, we experienced a journey of continuous learning, effective communication, 
              and a user-centric approach. <br/><br/>

              Our interactions with partners were an enlightening experience. Initially, our understanding of the project differed from the 
              partner's vision. This divergence highlighted the importance of open dialogues and the need to align our mental models. Our 
              scenario-based questions, conceptualized with the help of a large language model, facilitated deeper insights into the partner's
               expectations. We realized the importance of respecting users' unique financial needs and the importance of consent in dealing
                with sensitive data such as their residential address. This understanding influenced our product's design, making it more
                 empathetic and user-centric. <br/><br/>

              Next, we needed understanding of how to compare the various savings accounts. Our research on key metrics for comparing savings
               accounts reaffirmed the importance of a user-centric approach. We worked diligently to identify and rank metrics essential for
                customers. By studying existing platforms, different types of savings accounts, and open banking principles, we identified
                 several essential metrics, such as Interest Rate, Eligibility Requirements, Fees, Tax Implications, Accessibility, Account
                  Closure Requirements, Cashback Aspects, Open Banking Integration, and Customer Support. <br/><br/>

              In summary, our journey of requirements gathering was filled with valuable learnings about the power of mental models, the
               importance of aligning understanding among diverse team members and partners, the role of assertive and constructive feedback,
                and the significance of a user-centric approach in product design.
            </Typography>
            </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/* Content for Prototyping */}
        <Container>
            <div className="position-relative" style={{ textAlign: 'left'}}>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Prototyping
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px',
                textAlign: 'justify'
            }} paragraph>
            Reflecting on the prototyping phase of our project, it becomes clear how invaluable it is to test and iterate upon an idea. 
            This stage was filled with learnings about our users, the product requirements, and the trade-offs between accuracy and user 
            privacy. <br/><br/>

            Our prototyping process began with outlining the necessary conditions for our application to succeed. Using the template, 
            it led us to identify three crucial elements to prioritize: user trust, the application's ability to recommend optimal savings 
            accounts, and the intuitive display of information. Recognizing the importance of user trust, we decided to survey our peers to 
            gauge their willingness to share sensitive financial information.
            </Typography>

            {/* Embedding PDF file */}
            <embed 
              src={PrototypingPDF}
              type="application/pdf" 
              style={{marginLeft: '20px', width: '100%', height: '600px'}}/>
            
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px',
                textAlign: 'justify'
            }} paragraph>
            The survey results highlighted some significant user concerns. While most agreed to share their financial information given 
            assurance of security and privacy, a small group was opposed, citing fears of data leaks and misuse of information for marketing
             purposes. This feedback underscored the importance of demonstrating strong data protection measures to our users. It also
              raised a crucial question for the team: should we prioritize the accuracy of recommendations or user anonymity? <br/><br/>

            Our user feedback also helped shape the design of our comparison display. Most respondents preferred a comparison matrix over
             a text chunk, finding it easier to digest. However, there was also an appreciation for the detail provided in the text chunk,
              indicating that our design should balance the need for simplicity and depth.

            </Typography>
              {/* Embedding PDF file */}
              <embed 
              src={IntegrativeThinkingPDF}
              type="application/pdf" 
              style={{marginLeft: '20px', width: '100%', height: '600px'}}/>

            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px',
                textAlign: 'justify'
            }} paragraph>
            Testing our prototype with a sample of users offered even more insights. Users struggled to provide accurate estimates of their 
            spending habits, suggesting a possible disconnect between perceived and actual expenditure. This presented an interesting 
            challenge and led to a suggestion for using computer vision to analyze user bank statements for a more accurate understanding
            of their financial habits.

            However, like the dilemma we had above between user data control and accuracy, we needed to find a balance. Using the tension 
            templates we identified that we could provide the users with the choice to determine the limits of the data given to the application with the understanding that providing inaccurate data will result in inaccurate recommendations.
            </Typography>
            </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={4}>
        {/* Content for Refinement */}
        <Container>
            <div className="position-relative" style={{ textAlign: 'left'}}>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Refinement
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px',
                textAlign: 'justify'
            }} paragraph>
            With the prototype finalized, it's time to embark on a productive journey of refinement for our prototype. We started by 
            gathering feedback from Greg, who provided insightful comments on the user interface, usability, and functionalities. We took 
            his feedback seriously and re-evaluated our design and functionality choices, realizing that we had overlooked some aspects of 
            the user experience, especially for first-time users. <br/><br/>

            This process reaffirmed the importance of fresh perspectives. Users who aren't familiar with the product may interpret or 
            interact with it differently. To address this, we implemented legends and tooltips for easier navigation and understanding. 
            We also categorized the bank accounts using carousels to clarify their distinctions. <br/><br/>

            Interestingly, Greg's feedback about the mobile interface challenged our initial belief about the unity of functionality between
             the web and mobile versions. It was a significant realization that compromises can be made for a better user experience, even
              if it means diverging functionalities between platforms. This led us to reconfigure the mobile interface, significantly
               improving its usability. <br/><br/>

            This phase also brought up an internal debate about the method of displaying the comparison of bank accounts. We plan to resolve
             this by collecting more user feedback, illustrating the importance of collective decision-making when designing a user-focused
              product. <br/><br/>

            In terms of privacy concerns raised during our prototype testing, we learned about the significance of assuring users about the
             safety of their data. We're currently brainstorming ways to effectively communicate this, which is critical in gaining
              user trust. Additionally, we realized that our application seemed to only cater to users looking to compare single accounts,
               limiting our user base. To address this, we modified our flow to consider users with multiple bank accounts, proving how
                crucial user feedback is in identifying overlooked user requirements. <br/><br/>

            Our proposed tech stack with Flutter and Firebase was accepted by Greg, who pointed out our reliance on Google technology and
             possible cost implications. This led to an engaging discussion on the trade-offs between cost and development time, underlining
              the complex decisions involved in software development. <br/><br/>

            As we worked on our usability tests, we understood the importance of a structured script and scenario for accurate results.
             The process showed us that user testing isn't merely about completion but understanding the user's perspective. It was
              enlightening to see how we could adjust our methods to yield more accurate insights. <br/><br/>

            Lastly, we faced the challenge of notification frequency and medium choice. We concluded to let users choose their preferred
             frequency and medium of notification, again emphasizing the importance of user-centric design. <br/><br/>

            The process of refinement is a continual one. As we receive more feedback and make changes, we are constantly learning and
             improving. The journey has reminded us of the importance of open-mindedness, adaptability, and the value of fresh perspectives.
              Looking ahead, we aim to continue learning from our experiences, refine our product, and provide a user-friendly solution that
               meets the needs of our users effectively.

            </Typography>
            </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={5}>
        {/* Content for Roadshow */}
        <Container>
            <div className="position-relative" style={{ textAlign: 'left'}}>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Roadshow
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
            The roadshow was a significant milestone in our journey. The demonstration of our prototype outside a controlled environment
             and its subsequent interaction with the general public was indeed a thrilling yet nerve-wracking experience. <br/><br/>

            During the showcase, I was pleased to note that the traffic light color coding in the application was well received. It served
             its purpose in providing a clear visual cue for the users about the superiority of accounts, which confirms our efforts in
              designing an intuitive user interface were not in vain. <br/><br/>

            The event also brought to light some potential improvements that could enhance the user experience and broaden our user base.
             Proactively querying the users about their financial goals and purposes for existing accounts before making recommendations
              could be a crucial enhancement that we can look into as their goals inevitably shape their choice of accounts, and the user
               feedback rightly suggested that taking this into consideration could make our service much more customized and user-friendly.
                For instance, suggesting multiple account options like a fixed term account or an instant access savings account based on
                 their goals for house ownership or college fund creation could add immense value to our service and expand the user base
                  to include working adults to retirees.<br/><br/>

            The roadshow was an insightful reality check on our product's practical usability. It validated our countless hours spent on
             testing and modifying, and to see users interacting with the application without much difficulty was deeply rewarding. It
              underlined the reality that receiving and incorporating user feedback is paramount to the success of our project. 

            </Typography>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={RoadshowPic1} alt="Roadshow" style={{maxWidth: '33.33%', height: 'auto', border: '2px solid black'}}/>
                <img src={RoadshowPic2} alt="Roadshow" style={{maxWidth: '33.33%', height: 'auto', border: '2px solid black'}}/>
                <img src={RoadshowPic3} alt="Roadshow" style={{maxWidth: '33.33%', height: 'auto', border: '2px solid black'}}/>
            </div>
            <iframe
              width="465px"
              height="400px"
              src="https://www.youtube.com/embed/q885wT7Q7WQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              style={{marginTop: '15px' }}
            ></iframe>
            </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={6}>
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
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: 700
                }} style={{ color: '#59596a'  , marginTop: '40px', marginLeft: '20px', marginBottom: '20px'}}>
                Week 3
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 10 - 31st July
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Today the team focused on adding in a means to notify users when there are account offerings that are better than their existing accounts. Typically most applications perform push notifications instantly when there is a need to inform the user as it’s the most efficient both computationally and for the users as there isn’t a need to design any form of algorithm nor use excess resources to maintain the users preference and match them while the users get instantly notified about something that benefits them. However, in our situation, as banks often release products simultaneously or in quick succession, as such, instantly notifying the users after the analysis may result in the content of the notifications being inaccurate or multiple notifications which may annoy the users, leading to distrust and annoyance. Hence, its decided to offer the user the ability to determine the frequency of the notifications and from the feedback from a previous prototype where users wish to have the ability to choose what platforms they can access the chatbot prototype with, the choice of the medium of the notification: (Push notification for the mobile application, Email, Whatsapp, Telegram for both web and mobile).

              <br></br><br></br>User Preference Form
            </Typography>
            <img src={process.env.PUBLIC_URL + '/day10image1.png'} alt="dailies image" style={{ width: '100%', maxWidth: '400px', marginLeft: '20px'}} />
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Next, we worked to flesh out any final issues on our prototype. First was ensuring that users had a way to switch between their existing accounts, Next was to unify the interface between both the mobile and web to ensure users of both platforms can seamlessly transition between either platform. This was achieved by using similar design language for both platforms in terms of the placement, labeling and ensuring the functionality is uniform between both platforms with exception of comparisons where due to the limits of the mobile screen size, we downscale the number of simultaneous accounts compared to one in order to provide a smoother mobile interface for the user where they could switch between the suggested accounts compared by swiping on the carousel.

              <br></br><br></br>Mobile Interface
            </Typography>
            <img src={process.env.PUBLIC_URL + '/day10image2.png'} alt="dailies image" style={{ width: '100%', maxWidth: '200px', marginLeft: '20px'}} />
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Web Interface
            </Typography>
            <img src={process.env.PUBLIC_URL + '/day10image3.png'} alt="dailies image" style={{ width: '100%', maxWidth: '400px', marginLeft: '20px'}} />
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Moving forward, we finalized the interface for both platforms and will begin final usability testing with our users, this time done properly with the scripts and scenarios
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 11 - 1st August
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Today the team received feedback from Greg about our proposed tech stack. He was agreeable with the tech stack we’ve proposed for implementation but forewarned us that it was overly reliant on Google technology and may face cost issues when massively scaling up in the long run. While we agreed that it was heavy on Google technology, we disagreed on the fact that creating services provided by firebase from scratch will cost significantly more due to the need for development, testing and deployment of such services along with the underlying infrastructure needed to ensure the reliability, availability and robustness of said system. Thus, we justified our points to Greg from email and await his reply.

              <br></br><br></br>Next, we performed usability tests with our users along with completing the poster for our exhibition. This time, we had our users pretend to be a student with a Tesco bank account with 1000 pounds in savings and a yorkshire bank account with 1000 pounds with a task to determine if it is beneficial to change either bank accounts to a new account. Of the 5 users that we tested with, 4 were able to successfully perform the task without any assistance from the team while one needed some assistance when they kept attempting to click on the “add to comparison” button. As such, the team decided to make slight UI changes that are synonymous with a disabled button. We gray-out the button when the limit of comparisons is reached and inform the users of the remedial steps using a tooltip to inform them to remove one of the bank accounts they intend to compare. This way, the user is given clear indications on the state of the application and the next action they need to take.

              <br></br><br></br>Interface When Maximum comparison reached
            </Typography>
            <img src={process.env.PUBLIC_URL + '/day11image.png'} alt="dailies image" style={{ width: '100%', maxWidth: '400px', marginLeft: '20px'}} />
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Completing the usability tests, we focused on completing the poster to provide a high-level overview of the problem and our conceptualized solution. One dilemma was if we should take the approach of an academic poster where we focused more on describing the solutions and steps taken or a product poster where we focused on “selling” the product. On one hand, it will show our design thinking process to the guests at the exhibition and how it shaped the solution while on the other hand, we will be able to focus on what we conceptualized, why it is there and how it benefits our users. After deliberation, we decided to focus on the product and how it helps to alleviate the problems instead of focusing on the route there and provide a link to our webpage where those who are interested in understanding the design thinking process and view the artifacts used at their own pace as people who visit exhibitions often just want to get a high level overview of all the exhibits and determine if they are interested to learn more about any particular exhibits so that they don’t miss out on anything. Taking our “audience” profile into consideration we designed our poster in a way that clearly shows the issues users previously faced and how our solution and its various features are used to alleviate them.

              <br></br><br></br>Heading into the next day, we will focus on getting our design thinking process documented on our website
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 12 - 2nd August
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Today, the team had an impromptu meeting with Greg to show the final progress of the prototype. He was impressed by the team’s final prototype and understands that we were not able to really demonstrate the Drag and Drop functionality due to the limitations of Figma. He did provide some feedback where there were some cosmetic issues and that the button of the removal of accounts needs to be more obvious for users. While we did not encounter this issue during testing with the users, we took the feedback and made slight changes to the prototype for the final showcase. Next we worked on the website to showcase the design thinking. One train of thought we followed was that how do we show what we have done and as such, we decided to incorporate the short trailer we made for the meta project as part of the landing page which then leads to the features of the conceptualized solution and to the project journey where we provide a high level understanding of what we did across the 3 weeks visualized in a timeline and finally end at the reflections where we reflect on our journey.
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: 600
                }} style={{ color: '#59596a'  , margin: '20px'}}>
                Day 13 - 3rd August
            </Typography>
            <Divider variant="middle" style={{display: 'block', height: 2, maxWidth: 140, backgroundColor: '#00b0f5'}}/>
            <Typography variant="body2" sx={{
                fontFamily: '"Open Sans", sans-serif',
                lineHeight: '24px',
                fontSize: '14px',
                margin: '20px'
            }} paragraph>
              Today is the day of the showcase!, After many iterations of the prototype, we finally have something that will see the light. Having people experience our prototype outside of the controlled environment was an exciting yet stressful experience as we were hoping that it will not be broken by user activity! It was also an opportunity to gain feedback from others apart from our peers. One of the feedback that i found most helpful was that at different stages of our lives, we have different financial goals and the type of accounts that our users have does reflect them and as such, it will be extremely helpful to learn about what the goals of the users are too as possibly suggesting them to open multiple accounts, for example, a fixed term account and a typical instant access savings account may help them achieve their goals such as buying a house or building a college fund. As we showcased our prototype to various users, it was also insightful to see them interacting with the application and commenting that they appreciate the traffic light style of coloring as it was extremely obvious which account was superior. Heading forward, some possible enhancements that can be taken to improve the solution and expand the userbase could be querying the users about their financial goals and uses for existing accounts and taking that into account before making recommendations. All in all, it was an extremely fulfilling experience to see the users using the application without much hiccups which made the countless hours of testing and modifying worthwhile .
            </Typography>
          </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={7}>
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
      </TabPanel>
    </Box>
  );
}
