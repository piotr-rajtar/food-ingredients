import { UnorderedList } from '@chakra-ui/react'

import styles from './cardsList.module.scss'

import Card from './card'

export default function CardsList() {
  return (
    <section>
      <h2>CARDS LIST:</h2>
      <UnorderedList>
        <Card />
      </UnorderedList>
    </section>
  )
}