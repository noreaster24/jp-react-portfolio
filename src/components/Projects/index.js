import React from 'react';
// import { projects } from './project-array';
import cryptoImage from '../../assets/images/cryptoknight.png';
import budgetTrackerImage from '../../assets/images/budget-tracker.png';
import passwordGeneratorImage from '../../assets/images/password-generator.png';
import socialNetworkImage from '../../assets/images/social-media.png';
import upDogImage from '../../assets/images/up-dog.png';
import tahImage from '../../assets/images/TAH.png';


function Projects() {

    return (
        <div className="project-container">
            <div className="project-header">
                <h1>Projects</h1>
            </div>
            <ul className="project-cards">
                <li className="project-card">
                    <h2 className="project-title">CryptoKnight</h2>
                    
                        <img src={cryptoImage} className="project-img" alt='' />
                    
                    <h4 className="project-description">Front-end cryptocurrency price tracker and wallet.</h4>
                    <div className="tags">
                        <h6>Javascript</h6>
                        <h6>jQuery</h6>
                        <h6>CSS</h6>
                        <h6>HTML</h6>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/noreaster24/team-project-1">Source</a>
                        <a href="https://noreaster24.github.io/team-project-1/">Visit</a>
                    </div>
                </li>

                <li className="project-card">
                    <h2 className="project-title">Teaching Artist Hub</h2>
                    
                        <img src={tahImage} className="project-img" alt='' />
                    
                    <h4 className="project-description">Calendar and Communication platform for non-profit arts organization</h4>
                    <div className="tags">
                        <h6>React</h6>
                        <h6>Express.JS</h6>
                        <h6>JavaScript</h6>
                        <h6>GraphQL</h6>
                        <h6>Node.js</h6>
                        <h6>MongoDB</h6>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/LindseyKrause/Teaching-Artist-Hub">Source</a>
                        <a href="https://teaching-artist-hub.herokuapp.com/">Visit</a>
                    </div>
                </li>

                <li className="project-card">
                    <h2 className="project-title">Budget Tracker</h2>
                    
                        <img src={budgetTrackerImage} className="project-img" alt='' />
                    
                    <h4 className="project-description">Full-stack progressive web app with offline caching.</h4>
                    <div className="tags">
                        <h6>Javascript</h6>
                        <h6>Express.JS</h6>
                        <h6>MongoDB</h6>
                        <h6>CSS</h6>
                        <h6>HTML</h6>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/noreaster24/budget-tracker">Source</a>
                        <a href="https://lit-anchorage-32415.herokuapp.com/">Visit</a>
                    </div>
                </li>

                <li className="project-card">
                    <h2 className="project-title">Password Generator</h2>
                    
                        <img src={passwordGeneratorImage} className="project-img" alt='' />
                    
                    <h4 className="project-description">Generate secure passwords</h4>
                    <div className="tags">
                        <h6>Javascript</h6>
                        <h6>CSS</h6>
                        <h6>HTML</h6>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/noreaster24/password-generator">Source</a>
                        <a href="https://noreaster24.github.io/password-generator/">Visit</a>
                    </div>
                </li>

                <li className="project-card">
                    <h2 className="project-title">Social Network API</h2>
                    
                        <img src={socialNetworkImage} className="project-img" alt='' />
                    
                    <h4 className="project-description">NoSQL database project for sharing posts and commenting on user's accounts.</h4>
                    <div className="tags">
                        <h6>NoSQL</h6>
                        <h6>Express.JS</h6>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/noreaster24/Social-Sharing-App">Source</a>
                        <a href="https://drive.google.com/file/d/12BMuQXcn8oOu4Pi-ps2tZiI5mU8xAVdy/view">Visit</a>
                    </div>
                </li> 

                <li className="project-card">
                    <h2 className="project-title">What's Up Dog</h2>
                    
                        <img src={upDogImage} className="project-img" alt='' />
                    
                    <h4 className="project-description">Full-stack social network web app for pet lovers to interact.</h4>
                    <div className="tags">
                        <h6>MongoDB</h6>
                        <h6>Express.JS</h6>
                        <h6>Handlebars.JS</h6>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/noreaster24/dam-stud">Source</a>
                        <a href="https://serene-ocean-75643.herokuapp.com/">Visit</a>
                    </div>
                </li>

                
            </ul>
        </div>
    )
};
export default Projects;