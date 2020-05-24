import * as React from "react";
import styled from "styled-components";

export default function ListSection(props) {
  const showPlaceHolder = () => {
    return (
      <StyledPlaceholder>
        <h3>Save your pizza builds here</h3>
      </StyledPlaceholder>
    );
  };
  const renderListContent = () => {
    if (!props.list.length) {
      return showPlaceHolder();
    } else {
      return renderListItems();
    }
  };
  const renderListItems = () => {
    return props.list.map(item => {
      return (
        <ListItem
          key={item.id}
          id={item.id}
          pricePerSqIn={item.pricePerSqIn}
          pricePerSlice={item.pricePerSlice}
          totalPrice={item.totalPrice}
          unitPrice={item.unitPrice}
          quantity={item.numberOfPizzas}
          pizzaSize={item.size}
          slicesPerPizza={item.slices}
          removeBuild={props.removePizzaBuild}
        />
      );
    });
  };

  return (
    <StyledList className="compare-screen">
      <ul className="compare-list">{renderListContent()}</ul>
      <div className="footer">
        <button onClick={props.toggleList}>Close</button>
      </div>
    </StyledList>
  );
}

function ListItem(props: ListItemProps) {
  return (
    <li className="list-item">
      <div className="main-stats">
        <div className="value-wrapper">
          <div className="label">Price Per Sq Inch</div>
          <div className="value">${props.pricePerSqIn}</div>
        </div>
        <div className="value-wrapper">
          <div className="label">Price per Slice</div>
          <div className="value">${props.pricePerSlice}</div>
        </div>
      </div>
      <ul className="secondary-stats">
        <li className="value-wrapper">
          <div className="label">Total Cost:</div>
          <div className="value">${props.totalPrice}</div>
        </li>
        <li className="value-wrapper">
          <div className="label">Unit Price:</div>
          <div className="value">${props.unitPrice}</div>
        </li>
        <li className="value-wrapper">
          <div className="label">Quantiy:</div>
          <div className="value">{props.quantity}</div>
        </li>
        <li className="value-wrapper">
          <div className="label">Pizza Size:</div>
          <div className="value">{props.pizzaSize}"</div>
        </li>
        <li className="value-wrapper">
          <div className="label">Slices per Pizza:</div>
          <div className="value">{props.slicesPerPizza}</div>
        </li>
      </ul>
      <button
        className="remove-item-btn"
        onClick={() => props.removeBuild(props.id)}
      >
        X
      </button>
    </li>
  );
}

export interface ListItemProps {
  id: string;
  pricePerSqIn: number;
  pricePerSlice: number;
  totalPrice: number;
  unitPrice: number;
  quantity: number;
  pizzaSize: number;
  slicesPerPizza: number;
  removeBuild: (id: string) => void;
}

const StyledList = styled.div`
  background: #68b684ff;
  padding: 20px;
  flex: 1 2 645px;
  display: flex;
  flex-direction: column;
  .compare-list {
    margin: 0;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .footer {
    @media screen and (min-width: 600px){
     display: none; 
    }
    display: flex;
    /* display: none; */
    justify-content: center;
      margin-top:15px;
      button {
        background: #617073ff;
        color: white;
        border: none;
        outline: none;
        font-size: 1.2em;
        padding: 10px 20px;
        border-radius: 10px;
        flex: 1;
        &:hover {
          opacity: 0.8;
        }
      }  
  }
  .list-item {
    flex: 0 0 140px;
    max-height: 170px;
    background: white;
    overflow: hidden;
    margin: 5px;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .main-stats {
      padding: 10px 15px;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      .label {
        font-size: 0.9em;
      }
      .value {
        font-size: 1.8em;
        font-weight: bold;
      }
    }
    .secondary-stats {
      padding: 10px 5px;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      list-style: disc;
      margin-right: 20px;
      .value-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .label {
        font-size: 0.9em;
        margin-right: 5px;
      }
    }
    .remove-item-btn {
      background: none;
      border: none;
      outline: none;
      color: lightgray;
      padding: 12px;
      font-weight: bold;
      font-size: 1.5em;
      &:active,
      &:focus {
        outline: none;
      }
      &:hover {
        background: #db504aff;
        color: white;
      }
    }
`;

const StyledPlaceholder = styled.div`
  color: #171a21ff;
  font-weight: bold;
  text-align: center;
  display: flex;
  height: 100%;
  align-items: center;
  h3 {
    width: 100%;
  }
`;
