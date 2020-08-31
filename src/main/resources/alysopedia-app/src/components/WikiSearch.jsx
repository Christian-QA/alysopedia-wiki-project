import React from 'react';

const WikiSearch = ({label, wikiSearch, onSearchChange, onSubmit}) => {

    return (
       <> 
      <div className="App" style={{flexDirection: "row-reserve"}}>
          <form onSubmit={onSubmit}>
            <section>
                    <label for="wikiName"><p>{label}</p> </label>
                    <input type="text" id="wikiName" name="title" placeholder="Looking for title..." value={wikiSearch} onChange={onSearchChange}></input>
            <button type="submit">Submit</button>
            </section>
          </form>
      </div>
      </>
    );
}

export default WikiSearch;