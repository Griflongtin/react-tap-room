import React from 'React';
import { Switch, Route } from 'react-router-dom';

import Tap from './Tap';
import AboutUs from './AboutUs';
import Inventory from './Inventory';
import InputForm from './InputForm';
import Admin from './Admin';
import Error404 from './Error404';

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
      masterKegList: kegsList,
      adminAccess: false
    };
    this.handleAddingKeg = this.handleAddingKeg.bind(this);
  }
  handleAddingKeg(newKeg){
    let newMasterKegList = Object.assign({}, this.state.masterKegList,  {newKeg});
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=><Tap masterKegListPass={this.state.masterKegList} />} />
          <Route path='/admin' render={(props)=><Admin masterKegListPass={this.state.masterKegList} currentRouterPath={props.location.pathname} adminAccess={this.state.adminAccess} />} />
          <Route path='/inputForm' render={()=><InputForm newKegInput={this.handleAddingKeg}/>} />
          <Route path='/aboutUs' component={ AboutUs } />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}
export default Body;
