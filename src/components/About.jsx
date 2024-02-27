import React from "react";
import './assets/style/About.scss'
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
  return (
    <div className="items_wrapper">
      <h1>About Me</h1>
      <div className="about-page">
        <div className="align-items-center">
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/about-image.jpg" alt="Asset by Oziel Gómez" />
          <h2>Brief Summary</h2>
          <p>
            I graduated with a bachelor's degree in computer science 
            from Lancaster University - United Kingdom. Currenlty employed as a Software Engineer
            at Couchbase, I collaborated with agile team to deliver a Cloud-Native application
            to manage Couchbase Server resources. My expertise includes Python and GoLang development, 
            DevOps, and Quality Engineering.
          </p>
          <TypeAnimation
            sequence={[
              "If I am not coding, you can find me: hiking",
              1000,
              "If I am not coding, you can find me: gaming",
              1000,
              "If I am not coding, you can find me: traveling",
              1000,
              "If I am not coding, you can find me: eating",
              1000,
              "If I am not coding, you can find me: jamming",
              1000
            ]}
            wrapper="p"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <h2>Career Timeline</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - present"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Manchester, UK</h4>
            <p>
              GoLang Development, Python Development, Quality Engineering
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote, UK</h4>
            <p>
              Data Engineering, Backend Development
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default About;