interface LoadingSpinnerProps {
  message?: string;
}

export default function LoadingSpinner({ message = "Calculating optimal solution..." }: LoadingSpinnerProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl animate-fade-in">
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-6">
          <div className="flex flex-col items-center space-y-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-white/20 animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  transform: `translateY(${i * 2}px)`,
                }}
              />
            ))}
          </div>
          
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Optimizing Coin Selection</h3>
          <p className="text-gray-300 text-sm mb-4">{message}</p>
          
          <div className="flex space-x-2 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10 w-full">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div>
              <div className="text-white font-semibold text-sm">Greedy Algorithm</div>
              <div className="text-gray-300 text-xs">Finding the most efficient coin combination...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 