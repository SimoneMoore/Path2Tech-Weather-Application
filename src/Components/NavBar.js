import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about/parameter">About</NavLink>
        {/* <NavLink to="/about/parameter">About</NavLink> Connected to the /:id parameter applied in App.js */}
        {/* A parameter functions as a search query that passes through a URL */}
        <p>{moment().format('MMMM Do h:mm a')}</p>
        <p>Simone was here</p>
    </nav>
  )
}

export default NavBar