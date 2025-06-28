import type { CoinRequest, CoinResponse } from "./types/api";

const BASE_URL = 'http://localhost:8080';

export async function fetchMinimumCoins(data: CoinRequest): Promise<CoinResponse>{
    const response = await fetch(`${BASE_URL}/coins`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });

    if(!response.ok){
        const error = await response.text();
        throw new Error(error || 'Unknown error');
    }

    return await response.json();
}