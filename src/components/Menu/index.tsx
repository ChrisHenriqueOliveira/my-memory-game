import React from 'react';
import { Link } from 'react-router-dom';

import { GiBrain } from 'react-icons/gi';

import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <>
        <GiBrain />
        <Link to="/">MyMemoryGame</Link>
      </>
    </Container>
  );
};

export default Menu;
