import React from 'React';
import { Switch, Route } from 'react-router-dom';

import Tap from './Tap';
import AboutUs from './AboutUs';
import Inventory from './Inventory';
import InputForm from './InputForm';

import MotherEarth from '../Assets/mother-earth.png';
import Laurelwood from '../Assets/laurelwood.jpg';
import Stone from '../Assets/stone-logo.png';
import NewBelgium from '../Assets/new-belgium.jpg';

const kegsList = [
  {
    name: 'Cali Creamin',
    brewer: 'Mother Earth',
    price: 20,
    abv: 4.5,
    img: MotherEarth,
    quantity: 124
  },
  {
    name: 'Sintax',
    brewer: 'Mother Earth',
    price: 14,
    abv: 8,
    img: MotherEarth,
    quantity: 124
  },
  {
    name: 'Free Range Red',
    brewer: 'Laurelwood',
    price: 16,
    abv: 6,
    img: Laurelwood,
    quantity: 124
  },
  {
    name: 'Stone IPA',
    brewer: 'Stone',
    price: 15,
    abv: 6.5,
    img: Stone,
    quantity: 124
  },
  {
    name: 'Fat Tire',
    brewer: 'New Belgium',
    price: 20,
    abv: 4.5,
    img: NewBelgium,
    quantity: 124
  }
];

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: kegsList
    };
  }
  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=><Tap masterKegListPass={this.state.masterKegList} />} />
          <Route path='/inventory' render={()=><Inventory masterKegListPass={this.state.masterKegList} />} />
          <Route path='/inputForm' render={()=><InputForm />} />
          <Route path='/aboutUs' component={ AboutUs } />
        </Switch>
      </div>
    );
  }
}
export default Body;
