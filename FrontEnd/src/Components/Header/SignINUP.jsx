import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignINUP() {
    const [hoveredButton, setHoveredButton] = useState(null);
    const navigation = useNavigate();

    return (
        <div style={styles.container}>
            <button
                style={
                    hoveredButton === 'signin'
                        ? { ...styles.button, ...styles.buttonHover }
                        : styles.button
                }
                onMouseEnter={() => setHoveredButton('signin')}
                onMouseLeave={() => setHoveredButton(null)}
                // onClick={() => alert('Sign In Clicked')}
                onClick={() => {
                    navigation('/signin');
                }}>
                {/* <a
                    href="/signin"
                    style={{
                        borderRadius: '4px',
                        boxSizing: 'border-box',
                        display: 'block',
                        padding: '8px 16px',
                        width: '100%',
                        height: '100%',
                        background: 'inherit',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}> */}
                Sign In
                {/* </a> */}
            </button>

            <button
                style={
                    hoveredButton === 'signup'
                        ? { ...styles.button, ...styles.buttonHover }
                        : styles.button
                }
                onMouseEnter={() => setHoveredButton('signup')}
                onMouseLeave={() => setHoveredButton(null)}
                // onClick={() => alert('Sign Up Clicked')}
                onClick={() => {
                    navigation('/signup');
                }}>
                {/* <a
                    href="/signup"
                    style={{
                        borderRadius: '4px',
                        boxSizing: 'border-box',
                        padding: '8px 16px',
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        background: 'inherit',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}> */}
                Sign Up
                {/* </a> */}
            </button>
        </div>
    );
}

const styles = {
    container: {
        boxSizing: 'border-box',
        display: 'flex',
        gap: '10px',
    },
    button: {
        borderRadius: '4px',
        boxSizing: 'border-box',
        padding: '8px 16px',
        backgroundColor: '#ffffff',
        color: '#000000',
        border: 'none',
        cursor: 'pointer',
    },
    buttonHover: {
        backgroundColor: 'red',
        color: 'white',
    },
};

export default SignINUP;
