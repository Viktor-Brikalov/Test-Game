import { IGame } from "@/utils/types/games";

export enum GameSelectorNames {
  REAL = 'real',
  PROVIDER = 'provider',
}

export type GameSelectorType = {
  name: GameSelectorNames;
  label: string;
};

export type GamesPageProps = {
  game: IGame;
};
