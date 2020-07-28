/* eslint-disable react/no-array-index-key */
import React, { useState, useCallback } from 'react';
import ReactCardFlip from 'react-card-flip';

import { CardFront, CardBack, CardContainer } from './styles';

interface CardContentProps {
  pairId: number;
  uniqueId: number;
  image: string;
}

interface CardProps {
  isFlipped: boolean;
  cardContent: CardContentProps;
  onCardClick: () => void;
}

const Card: React.FC<CardProps> = ({ isFlipped, cardContent, onCardClick }) => {
  const [cardIsFlipped, setCardIsFlipped] = useState(isFlipped);

  return (
    <CardContainer onClick={() => onCardClick()}>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipSpeedBackToFront={0.3}
        flipSpeedFrontToBack={0.3}
      >
        <CardBack>
          This is the Back of the card.
          {`PAR: ${cardContent.pairId}`}
          {`ID: ${cardContent.pairId}`}
        </CardBack>

        <CardFront>{cardContent.image}</CardFront>
      </ReactCardFlip>
    </CardContainer>
  );
};

export default Card;
