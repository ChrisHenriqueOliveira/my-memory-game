import styled from 'styled-components';

export const Container = styled.div`
  height: 150px;
  width: 100%;
  max-width: 940px;
  padding: 32px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;

    color: #000;

    width: 40px;
    height: 40px;
  }

  a {
    text-decoration: none;

    margin-left: 8px;

    font: 32px Roboto, sans-serif;
    font-weight: 700;
    color: #000;

    cursor: pointer;
  }
`;
