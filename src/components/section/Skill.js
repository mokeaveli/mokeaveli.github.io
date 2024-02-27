import React from 'react';
import '../assets/style/Skill.scss';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faGo,
  faNodeJs, 
  faReact, 
  faNpm, 
  faJava, 
  faPython, 
  faDocker, 
  faGitAlt, 
  faLinux, 
  faPython, 
  faRProject, 
} from '@fortawesome/free-brands-svg-icons';
import Chip from '@material-ui/core/Chip';

function Skill () {
  return  (
    <div className="container" id="skills">
      <div className="skills-container">
        <h1>Specialties</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="4x"/>
            <h3>Web Development</h3>
            <p>
              Small venture into web development to build this portfolio site. 
              As well as building sites for charity Cheshire Crimebeat and
              a family electricians Stanno Electrical Services.
            </p>
            <p className="flex-chips">Tech stack: 
              <Chip variant="outlined" label="JavaScript" size="small" icon={<FontAwesomeIcon icon={faJsSquare} />} />
              <Chip variant="outlined" label="HTML5" size="small" icon={<FontAwesomeIcon icon={faHtml5} />} />
              <Chip variant="outlined" label="CSS3" size="small" icon={<FontAwesomeIcon icon={faCss3Alt} />} />
              <Chip variant="outlined" label="NodeJS" size="small" icon={<FontAwesomeIcon icon={faNodeJs} />} />
              <Chip variant="outlined" label="React" size="small" icon={<FontAwesomeIcon icon={faReact} />} />
              <Chip variant="outlined" label="npm" size="small" icon={<FontAwesomeIcon icon={faNpm} />} />
            </p>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="4x"/>
            <h3>Software Development</h3>
            <p>
              I enjoy working with agile teams to design and implement 
              cross-platform solutions. Focus in cloud-native applications
              using GoLang, K8S, and cloud computing platforms.
            </p>
            <p className="flex-chips">Tech stack: 
              <Chip variant="outlined" label="Python" size="small" icon={<FontAwesomeIcon icon={faPython} />} />
              <Chip variant="outlined" label="GoLang" size="small" icon={<FontAwesomeIcon icon={faGo} />} />
              <Chip variant="outlined" label="Java" size="small" icon={<FontAwesomeIcon icon={faJava} />} />
              <Chip variant="outlined" label="Git" size="small" icon={<FontAwesomeIcon icon={faGitAlt} />} />
              <Chip variant="outlined" label="Docker" size="small" icon={<FontAwesomeIcon icon={faDocker} />} />
              <Chip variant="outlined" label="Linux" size="small" icon={<FontAwesomeIcon icon={faLinux} />} />
            </p>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="4x"/>
            <h3>Data Analysis</h3>
            <p>
              Keen interest in Machine Learning and AI. Background in CNNs
              for Computer Vision via dissertation project for undergraduate
              degree. Completed a Data Analyst internship with Get Safe Online.
            </p>
            <p className="flex-chips">Tech stack:
              <Chip variant="outlined" label="Python" size="small" icon={<FontAwesomeIcon icon={faPython} />} />
              <Chip variant="outlined" label="Pandas" size="small" icon={<FontAwesomeIcon icon={faPython} />} />
              <Chip variant="outlined" label="Matplotlib" size="small" icon={<FontAwesomeIcon icon={faPython} />} />
              <Chip variant="outlined" label="Sklearn" size="small" icon={<FontAwesomeIcon icon={faPython} />} />
              <Chip variant="outlined" label="R" size="small" icon={<FontAwesomeIcon icon={faRProject} />} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;