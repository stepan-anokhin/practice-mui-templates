import React from "react";
import PropTypes from 'prop-types';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';


const center = [54.83728, 83.09964];

function randomPlace(center, radius) {
    const [x0, y0] = center;
    let x = x0 + radius * (2 * Math.random() - 1);
    let y = y0 + radius * (2 * Math.random() - 1);
    return [x, y];
}

const markers = [
    [54.83458448481622, 83.10350913023585],
    [54.840656200271816, 83.09678516760563],
    [54.84024023269789, 83.10227725548344],
    [54.84018616960349, 83.10347104195799],
    [54.8371598863059, 83.09920529368705],
    [54.83871218001631, 83.09953257773984],
    [54.835395229113786, 83.09874191459352],
    [54.836604531890615, 83.10417257197396],
    [54.83972319575006, 83.09985580434879],
    [54.83250477775254, 83.09729518756463],
];


const LeafletMap = ({className}) => (
    <Map className={className} center={center} zoom={15} maxZoom={19}>
        <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
            <Marker position={center}>
                <Popup>A pretty CSS3 popup.<br/>Easily customizable.</Popup>
            </Marker>
            {markers.map(pos => (
                <Marker position={pos}/>
            ))}
        </MarkerClusterGroup>
    </Map>
);


LeafletMap.propTypes = {
    className: PropTypes.string,
};

export default LeafletMap;