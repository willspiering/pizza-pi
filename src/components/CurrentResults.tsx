import * as React from "react";

export default function CurrentResults(props: CurrentResultsProps) {
  return (
    <div className="current-wrapper">
      <div className="current-value">
        <div className="label">Price Per Sq Inch</div>
        <div className="result">${props.pricePerSqIn}</div>
      </div>
      <div className="current-value">
        <div className="label">Total Cost</div>
        <div className="result">${props.totalPrice}</div>
      </div>
      <div className="current-value">
        <div className="label">Price Per Slice</div>
        <div className="result">${props.pricePerSlice}</div>
      </div>
    </div>
  );
}

export interface CurrentResultsProps {
  pricePerSqIn: number;
  totalPrice: number;
  pricePerSlice: number;
}
