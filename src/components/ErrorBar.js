import React from 'react';
import styled from 'styled-components';
import { sizes } from '../styles/breakpoints';

export default function ErrorBar() {
  return (
    <SErrorBar>
    <p>Something went wrong :(</p>
    <p>We suggest you to check city name writing. Also make sure that search bar is not emty. All the best!</p>
  </SErrorBar>
  )
}

const SErrorBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 2px solid white;
  border-top: 2px solid white;
  width: 100vw;
  height: 6vh;
  min-height: 6vh;
  max-height: 8vh;
  padding-left: 5rem;
  block-size: fit-content;
  position: absolute;
  top: 6vh;
  background-color: orange;

  @media (max-width: ${sizes.s}){
    p {
      font-size: 0.5vh;
    }
  }
  @media (max-width: ${sizes.m}){
    p {
      font-size: 2vh;
    }
  }
`