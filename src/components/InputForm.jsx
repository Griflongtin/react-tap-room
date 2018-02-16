import React from 'React';

function InputForm() {
  return (
    <div className="inputFormDiv">
      <div>
        <h1>Input a new keg</h1>
      </div>
      <form>
        <div>
          <label>
            Name:
            <input type="text" placeholder="Name Of Beer" />
          </label>
          <label>
            Brewer:
            <input type="text" placeholder="Brewery" />
          </label>
          <label>
            Price:
            <input type="number" />
          </label>
          <lable>
            ABV:
            <input type="number" />
          </lable>
          <lable>
            Brewer Logo link:
            <input type="text" />
          </lable>
          <lable>
            Quantity
            <input type="number" />
          </lable>
          <button type="onSubmit">Add Keg</button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
