import React from 'react';
import logo from '../images/logo.svg';
import Navigation from '../components/Navigation';
 
const Home = () => {
    return (
    <div className="Home">
        <Navigation />
        
        <div style={{marginLeft:250 + 'px'}}>
            <header className="App-header">
                <p>Click below to proceed</p>
                <a href="/Wiki"><img src={logo} className="App-logo" alt="logo" /></a>
                <h1>Welcome to the Alysopedia</h1>
                <p>Allow me to be your guide</p>
            </header>
        </div>

    </div>
    );
}

export default Home;