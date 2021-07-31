import React from 'react';
import coverImage from '../../assets/images/mb-hero.webp';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
            <p id="salutation">
                Hi!  
            </p>
            <p id="about-me">
                I'm Joe Porrazzo and I'm a product manager that focuses on new product development, and an aspiring full-stack web developer. I love technology and I'm always looking to learn new ways to do things.
            </p>
            <p id="contact-me">
                Please navigate around and checkout out some of my projects!  My contact information is below.
            </p>
        </section>
    );
}

export default About;