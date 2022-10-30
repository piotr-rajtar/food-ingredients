import { ListItem } from '@chakra-ui/react';

import styles from './searchHistoryItem.module.scss';

interface SearchHistoryItemProps {
  children: React.ReactNode;
  onItemClick: (ingredient: string) => Promise<void>;
}

export default function SearchHistoryItem({ children, onItemClick } : SearchHistoryItemProps) {
  return (
    <ListItem 
      className={styles.item} 
      onClick={_event => onItemClick(children as string)}
    >
      { children }
    </ListItem>
  )
}