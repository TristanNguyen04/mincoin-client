interface Props{
    coins: number[];
}

export default function ResultDisplay({ coins }: Props){
    const totalCoins = coins.length;
    const totalAmount = coins.reduce((sum, coin) => sum + coin, 0);
    
    const coinGroups = coins.reduce((groups, coin) => {
        const key = coin.toFixed(2);
        groups[key] = (groups[key] || 0) + 1;
        return groups;
    }, {} as Record<string, number>);

    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl animate-fade-in">
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Optimal Solution Found!</h2>
                    <p className="text-gray-300 text-sm">Minimum coins required</p>
                </div>
            </div>

            
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-white/10">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">{totalCoins}</div>
                        <div className="text-sm text-gray-300">Total Coins</div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-white/10">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">${totalAmount.toFixed(2)}</div>
                        <div className="text-sm text-gray-300">Total Amount</div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                    </svg>
                    Coin Breakdown
                </h3>
                
                <div className="space-y-3">
                    {Object.entries(coinGroups).map(([denomination, count], index) => (
                        <div 
                            key={denomination}
                            className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center justify-between animate-slide-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-xs px-1 text-center leading-tight">${denomination}</span>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">${denomination}</div>
                                    <div className="text-gray-400 text-sm">denomination</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-bold text-white">{count}</div>
                                <div className="text-gray-400 text-sm">coins</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10">
                <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                        <div className="text-white font-semibold">Algorithm Efficiency</div>
                        <div className="text-gray-300 text-sm">
                            This solution uses the minimum number of coins possible with your selected denominations.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}