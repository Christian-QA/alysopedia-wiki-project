import React from 'react';
import { NavLink } from 'react-router-dom';
import SideList from '../components/SideList';

 
const Navigation = () => {
    return (
    <>
      <div className="navigation">
         <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{width:250 + 'px'}} id="mySidebar">
            <div className="w3-container w3-display-container w3-padding-16">
               <NavLink className="w3-wide" to="/"><b>Logo</b></NavLink>
            </div>
            <div className="shopping-list"></div>
            <NavLink className="w3-bar-item w3-button w3-padding" to="/Wiki">Wiki</NavLink>
            <NavLink className="w3-bar-item w3-button w3-padding" to="/About">About</NavLink>
            <NavLink className="w3-bar-item w3-button w3-padding" to="/Admin">Portal</NavLink>
            <NavLink className="w3-bar-item w3-button w3-padding" to="/Contact">Contact</NavLink>
            <SideList />
         </nav>
      </div>
   </>
    );
}
 
export default Navigation;