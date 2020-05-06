import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './navbar.module.css';

const Navbar=()=>{
  return(
          <div className='style.navbar'>
            <div><NavLink to='/'>Главная</NavLink></div>
            <div><NavLink to='/eventlog'>Журнал событий</NavLink></div>
          </div>
        )
};
export default Navbar;
