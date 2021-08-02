import React, { useEffect } from 'react';
import logo from '../../assets/images/main-logo.png';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <header>
            <h2 className="nav-bar">
                <a data-testid="link" href="/">
                    <img src={logo} alt="logo" className="site-logo" />
                </a>
                <nav>
                    <ul className="flex-row">
                        <li className="mx-2">
                            <a href="#about" onClick={() => setContactSelected(false)}>
                                About Me
                            </a>
                        </li>
                        <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                            <span onClick={() => setContactSelected(true)}>Contact</span>
                        </li>
                        {categories.map((category) => (
                            <li
                                className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'
                                    }`}
                                key={category.name}
                            >
                                <span 
                                    onClick={() => {
                                        setCurrentCategory(category);
                                        setContactSelected(false);
                                    }}
                                >
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </h2>
        </header>
    );
}

export default Nav;