/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-array-index-key */
import React, { useState, useCallback, useEffect } from 'react';

import { Progress } from 'semantic-ui-react';

import gameCompleted from '../../assets/gameCompleted.svg';

import Menu from '../../components/Menu';
import Card from '../../components/Card';

import { cardMap } from '../../utils/cardMaps';

import { Container, Content, GameContainer, GameCompleted } from './styles';

const Dashboard: React.FC = () => {
  const [cardsShuffle, setCardsShuffle] = useState(() => {
    let rand;
    let temp;
    let i;

    for (i = cardMap.length - 1; i > 0; i -= 1) {
      rand = Math.floor((i + 1) * Math.random()); // get random between zero and i (inclusive)
      temp = cardMap[rand]; // swap i and the zero-indexed number
      cardMap[rand] = cardMap[i];
      cardMap[i] = temp;
    }
    return cardMap;
  });

  const [cardsIndexSelected, setCardsIndexSelected] = useState([-1, -1]);
  const [cardsPairSelected, setCardsPairSelected] = useState([-1, -1]);

  const [cardsCorrect, setCardsCorrect] = useState<number[]>([]);

  const [interv, setInterv] = useState<number>(0);
  const [timer, setTimer] = useState<number>(60);

  useEffect(() => {
    if (timer < 0) {
      clearInterval(interv);
      setInterv(0);
      alert('You lose!');
      location.reload();
    }
  }, [interv, timer]);

  const handleTimer = useCallback(() => {
    setTimer(value => value - 1);
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

  const handleGameComplete = useCallback(() => {
    clearInterval(interv);
    setInterv(0);
  }, [interv]);

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

        if (correctCards.length === 16) {
          handleGameComplete();
        }

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
    handleGameComplete,
    handleResetSelection,
  ]);

  const handleClick = useCallback(
    (uniqueId, pairId) => {
      if (interv === 0) {
        handleStart();
      }

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
    [cardsIndexSelected, cardsPairSelected, handleStart, interv],
  );

  return (
    <Container>
      <Menu />
      <Content>
        <Progress percent={(timer * 100) / 60} success>
          {timer < 1 ? (
            <h2>You lose!</h2>
          ) : (
            <h2>You have {timer} seconds left!</h2>
          )}
        </Progress>
        {cardsCorrect.length !== 16 ? (
          <GameContainer>
            {cardMap.map(card => (
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
        ) : (
          <GameCompleted>
            <h1>Congratulations, you completed the game in {timer} seconds!</h1>
            <img src={gameCompleted} alt="Game Completed" />
            <button type="button" onClick={() => location.reload()}>
              Play Again
            </button>
          </GameCompleted>
        )}
      </Content>
    </Container>
  );
};

export default Dashboard;
