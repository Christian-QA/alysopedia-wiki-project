import React from 'react';
import logo from '../images/logo.svg';
 
const home = () => {
    return (
    <div className="home">
        <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{width:250 + 'px'}} id="mySidebar">
            <div className="w3-container w3-display-container w3-padding-16">
            <i onClick="w3_close()" className="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
            <a href="/" className="w3-wide"><b>Logo</b></a>
            </div>
            <div className="shopping-list"></div>

            <a href="#footer" className="w3-bar-item w3-button w3-padding">Contact</a> 
            <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding" onClick="document.getElementById('newsletter').style.display='block'">Newsletter</a> 
            <a href="/About" className="w3-bar-item w3-button w3-padding">About</a>
        </nav>
        <div>
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

export default home;