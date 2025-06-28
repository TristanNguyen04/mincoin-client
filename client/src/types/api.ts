export interface CoinRequest{
    targetAmount: number;
    denominations: number[];
}

export type CoinResponse = number[];