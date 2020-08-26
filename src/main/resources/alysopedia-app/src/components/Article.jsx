import React from 'react';
import SideSummary from './wiki/SideSummary';
import Contents from './wiki/Contents';

const Article = ({title, subtitleText, body, wiki}) => {
    //markdown parser
    let md = require('markdown-it')();
    let result = md.render(body);
    
    return (
      <div className="App-article">
        <h1>Alysopedia | {title}</h1>
        {/* <img src={qr} className="QR Code" alt="QR Code" /> */}
        <h2>{subtitleText}</h2>
      
        {
          wiki.contents ?
          <Contents />
          : <div></div>
        }
        {
          wiki.table ?
          <SideSummary />
          : <div></div>
        } 
         {/*this doesn't seem like the best solution - but the database should be a trusted source*/}
          <div dangerouslySetInnerHTML={{__html:result}} ></div>
      </div>
    );
}

export default Article;