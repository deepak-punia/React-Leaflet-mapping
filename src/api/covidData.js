//get countries long and lat values from api
import axios from "axios";

const fetchApi = async (country) => {
	try {
		const countries = await axios.get(
			`https://disease.sh/v3/covid-19/countries/${country}`
		);

		const countrydata = countries.data;
		return {
			lat: countrydata.countryInfo.lat,
			lng: countrydata.countryInfo.long,

			country: countrydata.country,
			totalCases: countrydata.cases,
			todayCases: countrydata.todayCases,
			recovered: countrydata.recovered,
		};
	} catch (error) {
		console.log(error);
	}
};
//End
export default fetchApi;
