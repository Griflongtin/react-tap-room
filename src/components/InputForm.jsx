import React from 'react';
import PropTypes from 'prop-types';

function InputForm(props) {
  let _names = null;
  let _brewer = null;
  let _price = null;
  let _abv = null;
  let _logo = null;
  let _quantity = null;

  function handleNewKegForm(event) {
    event.preventDefault();
    props.newKegInput({name: _names.value, brewer: _brewer.value, price: _price.value, abv: _abv.value, img: _logo.value, quantity: _quantity.value});
    _names.value = '';
    _brewer.value = '';
    _price.value = '';
    _abv.value = '';
    _logo.value = '';
    _quantity.value = '';
  }
  return (
    <div className="inputFormDiv">
      <div>
        <h1>Input a new keg</h1>
      </div>
      <form onSubmit={handleNewKegForm}>
        <div>
          <label>
            Name:
            <input
              type="text"
              placeholder="Name Of Beer"
              ref={(input) => {_names = input;}}/>
          </label>
          <label>
            Brewer:
            <input
              type="text"
              placeholder="Brewery"
              ref={(input) => {_brewer = input;}}/>
          </label>
          <label>
            Price:
            <input
              type="number"
              placeholder="Price"
              ref={(input) => {_price = input;}}/>
          </label>
          <lable>
            ABV:
            <input
              type="number"
              placeholder="ABV"
              ref={(input) => {_abv = input;}}/>
          </lable>
          <lable>
            Brewer Logo link:
            <input
              type="text"
              placeholder="Link to Logo"
              ref={(input) => {_logo = input;}}/>
          </lable>
          <lable>
            Quantity
            <input
              type="number"
              placeholder="Number"
              ref={(input) => {_quantity = input;}}/>
          </lable>
          <button type='submit'>Add Keg</button>
        </div>
      </form>
    </div>
  );
}

InputForm.propTypes = {
  newKegInput: PropTypes.func
};

export default InputForm;
