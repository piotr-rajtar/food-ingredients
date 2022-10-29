import { Image, ListItem, Text } from '@chakra-ui/react'

import styles from './card.module.scss'

export default function Card() {
  return (
    <ListItem>
      <Image alt='ingredient alt' />
      <Text>Ingredient title</Text>
    </ListItem>
  )
}