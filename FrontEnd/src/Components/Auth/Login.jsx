import './auth.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Signin() {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="auth-container">
            <div className="auth-box">
                {/* Header */}
                <div className="auth-header">
                    <img src="/image.png" alt="Logo" className="auth-logo" />
                    <div className="auth-brand">Civic Check</div>
                </div>

                <h2 className="auth-title">Sign In</h2>

                <input
                    className="auth-input"
                    type="email"
                    placeholder="Email"
                />
                <input
                    className="auth-input"
                    type="password"
                    placeholder="Password"
                />

                <button className="auth-btn">Sign In</button>

                <Link className="auth-link" to="/forgot">
                    Forgot Password?
                </Link>

                <p className="auth-small">
                    Don't have an account?
                    <Link className="auth-link" to="/signup">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
