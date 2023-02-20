import React from 'react';
import styled from 'styled-components';
import { sizes } from '../styles/breakpoints';

export default function Daily({ data }) {
  let date0;
  let date1;
  let date2;
  let date3;
  let date4;
  let date5;
  let date6;

  if (data) {
    date0 = new Date(data.daily[0].dt * 1000).getDate();
    date1 = new Date(data.daily[1].dt * 1000).getDate();
    date2 = new Date(data.daily[2].dt * 1000).getDate();
    date3 = new Date(data.daily[3].dt * 1000).getDate();
    date4 = new Date(data.daily[4].dt * 1000).getDate();
    date5 = new Date(data.daily[5].dt * 1000).getDate();
    date6 = new Date(data.daily[6].dt * 1000).getDate();
  }
  return (
    <SDaily data={data}>
      <div><p>Daily</p></div>
      <div>
        <p>date</p>
        <p>weather</p>
        <p>max t</p>
        <p>min t</p>
        <p>wind</p>
      </div>

      <div></div>

      <div>
        <p>{date0}</p>
        <p>{data.daily[0].weather[0].main}</p>
        <p>{Math.floor(data.daily[0].temp.min)}°C</p>
        <p>{Math.floor(data.daily[0].temp.max)}°C</p>
        <p>{data.daily[0].wind_speed}</p>
      </div>

      <div>
        <p>{date1}</p>
        <p>{data.daily[1].weather[0].main}</p>
        <p>{Math.floor(data.daily[1].temp.min)}°C</p>
        <p>{Math.floor(data.daily[1].temp.max)}°C</p>
        <p>{data.daily[1].wind_speed}</p>
      </div>

      <div>
        <p>{date2}</p>
        <p>{data.daily[2].weather[0].main}</p>
        <p>{Math.floor(data.daily[2].temp.min)}°C</p>
        <p>{Math.floor(data.daily[2].temp.max)}°C</p>
        <p>{data.daily[2].wind_speed}</p>
      </div>

      <div>
        <p>{date3}</p>
        <p>{data.daily[3].weather[0].main}</p>
        <p>{Math.floor(data.daily[3].temp.min)}°C</p>
        <p>{Math.floor(data.daily[3].temp.max)}°C</p>
        <p>{data.daily[3].wind_speed}</p>
      </div>

      <div>
        <p>{date4}</p>
        <p>{data.daily[4].weather[0].main}</p>
        <p>{Math.floor(data.daily[4].temp.min)}°C</p>
        <p>{Math.floor(data.daily[4].temp.max)}°C</p>
        <p>{data.daily[4].wind_speed}</p>
      </div>

      <div>
        <p>{date5}</p>
        <p>{data.daily[5].weather[0].main}</p>
        <p>{Math.floor(data.daily[5].temp.min)}°C</p>
        <p>{Math.floor(data.daily[5].temp.max)}°C</p>
        <p>{data.daily[5].wind_speed}</p>
      </div>

      <div>
        <p>{date6}</p>
        <p>{data.daily[6].weather[0].main}</p>
        <p>{Math.floor(data.daily[6].temp.min)}°C</p>
        <p>{Math.floor(data.daily[6].temp.max)}°C</p>
        <p>{data.daily[6].wind_speed}</p>
      </div>

    </SDaily>
  )
}

const SDaily = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  div {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    align-content: center;
    justify-items: start;
    border-bottom: 0.5px solid white;
    width: 100%;
    height: 4vh;
    &:last-child {
      border-bottom: 2px solid white;
    }
    &:hover {
      font-style: italic;
      background-color: white;
      p {
        color: black;
        font-size: 1.4vh;
      }
    }
  }
  p {
    font-size: 1.4vh;
    padding-left: 1vw;
  }

  @media (min-width: ${sizes.micro}) and (max-width: ${sizes.xxs}) {
    div {
      justify-items: center;
    }
    p {
      font-size: 1vh;
    }
  }
  @media (min-width: ${sizes.micro}) and (max-width: ${sizes.xs}) {
    width: 100vw;
    height: 40vh;
    div {
      &:first-child {
        border-top: 2px solid white;
      }
      &:last-child {
      border-bottom: none;
    }
    }
  }
  @media (min-width: ${sizes.xs}) and (max-width: ${sizes.l}){
    width: 50%;
    height: 40.7vh;
    div {
      padding-left: 0;
      height: 4vh;
      &:first-child {
        border-top: 2px solid white;
      }
      &:last-child {
        border-bottom: none;
      }
      p {
        padding-left: 1vw;
      }
    }

  }
  
`