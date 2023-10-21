import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className="home-container">
            <h2>Welcome to Tapioca Cafe Home</h2>
            <p>This is the home page of Tapioca Cafe.</p>
            <p>You can add your content and features here.</p>
            <Link to="/dashboard">Go to Dashboard</Link>

        </div>
    );
}

export default Home;