import React from 'react';

export const Msg = (props) => {
  return (
    <div className="bg-green-200 border-l-4 border-r-4 border-green-600 text-green-500 p-3 m-3 rounded-lg text-center shadow-md">
      <p className="font-semibold">{props.message}</p>
    </div>
  );
}
