import React from 'react';

const WikiSearch = ({wikiTitle, onWikiTitleChange, onSubmit}) => {

    return (
       <> 
      <div className="App" style={{flexDirection: "row-reserve"}}>
          <p>Search</p>
          <form onSubmit={onSubmit}>
            <section>
                    <label for="wikiName">By Title<br></br></label>
                    <input type="text" id="wikiName" name="title" placeholder="Looking for title..." value={wikiTitle} onChange={onWikiTitleChange}></input>
            </section>
            <button type="submit">Submit</button>
          </form>
      </div>
      </>
    );
}

export default WikiSearch;