import { useState } from 'react';
import type { CoinRequest } from '../types/api';

interface CoinFormProps {
    onSubmit: (data: CoinRequest) => void;
    loading: boolean;
}

const ALLOWED_DENOMINATIONS = [0.01, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 50, 100, 1000];

export default function CoinForm({ onSubmit, loading }: CoinFormProps){
    const [targetAmount, setTargetAmount] = useState('');
    const [selectedDenominations, setSelectedDenominations] = useState<number[]>([]);

    const handleCheckboxChange = ( value: number) => {
        setSelectedDenominations((prev) => 
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value] 
        );
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const amount = parseFloat(targetAmount);
        if(isNaN(amount) || amount < 0 || amount > 10000){
            alert('Please enter a valid amount between 0 and 10000');
            return;
        }

        if(selectedDenominations.length === 0){
            alert('Please select at least one denomination');
            return;
        }

        onSubmit({
            targetAmount: amount,
            denominations: selectedDenominations,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow space-y-4"> 
            <div>
                <label className="block mb-1 font-semibold">Target Amount:</label>
                <input
                    type="number"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(e.target.value)}
                    step="0.01"
                    className="border p-2 w-full"
                />
            </div>

            <div>
                <label className="block mb-1 font-semibold">Select Denominations:</label>
                <div className="grid grid-cols-4 gap-2">
                    {ALLOWED_DENOMINATIONS.map((denomination) => (
                        <label key={denomination} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={selectedDenominations.includes(denomination)}
                                onChange={() => handleCheckboxChange(denomination)}
                            />
                            <span>{denomination}</span>
                        </label>
                    ))}
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                {loading ? 'Calculating...' : 'Get Minimum Coins'}
            </button>
        </form>
    );
}