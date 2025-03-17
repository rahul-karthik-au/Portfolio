import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeta, faAmazon, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Git",
    "Github",
    "UI/UX Design",
    "Software Testing",
    "Postman",
    "API Management"
];

const labelsSecond = [
    "Java",
    "SQL",
    "HTML5",
    "CSS3",
    "Spring",
    "Spring Boot",
    "Java Testing",
    "GenAI"
];

const labelsThird = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "SQL",
    "Problem Solving"
];

const openMeta = ()=>{
    window.open("https://www.coursera.org/account/accomplishments/professional-cert/BNTW3APDZLQ2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof","_blank")
}
const openAmazon = ()=>{
    window.open("https://coursera.org/share/09f317de263e13aa17fc8345d38a6120","_blank")
}
const openHackerRank = ()=>{
    window.open("https://www.hackerrank.com/certificates/64760318c677","_blank")
}

function Expertise() {
    return (
    <div className="container" id="certification">
        <div className="skills-container">
            <h1>Certification</h1>
            <div className="skills-grid">
                <div className="skill" onClick={openMeta} >
                <FontAwesomeIcon icon={faMeta} size="3x" />
                    <h3>Meta Certified Front End Developer</h3>
                    <p>I have completed the Meta Frontend Professional Certificate, comprising 9 comprehensive courses covering the latest in frontend development. This journey has been incredibly rewarding, deepening my expertise and enhancing my skills in creating dynamic and user-centric web experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill" onClick={openAmazon}>
                <FontAwesomeIcon icon={faAmazon} size="3x"/>
                    <h3>Amazon Certified Junior Software Developer</h3>
                    <p>I have completed the Amazon Junior Software Developer Certificate through Coursera, which has equipped me with a comprehensive understanding of key software development concepts and tools. Build a strong foundation in software engineering principles, hands-on coding, and working with industry-standard tools used in the development lifecycle. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill" onClick={openHackerRank}>
                <FontAwesomeIcon icon={faHackerrank} size="3x"/>
                    <h3>Hacker Rank - Gold Badges</h3>
                    <p>I have earned the HackerRank Certification in Java, SQL, HTML, CSS, React, JavaScript, Problem Solving which demonstrates my proficiency in solving complex problems and applying programming concepts to real-world challenges. This certification is a reflection of my strong understanding of software development fundamentals and my problem-solving skills in competitive programming.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;