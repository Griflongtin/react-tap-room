import React from 'React';
import { Switch, Route } from 'react-router-dom';

import Tap from './Tap';
import AboutUs from './AboutUs';
import Inventory from './Inventory';
import InputForm from './InputForm';

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {}
    };
  }
  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Tap } />
          <Route path='/aboutUs' component={ AboutUs } />
          <Route path='/inventory' component={ Inventory } />
          <Route path='/inputForm' component={ InputForm } />
        </Switch>
      </div>
    );
  }
}
export default Body;
