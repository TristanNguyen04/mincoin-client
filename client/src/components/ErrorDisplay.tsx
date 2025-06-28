interface Props{
    message: string;
}

export default function ErrorDisplay({ message }: Props){
    return (
        <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded text-red-700">
            <strong>Error:</strong> {message}
        </div>
    );
}