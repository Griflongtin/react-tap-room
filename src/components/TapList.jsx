import React from 'React';
import PropTypes from 'prop-types';

function TapList(props) {
  return (
    <div>
      <img scr={props.img}></img>
      <h2>Name: {props.name}</h2>
      <h2>Brewer: {props.brewer}</h2>
      <h4>Price: {props.price}</h4>
      <h5>abv: {props.abv}</h5>
      <h5>Quantity: {props.quantity}</h5>
    </div>
  );
}

Kegs.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired
};


export default TapList;
