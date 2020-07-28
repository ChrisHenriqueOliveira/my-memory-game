import cardImage1 from '../assets/cardImage1.svg';
import cardImage2 from '../assets/cardImage2.svg';
import cardImage3 from '../assets/cardImage3.svg';
import cardImage4 from '../assets/cardImage4.svg';
import cardImage5 from '../assets/cardImage5.svg';
import cardImage6 from '../assets/cardImage6.svg';
import cardImage7 from '../assets/cardImage7.svg';
import cardImage8 from '../assets/cardImage8.svg';

interface CardProps {
  pairId: number;
  uniqueId: number;
  image: any;
}

export const cardMap: CardProps[] = [
  {
    pairId: 1,
    uniqueId: 1,
    image: cardImage1,
  },
  {
    pairId: 1,
    uniqueId: 2,
    image: cardImage1,
  },
  {
    pairId: 2,
    uniqueId: 3,
    image: cardImage2,
  },
  {
    pairId: 2,
    uniqueId: 4,
    image: cardImage2,
  },
  {
    pairId: 3,
    uniqueId: 5,
    image: cardImage3,
  },
  {
    pairId: 3,
    uniqueId: 6,
    image: cardImage3,
  },
  {
    pairId: 4,
    uniqueId: 7,
    image: cardImage4,
  },
  {
    pairId: 4,
    uniqueId: 8,
    image: cardImage4,
  },
  {
    pairId: 5,
    uniqueId: 9,
    image: cardImage5,
  },
  {
    pairId: 5,
    uniqueId: 10,
    image: cardImage5,
  },
  {
    pairId: 6,
    uniqueId: 11,
    image: cardImage6,
  },
  {
    pairId: 6,
    uniqueId: 12,
    image: cardImage6,
  },
  {
    pairId: 7,
    uniqueId: 13,
    image: cardImage7,
  },
  {
    pairId: 7,
    uniqueId: 14,
    image: cardImage7,
  },
  {
    pairId: 8,
    uniqueId: 15,
    image: cardImage8,
  },
  {
    pairId: 8,
    uniqueId: 16,
    image: cardImage8,
  },
];
