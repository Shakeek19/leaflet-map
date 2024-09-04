import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import DynamicIconSize from './dynamic-icon-size';
import { generateComputerPositions, computerIcon, centerIcon } from './map-icons';

const SingleMap = ({ data }) => {
  const [iconSize, setIconSize] = useState([12, 12]); // Initial icon size
  const centerPosition = [data.latitude, data.longitude];

  const positions = generateComputerPositions(centerPosition, data.computers);

  const lines =
    data.topology === 'star'
      ? positions.map((pos) => [centerPosition, pos])
      : positions.map((pos, index, arr) => [pos, arr[(index + 1) % arr.length]]);

  return (
    <MapContainer center={centerPosition} minZoom={1} zoom={18} style={{ height: '93vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <DynamicIconSize setIconSize={setIconSize} mapCenter={centerPosition} />

      {data.topology === 'star' &&
        <Marker position={centerPosition} icon={centerIcon(iconSize)}>
          <Popup>Router/Switch</Popup>
        </Marker>
      }

      {positions.map((position, index) => (
        <Marker key={index} position={position} icon={computerIcon(iconSize)}>
          <Popup>Computer {index + 1}</Popup>
        </Marker>
      ))}

      {lines.map((line, index) => (
        <Polyline key={index} positions={line} color="green" />
      ))}
    </MapContainer>
  );
};

export default SingleMap;
