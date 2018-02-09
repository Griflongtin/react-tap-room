import React from 'React';
import TapList from './TapList';

const kegsList = [
  {
    name: 'Cali Creamin',
    brewer: 'Mother Earth',
    price: 20,
    abv: 4.5,
    img: 'motherearth',
    quantity: 124
  },
  {
    name: 'Sintax',
    brewer: 'Mother Earth',
    price: 14,
    abv: 8,
    img: 'motherearth',
    quantity: 124
  },
  {
    name: 'Free Range Red',
    brewer: 'Laurelwood',
    price: 16,
    abv: 6,
    img: 'laurelwood',
    quantity: 124
  },
  {
    name: 'Stone IPA',
    brewer: 'Stone',
    price: 15,
    abv: 6.5,
    img: 'stone',
    quantity: 124
  },
  {
    name: 'Fat Tire',
    brewer: 'New Belgium',
    price: 20,
    abv: 4.5,
    img: 'newbelgium',
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
            border: 1px dashed red;
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
