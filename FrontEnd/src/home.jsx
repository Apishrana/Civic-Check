import React from 'react';
import ClaimForm from './Components/ClaimForm';
import ResultCard from './Components/ResultCard';
import './app.css';

function Home({ handleCheckClaim, loading, errorMsg, result }) {
    return (
        <div
            style={{
                maxWidth: 680,
                margin: '32px auto',
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '60vh',
            }}>
            <h2
                style={{
                    fontSize: '46px',
                    marginBottom: 20,
                    textAlign: 'center',
                }}>
                CivicCheck:{' '}
                <span style={{ fontSize: '0.7em' }}>Verify News Claims</span>
            </h2>

            <ClaimForm onSubmit={handleCheckClaim} loading={loading} />
            {errorMsg && (
                <div style={{ color: 'red', margin: 18 }}>{errorMsg}</div>
            )}
            <ResultCard result={result} />
        </div>
    );
}

export default Home;
