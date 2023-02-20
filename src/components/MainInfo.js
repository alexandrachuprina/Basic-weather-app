import React from 'react';
import styled from 'styled-components';
import { sizes } from '../styles/breakpoints';

export default function MainInfo({data, name}) {
  return (
    <SMainInfo>
      <div>
        <p>City: {name}</p>
        <h2>t {Math.floor(data.current.temp)}°C</h2>
        <p>{data.current.weather[0].main}</p>
        <p>Feels like {Math.floor(data.current.feels_like)}</p>
        <p>Wind speed {data.current.wind_speed}</p>
        <p>Humidity {data.current.humidity}</p>
      </div>
    </SMainInfo >
  )
}

const SMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 80%; 
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  border-radius: 50%;
  align-self: center;
  margin: 0 2vw 0 2vw;

  h2 {
    color: black;
    font-size: 10vh;
    margin-bottom: 5vh;
    margin-top: 1vw;
  }
  p {
    color: black;
    font-size: 4vh;
    &:hover {
      font-style: italic;
    }
  }

  @media (min-width: ${sizes.micro} ) and (max-width: ${sizes.mini}){
    padding: 2vh 0 1vh 2.5rem;
    width: 100vw;
    border-right: none;
    height: 48vh;
    box-sizing: border-box;

    /* background-color: red; */
    h1 {
      font-size: 8vh;
    }
    h2 {
      font-size: 6vh;
      margin-bottom: 1vh;
    }
    p {
      font-size: 1rem;
      &:hover {
        font-style: italic;
      }
    }
  }
  @media (min-width: ${sizes.mini}) and (max-width: ${sizes.xxs}){
    padding: 2vh 0 1vh 2.5rem;
    width: 100vw;
    border-right: none;
    height: 48vh;

    /* background-color: orange; */
    h1 {
      font-size: 10vh;
    }
    h2 {
      font-size: 6vh;
      margin-bottom: 0.5vh;
    }
    p {
      font-size: 1rem;
      &:hover {
        font-style: italic;
      }
    }
  }
  @media (min-width: ${sizes.xxs}) and (max-width: ${sizes.m}){
    padding: 4vh 0 1vh 2.5rem;
    width: 100vw;
    border-right: none;
    block-size: fit-content;
    height: 48vh;

    /* background-color: yellow; */
    h1 {
      font-size: 14vh;
    }
    h2 {
      font-size: 8vh;
      margin-bottom: 2vh;
    }
    p {
      font-size: 1.5rem;
      &:hover {
        font-style: italic;
      }
    }
  }
  @media (min-width:  ${sizes.m}) and (max-width:  ${sizes.l}) {
    /* background-color: green; */
    padding: 2vh 0 6vh 2.5rem;
    width: 60vw;
    height: 48vh;
  }
`