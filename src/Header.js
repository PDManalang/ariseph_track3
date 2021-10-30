import React, {useState} from 'react';
import { Link } from "react-router-dom";

//CSS
import './css/Header.css'

const Header = () => {
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

    return (
        <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img src="https://www.arise.ph/wp-content/uploads/2021/10/arise-new-logo-small-high-res.png" alt="arise-logo"></img>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Archive
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/profile'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              My Profile <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
      </nav>
        </>
    );
    
}

export default Header;
