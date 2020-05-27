import * as React from "react";

export default function CurrentResults(props: CurrentResultsProps) {
	return (
		<div className="current-wrapper">
			<div className="current-value">
				<div className="label">Price Per Sq Inch</div>
				<div className="result">${props.pricePerSqIn.toFixed(2)}</div>
			</div>
			<div className="current-value">
				<div className="label">Total Cost</div>
				<div className="result">${props.totalPrice.toFixed(2)}</div>
			</div>
			<div className="current-value">
				<div className="label">Price Per Slice</div>
				<div className="result">${props.pricePerSlice.toFixed(2)}</div>
			</div>
		</div>
	);
}

export interface CurrentResultsProps {
	pricePerSqIn: number;
	totalPrice: number;
	pricePerSlice: number;
}
