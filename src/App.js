import React, { useEffect, useState } from "react";

import fetchApi from "./api/covidData";
import Map from "./components/Map";
import "leaflet/dist/leaflet.css";
import AddCountry from "./components/AddCountry";

const App = () => {
	const [cordsData, setcordsData] = useState([]);
	const [loading, setloading] = useState(true);
	const [countryList, setcountryList] = useState([
		"india",
		"china",
		"canada",
		"pakistan",
	]);

	const handleChildOnclick = (country) => {
		setcountryList((countryList) => [...countryList, country]);
	};
	useEffect(() => {
		async function getData() {
			countryList.forEach(async (country) => {
				let cordsTemp = await fetchApi(country);
				setcordsData((cordsData) => [...cordsData, cordsTemp]);
			});

			setloading(false);
		}
		getData();
	}, [countryList]);

	return loading ? (
		<div> Loading Data...</div>
	) : (
		<>
			<AddCountry onclick={handleChildOnclick} />
			<Map cordsData={cordsData} />
		</>
	);
};

export default App;
