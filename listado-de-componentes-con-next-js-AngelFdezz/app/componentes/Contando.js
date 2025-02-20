"use client";
import { useState } from "react";

function Button({ increment, onClick }) {
    return (
        <button onClick={() => onClick(increment)}>
            Incrementar en {increment}
        </button>
    );
}

export default function Contando() {
    const [count, setCount] = useState(0);

    const handleIncrement = (value) => {
        setCount(prevCount => prevCount + value);
    };

    const resetCount = () => {
        setCount(0);
    };

    return (
        <div className="contando-container">
            <h1>Contador: {count}</h1>
            <Button increment={1} onClick={handleIncrement} />
            <Button increment={10} onClick={handleIncrement} />
            <Button increment={100} onClick={handleIncrement} />
            <Button increment={1000} onClick={handleIncrement} />
            <button onClick={resetCount}>Reiniciar contador</button>
        </div>
    );
}