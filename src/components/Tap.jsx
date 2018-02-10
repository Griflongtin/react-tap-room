import React from 'React';
import TapList from './TapList';
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

function Tap() {
  return (
    <div className="kegBox">
      <style jsx>{`
          .kegBox {
            margin: 0 auto;
            width: 60%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 10px;
          }
      `}</style>
      {kegsList.map((tapList, index) =>
        <TapList name={tapList.name}
          brewer={tapList.brewer}
          price={tapList.price}
          abv={tapList.abv}
          img={tapList.img}
          quantity={tapList.quantity}
          key={index}/>
      )}
    </div>
  );
}

export default Tap;
