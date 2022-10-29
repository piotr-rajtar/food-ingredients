import { ListItem } from '@chakra-ui/react'

import styles from './searchHistoryItem.module.scss'

export default function SearchHistoryItem({ children } : { children: React.ReactNode }) {
  return (
    <ListItem>{ children }</ListItem>
  )
}