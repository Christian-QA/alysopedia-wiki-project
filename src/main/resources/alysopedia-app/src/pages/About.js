import React from 'react';
import Navigation from '../components/Navigation';
import Article from '../components/Article';
import Footer from '../components/Footer';

const About = () => {
    return (
    <div className="about">
        <Navigation />

        <div style={{marginLeft:250 + 'px'}}>
            <Article
            title="About"
            subtitleText="subtitle stuff"
            body="Body text ...wagsertgr"
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
 
export default About;