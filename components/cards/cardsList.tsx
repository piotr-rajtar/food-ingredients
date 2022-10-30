import { Grid, GridItem, Heading, Text, UnorderedList } from '@chakra-ui/react';

import styles from './cardsList.module.scss';
import { IngredientRecord } from '../../typings';

import Card from './card';

interface CardListProps {
  cardsList: IngredientRecord[];
}

export default function CardsList({ cardsList } : CardListProps) {
  return (
    <section className={styles.section}>
      <Heading className={styles['section-subtitle']} as='h2' size='lg'>INGREDIENTS LIST:</Heading>
      { 
        !!cardsList.length 
        ? 
        <UnorderedList listStyleType='none'>
          <Grid gap={6} templateColumns='repeat(4, 1fr)'>
            {
              cardsList.map((card) => (
                <GridItem key={card.id} bg='teal.400' h='200' rounded='lg' w='100%'>
                  <Card card={card} />
                </GridItem>
              ))
            }
          </Grid>
        </UnorderedList>
        : 
        <Text fontSize='2xl'>No ingredients found</Text>
      }
    </section>
  )
}