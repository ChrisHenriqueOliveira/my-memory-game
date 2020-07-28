/* eslint-disable react/no-array-index-key */
import React, { useState, useCallback } from 'react';
import ReactCardFlip from 'react-card-flip';

import backCard from '../../assets/backCard.svg';

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
    <CardContainer style={{ display: 'show' }} onClick={() => onCardClick()}>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipSpeedBackToFront={0.3}
        flipSpeedFrontToBack={0.3}
      >
        <CardBack>
          <img src={backCard} alt="Back Card" />
        </CardBack>

        <CardFront>
          <img src={cardContent.image} alt="Back Card" />
        </CardFront>
      </ReactCardFlip>
    </CardContainer>
  );
};

export default Card;
