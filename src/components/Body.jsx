import React from 'React';
import { Switch, Route } from 'react-router-dom';

import Tap from './Tap';
import AboutUs from './AboutUs';

function Body() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Tap } />
        <Route path='/aboutUs' component={ AboutUs } />
      </Switch>
    </div>
  );
}

export default Body;
