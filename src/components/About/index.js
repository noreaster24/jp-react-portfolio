import React from 'react';
import coverImage from '../../assets/images/JP-main.jpeg';
import heroImage from '../../assets/images/mb-hero.webp'


function About() {
    return (
        <section className="about-container">
            <img src={coverImage} className="profile-img" alt="cover" />
            <div className="about-me">
                <p className="salutation">
                    Hi!
                </p>
                <p id="profile-overview">
                    I'm a product manager that focuses on new product development, and an aspiring full-stack web developer. I love technology and I'm always looking to learn new ways to do things.
                </p>
                <p className="contact-me">
                    Please navigate around and check out out some of my projects!  Click on 'Contact' to connect.
                </p>
                <img src={heroImage} className="hero-img" alt="MacBook Hero" />
            </div>
        </section>
    );
}

export default About;