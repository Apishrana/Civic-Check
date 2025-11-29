import React from 'react';

function ResultCard({ result }) {
    if (!result) return null;

    return (
        <div
            style={{
                marginTop: 40,
                background: '#111',
                padding: 24,
                borderRadius: 12,
                color: '#fff',
                width: '60%',
                marginLeft: 'auto',
                marginRight: 'auto',
                boxShadow: '0 0 20px rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
            }}>
            <h2 style={{ marginBottom: 15 }}>Prediction</h2>

            <div
                style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '12px 14px',
                    borderRadius: 8,
                    marginBottom: 12,
                }}>
                <strong>Label:</strong> {result.label === 1 ? 'FAKE' : 'REAL'}
            </div>

            <div
                style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '12px 14px',
                    borderRadius: 8,
                    marginBottom: 12,
                }}>
                <strong>Confidence:</strong>{' '}
                {(result.confidence * 100).toFixed(1)}%
            </div>

            <h3 style={{ marginTop: 20 }}>Evidence from Internet:</h3>

            {result.evidence && result.evidence.length > 0 ? (
                result.evidence.map((e, i) => (
                    <div
                        key={i}
                        style={{
                            marginTop: 12,
                            padding: 12,
                            background: 'rgba(255,255,255,0.04)',
                            borderLeft: '3px solid #6AB0FF',
                            borderRadius: 8,
                        }}>
                        <strong>{e.title}</strong>
                        <br />
                        {e.url && (
                            <a
                                href={e.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#8fc8ff' }}>
                                {e.url}
                            </a>
                        )}
                        <p style={{ marginTop: 6, opacity: 0.8 }}>
                            {e.snippet}
                        </p>
                    </div>
                ))
            ) : (
                <p>No evidence available.</p>
            )}
        </div>
    );
}

export default ResultCard;
