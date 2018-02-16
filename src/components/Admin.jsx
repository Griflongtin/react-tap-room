import React from 'react';
import Inventory from './Inventory';
import PropTypes from 'prop-types';


function Admin(props){
  let display = null;
  let _userNames = null;
  let _password = null;
  function logIn(event) {
    event.preventDefault();
    alert('loging');
  }
  if (props.adminAccess === true) {
    display = <Inventory KegListPass={props.masterKegListPass} currentRouterPath={props.currentRouterPath} />;
  } else {
    display = <div>
      <h1>Logging to see Keg Inventory</h1>
      <form onSubmit={logIn}>
        <div>
          <label>
              User Names:
            <input
              type="text"
              placeholder="Name Of Beer"
              ref={(input) => {_userNames = input;}}/>
          </label>
          <label>
              Password:
            <input
              type="text"
              placeholder="Brewery"
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
  currentRouterPath: PropTypes.string.isRequired,
  masterKegListPass: PropTypes.object,
  adminAccess: PropTypes.bool
};

export default Admin;
