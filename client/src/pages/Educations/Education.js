import React from 'react';
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool} from 'react-icons/md'

const Education = () => {
  return (
    <>
    <div className="cotainer education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Education Details</h2>
        <hr />
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'White', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  White' }}
                date="2021 - 2024"
                iconStyle={{ background: '#138781', color: '#fff' }}
                icon={<MdSchool />}
                >
                <h3 className="vertical-timeline-element-title">B.Tech</h3>
                <h4 className="vertical-timeline-element-subtitle">Lovely Professional University, Punjab, IN</h4>
                <p>
                Computer Science & Engineering <br /><span> CGPA: - 7.20</span>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'White', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  White' }}
                date="2018 - 2021"
                iconStyle={{ background: '#138781', color: '#fff' }}
                icon={<MdSchool />}
                >
                <h3 className="vertical-timeline-element-title">Diploma</h3>
                <h4 className="vertical-timeline-element-subtitle">Government Polytechnic College, Gulzarbag Patna-07, Bihar, IN</h4>
                <p>
                    Computer Science & Engineering <br /><span> CGPA: - 8.28</span>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'White', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  White' }}
                date="2016 - 2018"
                iconStyle={{ background: '#138781', color: '#fff' }}
                icon={<MdSchool />}
                >
                <h3 className="vertical-timeline-element-title">Intermidiate</h3>
                <h4 className="vertical-timeline-element-subtitle">S.N.S College Jehanabad, Bihar, IN</h4>
                <p>
                    Physics, Chemistry, Math<br /><span> Percentage: - 61% </span>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'White', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  White' }}
                date="2015 - 2016"
                iconStyle={{ background: '#138781', color: '#fff' }}
                icon={<MdSchool />}
                >
                <h3 className="vertical-timeline-element-title">Schooling</h3>
                <h4 className="vertical-timeline-element-subtitle">+2 High School Kako, Jehanabad, Bihar, IN</h4>
                <p>
                    Physics, Chemistry, Math,Hindi, English, Sanskrit <br />
                    <span> Percentage: - 71% </span>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    </>
  )
}

export default Education;