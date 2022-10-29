import { OrderedList } from '@chakra-ui/react'

import styles from './searchHistoryList.module.scss'
import { SearchHistoryRecord } from '../../typings'

import SearchHistoryItem from './searchHistoryItem'

export default function SearchHistoryList(
    { searchHistoryList } : {searchHistoryList: SearchHistoryRecord[]}
) {
  return (
    <section>
      <h2>SEARCH HISTORY:</h2>
      <OrderedList>
        {
          searchHistoryList.map((searchHistoryItem) => (
            <SearchHistoryItem key={searchHistoryItem.id}>
              { searchHistoryItem.searchedPhrase }
            </SearchHistoryItem>
          ))
        }
      </OrderedList>
    </section>
  )
}