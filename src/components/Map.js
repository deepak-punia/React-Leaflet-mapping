import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import DisplayData from "./DisplayData";
import "leaflet/dist/leaflet.css";

const Map = ({ cordsData }) => {
	const center = [20, 77];
	console.log("map:", cordsData);
	return (
		<MapContainer
			style={{ width: "100%", height: "100vh" }}
			center={center}
			zoom={3}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>

			{cordsData.map((obj) => {
				return (
					<Marker position={[obj.lat, obj.lng]}>
						<Popup>
							<DisplayData cordsData={obj} />
						</Popup>
					</Marker>
				);
			})}
		</MapContainer>
	);
};
export default Map;
