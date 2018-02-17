import React from 'react';
import Inventory from './Inventory';
import PropTypes from 'prop-types';


function Admin(props){
  let display = null;
  let _userName = null;
  let _password = null;
  function logIn(event) {
    event.preventDefault();
    props.onLogIn({userName: _userName.value, password: _password.value});
    _password.value= '';
  }
  if (props.adminAccess === true) {
    display = <Inventory masterKegListPass={props.masterKegListPass} currentRouterPath={props.currentRouterPath} />;
  } else {
    display = <div>
      <h1>Logging to see Keg Inventory</h1>
      <form onSubmit={logIn}>
        <div>
          <label>
              User Names:
            <input
              type="text"
              placeholder="User Names"
              ref={(input) => {_userName = input;}}/>
          </label>
          <label>
              Password:
            <input
              type="text"
              placeholder="Password"
              ref={(input) => {_password = input;}}/>
          </label>
          <button type='submit'>Log In</button>
        </div>
      </form>

    </div>;
  }
  return (
    <div>
      {display}
    </div>
  );
}
Admin.propTypes ={
  currentRouterPath: PropTypes.string,
  masterKegListPass: PropTypes.object,
  onLogIn: PropTypes.func,
  adminAccess: PropTypes.bool
};

export default Admin;
