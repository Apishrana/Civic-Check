import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Forgot from './Components/Auth/Forgot';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/sidebar';
import api from './api/api';
import NewsFeed from './Components/NewsFeed';
import Home from './home';
import About from './Components/About/About';
import './App.css';

function App() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [loggedIn, setloggedin] = useState(false);

    const handleCheckClaim = async (claim) => {
        setLoading(true);
        setResult(null);
        setErrorMsg('');
        try {
            const res = await api.post('/predict', { text: claim });
            setResult(res);
        } catch (err) {
            setErrorMsg(err.message || 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    // Layout wrapper for all pages
    const PageLayout = ({ children }) => (
        <>
            <Header
                open={sidebarOpen}
                setOpen={setSidebarOpen}
                loggedIn={loggedIn}
                setloggedin={setloggedin}
            />
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

            <div
                style={{
                    marginLeft: sidebarOpen ? '250px' : '70px',
                    padding: '20px',
                    paddingTop: '80px',
                    transition: 'margin-left 0.3s ease',
                }}>
                {children}
            </div>
        </>
    );

    return (
        <Routes>
            {/* HOME */}
            <Route
                path="/"
                element={
                    <PageLayout>
                        <Home
                            handleCheckClaim={handleCheckClaim}
                            loading={loading}
                            errorMsg={errorMsg}
                            result={result}
                        />
                        <NewsFeed />
                    </PageLayout>
                }
            />

            {/* ABOUT */}
            <Route
                path="/about"
                element={
                    <PageLayout>
                        <About />
                    </PageLayout>
                }
            />

            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<Forgot />} />
        </Routes>
    );
}

export default App;
