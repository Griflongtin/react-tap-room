import React from 'React';
import { Link } from 'react-router-dom';

function Nav() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  };
  return (
    <div>
      <style jsx>{`
          ul {
            display: flex;
          }
      `}</style>
      <ul>
        <li>
          <Link to="/" style={linkStyle}>Taps</Link>
        </li>
        <li>
          <Link to="/" style={linkStyle}>Input New Keg</Link>
        </li>
        <li>
          <Link to="/" style={linkStyle}>Keg Inventory</Link>
        </li>
        <li>
          <Link to="/aboutUs" style={linkStyle}>About Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
