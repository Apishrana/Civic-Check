import React from 'react';
import SignINUP from './SignINUP';
import ProfileButton from './ProfileButton';
import Sidebarbutton from './Sidebarbutton';

function Header({ open, setOpen, loggedIn, setloggedin }) {
    return (
        <div>
            <header style={styles.header}>
                <h1 style={styles.title}>
                    <img
                        src="image.png"
                        alt=""
                        style={{
                            height: '1.3em',
                            width: 'auto',
                            top: '8px',
                            position: 'relative',
                        }}
                    />
                    Civic Check
                    <Sidebarbutton open={open} setOpen={setOpen} />
                </h1>
                <nav>
                    <ul style={styles.navList}>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            {loggedIn ? (
                                <ProfileButton />
                            ) : (
                                <SignINUP setloggedin={setloggedin} />
                            )}
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#000000ff',
        color: 'white',
    },
    title: {
        margin: 0,
    },
    navList: {
        display: 'flex',
        listStyle: 'none',
        alignItems: 'center',
        gap: '15px',
    },
};

export default Header;
