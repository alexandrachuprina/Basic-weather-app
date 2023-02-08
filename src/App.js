import React, { useState, useEffect } from "react";

function App() {
  const [location, setLocation] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [name, setName] = useState();
  const [data, setData] = useState();

  const APIkey = 'c00b195a3e3fe02badc1a13a06366034';
  const firstURL = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${APIkey}`;
  const secondURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=ru&appid=${APIkey}&units=metric`;

  function getCoordinates() {
    fetch(firstURL)
      .then(response => response.text())
      .then(text => JSON.parse(text))
      .then(text => {
        console.log(`Works fine, here is the all data: `);
        console.log(text);

        setLat(text[0].lat);
        setLon(text[0].lon);
        setName(text[0].name)
      })
      .catch(error => console.log(`ERROR: ${error}`));

    setLocation(' ');
  }

  useEffect(() => {
    fetch(secondURL)
      .then(response => {
        if (!response.ok) {
          console.log('ERROR')
          console.log(response.status)
        } else {
          response.text()
          .then(text => JSON.parse(text))
          .then(text => {
            console.log(`Works fine, here is the data[0].current: `);
            console.log(text);

            let current = text;
            setData(current);
          })
        }
      })
      .catch(error => console.log(`ERROR: ${error}`))
  }, [lat, lon])

  return (
    <>
      <input
        type="text"
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder='Enter Location'
      />
      <button onClick={getCoordinates}>Get data</button>

      <div>
        {data? 
        <>
        <h2>{name}</h2>
        <h2>t {Math.floor(data.current.temp)}</h2>
        <p>Feels like {Math.floor(data.current.feels_like)}</p>
        <p>Wind speed {data.current.wind_speed}</p>
        <p>Humidity {data.current.humidity}</p>
        </> 
        : null}
      </div>
    </>
  );
}

export default App;
