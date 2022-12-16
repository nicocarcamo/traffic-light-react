import React, { useState } from 'react';

const TrafficLight = () => {
  const [light, setLight] = useState('red');

  return (
    <div className="traffic-light mt-5 d-flex">
      <div className={`light red ${light === 'red' ? 'active' : ''}`} onClick={() => setLight('red')}/>
      <div className={`light yellow ${light === 'yellow' ? 'active' : ''}`} onClick={() => setLight('yellow')}/>
      <div className={`light green ${light === 'green' ? 'active' : ''}`} onClick={() => setLight('green')}/>
    </div>
  );
};

export default TrafficLight;
