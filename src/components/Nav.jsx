import React from 'React';
import { Link } from 'react-router-dom';

function Nav() {
  const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
  };
  return (
    <div>
      <style jsx>{`
          ul {
            display: flex;
            background-color: gray;
          }
          li {
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 145px;
            height 45px;
          }
          li:hover {
            background-color: brown;
          }
      `}</style>
      <ul>
        <Link to="/" style={linkStyle}><li>Taps</li></Link>
        <Link to="/inputForm" style={linkStyle}><li>Input New Keg</li></Link>
        <Link to="/inventory" style={linkStyle}><li>Keg Inventory</li></Link>
        <Link to="/aboutUs" style={linkStyle}><li>About Us</li></Link>
      </ul>
    </div>
  );
}

export default Nav;
