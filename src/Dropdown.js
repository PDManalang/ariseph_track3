import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from './store/actions/authActions';

function Dropdown(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className='dropdown-link'                
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title1}
              </Link>
              <Link 
                className={item.cName}
                to={item.path}
                onClick={props.signOut}>
                  {item.title2}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(Dropdown);