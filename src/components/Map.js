import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import DisplayData from "./DisplayData";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
 

const Map = ({ cordsData }) => {
	const center = [20, 77];
	
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

			{cordsData.map((obj, index) => {
				
				return (
					<Marker key={index} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} position={[obj.lat, obj.lng]}>
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
