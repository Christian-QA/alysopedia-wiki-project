import React from 'react';

const Contents = () => {
    return (
      <div className="App" style={{flexDirection: "row"}}>
          <p>Contents</p>
          {/* <img src={logo}  alt="logo" /> */}
            <ul>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
            </ul>
      </div>
    );
}

export default Contents;