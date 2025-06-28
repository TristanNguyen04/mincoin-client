interface Props{
    coins: number[];
}

export default function ResultDisplay({ coins }: Props){
    return (
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded">
            <h2 className="text-lg font-semibold mb-2">Coin Breakdown:</h2>
            <ul className="list-disc pl-5">
                {coins.map((coin, index) => (
                    <li key={index}>{coin.toFixed(2)}</li>
                ))}
            </ul>
        </div>
    );
}