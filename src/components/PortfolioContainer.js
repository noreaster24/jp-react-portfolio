import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Work from './Work';
import Footer from './Footer';

function Portfolio() {

    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'Contact':
                return <Contact />;
            case 'Projects':
                return <Projects />;
            case 'Work': 
                return <Work />;
            default:
                return <About />;

        }
    };

    return (
        <section>
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>{renderPage(currentPage)}</div>
        </div>
        <Footer></Footer>
        </section>
    );
}

export default Portfolio