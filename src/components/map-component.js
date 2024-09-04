import React from 'react';
import SingleMap from './single-map';

const data = [ //Static data
  {
    latitude: 25.2663241,
    longitude: 55.3900532,
    computers: 10,
    topology: 'star',
  },
  {
    latitude: 25.2671152,
    longitude: 55.388718,
    computers: 15,
    topology: 'ring',
  },
];

const MapComponent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', padding: '20px' }}>
      <SingleMap data={data[0]} />
      <SingleMap data={data[1]} />
    </div>
  );
};

export default MapComponent;
