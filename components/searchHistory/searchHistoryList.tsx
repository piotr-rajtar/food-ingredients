import { OrderedList } from '@chakra-ui/react';

import styles from './searchHistoryList.module.scss';
import { SearchHistoryRecord } from '../../typings';

import SearchHistoryItem from './searchHistoryItem';

interface SearchHistoryListProps {
  searchHistoryList: SearchHistoryRecord[];
  onItemClick: (ingredient: string) => Promise<void>;
}

export default function SearchHistoryList({ searchHistoryList, onItemClick } : SearchHistoryListProps) {
  return (
    <section>
      <h2>SEARCH HISTORY:</h2>
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