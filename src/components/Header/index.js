import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';
import Contact from '../Contact';

function Portfolio() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch(currentPage) {
            case "about.":
                return <About></About>
            case "portfolio.":
                return <Projects></Projects>
            case "resume.":
                return <Resume></Resume>
            case "contact":
                return <Contact></Contact>
            default:
                return <About></About>
        }
    };

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                {renderPage()}
            </div>
        </div>
    );
}

export default Portfolio;