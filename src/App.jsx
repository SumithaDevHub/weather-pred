import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card'; 
import DateTime from './components/DateTime';
import { Msg } from './components/Msg';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const cities = ['Bengaluru', 'Chennai', 'Salem', 'Delhi', 'Pune']; // List of cities
  const apiKey = 'YOUR_API_KEY_HERE'; 

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await Promise.all(
        cities.map(async (city) => {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          );
          const { name, main, weather } = response.data;
          return {
            city: name,
            temperature: main.temp,
            condition: weather[0].description,
            humidity: main.humidity,
            icon: `http://openweathermap.org/img/wn/${weather[0].icon}.png`,
          };
        })
      );
      setWeatherData(data);
    };

    fetchWeatherData();
  }, [cities, apiKey]);

  const currentdate = new Date();
  const currentTime = currentdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const currentDateString = currentdate.toLocaleDateString(); // Format the date as needed

  return (
    <>
      <div className="text-center my-5">
        <DateTime date={currentDateString} time={currentTime} /> 
      </div>
      <div><Msg message={"Good day ahead!"}/></div>
      <div className="flex flex-wrap justify-center">
        {weatherData.map((item) => (
          <Card 
            key={item.city}
            city={item.city}
            temperature={item.temperature}
            condition={item.condition}
            humidity={item.humidity}
            iconUrl={item.icon}
          />
        ))}
      </div>
    </>
  );
};

export default App;
