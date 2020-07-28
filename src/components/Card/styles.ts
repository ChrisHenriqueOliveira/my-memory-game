import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 3px;
  width: 190px;
  height: 190px;

  @media only screen and (max-width: 1050px) {
    width: 157px;
    height: 157px;
  }

  @media only screen and (max-width: 750px) {
    width: 127px;
    height: 127px;
  }

  @media only screen and (max-width: 590px) {
    width: 96px;
    height: 96px;
  }

  @media only screen and (max-width: 450px) {
    width: 65px;
    height: 65px;
  }
`;

export const CardFront = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #61b46d;
  background-color: #61b46d;

  border-radius: 3px;
  padding: 15px;

  width: 190px;
  height: 190px;

  cursor: pointer;

  img {
    width: 90%;
  }

  @media only screen and (max-width: 1050px) {
    width: 157px;
    height: 157px;
  }

  @media only screen and (max-width: 750px) {
    width: 127px;
    height: 127px;
  }

  @media only screen and (max-width: 590px) {
    width: 127px;
    height: 127px;
  }
  
  @media only screen and (max-width: 450px) {
    width: 65px;
    height: 65px;
  }
`;

export const CardBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #eee;
  background-color: #eee;

  border-radius: 3px;
  padding: 15px;

  width: 190px;
  height: 190px;

  cursor: pointer;

  img {
    width: 90%;
  }

  @media only screen and (max-width: 1050px) {
    width: 157px;
    height: 157px;
  }

  @media only screen and (max-width: 750px) {
    width: 127px;
    height: 127px;
  }

  @media only screen and (max-width: 590px) {
    width: 127px;
    height: 127px;
  }

  @media only screen and (max-width: 450px) {
    width: 65px;
    height: 65px;
  }
`;
