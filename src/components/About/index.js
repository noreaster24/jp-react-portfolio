import React from 'react';
import coverImage from '../../assets/images/JP-main.jpeg';

function About() {
    return (
        <section>
            <div className="about-container">
                <img src={coverImage} className="profile-img" alt="cover" />
                <div className="about-me">
                    <p className="salutation">
                        Hi!
                    </p>
                    <p id="profile-overview">
                        I'm a product manager that focuses on new product development and a recreational full-stack web developer. I'm always looking to learn new technologies.
                    </p>
                    <p className="contact-me">
                        Please navigate around and check out out some of my projects!  Click on 'Contact' to connect.
                    </p>
                    <div className="social-container">
                        <div className="social-tags">
                            <li>Email: <a href="josephporrazzo@gmail.com">josephporrazzo@gmail.com</a></li>
                            <li>GitHub: <a href="noreaster24">noreaster24</a></li>
                            <li>LinkedIn: <a href="https://www.linkedin.com/in/joe-porrazzo-48325254/">Joe Porrazzo</a></li>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About;