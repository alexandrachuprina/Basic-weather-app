import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import { sizes } from './styles/breakpoints';

import Hourly from "./components/Hourly";
import Daily from "./components/Daily";
import Footer from "./components/Footer";
import ErrorBar from './components/ErrorBar';
import Welcome from './components/Welcome';
import MainInfo from './components/MainInfo';

function App() {
  const [location, setLocation] = useState();
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [name, setName] = useState();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [toggle, setToggle] = useState(true)

  const APIkey = 'c00b195a3e3fe02badc1a13a06366034';
  const firstURL = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${APIkey}`;
  const secondURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;

  function getCoordinates() {
    fetch(firstURL)
      .then(response => response.text())
      .then(text => JSON.parse(text))
      .then(text => {
        console.log(`Works fine, here is the all data: `);
        console.log(text);

        setLat(text[0].lat);
        setLon(text[0].lon);
        setName(text[0].name);
        setError(false);
      })
      .catch(error => { console.log(`ERROR: ${error}`); setError(true) });

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
              setToggle(false)
            })
        }
      })
      .catch(error => { console.log(`ERROR: ${error}`); setError(true) })

  }, [lat, lon])

  return (
    <Page style={{ zIndex: -1 }}>
      <SearchBar>
        <Input
          type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
        />
        <Button onClick={() => getCoordinates()}><p>Get</p></Button>
      </SearchBar>

      {error ?
        <ErrorBar/>
        : null}

      {toggle ?
        <Welcome/>
        :
        null}

      {data ?
        <Info>
          <MainInfo data={data} name={name}/>
          <AdditionalInfo>
            <Daily data={data}/>
            <Hourly data={data}/>
          </AdditionalInfo>
        </Info>
        : null}

      <Footer/>

    </Page >
  );
}

export default App;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: black;
  p {
    font-size: 2vh;
  }
  @media (min-width: ${sizes.micro}) and (max-width: ${sizes.xxs}) {
    height: calc(116vh);
  }
  @media (min-width: ${sizes.xxs}) and (max-width: ${sizes.xs}) {
    height: calc(123vh + 6vh);
  }
  @media (min-width: ${sizes.xs}) and (max-width: ${sizes.l}){
    height: 100vh;
  }
`
const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid white;
  width: 100vw;
  min-height: 6vh;
  padding-left: 2vw;
  box-sizing: border-box;

  @media (min-width: ${sizes.micro}) and (max-width: ${sizes.xxs}) {
    padding-left: 2vw;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  height: 88vh;

  @media (max-width: ${sizes.l}){
    display: flex;
    flex-direction: column;
  }
 
`
const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 100%;
  border-left: 2px solid white;
  box-sizing: border-box;

  @media (min-width: ${sizes.micro}) and (max-width: ${sizes.xs}) {
    width: 100vw;
    border-left: none;
  }
  @media (min-width: ${sizes.xs}) and (max-width: ${sizes.l}){
    display: flex;
    flex-direction: row;
    border-left: none;
    width: 100vw;
    height: 40vh;
  }

`
const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance:none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;

  box-sizing: border-box;
  outline: none;
  outline-offset: none;
  font-size: 1rem;
  font-weight: 100;
  border: 2px solid white;
  border-radius: 40px;
  background-color: white;

  text-align: center;

  width: 20vh;
  height: 3vh;
  p {
    color: white;
  }

  &:hover {
      color: black;
  }
  &:focus {
      outline: none;
      outline-offset: none;
  }
  input::placeholder{
  color: white;
}
`
const Button = styled.button`
  margin: 0 0 0 0.5vw;
  box-sizing: border-box;
  font-family: 'Helvetica', sans-serif;
  font-weight: 50;
  font-size: 0.8rem;
  cursor: pointer;
  display: inline-block;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  opacity: 1;

  width: 10vh;
  height: 3vh;
  padding-top: 0.4vh;

  background-color: white;
  p {
      color: black;
    } 

  border-radius: 40px;
  border: 1px solid white;

  &:hover {
    background-color: black;
    p {
      color: white;
    } 
  }
`