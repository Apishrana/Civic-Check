import './auth.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Forgot() {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="auth-container">
            <div className="auth-box">
                {/* Website header */}
                <div className="auth-header">
                    <img src="/image.png" alt="Logo" className="auth-logo" />
                    <div className="auth-brand">Civic Check</div>
                </div>

                <h2 className="auth-title">Reset Password</h2>

                <input
                    className="auth-input"
                    type="email"
                    placeholder="Enter your email"
                />

                <button className="auth-btn">Send Reset Link</button>

                <p className="auth-small">
                    Back to <Link className="auth-link" to="/signin">Login</Link>
                </p>
            </div>
        </div>
    );
}