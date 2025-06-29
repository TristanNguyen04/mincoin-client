import type { CoinRequest, CoinResponse } from "./types/api";

const BASE_URL = 'https://dropwizard-service-1033413749204.us-central1.run.app';

export async function fetchMinimumCoins(data: CoinRequest): Promise<CoinResponse>{
    const response = await fetch(`${BASE_URL}/coins`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });

    if(!response.ok){
        let errorMessage = 'Unknown error occurred';
        
        try {
            // Try to parse as JSON first
            const errorData = await response.json();
            if (errorData.message) {
                errorMessage = errorData.message;
            }
        } catch {
            // If JSON parsing fails, try as text
            try {
                const errorText = await response.text();
                errorMessage = errorText || errorMessage;
            } catch {
                // If all parsing fails, use default message
            }
        }

        // Provide user-friendly error messages based on response status and content
        if (response.status === 500) {
            // Check if this might be the denomination error (based on the generic 500 message)
            if (errorMessage.includes("There was an error processing your request")) {
                throw new Error("It's not possible to make the exact amount with the selected coin denominations. Try adjusting the target amount or adding more denominations.");
            }
            throw new Error("Server error: The calculation couldn't be completed. Please try again with different values.");
        }
        
        if (response.status === 400) {
            throw new Error("Invalid input: Please check your target amount and selected denominations.");
        }
        
        if (response.status === 404) {
            throw new Error("Service not available. Please try again later.");
        }
        
        throw new Error(errorMessage);
    }

    return await response.json();
}