import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from './store/actions/authActions';
import { NavLink } from 'react-router-dom';

//CSS
import Dropdown from './Dropdown';
import './css/Header.css'

const HeaderSignedIn = (props) => {
  
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const closeMobileMenu = () => setClick(false);

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
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Calendar
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/archive' className='nav-links' onClick={closeMobileMenu}>
              Archive
            </Link>
          </li>
          <li className='nav-item'>
            <NavLink to='/profile' className='round' style={{ textDecoration: 'none' }}> 
                { props.profile.initials}
            </NavLink>
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapDispatchToProps)(HeaderSignedIn);
