import React, {useState} from "react";
import { Link } from "react-router-dom";
import HeaderSignedIn from "./HeaderSignedIn";
import HeaderSignedOut from "./HeaderSignedOut";
import { connect } from 'react-redux';

const Header = (props) => {
  const { auth, profile } = props;
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);
  // console.log(auth);
  const links = auth.uid ? <HeaderSignedIn profile={profile} /> : <HeaderSignedOut />;
  return (
    <nav className="navbar">
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="https://www.arise.ph/wp-content/uploads/2021/10/arise-new-logo-small-high-res.png" alt="arise-logo"></img>
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      { links }
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Header)