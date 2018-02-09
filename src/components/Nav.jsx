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
            padding: 10px;
            text-align: center;
            width: 145px;
            border: 2px dashed red;
          }
          li:hover {
            background-color: brown;
          }
      `}</style>
      <ul>
        <Link to="/" style={linkStyle}><li>Taps</li></Link>
        <Link to="/" style={linkStyle}><li>Input New Keg</li></Link>
        <Link to="/" style={linkStyle}><li>Keg Inventory</li></Link>
        <Link to="/aboutUs" style={linkStyle}><li>About Us</li></Link>
      </ul>
    </div>
  );
}

export default Nav;
