import React from 'react';
import { projects } from './project-array';

function Projects() {

    return (
        <section id="project-container">
            <ul> {projects.map((p, i) => (
                <li key={i}>
                    <h2 class="project-title">{p.title}</h2>
                    <p class="project-info">{p.description}</p>
                    <img src={p.image} alt=''/>
                    <p class="project-tags">{p.tags.map(p.tag)}</p>
                    <a href={p.source} class="project-repo">Code</a> 
                    <a href={p.visit} class="project-link">Source</a>
                </li>
            ))}
            </ul>
        </section>
    );
}

export default Projects;