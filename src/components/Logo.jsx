import React from 'React';
import ReactBeerLogo from '../Assets/beer-logo.png';
function Logo() {
  const logoStyles = {
    height: 40,
    filter: 'invert(100%)'
  };
  return (
    <div>
      <img style={logoStyles} src={ReactBeerLogo} />
    </div>
  );
}

export default Logo;
