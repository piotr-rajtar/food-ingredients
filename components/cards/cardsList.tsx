import { UnorderedList } from '@chakra-ui/react';

import styles from './cardsList.module.scss';
import { IngredientRecord } from '../../typings';

import Card from './card';

interface CardListProps {
  cardsList: IngredientRecord[];
}

export default function CardsList({ cardsList } : CardListProps) {
  return (
    <section>
      <h2>CARDS LIST:</h2>
      <UnorderedList>
        {
          cardsList.map((card) => (
            <Card key={card.id} card={card} />
          ))
        }
      </UnorderedList>
    </section>
  )
}