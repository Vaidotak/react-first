import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const activeLink = ({isActive}) => isActive ? s.active : s.item;

const Navbar =()=>{
  
    return(
        <nav className={s.nav}>
      <div>
        <NavLink to='react-first/profile' className = {activeLink }>Profile</NavLink>
        </div>
      <div>
        <NavLink to='react-first/dialogs' className = {activeLink }>Messages</NavLink>
        </div>
      <div>
        <NavLink to='react-first/news' className = { activeLink }>News</NavLink>
        </div>
      <div>
        <NavLink to='react-first/music' className = { activeLink }>Music</NavLink>
        </div>
      <div>
        <NavLink to='react-first/settings' className = { activeLink }>Settings</NavLink>
        </div>
      
      </nav>
    )
}

export default Navbar;
