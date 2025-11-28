import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Forgot from './Components/Auth/Forgot';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/sidebar';
import api from './api/api';
import Home from './home';
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

    return (
        <>
            <Routes>
                {/* 👇 HOME PAGE */}
                <Route
                    path="/"
                    element={
                        <>
                            <Header
                                open={sidebarOpen}
                                setOpen={setSidebarOpen}
                                loggedIn={loggedIn}
                                setloggedin={setloggedin}
                            />
                            <Sidebar
                                open={sidebarOpen}
                                setOpen={setSidebarOpen}
                            />
                            <Home
                                handleCheckClaim={handleCheckClaim}
                                loading={loading}
                                errorMsg={errorMsg}
                                result={result}
                            />
                        </>
                    }
                />

                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot" element={<Forgot />} />
            </Routes>
        </>
    );
}

export default App;
