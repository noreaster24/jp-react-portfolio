import React from 'react';
import coverImage from '../../assets/images/mb-hero.webp';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
        </section>
    );
}

export default About;