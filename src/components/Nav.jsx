import React from 'React';
import { Link } from 'react-router-dom';

function Nav() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  };
  return (
    <div>
      <Link to="/" style={linkStyle}>Taps</Link>
      <Link to="/aboutUs" style={linkStyle}>About Us</Link>
    </div>
  );
}

export default Nav;
