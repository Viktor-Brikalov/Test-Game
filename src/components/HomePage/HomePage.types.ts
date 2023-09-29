export enum GameSelectorNames {
  REAL = 'real',
  PROVIDER = 'provider',
}

export type GameSelectorType = {
  name: GameSelectorNames;
  label: string;
};
