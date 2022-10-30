import { Heading, OrderedList } from '@chakra-ui/react';

import styles from './searchHistoryList.module.scss';
import { SearchHistoryRecord } from '../../typings';

import SearchHistoryItem from './searchHistoryItem';

interface SearchHistoryListProps {
  searchHistoryList: SearchHistoryRecord[];
  onItemClick: (ingredient: string) => Promise<void>;
}

export default function SearchHistoryList({ searchHistoryList, onItemClick } : SearchHistoryListProps) {
  return (
    <section className={styles.section}>
      <Heading className={styles['section-subtitle']} as='h2' size='lg'>SEARCH HISTORY:</Heading>
      <OrderedList>
        {
          searchHistoryList.map((searchHistoryItem) => (
            <SearchHistoryItem key={searchHistoryItem.id} onItemClick={onItemClick}>
              { searchHistoryItem.searchedPhrase }
            </SearchHistoryItem>
          ))
        }
      </OrderedList>
    </section>
  )
}