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
    const [errors, setErrors] = useState<{ amount?: string; denominations?: string }>({});

    const handleCheckboxChange = ( value: number) => {
        setSelectedDenominations((prev) => 
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value] 
        );

        if (errors.denominations) {
            setErrors(prev => ({ ...prev, denominations: undefined }));
        }
    }

    const validateForm = () => {
        const newErrors: { amount?: string; denominations?: string } = {};
        
        const amount = parseFloat(targetAmount);
        if (isNaN(amount) || amount <= 0) {
            newErrors.amount = 'Please enter a valid positive amount';
        } else if (amount > 10000) {
            newErrors.amount = 'Amount must be less than $10,000';
        }

        if (selectedDenominations.length === 0) {
            newErrors.denominations = 'Please select at least one denomination';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        const amount = parseFloat(targetAmount);
        onSubmit({
            targetAmount: amount,
            denominations: selectedDenominations,
        });
    };

    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover-lift">
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Calculate Minimum Coins</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6"> 
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 uppercase tracking-wide">
                        Target Amount
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-400 text-lg">$</span>
                        </div>
                        <input
                            type="number"
                            value={targetAmount}
                            onChange={(e) => {
                                setTargetAmount(e.target.value);
                                if (errors.amount) {
                                    setErrors(prev => ({ ...prev, amount: undefined }));
                                }
                            }}
                            step="0.01"
                            placeholder="0.00"
                            className={`w-full pl-8 pr-4 py-4 bg-white/20 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm ${
                                errors.amount ? 'border-red-400 focus:ring-red-500' : 'border-white/30'
                            }`}
                        />
                    </div>
                    {errors.amount && (
                        <div className="flex items-center space-x-2 text-red-300 text-sm">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span>{errors.amount}</span>
                        </div>
                    )}
                </div>

                <div className="space-y-4">
                    <label className="block text-sm font-semibold text-gray-200 uppercase tracking-wide">
                        Select Denominations ({selectedDenominations.length} selected)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                        {ALLOWED_DENOMINATIONS.map((denomination) => {
                            const isSelected = selectedDenominations.includes(denomination);
                            return (
                                <button
                                    key={denomination}
                                    type="button"
                                    onClick={() => handleCheckboxChange(denomination)}
                                    className={`relative p-3 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 min-h-[60px] w-full ${
                                        isSelected 
                                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 border-green-400 text-white shadow-lg' 
                                            : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/40'
                                    }`}
                                >
                                    <div className="flex flex-col items-center justify-center h-full">
                                        {isSelected && (
                                            <svg className="w-4 h-4 text-white mb-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        <span className={`font-semibold text-center break-words ${denomination >= 100 ? 'text-xs' : 'text-sm'} leading-tight`}>
                                            ${denomination.toFixed(2)}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                    {errors.denominations && (
                        <div className="flex items-center space-x-2 text-red-300 text-sm">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span>{errors.denominations}</span>
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 ${
                        loading 
                            ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                    }`}
                >
                    {loading ? (
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Calculating...</span>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span>Calculate Minimum Coins</span>
                        </div>
                    )}
                </button>
            </form>
        </div>
    );
}