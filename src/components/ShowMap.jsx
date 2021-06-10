import React from "react";
import { MapContainer, TileLayer, Marker,} from 'react-leaflet';
import L from "leaflet";
import markerIcon from "../images/icon-location.svg";

function ShowMap({ position }){
  const icon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [30, 40],
    className: "mapcontainer__icon",
  });
  const coordinates = L.latLng(position.lat, position.lng);
        
  return(
  <div className="mapcontainer">
  <MapContainer 
  className="mp-cont"
  center={coordinates} zoom={13} zoomControl={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={coordinates} icon={icon}>
    </Marker>
  </MapContainer>
  </div>
);
}

export default ShowMap;