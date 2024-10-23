import React from 'react';

const Card = ({ city, temperature, condition, humidity, iconUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 m-5 transition-transform transform hover:scale-105">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">{city}</h1>
        <h2 className="text-xl text-gray-700 mt-2">Temperature: {temperature} °C</h2>
        <h2 className="text-xl text-gray-700">Condition: {condition}</h2>
        <h2 className="text-xl text-gray-700">Humidity: {humidity} %</h2>
        {iconUrl && <img src={iconUrl} alt={condition} className="w-16 h-16 mt-3" />}
      </div>
    </div>
  );
};

export default Card;
