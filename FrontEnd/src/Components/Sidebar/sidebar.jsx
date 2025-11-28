import React, { useState } from 'react';
import { useEffect } from 'react';
import './sidebar.css';

function Sidebar({ open, setOpen }) {
    // const [open, setOpen] = useState(true);
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrolled(window.scrollY > 20);
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <>
            {/* {!open ? (
                <button className="toggle-btn" onClick={() => setOpen(!open)}>
                    ☰
                </button>
            ) : (
                <button
                    className="toggle-btn"
                    style={{
                        top: '33px',
                        left: '238px',
                        fontFamily: 'arial',
                    }}
                    onClick={() => setOpen(!open)}>
                    III
                </button>
            )} */}

            <div className={`sidebar ${open ? 'open' : 'closed'}`}>
                {/* <div className={`logo-container ${scrolled ? 'scrolled' : ''}`}>
                    {scrolled ? (
                        <div className="logo-icon"></div>
                    ) : (
                        <h2 className="logo-text">Civic Check</h2>
                    )}
                </div> */}
                <ul className="nav-links">
                    <li>
                        <a href="#research">Research</a>
                    </li>
                    <li>
                        <a href="#safety">Safety</a>
                    </li>
                    <li>
                        <a href="#business">For Business</a>
                    </li>
                    <li>
                        <a href="#help">For Developers</a>
                    </li>
                    <li>
                        <a href="#news">News</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
