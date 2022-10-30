import { Image, ListItem, Text } from '@chakra-ui/react';

import styles from './card.module.scss';
import { ImageSize, IngredientRecord } from '../../typings';
import { createImageUrl } from '../../utils';

interface CardProps {
  card: IngredientRecord;
}

export default function Card({ card } : CardProps) {
  const imageAlternativeText: string = `${card.name} alternative`;
  const imageSource: string = createImageUrl(card.image, ImageSize.SMALL);

  return (
    <ListItem className={styles.item}>
      <Image alt={imageAlternativeText} className={styles.img} src={imageSource} />
      <Text className={styles.text}>{ card.name }</Text>
    </ListItem>
  )
}