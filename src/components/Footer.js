import React from 'react';
import styled from 'styled-components';
import { sizes } from '../styles/breakpoints';

export default function Footer() {
  return (
    <SFooter>
      <p>Data source:</p> <a href="https://openweathermap.org/api" target="_blank" rel="noreferrer"><p>OpenWeather API</p></a>
    </SFooter>
  )
}

const SFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-top: 2px solid white;
  width: 100vw;
  min-height: 6vh;
  height: 6vh;
  margin-top: auto;
  padding-left: 2vw;
  box-sizing: border-box;
  p {
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${sizes.micro}) and (max-width: ${sizes.xxs}) {
    padding-left: 2vw;
    p {
    font-size: 1.5vh;
  }
  }
`