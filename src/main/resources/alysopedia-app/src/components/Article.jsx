import React from 'react';
import SideSummary from './wiki/SideSummary';
import Contents from './wiki/Contents';

const Article = ({title, subtitleText, body, wiki}) => {
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
          
          <p>{body}</p>
      </div>
    );
}

export default Article;