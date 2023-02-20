import React from 'react';
import styled from 'styled-components';
import { sizes } from '../styles/breakpoints';

export default function Welcome() {
  return (
    <SWelcome>
      <h1 style={{ zIndex: 1 }}>Welcome!</h1>
      <h1>Just enter city name :)</h1>
    </SWelcome>
  )
}

const SWelcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100%;
  flex-wrap: wrap;

  h1 {
    font-size: 20vh;
    font-family: NeueMetanaNext;
    color: white;
    margin-left: 2vw;
    z-index: 1;
  }
  
`
