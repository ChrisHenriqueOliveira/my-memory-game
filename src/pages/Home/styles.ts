import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 940px;
  margin: 0 auto;

  h1 {
    display: flex;
    font: 32px Roboto, sans-serif;
    font-weight: 700;
    color: #000;
  }

  @media only screen and (max-width: 1050px) {
    max-width: 630px;
  }
  @media only screen and (max-width: 680px) {
    max-width: 310px;
  }
`;

export const GameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 8px;
  grid-template-rows: repeat(6, 1fr);
  grid-row-gap: 8px;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 8px;
  }

  @media only screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8px;
  }
`;
