import React, { useState } from 'react';
import './claimform.css';

function ClaimForm({ onSubmit, loading }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSubmit(input);
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                marginBottom: 24,
                position: 'relative',
            }}>
            <textarea
                className="claim-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={5}
                placeholder="Paste your news claim here..."
                disabled={loading}
                required
            />
            <button
                type="submit"
                className="submit"
                disabled={loading || !input.trim()}>
                {loading ? (
                    <img src="" className="submit-img" alt="Checking..." />
                ) : (
                    <img
                        src="up-arrow-icon.png"
                        className="submit-img"
                        alt="Check Claim"
                    />
                )}
            </button>
        </form>
    );
}

export default ClaimForm;
