import React from 'react';
import Navigation from '../components/Navigation';
import Article from '../components/Article';
import Footer from '../components/Footer';

const Contact = () => {
    return (
    <div className="about">
        <Navigation />

        <div style={{marginLeft:250 + 'px'}}>
            <Article
            title="Contact Us"
            subtitleText="subtitle~"
            body="Body text ...well hellow there"
            wiki={
                {
                contents: false,
                table: false
                }
            } />
            <section><p>Another section</p></section>
            <Footer />
        </div>
        
    </div>
    );
}
 
export default Contact;