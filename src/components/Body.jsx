import React from 'React';
import { Switch, Route } from 'react-router-dom';

import Tap from './Tap';
import AboutUs from './AboutUs';
import Inventory from './Inventory';

function Body() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Tap } />
        <Route path='/aboutUs' component={ AboutUs } />
        <Route path='/inventory' component={ Inventory } />
      </Switch>
    </div>
  );
}

export default Body;
