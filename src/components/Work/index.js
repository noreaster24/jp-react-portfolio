import React from 'react';
import workExperienceImage from '../../assets/images/porrazzo-resume.png';

function Work() {

    return (
        <div className="bio-container">
            <h1>Work Experience</h1>
            <img className="bio-img" src={workExperienceImage} alt="JP Work Experience" />
            <button onClick="https://drive.google.com/file/d/0B_lMIZ5YdLI_NjBRRGc3NDdlejA/view?usp=sharing&resourcekey=0-e1z-Gcx1ql8z9Fw9jVUshQ" className="view-btn">View Resume</button>
        </div>
    );
}

export default Work;