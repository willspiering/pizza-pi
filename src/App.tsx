import * as React from "react";
import FormSection from "./components/FormSection";
import Calculator from "./components/Calculator";
import ListSection from "./components/ListSection";
import useViewport from "./hooks/useViewport";
import styled from "styled-components";

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

export default function App() {
  const [showList, setShowList] = React.useState(false);
  const [pizzaList, setPizzaList] = React.useState<PizzaBuildState[]>([]);
  console.log("PizzaList: ", pizzaList);
  const width = useViewport();
  // TODO: setup good mobile breakpoint
  const mobile = 600;

  let addPizzaBuild = newPizzaBuild => {
    setPizzaList(pizzaList => pizzaList.concat(newPizzaBuild));
  };

  let removePizzaBuild = id => {
    setPizzaList(pizzaList => pizzaList.filter(t => t.id !== id));
  };

  let toggleList = () => setShowList(!showList);

  return (
    <StyledApp>
      {(!showList || width > mobile) && (
        <FormSection>
          <Calculator updateList={addPizzaBuild} toggleList={toggleList} />
        </FormSection>
      )}
      {(showList || width > mobile) && (
        <ListSection
          list={pizzaList}
          removePizzaBuild={removePizzaBuild}
          toggleList={toggleList}
        />
      )}
    </StyledApp>
  );
}

const StyledApp = styled.div`
  background-color: #617073ff;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media screen and (min-width: 600px) {
    width: auto;
    height: 704px;
    border-radius: 20px;
  }
`;
