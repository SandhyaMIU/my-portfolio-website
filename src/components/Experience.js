// src/components/Experience.js

import React from 'react';
import '../data/Experience.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CSSTransition } from 'react-transition-group';

const Experience = () => {
    const experiences = [
      {
        position: 'Senior Software Engineer',
        company: 'iSGM',
        duration: 'Apr 2019 – Jun 2022',
        description: 'Contributed to Java Spring Boot backend development, crafting secure RESTful APIs with Spring Security and implementing efficient state management with React.js, including React Router and Redux.'
      },
      {
        position: 'Software Engineer',
        company: 'iSGM',
        duration: 'Apr 2018 – Apr 2019',
        description: 'Optimized relational databases, automated backend processes with Spring Boot, conducted testing using JUnit, produced comprehensive software documentation.'
      },
      {
        position: 'Software Developer',
        company: 'TrustLink',
        duration: 'May 2017 – Nov 2017',
        description: 'Utilized Python for developing customized solutions with ERP systems, executed test cases for different scenarios.'
      }
      
      ];
    
      return (
        <div className="work-experience" id="experience">
          <h2>Work Experience</h2>

          <Container className="pt-3">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-left">
                  <h3>{exp.position}</h3>
                  <span className="duration">{exp.duration}</span>
                </div>
                <div className="timeline-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="timeline-right">
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

      

          <div className="d-flex align-items-center justify-content-start justify-content-md-center">
  <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
    <span className="explore-more">Explore more about my professional journey....</span>
  </CSSTransition>
  <div className="ml-3"> {/* Add margin between Explore more and download button */}
    <a href="/Resume1.pdf" download="Resume_Khin_Myo_Wai.pdf" type="application/pdf"
      className="btn btn-light d-flex justify-content-center align-items-center me-3" target="_blank">
      Download Resume
      <FaCloudDownloadAlt className="ms-2" />
    </a>
  </div>
  <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
    <a href="https://www.linkedin.com/in/khinmyowai-sandhya/" target="_blank"
      className="linkedin-icon" style={{ fontSize: '38px', color: '#023a58' }}>
      <FaLinkedin />
    </a>
  </CSSTransition>
</div></Container><hr />

</div>

      );
    }

export default Experience;
