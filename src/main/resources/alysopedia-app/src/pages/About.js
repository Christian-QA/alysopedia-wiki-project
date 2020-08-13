import React from 'react';
import Navigation from '../components/Navigation';
 
const about = () => {
    return (
    <div className="about">
        <Navigation />

        <div style={{marginLeft:250 + 'px'}}>
            <article className="App-article">
                <h1>About</h1>
                <section>wagsertgr</section>
            </article>
        </div>
        
    </div>
    );
}
 
export default about;