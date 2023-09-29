export interface IGame {
  title: string;
  provider: string;
  collections: Collections;
  real: Real;
  demo?: string;
  id?: string;
}

export interface Collections {
  novelty?: number
  popularity: number
  slots?: number
  all?: number
  _hd?: number
  bonusbuy?: number
  new?: number
  btcgames?: number
  ltcgames?: number
  dogegames?: number
  xrpgames?: number
  ethgames?: number
  usdtgames?: number
  "free-slots"?: number
  "free-spins"?: number
  retrigger?: number
  "stacked-symbols"?: number
  "multiplier-wild"?: number
  "scatter-pays"?: number
  "turbo-spin"?: number
  "fruit-slots"?: number
}

export interface Real {
  DOG?: RealItem;
  LTC?: RealItem;
  USDT?: RealItem;
  BTC?: RealItem;
  XRP?: RealItem;
  ETH?: RealItem;
}

export interface RealItem {
  id: number
}
