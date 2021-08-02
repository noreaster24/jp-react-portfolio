import React from 'react';
import logo from '../../assets/images/main-logo.png';

function Nav() {

    return (
        <header>
            <h2 className="nav-bar">
                <a href="/">
                    <img src={logo} alt="logo" className="site-logo" />
                </a>
                <nav>
                    <ul className="flex-row">
                        <li className="mx-2">
                            <a href="#about">
                                About Me
                            </a>
                        </li>
                        <li>
                            <span>Projects</span>
                        </li>
                        <li>
                            <span>Contact</span>
                        </li>
                        <li>
                            <span>Resume</span>
                        </li>
                    </ul>
                </nav>
            </h2>
        </header>
    );
}

export default Nav;