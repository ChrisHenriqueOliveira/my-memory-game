import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 90%;
  max-width: 800px;

  margin: 0 auto;
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;

    color: #fff;

    width: 40px;
    height: 40px;
  }

  a {
    text-decoration: none;

    margin-left: 8px;

    font: 32px Roboto, sans-serif;
    font-weight: 500;
    color: #fff;

    cursor: pointer;
  }
`;
