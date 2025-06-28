import { useState } from 'react'
import CoinForm from './components/CoinForm';
import ResultDisplay from './components/ResultDisplay';
import ErrorDisplay from './components/ErrorDisplay';
import { fetchMinimumCoins } from './api';
import type { CoinRequest, CoinResponse } from './types/api';

function App() {
  const [result, setResult] = useState<CoinResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: CoinRequest) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try { 
      const res = await fetchMinimumCoins(data);
      setResult(res);
    } catch(err: any){
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4"> 
      <h1 className="text-2xl font-bold mb-6">Minimum Coin Calculator</h1>
      <CoinForm onSubmit={handleSubmit} loading={loading} />
      {result && <ResultDisplay coins={result} />}
      {error && <ErrorDisplay message={error}/>}
    </div>
  );
}

export default App
