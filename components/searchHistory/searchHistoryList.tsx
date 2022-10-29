import styles from './searchHistoryList.module.scss'

import SearchHistoryItem from './searchHistoryItem'

export default function SearchHistoryList() {
  return (
    <section>
      <h2>SEARCH HISTORY:</h2>
      <ol>
        <SearchHistoryItem />
      </ol>
    </section>
  )
}