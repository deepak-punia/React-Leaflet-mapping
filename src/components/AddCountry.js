import React, { useState } from "react";
import axios from "axios";
import {Button, Alert} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const AddCountry = ({ onclick }) => {
	const [inputFieldData, setinputFieldData] = useState("");
	const [err, seterr] = useState(false);

	//Validation is pending
	const validateCountry = async (country) => {
		let countrydata = [];
		try {
			let countries = await axios.get(
				"https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1"
			);

			countrydata = countries.data;

			console.log(countrydata);
			const contry = null;

			country = countrydata.find(
				(item) => item.country.toLowerCase() === country.toLowerCase().trim()
			);

			if (country === null || country === undefined) {
				return true;
			} else {
				return false;
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		let checker = await validateCountry(inputFieldData);
		console.log(checker);
		if (!checker) {
			onclick(inputFieldData);
			seterr(false);
			setinputFieldData("");
		} else {
			console.log("Invalid Country");
			seterr(true);
			setinputFieldData("");
			return;
		}
	};
	return (
		<>
			<input
				value={inputFieldData}
				onChange={(e) => setinputFieldData(e.target.value)}
			/>
			<Button variant="primary" size="sm" onClick={handleSubmit}>Add Country</Button>
			
			{(err?<Alert variant="danger">Invalid country.  X</Alert>:<></>)}
		</>
	);
};
export default AddCountry;
