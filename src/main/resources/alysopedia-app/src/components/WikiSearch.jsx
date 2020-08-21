import React from 'react';

const WikiSearch = ({wikiTitle, onWikiTitleChange, onSubmit}) => {

    return (
       <> 
      <div className="App" style={{flexDirection: "row-reserve"}}>
          <form onSubmit={onSubmit}>
            <section>
                    <label for="wikiName">Search By Title: </label>
                    <input type="text" id="wikiName" name="title" placeholder="Looking for title..." value={wikiTitle} onChange={onWikiTitleChange}></input>
            <button type="submit">Submit</button>
            </section>
          </form>
      </div>
      </>
    );
}

export default WikiSearch;