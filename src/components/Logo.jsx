import React from 'React';
import ReactBeerLogo from '../Assets/beer-logo.png';
function Logo() {
  const logoStyles = {
    width: 100
  };
  return (
    <div>
      <img style={logoStyles} src={ReactBeerLogo} />
    </div>
  );
}

export default Logo;
