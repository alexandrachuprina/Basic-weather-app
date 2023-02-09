import React, { useState, useEffect } from "react";
import styled from "styled-components";


function App() {
  const [location, setLocation] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [name, setName] = useState();
  const [data, setData] = useState();

  const APIkey = 'c00b195a3e3fe02badc1a13a06366034';
  const firstURL = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${APIkey}`;
  const secondURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=ru&appid=${APIkey}&units=metric`;

  function getCoordinates(event) {
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

  let date0;
  let date1;
  let date2;
  let date3;
  let date4;
  let date5;
  let date6;

  if (data) {
    date0 = new Date(data.daily[0].dt * 1000).toLocaleDateString();
    date1 = new Date(data.daily[1].dt * 1000).toLocaleDateString();
    date2 = new Date(data.daily[2].dt * 1000).toLocaleDateString();
    date3 = new Date(data.daily[3].dt * 1000).toLocaleDateString();
    date4 = new Date(data.daily[4].dt * 1000).toLocaleDateString();
    date5 = new Date(data.daily[5].dt * 1000).toLocaleDateString();
    date6 = new Date(data.daily[6].dt * 1000).toLocaleDateString();
  }


  return (
    <Page>
      <SearchBar>
        <input
          type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
          placeholder='Enter Location'
        />
        <button onClick={getCoordinates}>Get data</button>
      </SearchBar>


      {data ?
        <Info>
          <MainInfo>
            <h1>{name}</h1>
            <h2>t {Math.floor(data.current.temp)}°C</h2>
            <p>{data.current.weather[0].main}</p>
            <p>Feels like {Math.floor(data.current.feels_like)}</p>
            <p>Wind speed {data.current.wind_speed}</p>
            <p>Humidity {data.current.humidity}</p>
          </MainInfo>

          <AdditionalInfo>
            <div style={{ gridArea: '0' }}>
              <p>date</p>
              <p>weather</p>
              <p>max t</p>
              <p>min t</p>
              <p>wind speed</p>
            </div>

            <div style={{ gridArea: '1' }}>
              <p>{date0}</p>
              <p>{data.daily[0].weather[0].main}</p>
              <p>{Math.floor(data.daily[0].temp.min)}°C</p>
              <p>{Math.floor(data.daily[0].temp.max)}°C</p>
              <p>{data.daily[0].wind_speed}</p>
            </div>

            {/* <p>{date1} {Math.floor(data.daily[1].temp.max)} {Math.floor(data.daily[1].temp.min)} {data.daily[1].weather[0].main} {data.daily[1].wind_speed}</p> */}
            {/* <p>{date2} {Math.floor(data.daily[2].temp.max)} {Math.floor(data.daily[2].temp.min)} {data.daily[2].weather[0].main} {data.daily[2].wind_speed}</p> */}
            {/* <p>{date3} {Math.floor(data.daily[3].temp.max)} {Math.floor(data.daily[3].temp.min)} {data.daily[3].weather[0].main} {data.daily[3].wind_speed}</p> */}
            {/* <p>{date4} {Math.floor(data.daily[4].temp.max)} {Math.floor(data.daily[4].temp.min)} {data.daily[4].weather[0].main} {data.daily[4].wind_speed}</p> */}
            {/* <p>{date5} {Math.floor(data.daily[5].temp.max)} {Math.floor(data.daily[5].temp.min)} {data.daily[5].weather[0].main} {data.daily[5].wind_speed}</p> */}
            {/* <p>{date6} {Math.floor(data.daily[6].temp.max)} {Math.floor(data.daily[6].temp.min)} {data.daily[6].weather[0].main} {data.daily[6].wind_speed}</p> */}
          </AdditionalInfo>
        </Info>
        : null}

      <Footer />

    </Page>
  );
}

export default App;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  box-sizing: border-box;
`
const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  width: 100vw;
  height: 6vh;
`
const Info = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`
const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 8vh 0 0 10vh;
  border-right: 1px solid black;

  h1 {
    font-size: 16vh;
  }
  h2 {
    font-size: 10vh;
    margin-bottom: 5vh;
  }
  p {
    font-size: 2rem;
    &:hover {
      font-style: italic;
    }
  }
`
const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  box-sizing: border-box;
  /* padding: 0 0 6vh 4vw; */
  

  p {
    font-size: 1.5rem;
    border-bottom: 1px solid black;
    width: 100%;
    &:first-child {
      border-top: 1px solid black;
    }
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      font-style: italic;
    }
  }
`
const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  width: 100vw;
  height: 6vh;
`