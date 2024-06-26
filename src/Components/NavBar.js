import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        {/* <NavLink to="/about/parameter">About</NavLink> Connected to the /:id parameter applied in App.js */}
        {/* A parameter functions as a search query that passes through a URL */}
    </nav>
  )
}

export default NavBar