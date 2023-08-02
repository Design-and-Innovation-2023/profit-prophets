import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import conceptualizationImg from './assets/conceptualization.png'; 
import barclaysImg from './assets/barclays-office.jpg';
import paperPrototypeImg from './assets/paper-prototype.jpeg';
import highFidelityImg from './assets/high-fidelity-prototype.png';

//Styled Component to override CSS
const StyledVerticalTimeline = styled(VerticalTimeline)`
  &::before {
    background: #59596A; /* Change to whatever color you want */
  }
`;

const ProjectJourneyPage = () => {
  return (
    <div style={{backgroundColor: '#fff', minHeight: '100vh'}}>
      <h1 style={{textAlign: 'center', color:'#59596A'}}>Project Journey</h1>
      <StyledVerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} 
          contentArrowStyle={{ borderRight: '7px solid  rgb(77, 182, 255)' }} 
        >
          <h3 className="vertical-timeline-element-title">Conceptualization (18 July 2023)</h3>
          <p>We formulated questions for our partners at Barclays based on a Behaviour Driven Development Model. Our aim is to align our team's understanding of the final product's behavior, ensuring clarity in requirements and avoiding miscommunications.</p>
          <img src={conceptualizationImg} alt="Conceptualization" style={{maxWidth: '100%', height: 'auto', display: 'block', paddingTop: '15px', marginLeft: 'auto', marginRight: 'auto'}}/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} // Change box color here
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} // Change arrow color here
        >
          <h3 className="vertical-timeline-element-title">Meeting with Barclays Partners (19 July 2023)</h3>
          <p>We met with the partner today to understand their vision for the product. We used scenario-based questions to clarify their expectations and priorities, which emphasized comparison of different bank offerings. We agreed that automatically transferring user's savings was not feasible due to consent issues. The unique financial needs of each user were also highlighted. 
            In the feedback session, we realized past feedback provided was suggestive rather than assertive. Moving forward, 
            we'll justify our feedback with experience, research, or learned information for it to be constructive.
          </p>
          <img src={barclaysImg} alt="Barclays Office" style={{maxWidth: '100%', height: 'auto', display: 'block', paddingTop: '15px', marginLeft: 'auto', marginRight: 'auto'}}/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} // Change box color here
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} // Change arrow color here
        >
          <h3 className="vertical-timeline-element-title">User Needs Research (20 - 22 July 2023)</h3>
          <p>Our team researched key metrics to enable customers to effectively compare savings accounts. 
            We conducted an in-depth analysis of different types of savings accounts, reviewed open banking principles, 
            and studied existing account comparison websites.
            From our research, we identified crucial metrics including interest rate, eligibility requirements, fees, 
            tax implications, accessibility, account closure requirements, potential cashback, open banking integration, 
            and customer support. We also commenced ranking these metrics based on user surveys and interviews to ensure our 
            findings align with user needs and preferences. <br/><br/>
            The team recognised that achieving user trust is vital, especially with sharing sensitive financial data, hence we
            considered the implications of GDPR and financial regulations in our design. We also sought impartial opinions 
            from our peers through surveys, examining their perceptions of the application and their willingness to share financial information.
            Out of 20 peers surveyed, 14 agreed to share data, given secure storage and proper usage, while the remaining six objected, 
            citing potential risks of data leaks and misuse for marketing or advertisement.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} // Change box color here
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} // Change arrow color here
        >
          <h3 className="vertical-timeline-element-title">Low-Fidelity Paper Wireframing (23 - 25 July 2023)</h3>
          <p> Based on our research insights, we drafted paper wireframes of our application that simulates the user flow
            from the registration process, to the furnishing of financial information and to the bank account comparison pages.
            This paper prototype is an important step in our design process. It provides a cost-effective means of visualizing 
            the application's functionality and flow, enabling us to spot potential user-experience challenges early on, 
            and make any necessary adjustments before we begin the actual development.
          </p>
          <img src={paperPrototypeImg} alt="Paper Prototype" style={{maxWidth: '100%', height: 'auto', display: 'block', paddingTop: '15px', marginLeft: 'auto', marginRight: 'auto'}}/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} // Change box color here
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} // Change arrow color here
        >
          <h3 className="vertical-timeline-element-title">High-Fidelity Figma Wireframing (28 - 31 July 2023)</h3>
          <p> Upon successfully refining our application's design and flow with paper prototyping, we advanced 
            to creating high-fidelity wireframes using Figma. This transition allowed us to convert our preliminary sketches
            into more detailed representations.
          </p>
          <img src={highFidelityImg} alt="High-Fidelity Wireframes" style={{maxWidth: '100%', height: 'auto', display: 'block', paddingTop: '15px', marginLeft: 'auto', marginRight: 'auto'}}/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} // Change box color here
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} // Change arrow color here
        >
          <h3 className="vertical-timeline-element-title">Figma Prototyping (1 - 3 August 2023)</h3>
          <p> Write about Prototyping
          </p>
        </VerticalTimelineElement>
      </StyledVerticalTimeline>
    </div>
  );
};

export default ProjectJourneyPage;
