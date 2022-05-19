import React, { useEffect, useState } from "react";

import fetchApi from "./api/covidData";
import Map from "./components/Map";

const App = () => {
	const [cordsData, setcordsData] = useState();
	const [loading, setloading] = useState(true);

	let cords = [];
	useEffect(() => {
		async function getData() {
			//new countris can be added BELOW IN ARRAY

			const countryList = ["india","china","canada","pakistan"];
			countryList.forEach(async(country)=>{
				let cordsTemp = await fetchApi(country);
				cords.push(cordsTemp)
			});
			setcordsData(cords);
			setloading(false);
		}
		getData();
	}, []);
	//console.log(cordsData);

	return loading ? (
		<div> Loading Data...</div>
	) : (
		<>
			<Map cordsData={cordsData} />
		</>
	);
};

export default App;
