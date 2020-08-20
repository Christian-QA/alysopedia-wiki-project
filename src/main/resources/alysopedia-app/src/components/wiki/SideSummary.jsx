import React from 'react';
import logo from '../../images/logo.svg';

const SideSummary = () => {
    return (
      <div className="App" style={{flexDirection: "row-reverse"}}>
          <p>Table</p>
          {/* <img src={logo}  alt="logo" /> */}
            <table>
                <tbody>
                    <tr><th>List item: </th><td>One Item</td></tr>
                    <tr><th>List item: </th><td>Two Item</td></tr>
                    <tr><th>List item: </th><td>Three Item</td></tr>
                    <tr><th>List item: </th><td>Four Item</td></tr>
                </tbody>
            </table>
      </div>
    );
}

export default SideSummary;