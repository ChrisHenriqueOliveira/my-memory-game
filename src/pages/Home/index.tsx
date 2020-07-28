/* eslint-disable react/no-array-index-key */
import React, { useState, useCallback, useEffect } from 'react';

import Menu from '../../components/Menu';
import Card from '../../components/Card';

import { Container, Content, GameContainer } from './styles';

interface CardProps {
  pairId: number;
  uniqueId: number;
  image: string;
}

const Dashboard: React.FC = () => {
  const cards: CardProps[] = [
    {
      pairId: 1,
      uniqueId: 1,
      image: 'CARD 1',
    },
    {
      pairId: 1,
      uniqueId: 2,
      image: 'CARD 1',
    },
    {
      pairId: 2,
      uniqueId: 3,
      image: 'CARD 2',
    },
    {
      pairId: 2,
      uniqueId: 4,
      image: 'CARD 2',
    },
    {
      pairId: 3,
      uniqueId: 5,
      image: 'CARD 3',
    },
    {
      pairId: 3,
      uniqueId: 6,
      image: 'CARD 3',
    },
  ];

  const [cardsIndexSelected, setCardsIndexSelected] = useState([-1, -1]);
  const [cardsPairSelected, setCardsPairSelected] = useState([-1, -1]);

  const [cardsCorrect, setCardsCorrect] = useState<number[]>([]);

  const [interv, setInterv] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);

  const handleTimer = useCallback(() => {
    setTimer(value => value + 1);
  }, []);

  const handleStart = useCallback(() => {
    setInterv(setInterval(handleTimer, 1000));
  }, [handleTimer]);

  const handleResetSelection = useCallback(() => {
    const indexSelecteds = [...cardsIndexSelected];
    const pairsSelecteds = [...cardsPairSelected];

    indexSelecteds[0] = -1;
    indexSelecteds[1] = -1;
    pairsSelecteds[0] = -1;
    pairsSelecteds[1] = -1;

    setCardsIndexSelected(indexSelecteds);
    setCardsPairSelected(pairsSelecteds);
  }, [cardsIndexSelected, cardsPairSelected]);

  useEffect(() => {
    const indexSelecteds = [...cardsIndexSelected];
    const pairsSelecteds = [...cardsPairSelected];

    if (indexSelecteds[0] !== -1 && indexSelecteds[1] !== -1) {
      if (pairsSelecteds[0] === pairsSelecteds[1]) {
        const correctCards = [...cardsCorrect];

        !correctCards.includes(indexSelecteds[0]) &&
          correctCards.push(indexSelecteds[0]);
        !correctCards.includes(indexSelecteds[1]) &&
          correctCards.push(indexSelecteds[1]);

        setCardsCorrect(correctCards);

        handleResetSelection();
      } else {
        const interval = setInterval(() => {
          handleResetSelection();
          clearInterval(interval);
        }, 700);
      }
    }
  }, [
    cardsCorrect,
    cardsIndexSelected,
    cardsPairSelected,
    handleResetSelection,
  ]);

  const handleClick = useCallback(
    (uniqueId, pairId) => {
      const indexSelecteds = [...cardsIndexSelected];
      const pairsSelecteds = [...cardsPairSelected];

      if (indexSelecteds[0] === -1) {
        indexSelecteds[0] = uniqueId;
        pairsSelecteds[0] = pairId;

        setCardsIndexSelected(indexSelecteds);
        setCardsPairSelected(pairsSelecteds);
      } else if (indexSelecteds[1] === -1 && indexSelecteds[0] !== uniqueId) {
        indexSelecteds[1] = uniqueId;
        pairsSelecteds[1] = pairId;

        setCardsIndexSelected(indexSelecteds);
        setCardsPairSelected(pairsSelecteds);
      }
    },
    [cardsIndexSelected, cardsPairSelected],
  );

  return (
    <Container>
      <Menu />
      <Content>
        <GameContainer>
          {cards.map(card => (
            <Card
              key={card.uniqueId}
              isFlipped={
                !!cardsIndexSelected.includes(card.uniqueId) ||
                !!cardsCorrect.includes(card.uniqueId)
              }
              cardContent={card}
              onCardClick={() => handleClick(card.uniqueId, card.pairId)}
            />
          ))}
        </GameContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
