import React from 'react';

const Date = (props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 m-5 max-w-xs mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-800">Date: {props.date}</h1>
        <h1 className="text-2xl font-bold text-gray-800">Time: {props.time}</h1>
      </div>
    </div>
  );
}

export default Date;
