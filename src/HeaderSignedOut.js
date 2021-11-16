import React, {useState} from 'react';
import { Link } from "react-router-dom";

const HeaderSignedOut = () => {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
      <nav className='navbar'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/signin' className='nav-links' onClick={closeMobileMenu}>
              Sign In
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/signup' className='nav-links' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
        </>
    );
    
}

export default HeaderSignedOut;
