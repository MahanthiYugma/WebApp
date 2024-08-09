import React, { useState } from 'react';
import { getWeatherByCity } from './weatherService';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const data = await getWeatherByCity(city);
    setWeatherData(data);
    setLoading(false);
  };

  return (
    <div className="app">
    
     <div className="search-bar">
     <h1>Weather in your city</h1>
      <input 
      type="text" 
      placeholder="Enter City" 
      value={city} 
      onChange={(e) => setCity(e.target.value)} 
    />
    <button onClick={handleSearch}>Search</button>
    {loading && <div className="loader"></div>}
  </div>
  <div className="weather-container">
  {weatherData.length > 0 && weatherData.map((item, index) => (
    <div key={index} style={{ padding: '10px', display: 'inline-block' }}>
      <table className="nested-table">
        <thead>
          <tr>
            <th colSpan="2" style={{ backgroundColor: '#FF7F00' }}>Date: {new Date(item.dt_txt).toLocaleDateString()}</th>
          </tr>
          <tr>
            <th colSpan="2" style={{ backgroundColor: '#D3D3D3' }}>Temperature</th>
          </tr>
          <tr>
            <th style={{ backgroundColor: '#D3D3D3' }}>Min</th>
            <th style={{ backgroundColor: '#D3D3D3' }}>Max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.main.temp_min}°C</td>
            <td>{item.main.temp_max}°C</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td>{item.main.pressure}</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{item.main.humidity}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))}
</div>

    </div>
  );
}

export default App;
