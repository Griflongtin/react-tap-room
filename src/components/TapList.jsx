import React from 'React';
import PropTypes from 'prop-types';

function TapList(props) {
  return (
    <div className="kegDiv">
      <style jsx>{`
          .kegDiv {
            width: 300px;
          }

      `}</style>
      <img scr={props.img}></img>
      <h2>Name: {props.name}</h2>
      <h2>Brewer: {props.brewer}</h2>
      <h4>Price: {props.price}</h4>
      <h5>abv: {props.abv}</h5>
      <h5>Quantity: {props.quantity}</h5>
    </div>
  );
}

TapList.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};


export default TapList;
