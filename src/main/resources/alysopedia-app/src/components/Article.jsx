import React from 'react';
import SideSummary from './wiki/SideSummary';
import Contents from './wiki/Contents';

const Article = ({title, subtitleText, body, wiki}) => {
    //markdown parser
    
    // full options list (defaults)
    let md = require('markdown-it')({
      html:         false,        // Enable HTML tags in source
      xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                                  // This is only for full CommonMark compatibility.
      breaks:       false,        // Convert '\n' in paragraphs into <br>
      langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                  // useful for external highlighters.
      linkify:      false,        // Autoconvert URL-like text to links
    
      // Enable some language-neutral replacement + quotes beautification
      typographer:  false,
    
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: '“”‘’',
    
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externally.
      // If result starts with <pre... internal wrapper is skipped.
      highlight: function (/*str, lang*/) { return ''; }
    });
    let result = md.render(body);
    
    return (
      <div className="App-article container">
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