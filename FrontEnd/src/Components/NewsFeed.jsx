import React, { useEffect, useState } from 'react';
import './newsfeed.css';

const FALLBACK_NEWS = [
    {
        title: 'UN warns of rising tensions across global hotspots',
        description:
            'The Secretary-General called for immediate diplomatic action to ease multiple international crises.',
        url: 'https://example.com/un-warns',
    },
    {
        title: 'SpaceX launches new mission to expand Starlink network',
        description:
            'The Falcon 9 successfully deployed another batch of satellites in a continued push for global coverage.',
        url: 'https://example.com/spacex-launch',
    },
    {
        title: 'Global markets steady after major tech rebound',
        description:
            'Investors reacted positively to strong quarterly earnings from leading tech companies.',
        url: 'https://example.com/market-update',
    },
];

const USE_LIVE_API = true;

function NewsFeed() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNews() {
            if (!USE_LIVE_API) {
                console.log(
                    'Debug mode: Using fallback news (no tokens used).'
                );
                setArticles(FALLBACK_NEWS);
                setLoading(false);
                return;
            }

            try {
                const res = await fetch(
                    `https://gnews.io/api/v4/top-headlines?lang=en&max=10&apikey=acf8b85bdac1d665aa2abc634b0ec3cf`
                );

                if (!res.ok) throw new Error('API failure');

                const data = await res.json();

                if (!data.articles || data.articles.length === 0) {
                    console.warn('API returned no articles. Using fallback.');
                    setArticles(FALLBACK_NEWS);
                } else {
                    setArticles(data.articles);
                }
            } catch (err) {
                console.error('News fetch error:', err);
                setArticles(FALLBACK_NEWS); // failsafe fallback
            } finally {
                setLoading(false);
            }
        }

        fetchNews();
    }, []);
    if (loading) {
        return (
            <p style={{ textAlign: 'center', color: '#777', marginTop: 32 }}>
                Loading news…
            </p>
        );
    }

    return (
        <section id="news" className="news-section">
            <h3 className="news-title">🌍 Latest International Headlines</h3>

            <div className="news-list">
                {articles.map((item, idx) => {
                    const domain = (() => {
                        try {
                            return new URL(
                                item.url || item.link || ''
                            ).hostname.replace('www.', '');
                        } catch {
                            return '';
                        }
                    })();

                    return (
                        <article className="news-card" key={idx}>
                            <div className="news-card-accent" />

                            <div className="news-card-content">
                                <header className="news-card-header">
                                    {domain && (
                                        <span className="news-chip">
                                            {domain}
                                        </span>
                                    )}
                                    <h4 className="news-headline">
                                        {item.title}
                                    </h4>
                                </header>

                                <p className="news-description">
                                    {item.description ||
                                        'No description available.'}
                                </p>

                                {(item.url || item.link) && (
                                    <a
                                        className="news-link"
                                        href={item.url || item.link}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Read more →
                                    </a>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default NewsFeed;
