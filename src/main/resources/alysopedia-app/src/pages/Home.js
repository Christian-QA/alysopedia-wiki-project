import React from 'react';
import logo from '../images/logo.svg';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
 
const Home = () => {
    return (
    <div className="Home">
        <Navigation />
        
        <div style={{marginLeft:250 + 'px'}}>
            <section className="App-header">
                <h1>Welcome to the Alysopedia</h1>
               
                <p>Click below to proceed</p>
                <a href="/Wiki"><img src={logo} className="App-logo" alt="logo" /></a>
                <h2>Allow me to be your guide</h2>
             </section>
            
            <Footer />
        </div>

    </div>
    );
}

export default Home;