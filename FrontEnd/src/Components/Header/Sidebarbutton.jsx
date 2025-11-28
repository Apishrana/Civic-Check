import React from 'react';
import './Sidebarbutton.css';

function Sidebarbutton({ open, setOpen }) {
    // console.log('Sidebarbutton open:', open);
    return (
        <>
            {!open ? (
                <button className="toggle-btn" onClick={() => setOpen(!open)}>
                    ☰
                </button>
            ) : (
                <button
                    className="toggle-btn"
                    style={{
                        top: '-2px',
                        left: '2px',
                        fontFamily: 'arial',
                    }}
                    onClick={() => setOpen(!open)}>
                    III
                </button>
            )}
        </>
    );
}
export default Sidebarbutton;
