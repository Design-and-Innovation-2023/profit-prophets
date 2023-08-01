import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

//Styled Component to override CSS
const StyledVerticalTimeline = styled(VerticalTimeline)`
  &::before {
    background: #59596A; /* Change to whatever color you want */
  }
`;

const ProjectJourneyPage = () => {
  return (
    <div style={{backgroundColor: '#fff', minHeight: '100vh'}}>
      <h1>Project Journey</h1>
      <StyledVerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} 
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} 
        >
          <h3 className="vertical-timeline-element-title">Conceptualization (18 July 2023)</h3>
          <p>We formulated questions for our partners at Barclays based on a Behaviour Driven Development Model. Our aim is to align our team's understanding of the final product's behavior, ensuring clarity in requirements and avoiding miscommunications.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023-02-01"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} // Change box color here
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} // Change arrow color here
        >
          <h3 className="vertical-timeline-element-title">Meeting with Barclays Partners (19 July 2023)</h3>
          <p>We met with the partner today to understand their vision for the product. We used scenario-based questions to clarify their expectations and priorities, which emphasized comparison of different bank offerings. We agreed that automatically transferring user's savings was not feasible due to consent issues. The unique financial needs of each user were also highlighted. 
            In the feedback session, we realized past feedback provided was suggestive rather than assertive. Moving forward, 
            we'll justify our feedback with experience, research, or learned information for it to be constructive.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023-03-01"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} // Change box color here
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} // Change arrow color here
        >
          <h3 className="vertical-timeline-element-title">User Needs Research (20 July - 22 July 2023)</h3>
          <p>Our team researched key metrics to enable customers to effectively compare savings accounts. 
            We conducted an in-depth analysis of different types of savings accounts, reviewed open banking principles, 
            and studied existing account comparison websites.
            From our research, we identified crucial metrics including interest rate, eligibility requirements, fees, 
            tax implications, accessibility, account closure requirements, potential cashback, open banking integration, 
            and customer support. We also commenced ranking these metrics based on user surveys and interviews to ensure our 
            findings align with user needs and preferences.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023-04-01"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} // Change box color here
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} // Change arrow color here
        >
          <h3 className="vertical-timeline-element-title">Overcoming Setbacks</h3>
          <p>Explanation of how we overcame various obstacles.</p>
        </VerticalTimelineElement>
      </StyledVerticalTimeline>
    </div>
  );
};

export default ProjectJourneyPage;
