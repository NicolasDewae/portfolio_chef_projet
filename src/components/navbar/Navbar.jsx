import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import { navLink } from '../../config/i18n';

const Navbar = (translate) => {
    const [showLinks, setShowLinks] = useState(false);
    const  handleToggle = () => {
        setShowLinks(!showLinks);
    }
    return (
        <>
            <div id="header">
                <div className={`navbar ${showLinks ? "showNav" : "hideNav"}` }>
                    <ul className='links'>
                        {navLink.map((link) => {
                            link = translate.data ? link.fr : link.en;
                            return (
                                link.map((item) => {
                                    return (
                                        <li>
                                            <a onClick={handleToggle} href={item.url}>{item.title}</a>
                                        </li>
                                    )
                                })
                            )
                        })}
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