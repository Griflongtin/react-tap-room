import React from 'react';
import TapList from './TapList';
import PropTypes from 'prop-types';

function Inventory(props) {
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
      `}</style>
      <h1>Keg Inventory</h1>
      <div className="kegBox">
        {Object.keys(props.masterKegListPass).map(function(kegId) {
          let keg = props.masterKegListPass[kegId];
          return <TapList name={keg.name}
            brewer={keg.brewer}
            price={keg.price}
            abv={keg.abv}
            quantity={keg.quantity}
            key={kegId}/>;
        })}
      </div>
    </div>
  );
}
Inventory.propTypes ={
  masterKegListPass: PropTypes.object
};

export default Inventory;
