import React from 'react';

const Article = ({title, subtitleText, body}) => {
    return (
      <div className="App-article">
        <h1>Asylopedia | {title}</h1>
        <h2>{subtitleText}</h2>
        <p>{body}</p>
        {/* <img src={qr} className="QR Code" alt="QR Code" /> */}
      </div>
    );
}

export default Article;