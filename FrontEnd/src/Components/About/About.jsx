import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-page">
            <h1>About Civic Check</h1>
            <p>
                Civic Check is an AI-powered platform designed to help users
                verify news, claims, and online content. Our mission is to
                reduce misinformation by providing intelligent, transparent, and
                evidence-based results.
            </p>

            <h2>How It Works</h2>
            <ul>
                <li>
                    ✔ Real-time scraping of trusted and untrusted news sources
                </li>
                <li>✔ Dual-model approach (Transformer + Image Model)</li>
                <li>✔ Semantic search for evidence using web results</li>
                <li>✔ Friendly UI for fast claim verification</li>
            </ul>

            <h2>Why We Built This</h2>
            <p>
                Misinformation harms society. Our goal is to build a tool that
                empowers people with truth, factual insights, and transparent
                evidence — instantly.
            </p>

            <h2>Team</h2>
            <p>Built with ❤️ during MumbaiHacks 2025 by team Bombers.</p>
        </div>
    );
}

export default About;
