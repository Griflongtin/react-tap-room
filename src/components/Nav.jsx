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
    </div>
  );
}

export default Nav;
