export interface SearchHistoryRecord {
  id: string;
  searchedPhrase: string;
}

export interface IngredientRecord {
  id: number;
  image: string;
  name: string;
}

export type SubmitFormFunction = (ingredient: string) => void;

export enum ImageSize {
  SMALL = '100x100',
  MEDIUM = '250x250',
  BIG = '500x500',
}