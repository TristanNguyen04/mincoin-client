interface Props{
    message: string;
}

export default function ErrorDisplay({ message }: Props){
    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-red-400/30 shadow-2xl animate-fade-in">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Oops! Something went wrong</h2>
                    <p className="text-gray-300 text-sm">Please try again</p>
                </div>
            </div>
            
            <div className="bg-red-500/10 border border-red-400/20 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                        <div className="text-red-300 font-semibold mb-1">Error Details</div>
                        <div className="text-red-200 text-sm">{message}</div>
                    </div>
                </div>
            </div>

            <div className="mt-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10">
                <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div>
                        <div className="text-white font-semibold">Troubleshooting Tips</div>
                        <div className="text-gray-300 text-sm">
                            • Check your internet connection<br/>
                            • Verify the target amount is valid<br/>
                            • Ensure at least one denomination is selected<br/>
                            • Try refreshing the page if the issue persists
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}