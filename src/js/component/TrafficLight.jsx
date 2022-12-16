import React, { useState } from 'react';

const TrafficLight = () => {
  const [light, setLight] = useState('red');

  const handleClick = color => {
    setLight(color);
  };

  return (
    <div className="traffic-light mt-5 d-flex">
      <div className={`light red ${light === 'red' ? 'active' : ''}`} onClick={() => handleClick('red')}/>
      <div className={`light yellow ${light === 'yellow' ? 'active' : ''}`} onClick={() => handleClick('yellow')}/>
      <div className={`light green ${light === 'green' ? 'active' : ''}`} onClick={() => handleClick('green')}/>
    </div>
  );
};

export default TrafficLight;
