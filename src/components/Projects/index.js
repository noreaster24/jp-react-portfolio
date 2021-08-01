import React from 'react';
// import { projects } from './project-array';

function Projects() {
    // const projects = [
    //     {
    //         title: 'CryptKnight',
    //         description: "Track your favorite cyrpto currency pricing in real time and build a wallet showing how much crypt you currently own!",
    //         image: '../../images/cryptoknight.png',
    //         tags: ['JavaScript', 'jQuery', 'CSS'],
    //         source: 'https://github.com/noreaster24/team-project-1',
    //         visit: 'https://noreaster24.github.io/team-project-1/',
    //         id: 0,
    //     }
    // ]

    // function projectSelected() {
    //     console.log("hello")
    // }

    return (
        <div className="project-container">
            <div className="project-header">
                <h1>Projects</h1>
            </div>
            <div className="project-card">
                <h2 className="project-title">CryptoKnight</h2>
                <div className="img-container">
                    <img src="../../assets/images/cryptoknight.png" alt='' />
                </div>
                <h4 className="project-description">Cryptocurrency price tracker and wallet.  Front-end only.</h4>
                <div className="tags">
                    <h6>JavaScript</h6>
                    <h6>jQuery</h6>
                    <h6>CSS</h6>
                    <h6>HTML</h6>
                </div>
                <div className="project-links">
                    <a href="https://github.com/noreaster24/team-project-1">Source</a>
                    <a href="https://noreaster24.github.io/team-project-1/">Visit</a>
                </div>
            </div>
        </div>
        

    );
}

export default Projects;