export interface IGame {
    title: string;
    provider: string;
    collections: any;
    real: any;
    demo?: string;
  }
  
  export interface Collections {
    novelty: number
    popularity: number
    slots: number
    all: number
    _hd: number
    bonusbuy: number
    new: number
    btcgames: number
    ltcgames: number
    dogegames: number
    xrpgames: number
    ethgames: number
    usdtgames: number
    "free-slots": number
    "free-spins": number
    retrigger: number
    "stacked-symbols": number
    "multiplier-wild": number
    "scatter-pays": number
    "turbo-spin": number
    "fruit-slots": number
  }
  
  export interface Real {
    DOG: Dog
    LTC: Ltc
    USDT: Usdt
    BTC: Btc
    XRP: Xrp
    ETH: Eth
  }
  
  export interface Dog {
    id: number
  }
  
  export interface Ltc {
    id: number
  }
  
  export interface Usdt {
    id: number
  }
  
  export interface Btc {
    id: number
  }
  
  export interface Xrp {
    id: number
  }
  
  export interface Eth {
    id: number
  }
  