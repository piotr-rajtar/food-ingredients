export interface SearchHistoryRecord {
  id: number;
  searchedPhrase: string;
}

export type SubmitFormFunction = (ingredient: string) => void;