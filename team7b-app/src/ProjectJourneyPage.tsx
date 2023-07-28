import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ProjectJourneyPage = () => {
  return (
    <div style={{backgroundColor: '#ededed', minHeight: '100vh'}}>
      <h1>Project Journey</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023-01-01"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Conceptualization</h3>
          <p>Initial brainstorming and discussions about various ideas.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023-02-01"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Choosing the Current Idea</h3>
          <p>Explanation of why we decided to go with our current concept.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023-03-01"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Development Iteration</h3>
          <p>Description of different versions, improvements, and setbacks.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023-04-01"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Overcoming Setbacks</h3>
          <p>Explanation of how we overcame various obstacles.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default ProjectJourneyPage;
