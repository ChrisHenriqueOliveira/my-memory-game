import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 8px;
  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);

  h1 {
    display: flex;
    font: 32px Roboto, sans-serif;
    font-weight: 700;
    color: #000;
  }

  h2 {
    color: #1ea51d;
  }

  @media only screen and (max-width: 1050px) {
    max-width: 675px;
  }

  @media only screen and (max-width: 750px) {
    max-width: 550px;
  }

  @media only screen and (max-width: 590px) {
    max-width: 425px;
  }

  @media only screen and (max-width: 450px) {
    max-width: 300px;
  }
`;

export const GameContainer = styled.div`
  display: grid;
  margin-top: 40px;

  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 8px;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 8px;
  align-items: center;

  @media only screen and (max-width: 1050px) {
    max-width: 680px;
  }

  @media only screen and (max-width: 750px) {
    max-width: 550px;
  }

  @media only screen and (max-width: 590px) {
    max-width: 425px;
  }

  @media only screen and (max-width: 450px) {
    max-width: 300px;
  }
`;

export const GameCompleted = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  padding: 32px;

  h1 {
    margin: 0;
    color: #eee;
    font-size: 24px;
    font-weight: 500;

    text-align: center;
  }

  img {
    width: 100%;
    max-width: 300px;
  }

  button {
    background: #eee;
    border: 0;
    border-radius: 16px;

    width: 100%;
    max-width: 200px;
    height: 56px;
    padding: 16px 0;

    font: 20px Roboto, sans-serif;
    font-weight: 500;
    color: #000;
  }
`;
