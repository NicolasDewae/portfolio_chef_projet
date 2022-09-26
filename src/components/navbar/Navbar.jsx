import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import { navLink } from '../../config/i18n';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const  handleToggle = () => {
        setShowLinks(!showLinks);
    }

    const [translate, setTranslate] = useState(false);
    const handleTranslate = () => {
        setTranslate(!translate);
    }
    
    return (
        <>
            <div className="header">
                <div className={`navbar ${showLinks ? "showNav" : "hideNav"}` }>
                    <ul className='links'>
                        {navLink.map((link) => {
                            link = translate ? link.fr : link.en;
                            return (
                                link.map((item) => {
                                    return (
                                        <li>
                                            <a href={item.url}>{item.title}</a>
                                        </li>
                                    )
                                })
                            )
                        })}
                    </ul>
                    <div className='divBtn'>
                        <button className='translateBtn' onClick={handleTranslate}>
                            <p className='translate'>
                                {translate ? 'Fr' : 'En'}
                            </p>
                        </button>
                        <button className="burger" onClick={handleToggle}>
                            <span className='burger_line'></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;