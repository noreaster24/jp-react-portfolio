import React from 'react';
import workExperienceImage from '../../assets/images/porrazzo-resume.png';

function Work() {

    return (
        <section className="experience">
            <div className="bio-container">
                <h1>Work Experience</h1>
                <img className="bio-img" src={workExperienceImage} alt="JP Work Experience" />
                <button onClick="https://drive.google.com/file/d/0B_lMIZ5YdLI_NjBRRGc3NDdlejA/view?usp=sharing&resourcekey=0-e1z-Gcx1ql8z9Fw9jVUshQ" className="button">View Resume</button>
            </div>
            <div className="skills">
                <ul className="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>Sequelize</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>React</li>
                    <li>Git/GitHub</li>
                    <li>Heroku</li>
                </ul>
            </div>
        </section>

    );
}

export default Work;