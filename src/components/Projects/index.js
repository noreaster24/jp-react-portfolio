import React from 'react';
import { projects } from './project-array';

function Projects() {

    return (
        <div className="project-container">
            <div className="project-header">
                <h1>Projects</h1>
            </div>
            <section className="project-cards">
                {projects.map((p, i) => {
                    <li className="project-card">
                        {projects.map((p) => (
                            <li key={i}>
                                <h2 className="project-title">{p.title}</h2>
                                <div className="img-container">
                                    <img src={p.image} alt='' />
                                </div>
                                <h4 className="project-description">{p.description}</h4>
                                <div className="tags">
                                    <h6>projects.map(p.tags)</h6>
                                </div>
                                <div className="project-links">
                                    <a href="{p.source}">Source</a>
                                    <a href="{p.visit}">Visit</a>
                                </div>
                            </li>
                        ))}
                    </li>
                })
                };
            </section>
        </div>
    )
};
export default Projects;