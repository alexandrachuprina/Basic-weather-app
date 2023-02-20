import React from 'react';
import styled from 'styled-components';
import { sizes } from '../styles/breakpoints';

export default function Hourly({ data }) {
  return (
    <Wrapper>
      <SHourly data={data}>
        <div><p>Hourly</p></div>
        <div>
          <p>hour</p>
          <p>weather</p>
          <p>t</p>
          <p>feels like</p>
          <p>wind</p>
        </div>

        <div></div>

        <div>
          <p>1 AM</p>
          <p>{data.hourly[0].weather[0].main}</p>
          <p>{Math.floor(data.hourly[0].temp)}°C</p>
          <p>{Math.floor(data.hourly[0].feels_like)}°C</p>
          <p>{data.hourly[0].wind_speed}</p>
        </div>
        <div>
          <p>2 AM</p>
          <p>{data.hourly[1].weather[0].main}</p>
          <p>{Math.floor(data.hourly[1].temp)}°C</p>
          <p>{Math.floor(data.hourly[1].feels_like)}°C</p>
          <p>{data.hourly[1].wind_speed}</p>
        </div>
        <div>
          <p>3 AM</p>
          <p>{data.hourly[2].weather[0].main}</p>
          <p>{Math.floor(data.hourly[2].temp)}°C</p>
          <p>{Math.floor(data.hourly[2].feels_like)}°C</p>
          <p>{data.hourly[2].wind_speed}</p>
        </div>
        <div>
          <p>4 AM</p>
          <p>{data.hourly[3].weather[0].main}</p>
          <p>{Math.floor(data.hourly[3].temp)}°C</p>
          <p>{Math.floor(data.hourly[3].feels_like)}°C</p>
          <p>{data.hourly[3].wind_speed}</p>
        </div>
        <div>
          <p>5 AM</p>
          <p>{data.hourly[4].weather[0].main}</p>
          <p>{Math.floor(data.hourly[4].temp)}°C</p>
          <p>{Math.floor(data.hourly[4].feels_like)}°C</p>
          <p>{data.hourly[4].wind_speed}</p>
        </div>
        <div>
          <p>6 AM</p>
          <p>{data.hourly[5].weather[0].main}</p>
          <p>{Math.floor(data.hourly[5].temp)}°C</p>
          <p>{Math.floor(data.hourly[5].feels_like)}°C</p>
          <p>{data.hourly[5].wind_speed}</p>
        </div>
        <div>
          <p>7 AM</p>
          <p>{data.hourly[6].weather[0].main}</p>
          <p>{Math.floor(data.hourly[6].temp)}°C</p>
          <p>{Math.floor(data.hourly[6].feels_like)}°C</p>
          <p>{data.hourly[6].wind_speed}</p>
        </div>
        <div>
          <p>8 AM</p>
          <p>{data.hourly[7].weather[0].main}</p>
          <p>{Math.floor(data.hourly[7].temp)}°C</p>
          <p>{Math.floor(data.hourly[7].feels_like)}°C</p>
          <p>{data.hourly[7].wind_speed}</p>
        </div>
        <div>
          <p>9 AM</p>
          <p>{data.hourly[8].weather[0].main}</p>
          <p>{Math.floor(data.hourly[8].temp)}°C</p>
          <p>{Math.floor(data.hourly[8].feels_like)}°C</p>
          <p>{data.hourly[8].wind_speed}</p>
        </div>
        <div>
          <p>10 AM</p>
          <p>{data.hourly[9].weather[0].main}</p>
          <p>{Math.floor(data.hourly[9].temp)}°C</p>
          <p>{Math.floor(data.hourly[9].feels_like)}°C</p>
          <p>{data.hourly[9].wind_speed}</p>
        </div>
        <div>
          <p>11 AM</p>
          <p>{data.hourly[10].weather[0].main}</p>
          <p>{Math.floor(data.hourly[10].temp)}°C</p>
          <p>{Math.floor(data.hourly[10].feels_like)}°C</p>
          <p>{data.hourly[10].wind_speed}</p>
        </div>
        <div>
          <p>12 AM</p>
          <p>{data.hourly[11].weather[0].main}</p>
          <p>{Math.floor(data.hourly[11].temp)}°C</p>
          <p>{Math.floor(data.hourly[11].feels_like)}°C</p>
          <p>{data.hourly[11].wind_speed}</p>
        </div>
        <div>
          <p>1 PM</p>
          <p>{data.hourly[12].weather[0].main}</p>
          <p>{Math.floor(data.hourly[12].temp)}°C</p>
          <p>{Math.floor(data.hourly[12].feels_like)}°C</p>
          <p>{data.hourly[12].wind_speed}</p>
        </div>
        <div>
          <p>2 PM</p>
          <p>{data.hourly[13].weather[0].main}</p>
          <p>{Math.floor(data.hourly[13].temp)}°C</p>
          <p>{Math.floor(data.hourly[13].feels_like)}°C</p>
          <p>{data.hourly[13].wind_speed}</p>
        </div>
        <div>
          <p>3 PM</p>
          <p>{data.hourly[14].weather[0].main}</p>
          <p>{Math.floor(data.hourly[14].temp)}°C</p>
          <p>{Math.floor(data.hourly[14].feels_like)}°C</p>
          <p>{data.hourly[14].wind_speed}</p>
        </div>
        <div>
          <p>4 PM</p>
          <p>{data.hourly[15].weather[0].main}</p>
          <p>{Math.floor(data.hourly[15].temp)}°C</p>
          <p>{Math.floor(data.hourly[15].feels_like)}°C</p>
          <p>{data.hourly[15].wind_speed}</p>
        </div>
        <div>
          <p>5 PM</p>
          <p>{data.hourly[16].weather[0].main}</p>
          <p>{Math.floor(data.hourly[16].temp)}°C</p>
          <p>{Math.floor(data.hourly[16].feels_like)}°C</p>
          <p>{data.hourly[16].wind_speed}</p>
        </div>
        <div>
          <p>6 PM</p>
          <p>{data.hourly[17].weather[0].main}</p>
          <p>{Math.floor(data.hourly[17].temp)}°C</p>
          <p>{Math.floor(data.hourly[17].feels_like)}°C</p>
          <p>{data.hourly[17].wind_speed}</p>
        </div>
        <div>
          <p>7 PM</p>
          <p>{data.hourly[18].weather[0].main}</p>
          <p>{Math.floor(data.hourly[18].temp)}°C</p>
          <p>{Math.floor(data.hourly[18].feels_like)}°C</p>
          <p>{data.hourly[18].wind_speed}</p>
        </div>
        <div>
          <p>8 PM</p>
          <p>{data.hourly[19].weather[0].main}</p>
          <p>{Math.floor(data.hourly[19].temp)}°C</p>
          <p>{Math.floor(data.hourly[19].feels_like)}°C</p>
          <p>{data.hourly[19].wind_speed}</p>
        </div>
        <div>
          <p>9 PM</p>
          <p>{data.hourly[20].weather[0].main}</p>
          <p>{Math.floor(data.hourly[20].temp)}°C</p>
          <p>{Math.floor(data.hourly[20].feels_like)}°C</p>
          <p>{data.hourly[20].wind_speed}</p>
        </div>
        <div>
          <p>10 PM</p>
          <p>{data.hourly[21].weather[0].main}</p>
          <p>{Math.floor(data.hourly[21].temp)}°C</p>
          <p>{Math.floor(data.hourly[21].feels_like)}°C</p>
          <p>{data.hourly[21].wind_speed}</p>
        </div>
        <div>
          <p>11 PM</p>
          <p>{data.hourly[22].weather[0].main}</p>
          <p>{Math.floor(data.hourly[22].temp)}°C</p>
          <p>{Math.floor(data.hourly[22].feels_like)}°C</p>
          <p>{data.hourly[22].wind_speed}</p>
        </div>
        <div>
          <p>12 PM</p>
          <p>{data.hourly[23].weather[0].main}</p>
          <p>{Math.floor(data.hourly[23].temp)}°C</p>
          <p>{Math.floor(data.hourly[23].feels_like)}°C</p>
          <p>{data.hourly[23].wind_speed}</p>
        </div>
      </SHourly>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow-y: scroll;
  height: 48vh;
  width: 100%;
  background-color: black;

  @media (min-width: ${sizes.micro}) and (max-width: ${sizes.xs}) {
    width: 100vw;
    height: 40vh;
    border-top: 2px solid white;
  }
  @media (min-width: ${sizes.xs}) and (max-width: ${sizes.l}){
    width: 50%;
    height: 40vh;
    border-left: 2px solid white;
    border-top: 2px solid white;
  }
`
const SHourly = styled.div`
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
      border-bottom: none;
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
      &:first-child {
        border-top: none;
      }
    }
    p {
      font-size: 1vh;
    }
  }
  @media (min-width: ${sizes.micro}) and (max-width: ${sizes.xs}) {
    width: 100%;
    div {
      &:first-child {
        border-top: none;
      }
    }
  }
  @media (min-width: ${sizes.xs}) and (max-width: ${sizes.l}){
    width: 100%;
    div {
      padding-left: 0;
      height: 4vh;
      &:last-child {
        border-bottom: none;
      }
      p {
        padding-left: 1vw;
      }
    }
  }
`