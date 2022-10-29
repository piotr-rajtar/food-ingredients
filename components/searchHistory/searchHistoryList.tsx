import { OrderedList } from '@chakra-ui/react'

import styles from './searchHistoryList.module.scss'

import SearchHistoryItem from './searchHistoryItem'

export default function SearchHistoryList() {
  return (
    <section>
      <h2>SEARCH HISTORY:</h2>
      <OrderedList>
        <SearchHistoryItem />
      </OrderedList>
    </section>
  )
}