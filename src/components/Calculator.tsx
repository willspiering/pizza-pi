import { useState } from "react";
import CurrentResults from "./CurrentResults";

interface PizzaBuildState {
	id: string;
	size: number;
	unitPrice: number;
	numberOfPizzas: number;
	slices: number;
	areaOfPizza: number;
	totalArea: number;
	pricePerSqIn: number;
	pricePerSlice: number;
	totalPrice: number;
}

interface CalculatorProps {
	updateList: (build: PizzaBuildState) => void;
	toggleList: () => void;
}

// Pizza Utilities
//area of 1 pizza in sq.in
const areaOfPizza = (diameter: number): number => {
  let radius = diameter / 2;
  let pi = 3.14;
  let area = pi * (radius * radius);
  return area;
};

//area of total pizza count
const totalPizzaArea = (size: number, numberOfPizzas: number): number => {
  return areaOfPizza(size) * numberOfPizzas;
};
//price per sq inch
const pricePerSqIn = (unitPrice: number, totalPizzaArea: number, numberOfPizzas: number): number => {
  return (unitPrice * numberOfPizzas) / totalPizzaArea;
};
//price per slice
const pricePerSlice = (unitPrice: number, slicesPerPizza: number): number => {
  return unitPrice / slicesPerPizza;
};
// total cost
const totalPrice = (unitPrice: number, numberOfPizzas: number): number => {
  return unitPrice * numberOfPizzas;
};

export default function Calculator(props: CalculatorProps) {
  const [pizzaSize, setPizzaSize] = useState(18);
  const [pizzaPrice, setPizzaPrice] = useState(0);
  const [pizzaQuantity, setPizzaQuantity] = useState(1);
  const [pizzaSlices, setPizzaSlices] = useState(6);

  const handleSize = (e: string) => {
    setPizzaSize(Number(e));
  };

  const handlePrice = (e: string) => {
    setPizzaPrice(Number(e));
  };

  const handleQuantity = (e: string) => {
    setPizzaQuantity(Number(e));
  };

  const handleSlices = (e: string) => {
    setPizzaSlices(Number(e));
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

  const handleSubmit = (event: React.FormEvent) => {
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
