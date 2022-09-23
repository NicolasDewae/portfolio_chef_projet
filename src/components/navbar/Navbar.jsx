import React from 'react';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const  handleToggle = () => {
        setShowLinks(!showLinks);
    }

    return (
        <>
            <div className="header">
                <div className={`navbar ${showLinks ? "showNav" : "hideNav"}` }>
                    <ul className='links'>
                        <li className='home'><a href="/">Home</a></li>
                        <li><a href="/propos">A propos</a></li>
                        <li><a href="/prestations">Mes prestations</a></li>
                        <li><a href="/travaux">Mes travaux</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <button className="burger" onClick={handleToggle}>
                        <span className='burger_line'></span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;