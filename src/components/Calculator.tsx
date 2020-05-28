import * as React from "react";
import CurrentResults from "./CurrentResults";

// Pizza Utilities
//area of 1 pizza in sq.in
const areaOfPizza = diameter => {
  let radius = diameter / 2;
  let pi = 3.14;
  let area = pi * (radius * radius);
  return area;
};

//area of total pizza count
const totalPizzaArea = (size, numberOfPizzas) => {
  return areaOfPizza(size) * numberOfPizzas;
};
//price per sq inch
const pricePerSqIn = (unitPrice, totalPizzaArea, numberOfPizzas) => {
  return (unitPrice * numberOfPizzas) / totalPizzaArea;
};
//price per slice
const pricePerSlice = (unitPrice, slicesPerPizza) => {
  return unitPrice / slicesPerPizza;
};
// total cost
const totalPrice = (unitPrice, numberOfPizzas) => {
  return unitPrice * numberOfPizzas;
};

export default function Calculator(props) {
  const [pizzaSize, setPizzaSize] = React.useState(18);
  const [pizzaPrice, setPizzaPrice] = React.useState(0);
  const [pizzaQuantity, setPizzaQuantity] = React.useState(1);
  const [pizzaSlices, setPizzaSlices] = React.useState(6);

  const handleSize = e => {
    setPizzaSize(e);
  };

  const handlePrice = e => {
    setPizzaPrice(e);
  };

  const handleQuantity = e => {
    setPizzaQuantity(e);
  };

  const handleSlices = e => {
    setPizzaSlices(e);
  };

  function generateId() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }

  //resetForm

  const buildPizza = () => {
    console.log("Generate ID: ", generateId());
    let newBuild = {
      id: generateId(),
      size: Number(pizzaSize),
      unitPrice: Number(pizzaPrice),
      numberOfPizzas: Number(pizzaQuantity),
      slices: Number(pizzaSlices),
      areaOfPizza: areaOfPizza(pizzaSize),
      totalArea: totalPizzaArea(pizzaSize, pizzaQuantity),
      pricePerSqIn: pricePerSqIn(
        pizzaPrice,
        totalPizzaArea(pizzaSize, pizzaQuantity),
        pizzaQuantity
      ),
      pricePerSlice: pricePerSlice(pizzaPrice, pizzaSlices),
      totalPrice: totalPrice(pizzaPrice, pizzaQuantity)
    };
    props.updateList(newBuild);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <CurrentResults
        pricePerSqIn={pricePerSqIn(
          pizzaPrice,
          totalPizzaArea(pizzaSize, pizzaQuantity),
          pizzaQuantity
        )}
        totalPrice={totalPrice(pizzaPrice, pizzaQuantity)}
        pricePerSlice={pricePerSlice(pizzaPrice, pizzaSlices)}
      />
      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="form-item">
          <div className="label">Pizza Size</div>
          <input
            type="number"
            name="pizza-size"
            id="pizza-size"
            value={pizzaSize}
            onChange={e => handleSize(e.target.value)}
          />
        </div>
        <div className="form-item">
          <div className="label">Unit Price</div>
          <input
            type="number"
            name="price-per-unit"
            id="price-per-unit"
            value={pizzaPrice}
            onChange={e => handlePrice(e.target.value)}
          />
        </div>
        <div className="form-item">
          <div className="label">Number of Pizzas</div>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={pizzaQuantity}
            onChange={e => handleQuantity(e.target.value)}
          />
        </div>
        <div className="form-item">
          <div className="label">Number of Slices</div>
          <input
            type="number"
            name="number-slices"
            id="number-slices"
            value={pizzaSlices}
            // onChange={e => handleSlices(e.target.value)}
            onChange={e => handleSlices(e.target.value)}
          />
        </div>
        <div className="footer">
          <button className="save-btn" onClick={buildPizza}>
            Save
          </button>
          <button className="view-list-btn" onClick={props.toggleList}>
            List
          </button>
        </div>
      </form>
    </>
  );
}
