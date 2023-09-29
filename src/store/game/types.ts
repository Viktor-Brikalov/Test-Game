import { IGame } from '@/utils/types/games';

export type GameInitialStateTypes = {
  games: IGame[];
  selectedCurrency: string;
  selectedProvider: string;
};
