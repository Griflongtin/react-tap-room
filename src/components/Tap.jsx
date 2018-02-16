import React from 'React';
import TapList from './TapList';
import PropTypes from 'prop-types';

function Tap(props) {
  function newGlass(){
    alert('Here you Go');
  }
  return (
    <div>
      <style jsx>{`
          .kegBox {
            margin: 0 auto;
            width: 60%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 10px;
          }
          h1 {
            text-align: center;
          }
          .hide {
            display: none;
          }
          button {
            margin: 0 10px;
            height: 40px;
            width:300px;
            background-color: gray;
            border: 1px solid red;
          }
      `}</style>
      <h1>Beers For Sale</h1>
      <div className="kegBox">
        {Object.keys(props.masterKegListPass).map(function(kegId) {
          let keg = props.masterKegListPass[kegId];
          return <div className={(keg.quantity >= 1)? 'show' : 'hide'}>
            <TapList name={keg.name}
              brewer={keg.brewer}
              price={keg.price}
              abv={keg.abv}
              img={keg.img}
              quantity={keg.quantity}
              key={kegId}/>
            <button onClick={newGlass}>Get a Glass</button>
          </div>;
        })}
      </div>
    </div>
  );
}
Tap.propTypes ={
  masterKegListPass: PropTypes.object
};

export default Tap;
