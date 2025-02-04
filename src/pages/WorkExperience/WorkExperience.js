import React from 'react';
import './WorkExperience.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {SiReact} from 'react-icons/si'

const WorkExperience = () => {
  return (
    <>
    <div className="work">
        <div className="container work-exp">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Work Experience</h2>
            <hr />
            <VerticalTimeline lineColor="#1e1e2a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'White', color: '#1e1e2a' }}
                    contentArrowStyle={{ borderRight: '7px solid  White' }}
                    date="2024 - present"
                    iconStyle={{ background: '#1e1e2a', color: '#fff' }}
                    icon={<SiReact />}
                    >
                    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Sarp Mind Fire, Patna, Bihar, IN</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'White', color: '#1e1e2a' }}
                    contentArrowStyle={{ borderRight: '7px solid  White' }}
                    date="2023 - 2024"
                    iconStyle={{ background: '#1e1e2a', color: '#fff' }}
                    icon={<SiReact />}
                    >
                    <h3 className="vertical-timeline-element-title">Python Programming</h3>
                    <h4 className="vertical-timeline-element-subtitle">Techvanto Academy, Delhi, IN</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'White', color: '#1e1e2a' }}
                    contentArrowStyle={{ borderRight: '7px solid  White' }}
                    date="2021 - 2023"
                    iconStyle={{ background: '#1e1e2a', color: '#fff' }}
                    icon={<SiReact />}
                    >
                    <h3 className="vertical-timeline-element-title">React App Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">LPU, Punjab, IN</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </div>
    </>
  )
}

export default WorkExperience