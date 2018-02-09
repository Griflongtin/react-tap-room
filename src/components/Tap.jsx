import React from 'React';
import TapList from './TapList';

const kegs = [
  {
    name: 'Cali Creamin',
    brewer: 'Mother Earth',
    price: 'green',
    abv: 4.5,
    img: 'motherearth',
    quantity: 124
  },
  {
    name: 'Sintax',
    brewer: 'Mother Earth',
    price: 'red', abv: 8,
    img: 'motherearth',
    quantity: 124
  },
  {
    name: 'Free Range Red',
    brewer: 'Laurelwood',
    price: 'green',
    abv: 6,
    img: 'laurelwood',
    quantity: 124
  },
  {
    name: 'Stone IPA',
    brewer: 'Stone',
    price: 'red',
    abv: 6.5,
    img: 'stone',
    quantity: 124
  },
  {
    name: 'Fat Tire',
    brewer: 'New Belgium',
    price: 'purple',
    abv: 4.5,
    img: 'newbelgium',
    quantity: 124
  }
];

function Tap() {
  return (
    <div>
      <p>Tap Room</p>
    </div>
  );
}

export default Tap;
