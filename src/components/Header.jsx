import React from 'React';
import Logo from './Logo';
import Nav from './Nav';
function Header() {
  return (
    <div className='HeaderDiv'>
      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          background-color: black;
        }
      `}</style>
      <Logo />
      <Nav />
    </div>
  );
}

export default Header;
