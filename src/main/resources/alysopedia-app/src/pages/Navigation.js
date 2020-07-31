import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Wiki">Wiki</NavLink>
          <NavLink to="/About">About</NavLink>
       </div>
    );
}
 
export default Navigation;