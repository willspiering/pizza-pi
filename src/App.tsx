import * as React from "react";
import FormSection from "./components/FormSection";
import Calculator from "./components/Calculator";
import ListSection from "./components/ListSection";
import useViewport from "./hooks/useViewport";
import usePersistedState from "./hooks/usePersistedState";
import styled from "styled-components";
import "@pwabuilder/pwaupdate";

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

// function PwaUpdate() {
// 	return <pwa-update></pwa-update>;
// }

export default function App() {
	const [showList, setShowList] = React.useState(false);
	const [pizzaList, setPizzaList] = usePersistedState<PizzaBuildState[]>([], "PizzaList");
	console.log("PizzaList: ", pizzaList);
	const width = useViewport();
	// TODO: setup good mobile breakpoint
	const mobile = 600;

	let addPizzaBuild = (newPizzaBuild) => {
		setPizzaList((pizzaList) => pizzaList.concat(newPizzaBuild));
	};

	let removePizzaBuild = (id) => {
		setPizzaList((pizzaList) => pizzaList.filter((t) => t.id !== id));
	};

	let toggleList = () => setShowList(!showList);

	return (
		<StyledApp>
			<pwa-update swpath="./serviceworker"></pwa-update>
			{(!showList || width > mobile) && (
				<FormSection>
					<Calculator updateList={addPizzaBuild} toggleList={toggleList} />
				</FormSection>
			)}
			{(showList || width > mobile) && (
				<ListSection list={pizzaList} removePizzaBuild={removePizzaBuild} toggleList={toggleList} />
			)}
		</StyledApp>
	);
}

const StyledApp = styled.div`
	background-color: #617073ff;
	display: flex;
	width: 100vw;
	height: 100vh;
	min-height: -webkit-fill-available;
	@media screen and (min-width: 600px) {
		width: auto;
		height: 704px;
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 3px 4px 20px 2px #333;
	}
`;
